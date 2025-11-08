
let scrolldown = document.getElementById('scrollDown');
let scrollup = document.getElementById('scrollUp');
var audio = new Audio('audio/minecraft_click.mp3')

scrolldown.onclick = function () {
    window.scrollTo({
        top: 2000,
        behavior: 'smooth'
    });
    audio.play();
    console.log('Went to History');
}

scrollup.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    audio.play();
    console.log('Went to Title Screen');
}