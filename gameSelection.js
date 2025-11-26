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
                  'Name': 'Kim Jong Birukin',
                  'HP': '100',
                  'Attribute': 'REDACTED', 
                  'Roles': ['Attack'], 
                  'attributeStacks': ['N', 'N', 'N'],
                  'NA': ['Conflict', 'S', '2', '<p>Deal 5 dmg to the enemy.<br>When the <u>Broken Promise shield</u> breaks, reduce base dmg to 3. (2 rounds)</p>'],
                  'SK': ['"First They Came"', 'N', '4', '<p>Enhance <u>Conflict</u> to an AoE attack. Reduce base dmg to 3 dmg. (3 rounds)<br>When the <u>Broken Promise shield</u> breaks, remove enhanced state and reduce base dmg to 2. (2 rounds)</p>'],
                  'UL': ['Dictate The Battlefield', 'N', '4', '7', '<p>All enemies current HP is decreased by half and shields are removed.<br>Place the Broken Promise shield onto oneself with strength 15.<br><u>Broken Promise</u>: When present, dmg is increased by 3. When broken, deal 10 dmg to oneself.</p>']};

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
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');
// resist
// weak
const story = document.getElementById('story');

const game1Content = {'title' : 'Little Critters Amongst The Crowd',
                      'start' : 'Small but mighty, these three-apples-tall critters can slay chimeras like nothing. Mess with them and you\'ll get a beating.',
                      'cards' : [chiikawa, usagi, hachiware],
                      'resist': ['coder','cyber', 'single'],
                      'weak'  : ['biotech', 'aoe', 'dot'],
                      'story' : ''};
const game2Content = {'title' : 'Wolfpack Gone Wild',
                      'start' : '',
                      'cards' : [mcCuen],
                      'resist': ['biotech', 'aoe', 'single'],
                      'weak'  : ['coder','biotech','dot'],
                      'story' : ''};
const game3Content = {'title' : 'Combat Master',
                      'start' : '',
                      'cards' : [keller],
                      'resist': ['biotech', 'aoe'],
                      'weak'  : ['coder', 'cyber', 'single', 'dot'],
                      'story' : ''};
const game4Content = {'title' : 'Wolf In Sheep\'s Clothing',
                      'start' : '',
                      'cards' : [gardner],
                      'resist': ['cyber','biotech', 'aoe'],
                      'weak'  : ['coder','single','dot'],
                      'story' : ''};
const game5Content = {'title' : 'Uncontrollable Psychological Event',
                      'start' : '',
                      'cards' : [sixSeven],
                      'resist': ['coder','aoe'],
                      'weak'  : ['biotech','cyber','dot','single'],
                      'story' : ''};
const game6Content = {'title' : 'Battle Of The Century',
                      'start' : '',
                      'cards' : [humbah, jingbah, zingzingzingbah, zumbah, jumbah],
                      'resist': ['single','dot'],
                      'weak'  : ['aoe'],
                      'story' : ''};
const game7Content = {'title' : 'The True Mastermind',
                      'start' : '',
                      'cards' : [kimJongBirukin],
                      'resist': ['aoe','dot'],
                      'weak'  : ['single'],
                      'story' : ''};

/* WORKS
carddiv.onclick = function(){
  carddiv.children[0].src = 'cardImages/enemyImages/usagi.png';
}

card1.onclick = function(){
  card1.parentElement.id = 'hachiware';
}
*/