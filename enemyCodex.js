const background_audio = new Audio('audio/background/Xploshi - New You.mp3');
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

const template = {'imgURL': 'cardImages/enemyImages/.png',
                  'Name': '',
                  'HP': '',
                  'Attribute': '', 
                  'Roles': [''], 
                  'attributeStacks': ['0', '0', '0'],
                  'NA': ['Undecided', 'N', '0', '<p></p>'],
                  'SK': ['Undecided', 'N', '0', '<p></p>'],
                  'UL': ['Undecided', 'N', '0', '0', '<p></p>']};

const humbah = {'imgURL': 'cardImages/enemyImages/humbah.png',
                'Name': 'Humbah',
                'HP': '70',
                'Attribute': 'Boohbah', 
                'Roles': ['Attack'], 
                'attributeStacks': ['N', 'N', 'N'],
                'NA': ['Silly Marching', 'S', '1', '<p>Deal 3 dmg to the enemy.</p>'],
                'SK': ['Sideway Steps', 'A', '3', '<p>Deal 3 piercing dmg to all enemies.</p>'],
                'UL': ['Skipping', 'S', '4', '4', '<p>Deal 7 dmg to the enemy.</p>']};
const jingbah = {'imgURL': 'cardImages/enemyImages/jingbah.png',
                 'Name': 'Jingbah',
                 'HP': '80',
                 'Attribute': 'Boohbah', 
                 'Roles': ['Tank', 'Support'], 
                 'attributeStacks': ['N', 'N', 'N'],
                 'NA': ['Arm Circles', 'N', '2', '<p>Reduce dmg taken by 3. (2 rounds)</p>'],
                 'SK': ['Get Up And Gallop', 'N', '3', '<p>Create a Cloud shield with strength 5 to the active character.</p>'],
                 'UL': ['Busy Dizzy Twirls', 'N', '4', '3', '<p>If <u>Cloud shield</u> is present, increase Shield strength to 10. Attacks to the Cloud shield will be decreased by 2.</p>']};
const jumbah = {'imgURL': 'cardImages/enemyImages/jumbah.png',
                'Name': 'Jumbah',
                'HP': '75',
                'Attribute': 'Boohbah', 
                'Roles': ['Support'], 
                'attributeStacks': ['N', 'N', 'N'],
                'NA': ['Undecided', 'S', '2', '<p>Deal 3 dmg to the enemy.</p>'],
                'SK': ['Undecided', 'N', '3', '<p>Increase dmg of the active character by 3. (3 rounds)</p>'],
                'UL': ['Undecided', 'N', '4', '2', '<p>If the active character uses participation points, gain 1 energy. (Twice per round, 2 rounds)</p>']};
const zingzingzingbah = {'imgURL': 'cardImages/enemyImages/zingzingzingbah.png',
                         'Name': 'Zing Zing Zingbah',
                         'HP': '75',
                         'Attribute': 'Boohbah', 
                         'Roles': ['Support'], 
                         'attributeStacks': ['N', 'N', 'N'],
                         'NA': ['Stretch And Sway', 'S', '2', '<p>Deal 1 dmg to the enmy.</p>'],
                         'SK': ['Tone Up Your Bum And Tum', 'N', '3', '<p>Summon a Hula Hoop.<br><u>Hula Hoop:</u> Heal the character with the lowest HP by 3 at the end of the round. (2 rounds)</p>'],
                         'UL': ['Twist With The Boohbahs', 'N', '4', '3', '<p>Heal all characters by 4 HP.</p>']};
const zumbah = {'imgURL': 'cardImages/enemyImages/zumbah.png',
                  'Name': 'Zumbah',
                  'HP': '60',
                  'Attribute': 'Boobah', 
                  'Roles': ['Attack'], 
                  'attributeStacks': ['N', 'N', 'N'],
                  'NA': ['Stomp Your Feet', 'S', '3', '<p>Deal 4 dmg to the enemy.</p>'],
                  'SK': ['Join In And Jump', 'N', '3', '<p>Enhance <u>Stomp Your Feet</u> by 1 dmg and decrease participation point cost by 1. (Twice per round)</p>'],
                  'UL': ['Swing Your Leg', 'N', '4', '3', '<p>The next <u>Stomp Your Feet</u> does not need participation points and deals increased dmg by 5.</p>']};
