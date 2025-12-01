//Background Audio
const background_audio = new Audio('audio/background/Xploshi - Rafflesia Online.mp3');
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
  window.location.href = ("https://alexioprado.github.io/Boohbah_TheLastHope/");
}

//Enemy Card descriptions
const humbah = {'imgURL': 'cardImages/enemyImages/humbah.png',
                'Name': 'Humbah',
                'HP': '70',
                'Attribute': 'Boohbah', 
                'Roles': ['Attack'], 
                'attributeStacks': ['N', 'N', 'N'],
                'NA': ['Silly Marching', 'S', '1', '<p>Deal 3 dmg to the enemy.</p>'],
                'SK': ['Sideway Steps', 'A', '3', '<p>Deal 3 piercing dmg to all enemies.</p>'],
                'UL': ['Skipping', 'S', '4', '4', '<p>Deal 7 dmg to the enemy.</p>'],
                'identifier': 'humbah'};
const jingbah = {'imgURL': 'cardImages/enemyImages/jingbah.png',
                 'Name': 'Jingbah',
                 'HP': '80',
                 'Attribute': 'Boohbah', 
                 'Roles': ['Tank', 'Support'], 
                 'attributeStacks': ['N', 'N', 'N'],
                 'NA': ['Arm Circles', 'N', '2', '<p>Reduce dmg taken by 3. (2 rounds)</p>'],
                 'SK': ['Get Up And Gallop', 'N', '3', '<p>Create a Cloud shield with strength 5 to the active character.</p>'],
                 'UL': ['Busy Dizzy Twirls', 'N', '4', '3', '<p>If <u>Cloud shield</u> is present, increase Shield strength to 10. Attacks to the Cloud shield will be decreased by 2.</p>'],
                 'identifier': 'jingbah'};
const jumbah = {'imgURL': 'cardImages/enemyImages/jumbah.png',
                'Name': 'Jumbah',
                'HP': '75',
                'Attribute': 'Boohbah', 
                'Roles': ['Support'], 
                'attributeStacks': ['N', 'N', 'N'],
                'NA': ['Undecided', 'S', '2', '<p>Deal 3 dmg to the enemy.</p>'],
                'SK': ['Undecided', 'N', '3', '<p>Increase dmg of the active character by 3. (3 rounds)</p>'],
                'UL': ['Undecided', 'N', '4', '2', '<p>If the active character uses participation points, gain 1 energy. (Twice per round, 2 rounds)</p>'],
                'identifier': 'jumbah'};
const zingzingzingbah = {'imgURL': 'cardImages/enemyImages/zingzingzingbah.png',
                         'Name': 'Zing Zing Zingbah',
                         'HP': '75',
                         'Attribute': 'Boohbah', 
                         'Roles': ['Support'], 
                         'attributeStacks': ['N', 'N', 'N'],
                         'NA': ['Stretch And Sway', 'S', '2', '<p>Deal 1 dmg to the enmy.</p>'],
                         'SK': ['Tone Up Your Bum And Tum', 'N', '3', '<p>Summon a Hula Hoop.<br><u>Hula Hoop:</u> Heal the character with the lowest HP by 3 at the end of the round. (2 rounds)</p>'],
                         'UL': ['Twist With The Boohbahs', 'N', '4', '3', '<p>Heal all characters by 4 HP.</p>'],
                         'identifier': 'zingzingzingbah'};
const zumbah = {'imgURL': 'cardImages/enemyImages/zumbah.png',
                  'Name': 'Zumbah',
                  'HP': '60',
                  'Attribute': 'Boobah', 
                  'Roles': ['Attack'], 
                  'attributeStacks': ['N', 'N', 'N'],
                  'NA': ['Stomp Your Feet', 'S', '3', '<p>Deal 4 dmg to the enemy.</p>'],
                  'SK': ['Join In And Jump', 'N', '3', '<p>Enhance <u>Stomp Your Feet</u> by 1 dmg and decrease participation point cost by 1. (Twice per round)</p>'],
                  'UL': ['Swing Your Leg', 'N', '4', '3', '<p>The next <u>Stomp Your Feet</u> does not need participation points and deals increased dmg by 5.</p>'],
                  'identifier': 'zumbah'};
