//Background Audio
const background_audio = new Audio('audio/background/Wii Fit - Get In Shape!.mp3');
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

const click = new Audio('audio/ui/minecraft_click.mp3');

let characterImg = document.getElementById('infoCardImg');
let characterName = document.getElementById('name');
let hp = document.getElementById('health');
let attributes = document.getElementsByClassName('attribute');
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

//Character Information
/*
  1. image URL
  2. Name
  3. HP
  4. Attribute
  5. Roles
  6. Normal Attack + Skil + Ultimate
    a. Name
    b. Attack Type
    c. Participation cost
    d. attribute effect stacks
    e. Description
*/

const template = {'imgURL': 'cardImages/.png',
                  'Name': '',
                  'HP': '',
                  'Attribute': '', 
                  'Roles': [''], 
                  'NA': ['Undecided', 'N', '0', '0', '<p></p>'],
                  'SK': ['Undecided', 'N', '0', '0', '<p></p>'],
                  'UL': ['Undecided', 'N', '0', '0', '0', '<p></p>']};

const adamM = {'imgURL': 'cardImages/evanYango.png',
               'Name': 'Adam Mitchell',
               'HP': '40',
               'Attribute': 'Biotech', 
               'Roles': ['Tank'], 
               'NA': ['Undecided', 'S', '2', '1', '<p>Deal 1 dmg to all enemies.</p>'],
               'SK': ['Undecided', 'N', '3', '0', '<p>Increase Base HP of the party by 5. (3 rounds)<br>Character\'s HP will reduce to their original Base HP once the duration ends if Current HP is higher than their Base HP.</p>'],
               'UL': ['Undecided', 'N', '3', '0', '2', '<p>Place a shield onto the active character with HP based on the character with the most difference from their current and base HP. Max 10 HP </p>']};
const aftonP = {'imgURL': 'cardImages/aftonPate.png',
                  'Name': 'Afton Pate',
                  'HP': '45',
                  'Attribute': 'Coder', 
                  'Roles': ['Tank', 'Support'], 
                  'NA': ['Undecided', 'S', '2', '1', '<p>Deal 2 dmg to the enemy.</p>'],
                  'SK': ['Undecided', 'N', '3', '0', '<p>Place a shield onto the active character with HP based on the difference between Afton\’s Base HP and the character with the closest Base HP to Afton\’s. Max 10 HP.</p>'],
                  'UL': ['Undecided', 'S', '3', '1', '2','<p>Deal 3 dmg to the enemy.<br>Gain another reroll during the roll phase. (3 rounds)</p>']};
const alexAK = {'imgURL': 'cardImages/evanYango.png',
                  'Name': 'Alex Arias-Kurcan',
                  'HP': '30',
                  'Attribute': 'Coder', 
                  'Roles': ['Attack', 'Support'], 
                  'NA': ['Undecided', 'S', '2', '2', '<p>Deal 2 dmg to the enemy.</p>'],
                  'SK': ['Undecided', 'D', '3', '1', '<p>Deal 2 dmg to the enemy and summon Sparring Partner.<br><u>Sparring Partner</u>: Deals 2 dmg at the end of every round. (3 rounds)</p>'],
                  'UL': ['Undecided', 'D', '3', '1', '2', '<p>Summon <u>Sparring Partner</u>. If already present, refresh duration.<br>When an action occurs, Sparring Partner will deal 1 dmg to the enemy</p>']};
const angelC = {'imgURL': 'cardImages/angelCarmichael.png',
                  'Name': 'Angel Carmichael',
                  'HP': '35',
                  'Attribute': 'Coder', 
                  'Roles': ['Tank', 'Attack'], 
                  'NA': ['Undecided', 'S', '1', '1', '<p>Deal 1 dmg to the enemy.</p>'],
                  'SK': ['Undecided', 'S', '3', '1', '<p>Place a shield with 7 HP to the active character.<br>When broken, deal 4 dmg.</p>'],
                  'UL': ['Undecided', 'A', '3', '0', '3', '<p>If shield is present, break the shield and deal 2 piercing dmg to characters adjacent to the active enemy.<br>If shield is not present, deal 2 dmg to all characters.</p>']};
const biancaB = {'imgURL': 'cardImages/evanYango.png',
                 'Name':'Bianca Baccay',
                 'HP': '40',
                 'Attribute': 'Coder', 
                 'Roles': ['Attack'], 
                 'NA': ['Overwhelm The Enemy', 'A', '3', '2', '<p>Deal 1 dmg to all enemies.<br>If health is less than 20, heal by 10 HP.</p>'],
                 'SK': ['Friendly Fire', 'N', '3', '0', '<p>Decrease Bianca\'s HP by 4.<br>Every 4 HP away from Base HP increases <u>Overwhelm The Enemy</u> dmg by 2.</p>'],
                 'UL': ['Crash Out', 'S', '4', '1', '3', '<p>Deal 5 dmg to the enemy.<br>Decrease HP by 10. If HP is decreased below 0, set HP to 1.<br>The next two incoming attacks will not deal dmg.</p>']};
