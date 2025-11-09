
let scrolldown = document.getElementById('scrollDown');
let scrollup = document.getElementById('scrollUp');
var click = new Audio('audio/minecraft_click.mp3')


/* Linking pages
let play = document.getElementById('play');
play.onclick = function() {
    window.open('https://alexioprado.github.io/Boobah_TheLastHope/guidebook.html');
}
*/


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