
//Game Music Archive
const enemyGroup = {'chiikawa' : 'audio/gameMusic/Bubbly Washing Machine.mp3',
                    'mcCuen' : 'audio/gameMusic/ModSpot Theme.mp3',
                    'keller' : 'audio/gameMusic/Xploshi - Pod Lounge.mp3',
                    'gardner' : 'audio/gameMusic/Nintendo DSi Camera - Slideshow (Sparkle).mp3',
                    'sixSeven' : 'audio/gameMusic/Xploshi - Showcase.mp3',
                    'humbah' : 'audio/gameMusic/Super Mario Galaxy - Buoy Base Galaxy.mp3',
                    'kimJongBirukin' : 'audio/gameMusic/Battle1.mp3'
}
//Initializing audio
let background_audio;


/*TEMPORARY*/
localStorage.enemies = 'sixSeven';


//Setting Audio
for (let enemy in enemyGroup){
    if (localStorage.enemies == enemy){
        background_audio = new Audio(enemyGroup[enemy]);
        console.log(enemy)
    }
}
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
let info = document.getElementById('info');

exit.onclick = function (){
    //Create Overlay to confirm
    window.location.href = ("https://alexioprado.github.io/Boohbah_TheLastHope/gameSelection.html");
}
info.onclick = function (){
    window.open('https://alexioprado.github.io/Boohbah_TheLastHope/guidebook.html');
}

