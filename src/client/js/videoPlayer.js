const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const volumeRange = document.getElementById("volume");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const timeline = document.getElementById("timeline");

let volumeValue = 0.5;

video.volume = volumeValue;

const handlePlayClick =(e) => {

    if(video.paused){
        video.play();
    } else{
        video.pause();
    }
    playBtn.innerText = video.paused ? "Play" : "Pause";
}
const handleMute = (e) => { // 음소거
        if(video.muted){
            video.muted = false;
            
        } else{
            video.muted = true;
        }
        muteBtn.innerText = video.muted ? "Unmute" : "Mute";
        volumeRange.value = video.muted ? 0 : volumeValue;
}

const handleVolumeChange = (event) =>{
    const {target: {value}} = event;    // event.target.value 너무 길어서 target만 쓰도록 설정
    if(video.muted){
        video.muted = false;
        muteBtn.innerText = "Mute";
    }
    volumeValue = value; // volume 업데이트
    video.target = value;   // 볼륨 바뀌게 함
}

const formatTime = (seconds) => new Date(seconds * 1000).toISOString().substr(11, 8);

const handleLoadedMetadata = () => {
    totalTime.innerText = formatTime(Math.floor(video.duration));   // event 발생했을 때 비디오의 총 시간 알 수 있음 
    timeline.max = Math.floor(video.duration);
}                               

const handleTimeUpdate = () => {
    currentTime.innerText = formatTime(Math.floor(video.currentTime))  // 현재 시간 실시간 업데이트
    timeline.value = Math.floor(video.currentTime);
}

const handleTimeline = (event) => {
    const {
        target: {value}
    } = event;
    video.currentTime = value;
}

playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMute);
volumeRange.addEventListener("input", handleVolumeChange);
video.addEventListener("loadedmetadata", handleLoadedMetadata);
video.addEventListener("timeupdate", handleTimeUpdate);
timeline.addEventListener("input", handleTimeline);