const keller = {'imgURL': 'cardImages/enemyImages/leslieKeller.png',
                  'Name': 'Ms. Keller',
                  'HP': '65',
                  'Attribute': 'Teacher', 
                  'Roles': ['Tank', 'Attack'], 
                  'attributeStacks': ['16', '16', '18'],
                  'NA': ['Media Monday', 'S', '2', '<p>Deal 2 dmg to the enemy.</p>'],
                  'SK': ['Peer Review', 'D', '3', '<p>Summon a Practice Assignment.<br><u>Practice Assignment:</u> Deal 2 dmg at the end of the round. If HP decreases, deal 3 dmg to the enemy. (Twice per round, 4 rounds)</p>'],
                  'UL': ['Friday Puzzles', 'N', '3', '2', '<p>Reduce dmg taken by 2. (3 rounds)</p>']};
const mcCuen = {'imgURL': 'cardImages/enemyImages/russMcCuen.png',
                  'Name': 'Mr. McCuen',
                  'HP': '65',
                  'Attribute': 'Teacher', 
                  'Roles': ['Attack', 'Tank'], 
                  'attributeStacks': ['14', '14', '20'],
                  'NA': ['Catharcist Friday', 'A', '2', '<p>Deal 2 dmg to all enemies.</p>'],
                  'SK': ['Devil\'s Advocate', 'S', '5', '<p>Mr. McCuen becomes invulnerable during the round. Deal dmg at the end of the round based on 2/3 of dmg taken during the round.<br>Invulnerability is removed when attribute effects are triggered.</p>'],
                  'UL': ['Plausinle Deniability', 'N', '4', '3', '<p>Heal 2 HP at the end of the round. (3 rounds)</p>']};
const gardner = {'imgURL': 'cardImages/enemyImages/ethanGardner.png',
                  'Name': 'Mr. Gardner',
                  'HP': '60',
                  'Attribute': 'Teacher', 
                  'Roles': ['Attack', 'Support'], 
                  'attributeStacks': ['14', '18', '18'],
                  'NA': ['Undecided', 'S', '2', '<p>Deal 2 dmg to the enemy.</p>'],
                  'SK': ['Undecided', 'N', '3', '<p>Take 3 participation points from the enemy and gain 2 participation points.</p>'],
                  'UL': ['Undecided', 'N', '5', '0', '<p>Increase <u>Take Notes</u> by 3 dmg and gain 1 participation point when using Take Notes. (Twice per round, 2 rounds)<br>At the end of the round, heal by 3 HP. (2 rounds)</p>']};
const chiikawa = {'imgURL': 'cardImages/enemyImages/chiikawa.png',
                  'Name': 'Chiikawa',
                  'HP': '40',
                  'Attribute': 'Magical', 
                  'Roles': ['Support'], 
                  'attributeStacks': ['14', '14', '10'],
                  'NA': ['Sasumata Jab', 'S', '2', '<p>Deal 2 dmg to the enemy.</p>'],
                  'SK': ['Weeping', 'A', '3', '<p>Deal 2 dmg to all enemies.<br>Heal the party by 5 HP. Heal the party by 4 HP at the end of the round.</p>'],
                  'UL': ['EH!', 'S', '4', '2', '<p>Deal 3 dmg to the enemy.<br>Increase party\'s dmg by 5. (3 rounds)</p>']};
