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
               'NA': ['Undecided', 'A', '2', '1', '<p>Deal 1 dmg to all enemies.</p>'],
               'SK': ['Undecided', 'N', '3', '0', '<p>Increase Base HP of the party by 5. (3 rounds)<br>Character\'s HP will reduce to their original Base HP once the duration ends if current HP is higher than their Base HP.</p>'],
               'UL': ['Undecided', 'N', '3', '0', '2', '<p>Place a shield onto the active character with strength based on the character with the most difference from their current and Base HP. Max 10 strength.</p>']};
const addisonB = {'imgURL': 'cardImages/addisonBrooks.png',
                  'Name': 'Addison Brooks',
                  'HP': '30',
                  'Attribute': 'Biotech', 
                  'Roles': ['Support'], 
                  'NA': ['Undecided', 'A', '2', '3', '<p>Deal 1 dmg to all enemies.</p>'],
                  'SK': ['Explosive Tactics', 'D', '4', '1', '<p>Summon the Chlorine Vile.<br>When the active character takes an action, gain 1 potassium stack.<br><u>Chlorine Vile:</u> Deal 2 dmg at the end of the round. (3 rounds)<br> If present, Potassium stacks will be consumed and increase <u>Chlorine Vile</u> dmg by 1. </p>'],
                  'UL': ['Placebo Medication?', 'A', '3', '2', '2', '<p>Deal 2 dmg to all enemies.<br>Summon the <u>Chlorine Vile</u>. If already present, refresh duration. When consuming potassium stacks, heal the party by 1 HP.</p>']};
const aftonP = {'imgURL': 'cardImages/aftonPate.png',
                'Name': 'Afton Pate',
                'HP': '45',
                'Attribute': 'Coder', 
                'Roles': ['Tank', 'Support'], 
                'NA': ['Undecided', 'S', '2', '1', '<p>Deal 2 dmg to the enemy.</p>'],
                'SK': ['Undecided', 'N', '3', '0', '<p>Place a shield onto the active character with strength based on the difference between Afton\’s Base HP and the character with the closest Base HP to Afton\’s. Max 10 strength.</p>'],
                'UL': ['Undecided', 'S', '3', '1', '2','<p>Deal 3 dmg to the enemy.<br>Gain another reroll during the roll phase. (3 rounds)</p>']};
const alexAK = {'imgURL': 'cardImages/alexKurcan.png',
                'Name': 'Alex Arias-Kurcan',
                'HP': '30',
                'Attribute': 'Coder', 
                'Roles': ['Attack', 'Support'], 
                'NA': ['Undecided', 'S', '2', '2', '<p>Deal 2 dmg to the enemy.</p>'],
                'SK': ['Undecided', 'D', '3', '1', '<p>Deal 2 dmg to the enemy and summon Sparring Partner.<br><u>Sparring Partner</u>: Deals 3 dmg at the end of the round. (3 rounds)</p>'],
                'UL': ['Undecided', 'D', '3', '1', '2', '<p>Summon <u>Sparring Partner</u>. If already present, refresh duration.<br>When an action occurs, Sparring Partner will deal 2 dmg to the enemy. (3 rounds)</p>']};
const angelC = {'imgURL': 'cardImages/angelCarmichael.png',
                'Name': 'Angel Carmichael',
                'HP': '35',
                'Attribute': 'Coder', 
                'Roles': ['Tank', 'Attack'], 
                'NA': ['Undecided', 'S', '1', '1', '<p>Deal 1 dmg to the enemy.</p>'],
                'SK': ['Undecided', 'S', '3', '1', '<p>Place a shield with 7 strength to the active character.<br>When broken, deal 4 dmg.</p>'],
                'UL': ['Undecided', 'A', '3', '2', '3', '<p>If shield is present, break the shield and deal 3 piercing dmg to characters adjacent to the active enemy.<br>If shield is not present, deal 4 dmg to all characters.</p>']};