const birukY = {'imgURL': 'cardImages/evanYango.png',
                  'Name': 'Biruk Yidnekachew',
                  'HP': '35',
                  'Attribute': 'Coder', 
                  'Roles': ['Support'], 
                  'NA': ['Undecided', 'A', '2', '1', '<p>Deal 1 dmg to all enemies.</p>'],
                  'SK': ['Undecided', 'N', '2', '0', '<p>Increase the party\'s DoT Attack Dmg by 2. (2 rounds)</p>'],
                  'UL': ['Undecided', 'N', '3', '0', '3', '<p>All attacks are considered DoT attacks.<br>DoT attacks Dmg is further increased by 3. (3 rounds)</p>']};

// character Card from HTML
const adamCard = document.getElementById('adamMitchell');
const aftonCard = document.getElementById('aftonPate');
const alexCard = document.getElementById('alexAriasKurcan');
const angelCard = document.getElementById('angelCarmichael');
const biancaCard = document.getElementById('biancaBaccay');
const birukCard = document.getElementById('birukYidnekachew');

adamCard.onclick = function(){
  selectingCard(adamM);
}
aftonCard.onclick = function(){
  selectingCard(aftonP);
}
alexCard.onclick = function(){
  selectingCard(alexAK);
}
angelCard.onclick = function(){
  selectingCard(angelC);
}
biancaCard.onclick = function(){
  selectingCard(biancaB);
}
birukCard.onclick = function(){
  selectingCard(birukY);
}

// Main Function in displaying all information of the specified character
function selectingCard (characterSheet){
  //Replace card image
  characterImg.src = characterSheet['imgURL'];

  //Replace character name and HP
  characterName.innerHTML = characterSheet['Name'];
  hp.innerHTML = 'HP: ' + characterSheet['HP'];

  let attributeEffect = '';
  //Select and display the Attribute tag of character
  switch (characterSheet['Attribute']){
    case 'Coder':
      displaying(attributes, [0], 'flex');
      attributeEffect = 'Debug stack';
      break;
    case 'Cyber':
      displaying(attributes, [1], 'flex');
      attributeEffect = 'Network Security stack';
      break;
    case 'Biotech':
      displaying(attributes, [2], 'flex');
      attributeEffect = 'Chemical Agent stack';
      break;
    default:
      console.log('ERROR NO ATTRIBUTE FOUND');
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

  //Display Normal Attack information
  naTitle.innerHTML = 'Normal Attack: ' + characterSheet['NA'][0];
  attackType_tags(attackType_NA, characterSheet['NA'][1]);
  naInfo.innerHTML = '<p>Participation Cost: <b>' + characterSheet['NA'][2] + '</b> ' + '| ' + attributeEffect + ': <b>' + characterSheet['NA'][3] + '</b></p>';
  naInfo.innerHTML += characterSheet['NA'][4];

  //Display Skill information
  skTitle.innerHTML = 'Skill: ' + characterSheet['SK'][0];
  attackType_tags(attackType_SK, characterSheet['SK'][1]);
  skInfo.innerHTML = '<p>Participation Cost: <b>' + characterSheet['SK'][2] + '</b> ' + '| ' + attributeEffect + ': <b>' + characterSheet['SK'][3] + '</b></p>';
  skInfo.innerHTML += characterSheet['SK'][4];
  
  //Display ultimate information
  ulTitle.innerHTML = 'Ultimate: ' + characterSheet['UL'][0];
  attackType_tags(attackType_ULT, characterSheet['UL'][1]);
  ultInfo.innerHTML = '<p>Energy Cost: <b>' + characterSheet['UL'][4] + '</b> | Participation Cost: <b>' + characterSheet['UL'][2] + '</b> ' + '| ' + attributeEffect + ': <b>' + characterSheet['UL'][3] + '</b></p>';
  ultInfo.innerHTML += characterSheet['UL'][5];

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

/* Linking Pages*/
let exit = document.getElementById('exit');

exit.onclick = function (){
  window.location.href = ("https://alexioprado.github.io/Boohbah_TheLastHope/");
}

/* Filtering */

//role lists
let tanks = document.getElementsByClassName('tank');
let attacks = document.getElementsByClassName('attack');
let supports = document.getElementsByClassName('support');
//attribute lists
let coders = document.getElementsByClassName('coder');
let biotechs = document.getElementsByClassName('biotech');
let cybers = document.getElementsByClassName('cyber');

//filter button
let filter = document.getElementById('filter');
//role buttons

//attribute buttons


//role off/on
let tankSwitch = false;
let attackSwitch = false;
let supportSwitch = false;
//attribute  off/on
let coderSwitch = false;
let biotechSwitch = false;
let cyberSwitch = false;


filter.onclick = function(){
  if (!tankSwitch){

    if (!attackSwitch){
      for (let i = 0; i < attacks.length; i++) {
        attacks[i].style = 'display: none;';
      }
    }

    if (!supportSwitch){
      for (let i = 0; i < supports.length; i++) {
        supports[i].style = 'display: none;';
      }
    }

    for (let i = 0; i < tanks.length; i++) {
      tanks[i].style = 'display: grid;';
    }

    console.log('Tanks only');
    tankSwitch = true;
  }
  else {
    if (!attackSwitch){
      for (let i = 0; i < attacks.length; i++) {
        attacks[i].style = 'display: grid;';
      }
    }

    if (!supportSwitch){
      for (let i = 0; i < supports.length; i++) {
        supports[i].style = 'display: grid;';
      }
    }

    console.log('Include other roles');
    tankSwitch = false;
  }

}


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