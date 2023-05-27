var video = document.getElementById("video");


document.body.addEventListener('mousedown',()=>{
    video.play();
})


document.body.addEventListener('mouseup',()=>{
    video.pause();
})