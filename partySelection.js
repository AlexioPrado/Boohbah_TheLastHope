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
//Exit
let exit = document.getElementById('exit');
exit.onclick = function (){
  window.location.href = ("https://alexioprado.github.io/Boohbah_TheLastHope/gameSelection.html");
}
//Fight
let fight = document.getElementById('fight');
fight.onclick = function (){
    console.log(localStorage.enemies);
}

// character Card from HTML
const adamCard = document.getElementById('adamMitchell');
const addisonCard = document.getElementById('addisonBrooks');
const aftonCard = document.getElementById('aftonPate');
const alexCard = document.getElementById('alexAriasKurcan');
const angelCard = document.getElementById('angelCarmichael');
const beckketCard = document.getElementById('beckketSummers');
const biancaCard = document.getElementById('biancaBaccay');
const birukCard = document.getElementById('birukYidnekachew');
const calebCard = document.getElementById('calebArrick');
const christopherCard = document.getElementById('christopherMarkham');
const dennisCard = document.getElementById('dennisWright');
const elizabethCard = document.getElementById('elizabethTaiwo');
const evanCard = document.getElementById('evanYango');
const evelynCard = document.getElementById('evelynMeier');
const karimCard = document.getElementById('karimRiveraApolinar');
const katarinaCard = document.getElementById('katarinaRusso');
const keshavCard = document.getElementById('keshavTekalur');
const khaniCard = document.getElementById('khaniLyan');
const mandiCard = document.getElementById('mandiNguyen');
const marcusCCard = document.getElementById('marcusCeradini');
const marcusPCard = document.getElementById('marcusPrado');
const noahCard = document.getElementById('noahSanders');
const oliviaCard = document.getElementById('oliviaDwyer');
const parthCard = document.getElementById('parthThite');
const rahulCard = document.getElementById('rahulMurgai');
const saraCard = document.getElementById('saraReinert');
const samuelCard = document.getElementById('samuelTaiwo');
const shamCard = document.getElementById('shamNemer');
const sophiaCard = document.getElementById('sophiaSwart');
const tanishkaCard = document.getElementById('tanishkaPeddy');

let party = ['N','N','N'];








let coders = document.getElementsByClassName('coder');
let biotechs = document.getElementsByClassName('biotech');
let cybers = document.getElementsByClassName('cyber');

/* General css styling*/
for (let i = 0; i < coders.length; i++) {
  coders[i].children[0].style = 'border-color: rgb(0, 71, 171);';
}
for (let i = 0; i < biotechs.length; i++) {
  biotechs[i].children[0].style = 'border-color: rgb(8, 143, 143);';
}
for (let i = 0; i < cybers.length; i++) {
  cybers[i].children[0].style = 'border-color: rgb(255, 191, 0);';
}