const beckketS = {'imgURL': 'cardImages/beckketSummers.png',
                  'Name': 'Beckket Summers',
                  'HP': '25',
                  'Attribute': 'Cyber', 
                  'Roles': ['Attack'], 
                  'NA': ['Try And Catch Me', 'S', '2', '1', '<p>Deal 3 dmg to the enemy.</p>'],
                  'SK': ['Blazin Doughnuts', 'D', '3', '2', '<p>Deal 2 dmg to the enemy and summon a Car.<br><u>Car:</u> Deal 4 dmg to all enemies at the end of the round. If the firewall is present, dmg increases by 4. (4 rounds)</p>'],
                  'UL': ['Rev It Up', 'S', '3', '3', '3', '<p>Deal 5 dmg to the enemy.<br>If a <u>Car</u> is present, refresh its duration. Increase the max amount of cars allowed to 2 and summon a <u>Car</u>.</p>']};
const biancaB = {'imgURL': 'cardImages/evanYango.png',
                 'Name':'Bianca Baccay',
                 'HP': '40',
                 'Attribute': 'Coder', 
                 'Roles': ['Attack'], 
                 'NA': ['Overwhelm The Enemy', 'A', '3', '2', '<p>Deal 1 dmg to all enemies.<br>If health is less than 20, heal by 10 HP.</p>'],
                 'SK': ['Friendly Fire', 'N', '3', '0', '<p>Decrease Bianca\'s HP by 4.<br>Every 4 HP away from Base HP increases <u>Overwhelm The Enemy</u> dmg by 2.</p>'],
                 'UL': ['Crash Out', 'S', '4', '1', '3', '<p>Deal 5 dmg to the enemy.<br>Decrease HP by 10. If HP is decreased below 0, set HP to 1.<br>The next two incoming attacks will not deal dmg.</p>']};
const birukY = {'imgURL': 'cardImages/birukYidnekachew.png',
                'Name': 'Biruk Yidnekachew',
                'HP': '35',
                'Attribute': 'Coder', 
                'Roles': ['Support'], 
                'NA': ['For The People', 'A', '2', '1', '<p>Deal 1 dmg to all enemies.</p>'],
                'SK': ['Civic Duty', 'N', '2', '0', '<p>Englighten the party of their civic duty and responsibility.<br>Increase the party\'s DoT Attack Dmg by 3. (3 rounds)</p>'],
                'UL': ['Corruption At Its Finest', 'N', '3', '0', '3', '<p>Spread misinformation to reduce rebellion among your people.<br>All attacks are considered DoT attacks.<br>DoT Attack Dmg is further increased by 5 and incoming dmg reduced by 3. (3 rounds)</p>']};
const calebA = {'imgURL': 'cardImages/calebArrick.png',
                'Name': 'Caleb Arrick',
                'HP': '45',
                'Attribute': 'Biotech', 
                'Roles': ['Tank'], 
                'NA': ['Undecided', 'S', '1', '1', '<p>Deal 1 dmg to the enemy.</p>'],
                'SK': ['Undecided', 'A', '3', '2', '<p>Deal 2 dmg to all enemies.<br>Place the Turtle shield with 7 strength to the active character.<br>When an action occurs, heal the shield by 1 strength.</p>'],
                'UL': ['Undecided', 'S', '4', '1', '2', '<p>Place the Turtle shield with 7 strength to the active character. If already present, reset strength to 7.<br> When the active character is attacked, reduce dmg by 1 and increase the shield strength by 3.</p>']};
const christopherM = {'imgURL': 'cardImages/christopherMarkham.png',
                      'Name': 'Christopher Markham',
                      'HP': '25',
                      'Attribute': 'Coder', 
                      'Roles': ['Attack'], 
                      'NA': ['Undecided', 'S', '1', '1', '<p>Deal 2 dmg to the enemy.<br>Gain 1 stack.</p>'],
                      'SK': ['Undecided', 'A', '5', '1', '<p>Deal 4 dmg to all enemies.<br>Every stack increases dmg by 1. Max 10 stacks can be used.</p>'],
                      'UL': ['Undecided', 'S', '2', '2', '5', '<p>Deal 5 dmg to the enemy.<br>Gain 5 stacks.</p>']};