const keller = {'imgURL': 'cardImages/enemyImages/leslieKeller.png',
                  'Name': 'Ms. Keller',
                  'HP': '65',
                  'Attribute': 'Teacher', 
                  'Roles': ['Tank', 'Attack'], 
                  'attributeStacks': ['16', '16', '18'],
                  'NA': ['Media Monday', 'S', '2', '<p>Deal 2 dmg to the enemy.</p>'],
                  'SK': ['Peer Review', 'D', '3', '<p>Summon a Practice Assignment.<br><u>Practice Assignment:</u> Deal 2 dmg at the end of the round. If HP decreases, deal 3 dmg to the enemy. (Twice per round, 4 rounds)</p>'],
                  'UL': ['Friday Puzzles', 'N', '3', '3', '<p>Reduce dmg taken by 2. (3 rounds)</p>'],
                  'identifier': 'keller'};
const mcCuen = {'imgURL': 'cardImages/enemyImages/russMcCuen.png',
                  'Name': 'Mr. McCuen',
                  'HP': '65',
                  'Attribute': 'Teacher', 
                  'Roles': ['Attack', 'Tank'], 
                  'attributeStacks': ['14', '14', '20'],
                  'NA': ['Catharcist Friday', 'A', '2', '<p>Deal 2 dmg to all enemies.</p>'],
                  'SK': ['Devil\'s Advocate', 'S', '5', '<p>Mr. McCuen becomes invulnerable during the round. Deal dmg at the end of the round based on 2/3 of dmg taken during the round.<br>Invulnerability is removed when attribute effects are triggered.</p>'],
                  'UL': ['Plausinle Deniability', 'N', '4', '4', '<p>Heal 2 HP at the end of the round. (3 rounds)</p>'],
                  'identifier': 'mcCuen'};
const gardner = {'imgURL': 'cardImages/enemyImages/ethanGardner.png',
                  'Name': 'Mr. Gardner',
                  'HP': '60',
                  'Attribute': 'Teacher', 
                  'Roles': ['Attack', 'Support'], 
                  'attributeStacks': ['14', '18', '18'],
                  'NA': ['Undecided', 'S', '2', '<p>Deal 2 dmg to the enemy.</p>'],
                  'SK': ['Undecided', 'N', '3', '<p>Take 3 participation points from the enemy and gain 2 participation points.</p>'],
                  'UL': ['Undecided', 'N', '5', '6', '<p>Increase <u>Take Notes</u> by 3 dmg and gain 1 participation point when using Take Notes. (Twice per round, 2 rounds)<br>At the end of the round, heal by 3 HP. (2 rounds)</p>'],
                  'identifier': 'gardner'};
const chiikawa = {'imgURL': 'cardImages/enemyImages/chiikawa.png',
                  'Name': 'Chiikawa',
                  'HP': '40',
                  'Attribute': 'Magical', 
                  'Roles': ['Support'], 
                  'attributeStacks': ['14', '14', '10'],
                  'NA': ['Sasumata Jab', 'S', '2', '<p>Deal 2 dmg to the enemy.</p>'],
                  'SK': ['Weeping', 'A', '3', '<p>Deal 2 dmg to all enemies.<br>Heal the party by 5 HP. Heal the party by 4 HP at the end of the round.</p>'],
                  'UL': ['EH!', 'S', '4', '2', '<p>Deal 3 dmg to the enemy.<br>Increase party\'s dmg by 5. (3 rounds)</p>'],
                  'identifier': 'chiikawa'};
const hachiware = {'imgURL': 'cardImages/enemyImages/hachiware.png',
                  'Name': 'Hachiware',
                  'HP': '35',
                  'Attribute': 'Magical', 
                  'Roles': ['Tank'], 
                  'attributeStacks': ['14', '12', '10'],
                  'NA': ['Sasumata Swing', 'A', '2', '<p>Deal 2 dmg to all enemies.</p>'],
                  'SK': ['Cameria Click', 'A', '3', '<p>Deal 3 dmg to all enemies.<br>Take a snapshot of the battefield and create a Photo shield with 8 strength to the active character. If attacked with the Photo shield present, turn on flash and deal 2 dmg to the enemy.</p>'],
                  'UL': ['OI!', 'S', '4', '3', '<p>Deal 4 dmg to the enemy.<br>Reduce incoming attacks by 2. (5 rounds)</p>'],
                  'identifier': 'hachiware'};
