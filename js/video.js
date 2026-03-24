var video = document.querySelector("#player1");
var volume_display = document.querySelector("#volumeDisplay");

window.addEventListener("load", function() {
    console.log("Hi")
})

document.querySelector("#play").addEventListener("click", function() {
console.log("Play Video");
video.play();
volume_display.innerHTML = video.volume *100 + "%"
})

document.querySelector("#pause").addEventListener("click", function() {
console.log("Pause Video");
video.pause();
volume_display.innerHTML = video.volume *100 + "%"
})

document.querySelector("#slower").addEventListener("click", function() {
console.log("In Slower");
video.playBackRate();

})