const dennisW = {'imgURL': 'cardImages/evanYango.png',
                  'Name': 'Dennis Wright',
                  'HP': '40',
                  'Attribute': 'Cyber', 
                  'Roles': ['Support', 'Attack'], 
                  'NA': ['Undecided', 'S', '2', '1', '<p>Deal 2 dmg to the enemy.</p>'],
                  'SK': ['Defensive Tactics', 'S', '3', '3', '<p>Deal 2 dmg to the enemy and summon a Defender.<br><u>Defender:</u> Reduce incoming dmg by 4 and heal the lowest HP character by 4 at the end of the round. (3 rounds)</p>'],
                  'UL': ['Undecided', 'S', '3', '3', '2', '<p>Deal 4 dmg to the enemy.<br>Heal the party by 5 HP and increase dmg by 4. (4 rounds)</p>']};
const elizabethT = {'imgURL': 'cardImages/elizabethTaiwo.png',
                    'Name': 'Elizabeth Taiwo',
                    'HP': '30',
                    'Attribute': 'Coder', 
                    'Roles': ['Support', 'Attack'], 
                    'NA': ['Undecided', 'S', '2', '1', '<p>Deal 2 dmg to the enemy.</p>'],
                    'SK': ['Undecided', 'S', '3', '1', '<p>Steal 4 HP from the enemy and heal the lowest health character by 3 HP.<br>Save 1 HP to the <u>Health Bank.<u></p>'],
                    'UL': ['Undecided', 'N', '3', '0', '3', '<p>Unleash the Health Bank, healing the party based on HP saved.</p>']};
const evanY = {'imgURL': 'cardImages/evanYango.png',
               'Name': 'Evan Yango',
               'HP': '40',
               'Attribute': 'Coder', 
               'Roles': ['Attack', 'Support'], 
               'NA': ['Undecided', 'S', '2', '1', '<p>Deal 2 dmg to the enemy.</p>'],
               'SK': ['Undecided', 'A', '3', '2', '<p>Deal 2 dmg to all enemies.<br>If enemies are stunned, deal twice as much dmg.</p>'],
               'UL': ['Undecided', 'S', '3', '2', '3', '<p>Deal 5 dmg to the enemy.<br>If a character in the party loses or gains HP, increase the next Skill dmg by 2. (3 rounds)</p>']};
const evelynM = {'imgURL': 'cardImages/evanYango.png',
                 'Name': 'Evelyn Meier',
                 'HP': '50',
                 'Attribute': 'Cyber', 
                 'Roles': ['Tank'], 
                 'NA': ['Undecided', 'S', '2', '1', '<p>Deal 2 dmg to the enemy.</p>'],
                 'SK': ['Undecided', 'N', '3', '0', '<p>Dmg taken by the party is reduced by half. (3 rounds)</p>'],
                 'UL': ['Undecided', 'A', '2', '2', '2', '<p>Deal 2 dmg to all enemies.<br>Ultimates do not require energy during this round.</p>']};
const karimRA = {'imgURL': 'cardImages/evanYango.png',
                  'Name': 'Karim Rivera-Apolinar',
                  'HP': '35',
                  'Attribute': 'Coder', 
                  'Roles': ['Attack'], 
                  'NA': ['Undecided', 'S', '2', '2', '<p>Deal 3 dmg to the enemy.</p>'],
                  'SK': ['Undecided', 'A', '3', '1', '<p>Deal 2 dmg to all enemies.</p>'],
                  'UL': ['Undecided', 'A', '4', '2', '2', '<p>Deal 3 dmg to all enemies.<br>When Karim is the active character, gain an extra action. (5 rounds)<br>When Karim uses his Normal Attack or Skill, their respective dmg is increased by 1.</p>']};