const hachiware = {'imgURL': 'cardImages/enemyImages/hachiware.png',
                  'Name': 'Hachiware',
                  'HP': '35',
                  'Attribute': 'Magical', 
                  'Roles': ['Tank'], 
                  'attributeStacks': ['14', '12', '10'],
                  'NA': ['Sasumata Swing', 'A', '2', '<p>Deal 2 dmg to all enemies.</p>'],
                  'SK': ['Cameria Click', 'A', '3', '<p>Deal 3 dmg to all enemies.<br>Take a snapshot of the battefield and create a Photo shield with 8 strength to the active character. If attacked with the Photo shield present, turn on flash and deal 2 dmg to the enemy.</p>'],
                  'UL': ['OI!', 'S', '4', '3', '<p>Deal 4 dmg to the enemy.<br>Reduce incoming attacks by 2. (5 rounds)</p>']};
const usagi = {'imgURL': 'cardImages/enemyImages/usagi.png',
                  'Name': 'Usagi',
                  'HP': '35',
                  'Attribute': 'Magical', 
                  'Roles': ['Attack'], 
                  'attributeStacks': ['10', '12', '10'],
                  'NA': ['Staff Jab', 'S', '1', '<p>Deal 3 dmg to the enemy.</p>'],
                  'SK': ['Two Dolla!', 'A', '2', '<p>Deal 4 dmg to all enemies. Reduce HP by 3.</p>'],
                  'UL': ['UNA!', 'S', '3', '3', '<p>Deal 10 dmg to the enemy. Increase <u>UNA!</u> dmg by 2 for every 3 HP from Base HP.</p>']};
const sixSeven = {'imgURL': 'cardImages/enemyImages/sixSeven.png',
                  'Name': 'Six Seven',
                  'HP': '67',
                  'Attribute': 'Magical', 
                  'Roles': ['Attack'], 
                  'attributeStacks': ['20', '18', '16'],
                  'NA': ['Peace Sign', 'A', '2', '<p>Deal 2 dmg to all enemies.</p>'],
                  'SK': ['Six or Seven', 'S', '3', '<p>Deal 6 or 7 dmg to the enemy.</p>'],
                  'UL': ['Lady Justice', 'A', '4', '2', '<p>Deal 4 dmg to all enemies.<br>Every Skill or Normal Attack used, deal a coordinated attack, dealing 2 dmg to the enemy. (3 rounds)<br>At the end of the round, heal 6 or 7 HP.</p>']};
const kimJongBirukin = {'imgURL': 'cardImages/enemyImages/kimJongBirukin.png',
                  'Name': 'sIDBQEWF=SINVQDonqdnq',
                  'HP': '100',
                  'Attribute': 'REDACTED', 
                  'Roles': ['Attack'], 
                  'attributeStacks': ['N', 'N', 'N'],
                  'NA': ['REDACTED', 'N', '2', '<p>SDLKNOQWEKX;s pfjahasdva asdoafjacnva sdhfoqeaadsvle</p>'],
                  'SK': ['REDACTED', 'N', '4', '<p>oweufpqdna pojgqeqeOIDOIEPOGFJDNAOP ijag iodsj vldgrdf</p>'],
                  'UL': ['REDACTED', 'N', '4', '3', '<p>PNQUDHFNsd OHGOADHF AER nviovdsoirfa FDJQIFADA</p>']};

// character Card from HTML
const humbahCard = document.getElementById('humbah');
const jingbahCard = document.getElementById('jingbah');
const jumbahCard = document.getElementById('jumbah');
const zingzingzingbahCard = document.getElementById('zingzingzingbah');
const zumbahCard = document.getElementById('zumbah');
const kellerCard = document.getElementById('leslieKeller');
const mcCuenCard = document.getElementById('russMcCuen');
const gardnerCard = document.getElementById('ethanGardner');
const chiikawaCard = document.getElementById('chiikawa');
const hachiwareCard = document.getElementById('hachiware');
const usagiCard = document.getElementById('usagi');
const sixSevenCard = document.getElementById('sixSeven');
const kimJongBirukinCard = document.getElementById('kimJongBirukin');

selectingCard(humbah);