const usagi = {'imgURL': 'cardImages/enemyImages/usagi.png',
                  'Name': 'Usagi',
                  'HP': '35',
                  'Attribute': 'Magical', 
                  'Roles': ['Attack'], 
                  'attributeStacks': ['10', '12', '10'],
                  'NA': ['Staff Jab', 'S', '1', '<p>Deal 3 dmg to the enemy.</p>'],
                  'SK': ['Two Dolla!', 'A', '2', '<p>Deal 4 dmg to all enemies. Reduce HP by 3.</p>'],
                  'UL': ['UNA!', 'S', '3', '3', '<p>Deal 10 dmg to the enemy. Increase <u>UNA!</u> dmg by 2 for every 3 HP from Base HP.</p>'],
                'identifier': 'usagi'};
const sixSeven = {'imgURL': 'cardImages/enemyImages/sixSeven.png',
                  'Name': 'Six Seven',
                  'HP': '67',
                  'Attribute': 'Magical', 
                  'Roles': ['Attack'], 
                  'attributeStacks': ['20', '18', '16'],
                  'NA': ['Peace Sign', 'A', '2', '<p>Deal 2 dmg to all enemies.</p>'],
                  'SK': ['Six or Seven', 'S', '3', '<p>Deal 6 or 7 dmg to the enemy.</p>'],
                  'UL': ['Lady Justice', 'A', '4', '2', '<p>Deal 4 dmg to all enemies.<br>Every Skill or Normal Attack used, deal a coordinated attack, dealing 2 dmg to the enemy. (3 rounds)<br>At the end of the round, heal 6 or 7 HP.</p>'],
                  'identifier': 'sixSeven'};
const kimJongBirukin = {'imgURL': 'cardImages/enemyImages/kimJongBirukin.png',
                  'Name': 'Kim Jong Birukin',
                  'HP': '100',
                  'Attribute': 'REDACTED', 
                  'Roles': ['Attack'], 
                  'attributeStacks': ['N', 'N', 'N'],
                  'NA': ['Conflict', 'S', '2', '<p>Deal 5 dmg to the enemy.<br>When the <u>Broken Promise shield</u> breaks, reduce base dmg to 3. (2 rounds)</p>'],
                  'SK': ['"First They Came"', 'N', '4', '<p>Enhance <u>Conflict</u> to an AoE attack. Reduce base dmg to 3 dmg. (3 rounds)<br>When the <u>Broken Promise shield</u> breaks, remove enhanced state and reduce base dmg to 2. (2 rounds)</p>'],
                  'UL': ['Dictate The Battlefield', 'N', '4', '7', '<p>All enemies current HP is decreased by half and shields are removed.<br>Place the Broken Promise shield onto oneself with strength 15.<br><u>Broken Promise</u>: When present, dmg is increased by 3. When broken, deal 10 dmg to oneself.</p>'],
                  'identifier': 'kimJongBirukin'};

const enemyDictionary = {'humbah': humbah,
                         'jingbah' : jingbah,
                         'jumbah' : jumbah,
                         'zingzingzingbah': zingzingzingbah,
                         'zumbah' : zumbah,
                         'keller' : keller,
                         'mcCuen' : mcCuen,
                         'gardner' : gardner,
                         'chiikawa' : chiikawa,
                         'hachiware' : hachiware,
                         'usagi' : usagi,
                         'sixSeven' : sixSeven,
                         'kimJongBirukin' : kimJongBirukin} 

//Game Directory Elements
const game1 = document.getElementById('game1');
const game2 = document.getElementById('game2');
const game3 = document.getElementById('game3');
const game4 = document.getElementById('game4');
const game5 = document.getElementById('game5');
const game6 = document.getElementById('game6');
const game7 = document.getElementById('game7');

//Game Description Elements
const gameTitle = document.getElementById('gameName');
const starterDesc = document.getElementById('gameStarter');
const enemyCards = document.getElementsByClassName('imgCard');
const gameStrat = document.getElementById('strategy');
const resist = document.getElementsByClassName('resist');
const weak = document.getElementsByClassName('weak');
const story = document.getElementById('story');
const cardDescription = document.getElementById('cardDescription');