const katarinaR = {'imgURL': 'cardImages/evanYango.png',
                   'Name': 'Katarina Russo',
                   'HP': '30',
                   'Attribute': 'Cyber', 
                   'Roles': ['Support'], 
                   'NA': ['Undecided', 'S', '1', '1', '<p>Deal 1 dmg to the enemy.</p>'],
                   'SK': ['Undecided', 'D', '4', '1', '<p>Deal 3 dmg to the enemy and summon Fiesty Kat.<br><u>Fiesty Kat:</u> Heals 2 HP to the active character when they take an action and deals 2 dmg at the end of the round. (Thrice per round, 3 rounds)</p>'],
                   'UL': ['Undecided', 'D', '3', '2', '2', '<p>Deal 4 dmg to the enemy.<br>Summon <u>Fiesty Kat</u>. If already present, refresh duration.<br>Healing caused by <u>Fiesty kat</u> is increased by 2 HP.</p>']};
const keshavT = {'imgURL': 'cardImages/evanYango.png',
                 'Name': 'Keshav Tekalur',
                 'HP': '25',
                 'Attribute': 'Biotech', 
                 'Roles': ['Attack'], 
                 'NA': ['Undecided', 'S', '2', '1', '<p>Deal 3 dmg to the enemy.<br>If the <u>Great Sword</u> is present, gain 1 sharpness stack.</p>'],
                 'SK': ['Undecided', 'A', '3', '2', '<p>Deal 2 dmg to all enemies.<br>If skill was used twice during the round, deal an additonal 2 dmg to all enemies.<br>If the <u>Great Sword</u> is present, gain 2 sharpness stacks.</p>'],
                 'UL': ['Undecided', 'S', '4', '1', '3', '<p>Summon the Great Sword.<br><u>Great Sword:</u> Deals 10 dmg to all enemies at the end of the round. Each sharpness stack increases dmg by 3.</p>']};
const khaniL = {'imgURL': 'cardImages/evanYango.png',
                'Name': 'Khani Lyan',
                'HP': '40',
                'Attribute': 'Coder', 
                'Roles': ['Support'], 
                'NA': ['Undecided', 'S', '2', '1', '<p>Deal 2 dmg to the enemy.</p>'],
                'SK': ['Undecided', 'S', '3', '2', '<p>Deal 3 dmg to the enemy.<br>Heal the active character by 2 HP when a DoT Attack occurs. (Twice per round, 3 rounds)</p>'],
                'UL': ['Undecided', 'A', '3', '1', '2', '<p>Deal 2 dmg to all enemies and heal the party by 5 HP.</p>']};
const mandiN = {'imgURL': 'cardImages/mandiNguyen.png',
                'Name': 'Mandi Nguyen',
                'HP': '30',
                'Attribute': 'Cyber', 
                'Roles': ['Support'], 
                'NA': ['Undecided', 'S', '1', '1', '<p>Deal 1 dmg to the enemy.</p>'],
                'SK': ['Undecided', 'S', '3', '1', '<p>Deal 2 dmg to the enemy.<br>Increase the active character\'s Skill Dmg by 4 and reduce Skill participation point cost by 1. (3 rounds)</p>'],
                'UL': ['Undecided', 'N', '2', '0', '4', '<p>Gain 3 extra dice during roll phase. (3 rounds)</p>']};
const marcusC = {'imgURL': 'cardImages/marcusCeradini.png',
                 'Name': 'Marcus Ceradini',
                 'HP': '40',
                 'Attribute': 'Coder', 
                 'Roles': ['Tank', 'Attack'], 
                 'NA': ['Undecided', 'S', '1', '1', '<p>Deal 1 dmg to the enemy.</p>'],
                 'SK': ['Undecided', 'S', '3', '1', '<p>Deal 4 dmg to the enemy.<br>Place the Iron shield with 6 strength to the active character.<br>When the <u>Iron shield</u> breaks, deal 2 dmg to all enemies.</p>'],
                 'UL': ['Undecided', 'A', '3', '2', '0', '<p>Deal 2 dmg to all enemies.<br>Place the <u>Iron Shield</u> to the active character. If already present, reset strength to 6.<br>If an action occurs, deal 1 dmg to all enemies. (Thrice per round)</p>']};
