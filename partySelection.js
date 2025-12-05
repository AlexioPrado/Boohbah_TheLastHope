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
//Player Codex
let codex = document.getElementById('codex');
codex.onclick = function(){
  window.localStorage.codexLink = true;
  window.open('https://alexioprado.github.io/Boohbah_TheLastHope/playerCodex.html');
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

const card1 = document.getElementById('cardOne');
const card2 = document.getElementById('cardTwo');
const card3 = document.getElementById('cardThree');


let party = ['N','N','N'];
let partyHTML = [card1, card2, card3]

const names = document.getElementsByClassName('name');
const attRol = document.getElementsByClassName('attribute_role');

card1.onclick = function(){revert(card1, 0);}
card2.onclick = function(){revert(card2, 1);}
card3.onclick = function(){revert(card3, 2);}

adamCard.onclick = function(){selectCardSpace(adamCard);}
addisonCard.onclick = function(){selectCardSpace(addisonCard);}
aftonCard.onclick = function(){selectCardSpace(aftonCard);}
alexCard.onclick = function(){selectCardSpace(alexCard);}
angelCard.onclick = function(){selectCardSpace(angelCard);}
beckketCard.onclick = function(){selectCardSpace(beckketCard);}
biancaCard.onclick = function(){selectCardSpace(biancaCard);}

birukCard.onclick = function(){
  if(localStorage.enemies != 'kimJongBirukin'){
    selectCardSpace(birukCard);
  } else {
    birukCard.children[0].src = 'cardImages/enemyImages/kimJongBirukin.png';
    birukCard.children[1].innerHTML = 'UNAVAILABLE';
  }
}

calebCard.onclick = function(){selectCardSpace(calebCard);}
christopherCard.onclick = function(){selectCardSpace(christopherCard);}
dennisCard.onclick = function(){selectCardSpace(dennisCard);}
elizabethCard.onclick = function(){selectCardSpace(elizabethCard);}
evanCard.onclick = function(){selectCardSpace(evanCard);}
evelynCard.onclick = function(){selectCardSpace(evelynCard);}
karimCard.onclick = function(){selectCardSpace(karimCard);}
katarinaCard.onclick = function(){selectCardSpace(katarinaCard);}
keshavCard.onclick = function(){selectCardSpace(keshavCard);}
khaniCard.onclick = function(){selectCardSpace(khaniCard);}
mandiCard.onclick = function(){selectCardSpace(mandiCard);}
marcusCCard.onclick = function(){selectCardSpace(marcusCCard);}
marcusPCard.onclick = function(){selectCardSpace(marcusPCard);}
noahCard.onclick = function(){selectCardSpace(noahCard);}
oliviaCard.onclick = function(){selectCardSpace(oliviaCard);}
parthCard.onclick = function(){selectCardSpace(parthCard);}
rahulCard.onclick = function(){selectCardSpace(rahulCard);}
saraCard.onclick = function(){selectCardSpace(saraCard);}
samuelCard.onclick = function(){selectCardSpace(samuelCard);}
shamCard.onclick = function(){selectCardSpace(shamCard);}
sophiaCard.onclick = function(){selectCardSpace(sophiaCard);}
tanishkaCard.onclick = function(){selectCardSpace(tanishkaCard);}

function selectCardSpace(card){
  if (party.includes(card.id)){
    revert(partyHTML[party.indexOf(card.id)], party.indexOf(card.id));
  } else if (!party.includes('N')){
    console.log('Max Party Size.');
    return;
  } else{
    party[party.indexOf('N')] = card.id;
    console.log('Party Member ' + (party.indexOf(card.id)+1) + ': ' + card.id)
    selectCard(partyHTML[party.indexOf(card.id)], card);
  }
}

function selectCard(card, character){
  card.parentElement.children[0].style = 'display: flex';
  card.parentElement.children[1].style = 'display: flex';
  card.parentElement.children[2].children[1].style = 'display: flex';
  card.parentElement.children[2].children[0].style = 'display: none';

  card.parentElement.children[0].innerHTML = character.children[1].innerHTML;
  card.parentElement.children[2].children[1].src = character.children[0].src;

  let attRol = [];
  for (let i = 1; i < character.classList.length; i++){
    attRol.push(character.classList[i]);
  }
  console.log(attRol)

  for (let i = 0; i<card.parentElement.children[1].children.length; i++){
    card.parentElement.children[1].children[i].style = 'display: none';
  }

  for (let j = 0; j < card.parentElement.children[1].children.length; j++){
    if (attRol.includes(card.parentElement.children[1].children[j].id)){
      console.log(card.parentElement.children[1].children[j])
      card.parentElement.children[1].children[j].style = 'display: flex';
    }
  
  }
}

function revert(card, space){
  if (party[space] !== 'N'){
    party[space] = 'N';
    card.parentElement.children[0].style = 'display: none';
    card.parentElement.children[1].style = 'display: none';
    card.parentElement.children[2].children[1].style = 'display: none';
    card.parentElement.children[2].children[0].style = 'display: flex';
    console.log('Cleared Card ' + (space + 1));
  } else {
    console.log('Card already empty.');
  }
}

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