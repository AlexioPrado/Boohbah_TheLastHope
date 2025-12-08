
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

const endGameOverlay = document.getElementById('endGameOverlay');
const leaveGameOverlay = document.getElementById('leaveGameOverlay');
const diceOverlay = document.getElementById('diceOverlay');





/* Linking Pages*/
let exit = document.getElementById('exit');
let info = document.getElementById('info');
let endGame = document.getElementById('continue');

exit.onclick = function (){
    let leave = document.getElementById('leave');
    let back = document.getElementById('back');
    
    leaveGameOverlay.style = 'display: flex;';

    leave.onclick = function(){
        window.location.href = ("https://alexioprado.github.io/Boohbah_TheLastHope/gameSelection.html");
    }
    back.onclick = function(){
        leaveGameOverlay.style = 'display: none;';
    }
}
endGame.onclick = function(){
    window.location.href = ("https://alexioprado.github.io/Boohbah_TheLastHope/gameSelection.html");
}
info.onclick = function (){
    window.open('https://alexioprado.github.io/Boohbah_TheLastHope/guidebook.html');
}


/*reseting page*/
let reset = document.getElementById('replay');

reset.onclick = function() {
    location.reload();
}
//CHECKING CODE FOR RELOAD PAGE
document.addEventListener('keyup', event => {
    if (event.code === 'ArrowDown') {
        console.log('hello')
    }
})