const marcusP = {'imgURL': 'cardImages/evanYango.png',
                 'Name': 'Marcus Alexio Prado',
                 'HP': '25',
                 'Attribute': 'Coder', 
                 'Roles': ['Support'], 
                 'NA': ['Undecided', 'S', '1', '1', '<p>Deal 1 dmg to the enemy.</p>'],
                 'SK': ['Undecided', 'S', '3', '3', '<p>Deal 2 dmg to the enemy.<br>Increase the party\'s dmg by 2. Dmg caused during stun is further increased by 2. (3 rounds)</p>'],
                 'UL': ['Undecided', 'S', '3', '4', '0', '<p>Deal 3 dmg to the enemy.<br>Increase the next stun duration by 1 round.</p>']};
const oliviaD = {'imgURL': 'cardImages/oliviaDwyer.png',
                 'Name': 'Olivia Dwyer',
                 'HP': '30',
                 'Attribute': 'Biotech', 
                 'Roles': ['Attack', 'Support'], 
                 'NA': ['Undecided', 'S', '2', '1', '<p>Deal 2 dmg to the enemy.</p>'],
                 'SK': ['Undecided', 'D', '3', '1', '<p>Summon the Clone.<br><u>Clone:</u> Deals 2 dmg at the end of the round. When a character uses a Normal Attack or Skill, deal 3 dmg to the enemy and 2 piercing dmg to adjacent enemies. (Twice per round, 2 rounds)</p>'],
                 'UL': ['Undecided', 'N', '4', '0', '3', '<p>Summon the <u>Clone</u>. If already present, reset duration.<br>Heal the party by 1 HP when a character uses a Normal Attack or Skill. (3 rounds)</p>']};
const parthT = {'imgURL': 'cardImages/parthThite.png',
                'Name': 'Parth Thite',
                'HP': '35',
                'Attribute': 'Coder', 
                'Roles': ['Tank', 'Attack'], 
                'NA': ['Undecided', 'S', '2', '1', '<p>Deal 2 piercing dmg to the enemy.</p>'],
                'SK': ['Undecided', 'S', '3', '1', '<p>Deal 2 dmg to all enemies.<br> Place the Auric shield with 6 strength to the active character.</p>'],
                'UL': ['Undecided', 'S', '4', '1', '2', '<p>Deal 3 dmg to the enemy.<br>Place the <u>Auric shield</u> to the active character. If already present, reset strength to 6.<br>Parth\'s Normal Attack dmg is increased based on the strength of <u>Auric Shield</u>.<br>Any action taken by a character increases <u>Auric Shield\'s</u> strength by 1.</p>']};
const rahulM = {'imgURL': 'cardImages/evanYango.png',
                'Name': 'Rahul Murgai',
                'HP': '35',
                'Attribute': 'Coder', 
                'Roles': ['Tank', 'Support'], 
                'NA': ['Undecided', 'S', '1', '1', '<p>Deal 1 dmg to the enemy.</p>'],
                'SK': ['Undecided', 'S', '3', '1', '<p>Deal 2 dmg to the enemy.<br> Reduce dmg taken by enemies by 2. (2 rounds)<br>When the active character is attacked, create the Counter shield with strength based on half of the attack dmg. Max 7 strength. Subsequent attacks will increase the <u>Counter shield\'s</u> strength by 1 HP.</p>'],
                'UL': ['Undecided', 'N', '4', '0', '2', '<p>Heal the party by 4 HP. If the <u>Counter shield</u> is present, heal an additional 2 HP.</p>']};
