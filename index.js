
let scrolldown = document.getElementById('scrollDown');
let scrollup = document.getElementById('scrollUp');
var click = new Audio('audio/ui/minecraft_click.mp3')
var background_audio = new Audio("audio/background/Takeshi Abo - LEASE.mp3");

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

/* Linking Pages*/
let play = document.getElementById('play');
let guidebook = document.getElementById('guidebook');
let playerCards = document.getElementById('playerCards');
let enemyCards = document.getElementById('enemyCards');
/*
play.onclick = function() {
    window.location.href = ('https://alexioprado.github.io/Boohbah_TheLastHope/guidebook.html');
}
*/
guidebook.onclick = function() {
    window.location.href = ('https://alexioprado.github.io/Boohbah_TheLastHope/guidebook.html');
}
playerCards.onclick = function() {
    window.location.href = ('https://alexioprado.github.io/Boohbah_TheLastHope/playerCodex.html');
}
/*
guidebook.onclick = function() {
    window.location.href = ('https://alexioprado.github.io/Boohbah_TheLastHope/guidebook.html');
}
*/