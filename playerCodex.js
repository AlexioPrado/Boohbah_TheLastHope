var click = new Audio('audio/ui/minecraft_click.mp3')
var background_audio = new Audio('audio/background/Wii Fit - Get In Shape!.mp3');

document.addEventListener('mouseover', (event) => {
    background_audio.loop = true;
    background_audio.volume = 0.05;
    background_audio.play();
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    background_audio.pause();
  } else {
    background_audio.play()
  }
});

/* Linking Pages*/
let exit = document.getElementById('exit');

exit.onclick = function (){
    window.location.href = ("https://alexioprado.github.io/Boohbah_TheLastHope/");
}