const saraR = {'imgURL': 'cardImages/saraReinert.png',
               'Name': 'Sara Reinert',
               'HP': '35',
               'Attribute': 'Biotech', 
               'Roles': ['Support', 'Attack'], 
               'NA': ['Egg Throw', 'S', '1', '1', '<p>Deal 1 dmg to the enemy.</p>'],
               'SK': ['Feather Falling', 'N', '2', '0', '<p>Place a feather onto the active character.<br><u>Feather:</u> When attacked, heal by 2 Hp. (Thrice per round, 2 rounds)</p>'],
               'UL': ['The Hooded Hero Strikes Again', 'D', '3', '2', '3', '<p>Deal 2 dmg to the enemy and summon the Turkey Catapult.<br><u>Turkey Catapult:</u> Deals 3 dmg at the end of the round. (3 rounds)</p>']};
const shamN = {'imgURL': 'cardImages/shamNemer.png',
               'Name': 'Sham Nemer',
               'HP': '40',
               'Attribute': 'Coder', 
               'Roles': ['Tank'], 
               'NA': ['Not Worth My Time', 'S', '2', '1', '<p>Deal 2 dmg to the enemy.</p>'],
               'SK': ['"You alright ladies?"', 'S', '2', '2', '<p>Deal 3 dmg to the enemy.<br>When Sham is on standby, reduce dmg taken to the active character by 3. If Sham has atleast 20 HP, deal 2 dmg to herself. (Twice per round, 2 rounds)</p>'],
               'UL': ['Papichulo In The House!', 'N', '3', '0', '3', '<p>Place the Stunning Shield to the active character with strength based on Sham\'s HP.<br>For every 4 HP away from her Base HP, increase <u>Stunning Shield</u> strength by 3.</p>']};
const tanishkaP = {'imgURL': 'cardImages/evanYango.png',
                   'Name': 'Tanishka Peddy',
                   'HP': '25',
                   'Attribute': 'Biotech', 
                   'Roles': ['Attack'], 
                   'NA': ['Step Back', 'S', '1', '1', '<p>Deal 2 dmg to the enemy.</p>'],
                   'SK': ['I\'m Peddy Like That', 'S', '2', '2', '<p>Throw a tennies ball and deal 3 dmg to the enemy.<br>Deal 5 dmg to the enemy at the end of the round.</p>'],
                   'UL': ['I\'m #1 For A Reason', 'S', '4', '3', '5', '<p>Deal 12 dmg to the enemy.</p>']};

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
const oliviaCard = document.getElementById('oliviaDwyer');
const parthCard = document.getElementById('parthThite');
const rahulCard = document.getElementById('rahulMurgai');
const saraCard = document.getElementById('saraReinert');
const shamCard = document.getElementById('shamNemer');
const tanishkaCard = document.getElementById('tanishkaPeddy');

//Starting page
selectingCard(adamM);

