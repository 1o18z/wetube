
const startBtn = document.getElementById("startBtn");
const video = document.getElementById("preview");

let stream;
let recorder;
let videoFile;

const handleDownload = () => {
    const  a = document.createElement('a');
    a.href = videoFile;
    a.download = "NewRecorder.webm";
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