//Game Enemies
let enemy_fight = [];

//Game contents
const game1Content = {'title' : 'Little Critters Amongst The Crowd',
                      'start' : 'Small but mighty, these three-apples-tall critters can slay chimeras like nothing. Mess with them and you\'ll get a beating.',
                      'cards' : [chiikawa, usagi, hachiware, 'chiikawa', 'usagi', 'hachiware'],
                      'strat' : 'The enemies have high buffing capabilities to deal huge damage to all party members. Make sure to have <b class="tankText">dmg reduction</b>, <b class="healText">healing</b>, or <b class="tankText">shields</b> to mitigate dmg. Use <b class="aoeText">AoE</b> attacks to deal dmg to all enemies.',
                      'resist': ['coder','cyber', 'single'],
                      'weak'  : ['biotech', 'aoe', 'dot'],
                      'story' : ''};
const game2Content = {'title' : 'Wolfpack Gone Wild',
                      'start' : 'Look left and right when passing by a street. Not because of cars but to not be spotted by him.',
                      'cards' : [mcCuen, 'mcCuen'],
                      'strat' : 'The enemy can absord dmg during the action phase and counterattack during end phase. Circumvent his attacks by utilizing <b class="dotText">DoT</b> attacks to reduce his dmg, <b class="tankText">shields</b> to tank his attacks, or <u>high attribute effect attacks</u> to remove his dmg absorption ability.',
                      'resist': ['biotech', 'aoe', 'single'],
                      'weak'  : ['coder','cyber','dot'],
                      'story' : ''};
const game3Content = {'title' : 'Combat Master',
                      'start' : '',
                      'cards' : [keller, 'keller'],
                      'strat' : 'The enemy utilizes DoT attacks and counterattacks. Fight back using high <b class="singleText">Single-Target</b> attacks and <u>high attribute effect attacks</u> to defeat the enemy.',
                      'resist': ['biotech', 'aoe'],
                      'weak'  : ['coder', 'cyber', 'single', 'dot'],
                      'story' : ''};
const game4Content = {'title' : 'Wolf In Sheep\'s Clothing',
                      'start' : '',
                      'cards' : [gardner, 'gardner'],
                      'strat' : 'The enemy steals participation points, limiting the actions available for the party. Select party members with <u>low participation point costs</u> and utilize <b class="dotText">DoT</b> attacks.',
                      'resist': ['cyber','biotech', 'aoe'],
                      'weak'  : ['coder','single','dot'],
                      'story' : ''};
const game5Content = {'title' : 'Uncontrollable Psychological Event',
                      'start' : '',
                      'cards' : [sixSeven, 'sixSeven'],
                      'strat' : 'The enemy has unpredictable dmg capabilities, either dealing high Single-Target or AoE attacks. Counterattack his dmg by <b class="healText">healing</b> during the action phase and using <u>high attribute effect attacks</u>.',
                      'resist': ['coder','aoe'],
                      'weak'  : ['biotech','cyber','dot','single'],
                      'story' : ''};
const game6Content = {'title' : 'Battle Of The Century',
                      'start' : '',
                      'cards' : [humbah, jingbah, zingzingzingbah, zumbah, jumbah, 'humbah','jingbah','zingzingzingbah','zumbah','jumbah'],
                      'strat' : 'The enemies disregard attribute effects and excels in Single-Target attacks. Fight back by selecting party members with <b class="aoeText">AoE</b> attacks. Use <b class="healText">healing</b> or <b class="shieldText">shields</b> to mitigate dmg.',
                      'resist': ['single','dot'],
                      'weak'  : ['aoe'],
                      'story' : ''};
const game7Content = {'title' : 'The True Mastermind',
                      'start' : '',
                      'cards' : [kimJongBirukin, 'kimJongBirukin'],
                      'strat' : 'The person you trust most has betrayed you. Use all the skills that you have learned to defeat him. <b>May the odds be ever in your favor.</b>',
                      'resist': ['aoe'],
                      'weak'  : ['single','dot'],
                      'story' : ''};

selectingGame(game1Content);

