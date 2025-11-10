
let scrolldown = document.getElementById('scrollDown');
let scrollup = document.getElementById('scrollUp');
var click = new Audio('audio/ui/minecraft_click.mp3')
var background_audio = new Audio("audio/background/Takeshi Abo - LEASE.mp3");


/* Linking pages
let play = document.getElementById('play');
play.onclick = function() {
    window.open('https://alexioprado.github.io/Boobah_TheLastHope/guidebook.html');
}
*/

document.addEventListener('mouseover', (event) => {
    background_audio.loop = true;
    background_audio.volume = 0.1;
    background_audio.play();
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    background_audio.pause();
  } else {
    background_audio.play()
  }
});


scrolldown.onclick = function () {
    window.scrollTo({
        top: 2000,
        behavior: 'smooth'
    });
    click.play();
    console.log('Went to History');
}

scrollup.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    click.play();
    console.log('Went to Title Screen');
}