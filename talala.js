var video = document.getElementById("video");
var changeBtn = document.getElementById('change');
var talalaNum = document.getElementById('talala-el');


var talalaList = [
    'talala.mp4',
    'talala2.mp4',
    'talala3.mp4'

]

var currentTalala = 0;
 
video.defaultPlaybackRate = 1.5;
document.body.addEventListener('mousedown',()=>{
    video.play();
    video.setAttribute('data-vid','play');
})


document.body.addEventListener('mouseup',()=>{
    video.pause();
    video.setAttribute('data-vid','paused');
})

document.body.addEventListener('keypress',(e)=>{
    console.log(e);
    if(e.charCode === 32){
        currentTalala = (currentTalala + 1) % talalaList.length;
        video.setAttribute('src',talalaList[currentTalala]);
        talalaNum.innerText = `Talala ${currentTalala + 1  }`;
    }
})