game1.onclick = function(){selectingGame(game1Content);}
game2.onclick = function(){selectingGame(game2Content);}
game3.onclick = function(){selectingGame(game3Content);}
game4.onclick = function(){selectingGame(game4Content);}
game5.onclick = function(){selectingGame(game5Content);}
game6.onclick = function(){selectingGame(game6Content);}
game7.onclick = function(){selectingGame(game7Content);}

/*Selecting games*/
function selectingGame(gameSheet) {
  enemy_fight = [];

  cardDescription.style = 'display: none;';

  gameTitle.innerHTML = gameSheet['title'];
  starterDesc.innerHTML = gameSheet['start'];
  gameStrat.innerHTML = gameSheet['strat'];
  story.innerHTML = gameSheet['story'];

  //Displaying enemy cards
  for (let card in enemyCards){
    enemyCards[card].style = 'display: none';
  }
  for (let i = 0; i < gameSheet['cards'].length/2; i++){
    enemy_fight.push(gameSheet['cards'][i]['identifier']);
    enemyCards[i].style = 'display: block';
    enemyCards[i].parentElement.id = gameSheet['cards'][i+gameSheet['cards'].length/2];
    enemyCards[i].src = gameSheet['cards'][i]['imgURL'];
  }

  //Displaying resistance and weakness
  for (let resistance in resist){
    if (gameSheet['resist'].some(res => res == resist[resistance].id)){
      resist[resistance].style = 'display: block';
    } else {
      resist[resistance].style = 'display: none';
    }
  }
  for (let weakness in weak){
    if (gameSheet['weak'].some(wea => wea == weak[weakness].id)){
      weak[weakness].style = 'display: block';
    } else {
      weak[weakness].style = 'display: none';
    }
  }
}

//enemy card description elements
let title = document.getElementById('title');
let characterImg = document.getElementById('infoCardImg');
let characterName = document.getElementById('name');
let hp = document.getElementById('health');
let attributes = document.getElementsByClassName('attribute');
let attributeStack = document.getElementsByClassName('attribute_stacks');
let stacks = document.getElementById('stacks');
let roles = document.getElementsByClassName('roles');
let naTitle = document.getElementById('normalAttack');
let skTitle = document.getElementById('skill');
let ulTitle = document.getElementById('ultimate');
let attackType_NA = document.getElementsByClassName('NA');
let attackType_SK = document.getElementsByClassName('SK');
let attackType_ULT = document.getElementsByClassName('ULT');
let naInfo = document.getElementById('naInfo');
let skInfo = document.getElementById('skInfo');
let ultInfo = document.getElementById('ultInfo');

const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');

let cardDisplayed;
let cardOpen = false;

card1.onclick = function(){openingCards(card1);}
card2.onclick = function(){openingCards(card2);}
card3.onclick = function(){openingCards(card3);}
card4.onclick = function(){openingCards(card4);}
card5.onclick = function(){openingCards(card5);}

//Opening and closing card descriptions
function openingCards(card){
  if (cardOpen & cardDisplayed == card) {
    cardDescription.style = 'display: none';
    cardOpen = !cardOpen;
  } else if (cardOpen & cardDisplayed != card) {
    cardDisplayed = card;
    findCard(card);
  } else {
    cardDisplayed = card;
    cardOpen = !cardOpen;
    findCard(card);
  }
  console.log(cardDisplayed.id)
  console.log(cardOpen)
}

//Find what card is in this card spot and display correct information
function findCard(card){
  for (let key in enemyDictionary){
    if (card.parentElement.id == key){
      cardDescription.style = 'display: grid';
      selectingCard(enemyDictionary[key]);
    }
  }
}

