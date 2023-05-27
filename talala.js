var video = document.getElementById("video");


video.defaultPlaybackRate = 1.5;
document.body.addEventListener('mousedown',()=>{
    video.play();
    video.setAttribute('data-vid','play');
})


document.body.addEventListener('mouseup',()=>{
    video.pause();
    video.setAttribute('data-vid','paused');
})