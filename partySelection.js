//Background Audio
const background_audio = new Audio('audio/background/Xploshi - Rafflesia Channel.mp3');
//Looping music
document.addEventListener('mouseover', (event) => {
    background_audio.loop = true;
    background_audio.volume = 0.05;
    background_audio.play();
});
//Starting.pausing music when in/out of tab
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
  window.location.href = ("https://alexioprado.github.io/Boohbah_TheLastHope/gameSelection.html");
}

let fight = document.getElementById('fight');

fight.onclick = function (){
    console.log(localStorage.enemies);
}