// Main Function in displaying all information of the specified enemy
function selectingCard (characterSheet){
  //Replace character name and HP
  characterName.innerHTML = characterSheet['Name'];
  hp.innerHTML = 'HP: ' + characterSheet['HP'];

  //Select and display the Attribute tag of character
  switch (characterSheet['Attribute']){
    case 'Boohbah':
      displaying(attributes, [0], 'flex');
      break;
    case 'Teacher':
      displaying(attributes, [1], 'flex');
      break;
    case 'Magical':
      displaying(attributes, [2], 'flex');
      break;
    case 'REDACTED':
      displaying(attributes, [3], 'flex');
      break;
    default:
      console.log('ERROR NO ATTRIBUTE FOUND');
  }

  if (characterSheet['attributeStacks'][0] === 'N'){
    attributeStack.style = 'display: none;';
    stacks.style = 'display: none;';
  } else {
    attributeStack.style = 'display: flex;';
    stacks.style = 'display: flex;';    
  }

  // Used to gather all role tags needed for character
  let displayingRole = [];
  //Select the role tags of character
  for (let i = 0; i < characterSheet['Roles'].length; i++){
    switch (characterSheet['Roles'][i]){
      case 'Attack':
        displayingRole.push(0);
        break;
      case 'Tank':
        displayingRole.push(1);
        break;
      case 'Support':
        displayingRole.push(2);
        break;
      default:
        console.log('ERROR NO ROLE FOUND');
    }    
  }
  //Display role tags needed
  displaying(roles, displayingRole, 'flex');

  //Display Attribute stack requirements
  stacks.innerHTML = 'Coder: ' + characterSheet['attributeStacks'][0] + ' | ' + 'Cyber: ' + characterSheet['attributeStacks'][1] + ' | ' + 'Biotech: ' + characterSheet['attributeStacks'][2];

  //Display Normal Attack information
  naTitle.innerHTML = 'Normal Attack: ' + characterSheet['NA'][0];
  attackType_tags(attackType_NA, characterSheet['NA'][1]);
  naInfo.innerHTML = '<p>Participation Cost: <b>' + characterSheet['NA'][2] + '</p>';
  naInfo.innerHTML += characterSheet['NA'][3];

  //Display Skill information
  skTitle.innerHTML = 'Skill: ' + characterSheet['SK'][0];
  attackType_tags(attackType_SK, characterSheet['SK'][1]);
  skInfo.innerHTML = '<p>Participation Cost: <b>' + characterSheet['SK'][2] + '</p>';
  skInfo.innerHTML += characterSheet['SK'][3];
  
  //Display ultimate information
  ulTitle.innerHTML = 'Ultimate: ' + characterSheet['UL'][0];
  attackType_tags(attackType_ULT, characterSheet['UL'][1]);
  ultInfo.innerHTML = '<p>Energy Cost: <b>' + characterSheet['UL'][3] + '</b> | Participation Cost: <b>' + characterSheet['UL'][2] + '</p>';
  ultInfo.innerHTML += characterSheet['UL'][4];

  //Display user's action
  console.log('Selected: ' + characterSheet['Name']);
}

// Display the tags of a specific character by hiding unused tags and displaying the selected tag based on index number
function displaying (element, display, type){
  for (let i of element){
    i.style = 'display: none;';
  }
  for (let i of display){
    element[i].style = 'display: ' + type;
  }
}

//Display the appropriate attack type tag on an action
function attackType_tags (action, attackType){
  for (let i of action){
    i.style = 'display: none;';
  }
  switch (attackType){
    case 'S':
      action[0].style = 'display: flex';
      break;
    case 'A':
      action[1].style = 'display: flex';
      break;
    case 'D':
      action[2].style = 'display: flex';
      break;
    case 'N':
      break;
    default:
      console.log('ERROR NO ATTACK TYPE FOUND')
  }
}

/* WORKS
carddiv.onclick = function(){
  carddiv.children[0].src = 'cardImages/enemyImages/usagi.png';
}

card1.onclick = function(){
  card1.parentElement.id = 'hachiware';
}
*/

/*
if (typeof(Storage) !== "undefined") {
  if (sessionStorage.clickcount) {
    sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
  } else {
    sessionStorage.clickcount = 1;
  }
  x.innerHTML = "You have clicked the button " + sessionStorage.clickcount + " time(s) in this session!";
} else {
  x.innerHTML = "Sorry, no Web storage support!";
}
*/

const fight = document.getElementById('fight');

/*Confirm game selection*/
fight.onclick = function() {
  if (typeof(Storage) !== "undefined") {
    localStorage.enemies = enemy_fight;
    console.log(localStorage.enemies)
  }
  window.location.href = ("https://alexioprado.github.io/Boohbah_TheLastHope/partySelection.html");
}