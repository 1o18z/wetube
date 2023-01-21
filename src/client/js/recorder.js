import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
const actionBtn = document.getElementById("actionBtn");
const video = document.getElementById("preview");

let stream;
let recorder;
let videoFile;

const files = {
    input: "recording.webm",
    output: "output.mp4",
    thumb: "thumbnail.jpg"
};

const downloadFile = (fileUrl, fileName) => {
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
};

const handleDownload = async () => {
    actionBtn.removeEventListener("click", handleDownload);

    actionBtn.innerText = "Transcoding...";
    actionBtn.disabled = true;

    const ffmpeg = createFFmpeg({ log: true });    // 무슨 일이 일어나는지 콘솔에서 확인하고 싶어서 log:true 사용
    await ffmpeg.load();    // 소프트웨어가 무거울 수 있어서 기다리려고 await

    ffmpeg.FS("writeFile", files.input, await fetchFile(videoFile));   //   가상 컴퓨터에 파일 생성

    await ffmpeg.run("-i", files.input, "-r", "60", files.output);    // 우리가 이미 files.input이라는 파일을 만들어 놔서 이렇게 가능
    // => ffmpeg는 가상 컴퓨터에 이미 존재하는 파일을 input으로 받는거 (files.input이 output.mp4으로 바뀌는 거)
    // "-r", "60" 이거는 영상을 초당 60프레임으로 인코딩 해주는 명령어 = 더 빠른 영상 인코딩 가능하게 해줌
    await ffmpeg.run("-i", files.input, "-ss", "00:00:01", "-frames:v", "1", files.thumb);    
    // "-ss"는 영상의 특정 시간대로 갈 수 있게 해줌     // 이동한 시간의 스샷 한 장 찍음        // 이 파일은 파일시스템(FS)의 메모리에 만들어지는거
    
    const mp4File = ffmpeg.FS("readFile", files.output);     // mp4File에서 데이터 넘겨줌 v (1)
    const thumbFile = ffmpeg.FS("readFile", files.thumb);

    const mp4Blob = new Blob([mp4File.buffer], {type: "video/mp4"});    // mp4Blob이 데이터 받아서 파일 만듦 (2)
    const thumbBlob = new Blob([thumbFile.buffer], {type: "image/jpg"});

    const mp4Url = URL.createObjectURL(mp4Blob);    // mp4Url이 그 파일로 object URL 만듦 (3)
    const thumbUrl = URL.createObjectURL(thumbBlob);

   downloadFile(mp4Url, "MyRecording.mp4");
   downloadFile(thumbUrl, "MyThumbnail.jpg");

    ffmpeg.FS("unlink", files.input);
    ffmpeg.FS("unlink", files.output);
    ffmpeg.FS("unlink", files.thumb);

    URL.revokeObjectURL(mp4Url);
    URL.revokeObjectURL(thumbUrl);
    URL.revokeObjectURL(videoFile);

    actionBtn.disabled = false;
    actionBtn.innerText = "Record Again";
    actionBtn.addEventListener("click", handleStart);
  };


const handleStart = () => {
    actionBtn.innerText = "Recording";
    actionBtn.disabled = true;
    actionBtn.removeEventListener("click", handleStart);
    actionBtn.addEventListener("click", handleStop);
    recorder = new MediaRecorder(stream);
    recorder.ondataavailable = (e) => {
        videoFile = URL.createObjectURL(e.data);    // e.data는 파일임
        video.srcObject = null;
        video.src = videoFile;
        video.loop = true;
        video.play();
        actionBtn.innerText = "Download";
        actionBtn.disabled = false;
        actionBtn.addEventListener("click", handleDownload);
    };
    recorder.start();
    setTimeout(() => {
        recorder.stop();
    }, 5000);
};

const init = async () => {
    stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: {
            width: 1024,
            height:576,
        },
    });
    console.log(stream);
    video.srcObject = stream;   // video가 stream 재생 가능!
    video.play();
};
init(); // 미리보기 구현하기 위해

actionBtn.addEventListener("click", handleStart);