humbahCard.onclick = function(){
  selectingCard(humbah);
}
jingbahCard.onclick = function(){
  selectingCard(jingbah);
}
jumbahCard.onclick = function(){
  selectingCard(jumbah);
}
zingzingzingbahCard.onclick = function(){
  selectingCard(zingzingzingbah);
}
zumbahCard.onclick = function(){
  selectingCard(zumbah);
}
kellerCard.onclick = function(){
  selectingCard(keller);
}
mcCuenCard.onclick = function(){
  selectingCard(mcCuen);
}
gardnerCard.onclick = function(){
  selectingCard(gardner);
}
chiikawaCard.onclick = function(){
  selectingCard(chiikawa);
}
hachiwareCard.onclick = function(){
  selectingCard(hachiware);
}
usagiCard.onclick = function(){
  selectingCard(usagi);
}
sixSevenCard.onclick = function(){
  selectingCard(sixSeven);
}
kimJongBirukinCard.onclick = function(){
  selectingCard(kimJongBirukin);
}


// Main Function in displaying all information of the specified enemy
function selectingCard (characterSheet){
  //scroll to the top
  title.scrollIntoView({behavior: "smooth", block: "center"})

  //Replace card image
  characterImg.src = characterSheet['imgURL'];

  //Replace character name and HP
  characterName.innerHTML = characterSheet['Name'];
  hp.innerHTML = 'HP: ' + characterSheet['HP'];

  //Select and display the Attribute tag of character
  switch (characterSheet['Attribute']){
    case 'Boohbah':
      displaying(attributes, [0], 'flex');
      characterImg.style = 'border-color: rgb(255, 199, 199, 1);';
      break;
    case 'Teacher':
      displaying(attributes, [1], 'flex');
      characterImg.style = 'border-color: rgb(255, 93, 143);';
      break;
    case 'Magical':
      displaying(attributes, [2], 'flex');
      characterImg.style = 'border-color: rgb(189, 224, 254);';
      break;
    case 'REDACTED':
      displaying(attributes, [3], 'flex');
      characterImg.style = 'border-color: black;';
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

/* Filtering */

//All cards
let cards = document.getElementsByClassName('card');
//role lists
let tanks = document.getElementsByClassName('tank');
let attacks = document.getElementsByClassName('attack');
let supports = document.getElementsByClassName('support');
//attribute lists
let boohbahs = document.getElementsByClassName('boohbah');
let teachers = document.getElementsByClassName('teacher');
let magical = document.getElementsByClassName('magical');

//filter button
let filter = document.getElementById('filter');
//Filter Overlay
let filterOverlay = document.getElementById('filterOverlay')
//attribute buttons
let boohbahButton = document.getElementById('boohbahButton');
let teacherButton = document.getElementById('teacherButton');
let magicalButton = document.getElementById('magicalButton');
//role buttons
let attackButton = document.getElementById('attackButton');
let tankButton = document.getElementById('tankButton');
let supportButton = document.getElementById('supportButton');
//Exclusive Button
let exclusiveButton = document.getElementById('exclusiveButton');

let attributeControl = {'boohbah': false, 'teacher': false, 'magical': false}
let roleControl = {'attack': false, 'tank': false, 'support': false}
let exclusivity = false;
let isFilter = false;

filter.onclick = function () {
  isFilter = !isFilter;
  if (isFilter){
    filterOverlay.style = 'display: flex;';
  } else {
    filterOverlay.style = 'display: none;';
  }
}

exclusiveButton.onclick = function() {
  exclusivity = !exclusivity;
  buttonOutput(exclusivity, 'Exclusive', exclusiveButton);
  filtering();
}

boohbahButton.onclick = function(){
  attributeControl['boohbah'] = !attributeControl['boohbah'];
  buttonOutput(attributeControl['boohbah'], 'Boohbah', boohbahButton);
  filtering();
}
teacherButton.onclick = function(){
  attributeControl['teacher'] = !attributeControl['teacher'];
  buttonOutput(attributeControl['teacher'], 'Teacher', teacherButton);
  filtering();
}
magicalButton.onclick = function(){
  attributeControl['magical'] = !attributeControl['magical'];
  buttonOutput(attributeControl['magical'], 'Magical', magicalButton);
  filtering();
}

attackButton.onclick = function(){
  roleControl['attack'] = !roleControl['attack'];
  buttonOutput(roleControl['attack'], 'Attack', attackButton);
  filtering();
}
tankButton.onclick = function(){
  roleControl['tank'] = !roleControl['tank'];
  buttonOutput(roleControl['tank'], 'Tank', tankButton);
  filtering();
}
supportButton.onclick = function(){
  roleControl['support'] = !roleControl['support'];
  buttonOutput(roleControl['support'], 'Support', supportButton);
  filtering();
}

function buttonOutput (status, name, element){
  if (status){
    element.style = 'background-color: rgb(111, 188, 255);';
    console.log(name + ' Filter On');
  } else {
    element.style = 'background-color: rgb(255, 255, 255, 0.5);';
    console.log(name + ' Filter Off');
  }
}

function filtering (){
  // Lists of attributes and roles selected
  let attributeList = [];
  let roleList = [];
  // Add attributes that are selected
  for (let [key, value] of Object.entries(attributeControl)){
    if (value) {
      attributeList.push(key);
    }
  }
  // Add roles that are selected
  for (let [key, value] of Object.entries(roleControl)){
    if (value) {
      roleList.push(key);
    }
  }

  // Card list that passes attribute filter
  let filteringOne = []

  // Cards filtered off by attribute
  for (let i = 0; i < cards.length; i++){
    //displays all cards if attribute list is empty
    if (attributeList.length == 0){
      filteringOne.push(cards[i]);
      continue;
    }
    // If the card has an attribute in the list, add to displayCards
    for (let att of attributeList) {
      if (cards[i].classList.contains(att)){
        filteringOne.push(cards[i])
      } else {
        cards[i].style = 'display: none;';
      }
    }
  }

  // Card list that passes role filter
  let filteringTwo = [];

  //If role list length is 0 or 3, it includes all cards under the first filter restriction
  if (roleList.length == 3 || roleList.length == 0){
    // Pushes each card from filterone to filtertwo
    for (let i = 0; i < filteringOne.length; i++){
      filteringTwo.push(filteringOne[i]);
    }
  } else { 
    // If filtering is not exclusive, run
    if (!exclusivity){
      //Filter through filteringOne
      for (let i = 0; i < filteringOne.length; i++){
        // list roles a card has 
        let cardRoles = [];
        for (let g = 2; g < filteringOne[i].classList.length; g++){
          cardRoles.push(filteringOne[i].classList[g]);
        }

        // loop through list of roles selected
        for (let role of roleList) {
          // If card roles is not found in the role list, remove it
          if (!cardRoles.includes(role)){
            filteringOne[i].style = 'display: none';
          // Add if included in the list
          } else {
            filteringTwo.push(filteringOne[i]);
            break;
          }
        }
      }
    } else {
      //Filter through filteringOne
      for (let i = 0; i < filteringOne.length; i++){
        // list roles a card has
        let cardRoles = [];
        for (let g = 2; g < filteringOne[i].classList.length; g++){
          cardRoles.push(filteringOne[i].classList[g]);
        }
        // loop through list of roles selected
        for (let role of roleList) {
          // if the roles of a card is in the list of roles selected, add to filtertwo
          if (cardRoles.every(item => roleList.includes(item))) {
            filteringTwo.push(filteringOne[i]);
          // display remove if not.
          } else {
            filteringOne[i].style = 'display: none';
          }
        }
      }
    }
  }

  // Display after intensive filtering
  for (let i = 0; i <filteringTwo.length; i++){
    filteringTwo[i].style = 'display: grid;';
  }
}

/* General css styling*/
for (let i = 0; i < boohbahs.length; i++) {
  boohbahs[i].children[0].style = 'border-color: rgba(255, 199, 199, 1);';
}
for (let i = 0; i < teachers.length; i++) {
  teachers[i].children[0].style = 'border-color: rgb(255, 93, 143);';
}
for (let i = 0; i < magical.length; i++) {
  magical[i].children[0].style = 'border-color: rgb(189, 224, 254);';
}