adamCard.onclick = function(){
  selectingCard(adamM);
}
addisonCard.onclick = function(){
  selectingCard(addisonB);
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
beckketCard.onclick = function(){
  selectingCard(beckketS);
}
biancaCard.onclick = function(){
  selectingCard(biancaB);
}
birukCard.onclick = function(){
  selectingCard(birukY);
}
calebCard.onclick = function(){
  selectingCard(calebA);
}
christopherCard.onclick = function(){
  selectingCard(christopherM);
}
dennisCard.onclick = function(){
  selectingCard(dennisW);
}
elizabethCard.onclick = function(){
  selectingCard(elizabethT);
}
evanCard.onclick = function(){
  selectingCard(evanY);
}
evelynCard.onclick = function(){
  selectingCard(evelynM);
}
karimCard.onclick = function(){
  selectingCard(karimRA);
}
katarinaCard.onclick = function(){
  selectingCard(katarinaR);
}
keshavCard.onclick = function(){
  selectingCard(keshavT);
}
khaniCard.onclick = function(){
  selectingCard(khaniL);
}
mandiCard.onclick = function(){
  selectingCard(mandiN);
}
marcusCCard.onclick = function(){
  selectingCard(marcusC);
}
marcusPCard.onclick = function(){
  selectingCard(marcusP);
}
oliviaCard.onclick = function(){
  selectingCard(oliviaD);
}
parthCard.onclick = function(){
  selectingCard(parthT);
}
rahulCard.onclick = function(){
  selectingCard(rahulM);
}
saraCard.onclick = function(){
  selectingCard(saraR);
}
shamCard.onclick = function(){
  selectingCard(shamN);
}
tanishkaCard.onclick = function(){
  selectingCard(tanishkaP);
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
      characterImg.style = 'border-color: rgb(0, 71, 171);';
      break;
    case 'Cyber':
      displaying(attributes, [1], 'flex');
      attributeEffect = 'Network Security stack';
      characterImg.style = 'border-color: rgb(255, 191, 0);';
      break;
    case 'Biotech':
      displaying(attributes, [2], 'flex');
      attributeEffect = 'Chemical Agent stack';
      characterImg.style = 'border-color: rgb(8, 143, 143);';
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

//All cards
let cards = document.getElementsByClassName('card');
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
//Filter Overlay
let filterOverlay = document.getElementById('filterOverlay')
//attribute buttons
let coderButton = document.getElementById('coderButton');
let cyberButton = document.getElementById('cyberButton');
let biotechButton = document.getElementById('biotechButton');
//role buttons
let attackButton = document.getElementById('attackButton');
let tankButton = document.getElementById('tankButton');
let supportButton = document.getElementById('supportButton');
//Exclusive Button
let exclusiveButton = document.getElementById('exclusiveButton');

let attributeControl = {'coder': false, 'cyber': false, 'biotech': false}
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

coderButton.onclick = function(){
  attributeControl['coder'] = !attributeControl['coder'];
  buttonOutput(attributeControl['coder'], 'Coder', coderButton);
  filtering();
}
cyberButton.onclick = function(){
  attributeControl['cyber'] = !attributeControl['cyber'];
  buttonOutput(attributeControl['cyber'], 'Cyber', cyberButton);
  filtering();
}
biotechButton.onclick = function(){
  attributeControl['biotech'] = !attributeControl['biotech'];
  buttonOutput(attributeControl['biotech'], 'Biotech', biotechButton);
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

  console.log(roleList)

  // Card list to be displayed
  let displayCards = []

  // Cards filtered off by attribute
  for (let i = 0; i < cards.length; i++){
    //displays all cards if attribute list is empty
    if (attributeList.length == 0){
      displayCards.push(cards[i]);
      continue;
    }
    // If the card has an attribute in the list, add to displayCards
    for (let att of attributeList) {
      if (cards[i].classList.contains(att)){
        displayCards.push(cards[i])
      } else {
        cards[i].style = 'display: none;';
      }
    }
  }
/*
  for (let i = 0; i < displayCards.length; i++){
    //displays all cards if attribute list is empty
    if (roleList.length == 0 & attributeList.length == 0){
      cards[i].style = 'display: grid;';
      continue;
    }
    // If the card has an attribute in the list, add to displayCards
    for (let role of roleList) {
      if (!displayCards[i].classList.contains(role)){
        if (displayCards[i].classList.contains(roleList[-1])){
          displayCards.push(cards[i])
        }
      } else {
        cards[i].style = 'display: none;';
      }
    }
  }*/
  /*
  if (exclusivity){
    for (let i = 0; i < displayCards.length; i++){
      if (roleList.length == 0){
        displayCards[i].style = 'display: grid;';
        continue;
      }
      for (let role of roleList) {
        if (!displayCards[i].classList.contains(role)){
          displayCards.splice(i, 1);
          console.log(displayCards);
          console.log('removed')
        } else {
          continue;
        }
      }
    }
  }
  */
  
  for (let i = 0; i <displayCards.length; i++){
    displayCards[i].style = 'display: grid;';
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