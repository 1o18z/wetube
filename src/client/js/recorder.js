import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import { isAsyncFunction } from "util/types";
const startBtn = document.getElementById("startBtn");
const video = document.getElementById("preview");

let stream;
let recorder;
let videoFile;

const handleDownload = async () => {
    const ffmpeg = createFFmpeg({ log: true });    // 무슨 일이 일어나는지 콘솔에서 확인하고 싶어서 log:true 사용
    await ffmpeg.load();    // 사용자가 소프트웨어를 사용할 거여서 await 사용 (js가 아닌 코드를 사용) -> 소프트웨어가 무거울 수 있어서 기다리려고

    ffmpeg.FS("writeFile", "recording.webm", await fetchFile(videoFile))   //   가상 컴퓨터에 파일 생성
    // FS는 파일시스템
    await ffmpeg.run("-i", "recording.webm", "-r", "60", "output.mp4");    // 우리가 이미 recording.webm이라는 파일을 만들어 놔서 이렇게 가능
    // =>ffmpeg는 가상 컴퓨터에 이미 존재하는 파일을 input으로 받는거 (recording.webm이 output.mp4으로 바뀌는 거)
    // "-r", "60" 이거는 영상을 초당 60프레임으로 인코딩 해주는 명령어 = 더 빠른 영상 인코딩 가능하게 해줌
    const mp4File = ffmpeg.FS("readFile", "output.mp4");
    // mp4File에서 데이터 넘겨줌 v (1)
    const mp4Blob = new Blob([mp4File.buffer], {type: "video/mp4"});    //js한테 type이 video어쩌구라는 걸 알려줘야 함
    // mp4Blob이 데이터 받아서 파일 만듦 (2)
    const mp4Url = URL.createObjectURL(mp4Blob);
    // mp4Url이 그 파일로 object URL 만듦 (3)
    const a = document.createElement('a');
    a.href = mp4Url;
    a.download = "NewRecorder.mp4";
    document.body.appendChild(a);
    a.click();
}

const handleStop = () => {
    startBtn.innerText = "Download Recording";
    startBtn.removeEventListener("click", handleStop);
    startBtn.addEventListener("click", handleDownload);
    recorder.stop();
}

const handleStart = () => {
    startBtn.innerText = "Stop Recording";
    startBtn.removeEventListener("click", handleStart);
    startBtn.addEventListener("click", handleStop);
    recorder = new MediaRecorder(stream);
    recorder.ondataavailable = (e) => {
        videoFile = URL.createObjectURL(e.data);    // e.data는 파일임
        video.srcObject = null;
        video.src = videoFile;
        video.loop = true;
        video.play();
    };
    recorder.start();
};

const init = async () => {
    stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
    });
    console.log(stream);
    video.srcObject = stream;   // video가 stream 재생 가능!
    video.play();
};
init(); // 미리보기 구현하기 위해

startBtn.addEventListener("click", handleStart);