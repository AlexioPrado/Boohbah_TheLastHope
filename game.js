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
const click = new Audio('audio/ui/minecraft_click.mp3');
click.volume = 0.2;

/*TEMPORARY*/
localStorage.enemies = 'sixSeven';

//Setting Audio
for (let enemy in enemyGroup){
    if (localStorage.enemies == enemy){
        background_audio = new Audio(enemyGroup[enemy]);
    }
}
//Looping music
document.addEventListener('mouseover', (event) => {
    background_audio.loop = true;
    background_audio.volume = 0.05;
    background_audio.play();
});
//Starting/pausing music when in/out of tab
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      background_audio.pause();
    } else {
      background_audio.play()
    }
});

//Overlays
const endGameOverlay = document.getElementById('endGameOverlay');
const endRoundOverlay = document.getElementById('endRoundOverlay');
const leaveGameOverlay = document.getElementById('leaveGameOverlay');
const diceOverlay = document.getElementById('diceOverlay');
const moveHistoryOverlay = document.getElementById('moveHistoryOverlay');
const cardDescriptionOverlay = document.getElementById('cardDescriptionOverlay');
const actionSelectionOverlay = document.getElementById('actionSelectionOverlay');
const playerTurnOverlay = document.getElementById('playerTurnOverlay');
const gameStartOverlay = document.getElementById('gameStartOverlay');

/*Interactable Elements------------------------------------------------------------------------------------------------------------*/
//Top Section Buttons
let exitButton = document.getElementById('exit');
let infoButton = document.getElementById('info');
let moveHistoryButton = document.getElementById('history');
//Mid Section Buttons
let endRoundButton = document.getElementById('endRound');

//Card Area
let leftSwitch = document.getElementById('switchLeft');
let rightSwitch = document.getElementById('switchRight');
//Player Cards
let leftCard = document.getElementById('Left');
let middleCard = document.getElementById('Middle');
let rightCard = document.getElementById('Right');
//Enemy Cards
let enemyOne = document.getElementById('one');
let enemyTwo = document.getElementById('two');
let enemyThree = document.getElementById('three');
let enemyFour = document.getElementById('four');
let enemyFive = document.getElementById('five');

//ActionArea
let switchButton = document.getElementById('switch');
let normalButton = document.getElementById('normalAttack');
let skillButton = document.getElementById('skill');
let ultimateButton = document.getElementById('ultimate');

//DiceArea
let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');
let dice3 = document.getElementById('dice3');
let dice4 = document.getElementById('dice4');
let dice5 = document.getElementById('dice5');
let dice6 = document.getElementById('dice6');
let dice7 = document.getElementById('dice7');
let dice8 = document.getElementById('dice8');
let dice9 = document.getElementById('dice9');
let dice10 = document.getElementById('dice10');
let dice11 = document.getElementById('dice11');
let dice12 = document.getElementById('dice12');
let dice13 = document.getElementById('dice13');

//OverlayButtons
//EndGameOverlay
let resetButton = document.getElementById('replay');
let contButton = document.getElementById('continue');
//LeaveGameOverlay
let leaveButton = document.getElementById('leave');
let backButton = document.getElementById('back');
//DiceOverlay + Dice
let rerollButton = document.getElementById('reroll');
let confirmButton = document.getElementById('confirm');
let diceOne = document.getElementById('diceOne');
let diceTwo = document.getElementById('diceTwo');
let diceThree = document.getElementById('diceThree');
let diceFour = document.getElementById('diceFour');
let diceFive = document.getElementById('diceFive');
let diceSix = document.getElementById('diceSix');
let diceSeven = document.getElementById('diceSeven');
let diceEight = document.getElementById('diceEight');
let diceNine = document.getElementById('diceNine');
let diceTen = document.getElementById('diceTen');
let diceEleven = document.getElementById('diceEleven');
let diceTwelve = document.getElementById('diceTwelve');
let diceThirteen = document.getElementById('diceThirteen');
//EndRoundOverlay
let endRoundConfirmButton = document.getElementById('endRoundButton');
let cancelEndRoundButton = document.getElementById('dontEndRoundButton')

/*Elements that update------------------------------------------------------------------------------------------------------------*/
//Dice Area
let diceArea = document.getElementById('diceArea');
//Action Area
let actionArea = document.getElementById('actionButtons');
let actionSwitchTitle = document.getElementById('switchText');
let actionNormalTitle = document.getElementById('normalText');
let actionSkillTitle = document.getElementById('skillText');
let actionUltimateTitle = document.getElementById('ultimateText');
let actionswitchCost = document.getElementById('switchCost');
let actionNormalCost = document.getElementById('normalCost');
let actionSkillCost = document.getElementById('skillCost');
let actionUltimateCost = document.getElementById('ultimateCost');

//Summmon Area
let enemySummon1 = document.getElementById('enemySummon1');
let enemySummon2 = document.getElementById('enemySummon2');
let enemySummon3 = document.getElementById('enemySummon3');
let enemySummon4 = document.getElementById('enemySummon4');
let playerSummon1 = document.getElementById('playerSummon1');
let playerSummon2 = document.getElementById('playerSummon2');
let playerSummon3 = document.getElementById('playerSummon3');
let playerSummon4 = document.getElementById('playerSummon4');

//player/enemy Di# Tracker
let playerDiceNum = document.getElementById('playerDiNum');
let enemyDiceNum = document.getElementById('enemyDiNum');

/* Testing Action Selection Overlay */
//switchButton.onclick = function() {
//    actionSelectionOverlay.style = 'display: flex;';
//    actionArea.style = 'z-index: 3';
//    leftSwitch.style = 'z-index: 3'; 
//    rightSwitch.style = 'z-index: 3';
//    diceArea.style = 'z-index: 3';
//    playerCards.style = 'z-index: 3';
//    actionSelectionOverlay.onclick = function() {
//        actionArea.style = 'z-index: 1';
//        leftSwitch.style = 'z-index: 1'; 
//        rightSwitch.style = 'z-index: 1';
//        diceArea.style = 'z-index: 1';
//        actionSelectionOverlay.style = 'display: none';
//    }
//}

//playerTurnOverlay.classList.add('active');
//setTimeout(function() {
//    playerTurnOverlay.classList.remove('active');
//},2250)


//Exit Button Interaction
exitButton.onclick = function (){
    click.play();
    leaveGameOverlay.style = 'display: flex;';
    //Canceling and leaving Game
    leaveButton.onclick = function(){
        window.location.href = ("https://alexioprado.github.io/Boohbah_TheLastHope/gameSelection.html");
    }
    backButton.onclick = function(){
        click.play();
        leaveGameOverlay.style = 'display: none;';
    }
}
//Info Button Interaction
infoButton.onclick = function (){window.open('https://alexioprado.github.io/Boohbah_TheLastHope/guidebook.html');}
//Move History Interaction
moveHistoryButton.onclick = function() {
    click.play();
    moveHistoryOverlay.style = 'display: flex;';
    moveHistoryOverlay.onclick = function() {
        click.play();
        moveHistoryOverlay.style = 'display: none';
    }
}
//End Game Interaction
resetButton.onclick = function() {location.reload();}
contButton.onclick = function() {window.location.href = ("https://alexioprado.github.io/Boohbah_TheLastHope/gameSelection.html");}
//End Round Interaction
endRoundButton.onclick = function(){
    endRoundOverlay.style = 'display: flex';
    cancelEndRoundButton.onclick = function() {endRoundOverlay.style = 'display: none';}
    endRoundConfirmButton.onclick = function() {
        // END ROUND INTERACTION
    }
}
//Card Description Interaction
cardDescriptionOverlay.onclick = function() {cardDescriptionOverlay.style = 'display: none';}


//Start of GAME
console.log(localStorage.enemies);
console.log(localStorage.partyMembers);

/* Game Sequence
 * 1. Game Starting...
 * 2. Roll Phase
 * 3. Player Turn Overlay
 * 4. Select Action/Switch
 *  4a. Switch
 *  4b. normal
 *  4c. skill
 *  4d. ultimate
 *  4e. End Round
 * 5. Action Selection Overlay
 *  5a. If not switch indicate Action dmg/healing 
 *  5b. If End Round, open End Round Overlay
 *   5ba. Select end/cancel
 *     5baa. End. End Round for player
 *     5bab. Cancel, close End ROund Overlay
 *  5c. Select Dice in which to use. 
 *  5d. If Switch, select arrow to indicate direction
 *   5da. Change Img, health, and active character action names + cost
 *   5db. Internally, if any, activate character kits based on actions including switch.
 *  5e. Reselecting an action to confirm without enough dice or dice selected will not initiate 
 * 6. Confirm action
 *  6a. If Switch end turn
 *  6b. If action, calculate action interactions then end turn
 *   6ba. Activate, if any, character kits that involve the selected action
 *    6baa. increase dmg
 *    6bab. Summon Dmg/Healing
 *    6bac. Character kit increasing personal kit "stacks"
 *    6bad. Character kit enhancing energy generation
 *   6bb. Deal dmg (Which enemies will be affected? Oneself or Enemy?)
 *   6bc. Increase dmg (What dmg is increased? Who will be affected?)
 *   6bd. Reduce dmg (Who will be affected?)
 *   6be. Create shield 
 *   6bf. Create Summon (Usage per round? Round duration? Image?)
 *   6bg. HP Fluctuation (Kit based, Healing Based)
 * 7. Calculate attribute effects
 *  7a. If given a new attribute effect, change effect stack on the enemy
 *  7b. If attribute effect activates
 *   7ba. Coder: Stun the enemy (Will effect enemy actions)
 *   7bb. Biotech: Summon poison
 *   7bc. Cyber: Summon Firewall
 * 8. Check if enemy has ended their turn
 *  8a. Enemy has end turn, return to step 3
 *  8b. If not, Enemy Turn Overlay
 * 9. ENEMY TURN (SEE SEQUENCE BELOW FOR MORE INFORMATION)
 * 10. If enemy attacks
 *  10a. activate character kits involving hp reduction to party members
 *  10b. firewall dmg and dmg reduction if present
 *  10c. if active character dies, player is forced to switch characters
 * 11. If player has not end turn, return to step 3.
 * 12. END ROUND PHASE Overlay (Use playerturnOverlay)
 * 13. Player Summons goes first based on list. Activate each of their interactions
 *  13a. Healing (Who will get the healing)
 *  13b. Dmg 
 * 14. Enemy Summons
 * 15. Preparing for next round.
 *  15a. reset summon usages
 *  15b. change round counter
 *  15c. reduce round duration for summons
 *   15ca. If reduced to 0, remove from summon area
 *  15d. reduce status effects of characters
 * 16. Return to step 2
 * 17. Display Player/Enemy Turn depending whoever ended round first
 */

/* ENEMY SEQUENCE
 * 1. generate move sequence for each enemy
    1a. Which action is more favored? normal or skill
    1b. Based on energy requirement, set ultimate move in move sequence every index based on energy
    1c. If support or tank, set switch move after prefered action
 * 2. As active character, select move based on move sequence
 * 3. Check if they have enough dice for the move
 * 3. If not, move to next move sequence
 * 4. if action deals dmg, activate character kits and enemy kits
 * 5. player turn
 */

gameStartOverlay.style = 'display: none';
















































/* Card Description Overlay System */

/* Enemy Cards */
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
                  'UL': ['Friday Puzzles', 'N', '3', '3', '<p>Reduce dmg taken by 2. (3 rounds)</p>']};
const mcCuen = {'imgURL': 'cardImages/enemyImages/russMcCuen.png',
                  'Name': 'Mr. McCuen',
                  'HP': '65',
                  'Attribute': 'Teacher', 
                  'Roles': ['Attack', 'Tank'], 
                  'attributeStacks': ['14', '14', '20'],
                  'NA': ['Catharcist Friday', 'A', '2', '<p>Deal 2 dmg to all enemies.</p>'],
                  'SK': ['Devil\'s Advocate', 'S', '5', '<p>Mr. McCuen becomes invulnerable during the round. Deal dmg at the end of the round based on 2/3 of dmg taken during the round.<br>Invulnerability is removed when attribute effects are triggered.</p>'],
                  'UL': ['Plausinle Deniability', 'N', '4', '5', '<p>Heal 2 HP at the end of the round. (3 rounds)</p>']};
const gardner = {'imgURL': 'cardImages/enemyImages/ethanGardner.png',
                  'Name': 'Mr. Gardner',
                  'HP': '60',
                  'Attribute': 'Teacher', 
                  'Roles': ['Attack', 'Support'], 
                  'attributeStacks': ['14', '18', '18'],
                  'NA': ['Undecided', 'S', '3', '<p>Deal 4 dmg to the enemy.</p>'],
                  'SK': ['Undecided', 'N', '3', '<p>Take 3 participation points from the enemy and gain 2 participation points.</p>'],
                  'UL': ['Undecided', 'N', '5', '6', '<p>Increase <u>Take Notes</u> by 3 dmg and gain 1 participation point when using Take Notes. (Twice per round, 2 rounds)<br>At the end of the round, heal by 3 HP. (2 rounds)</p>']};
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
                  'SK': ['Camera Click', 'A', '3', '<p>Deal 3 dmg to all enemies.<br>Take a snapshot of the battefield and create a Photo shield with 8 strength to the active character. If attacked with the Photo shield present, turn on flash and deal 2 dmg to the enemy.</p>'],
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

/* Player Cards */
const adamM = {'imgURL': 'cardImages/adamMitchell.png',
                  'Name': 'Adam Mitchell',
                  'HP': '40',
                  'Attribute': 'Biotech', 
                  'Roles': ['Tank'],
                  'attributeStacks': ['N', 'N', 'N'], 
                  'NA': ['Undecided', 'A', '2', '1', '<p>Deal 1 dmg to all enemies.</p>'],
                  'SK': ['Undecided', 'N', '3', '0', '<p>Increase the party\'s Base HP by 5. (3 rounds)</p>'],
                  'UL': ['Undecided', 'N', '3', '0', '2', '<p>Create a shield with strength based on the character\'s HP difference. with the most difference from thier current and Base HP. Max 10 strength</p>']};
const addisonB = {'imgURL': 'cardImages/addisonBrooks.png',
                  'Name': 'Addison Brooks',
                  'HP': '30',
                  'Attribute': 'Biotech', 
                  'Roles': ['Support'], 
                  'attributeStacks': ['N', 'N', 'N'],
                  'NA': ['Undecided', 'A', '2', '3', '<p>Deal 1 dmg to all enemies.</p>'],
                  'SK': ['Explosive Tactics', 'D', '4', '1', '<p>Summon the Chlorine Vile.<br>When the active character takes an action, gain 1 potassium stack.<br><u>Chlorine Vile:</u> Deal 2 dmg at the end of the round. (3 rounds)<br> If present, Potassium stacks will be consumed and increase <u>Chlorine Vile</u> dmg by 1. </p>'],
                  'UL': ['Placebo Medication?', 'A', '3', '2', '2', '<p>Deal 2 dmg to all enemies.<br>Summon the <u>Chlorine Vile</u>. If already present, refresh duration. When consuming potassium stacks, heal the party by 1 HP.</p>']};
const aftonP = {'imgURL': 'cardImages/aftonPate.png',
                'Name': 'Afton Pate',
                'HP': '45',
                'Attribute': 'Coder', 
                'Roles': ['Tank', 'Support'], 
                'attributeStacks': ['N', 'N', 'N'],
                'NA': ['Undecided', 'S', '2', '1', '<p>Deal 2 dmg to the enemy.</p>'],
                'SK': ['Undecided', 'N', '3', '0', '<p>Place a shield onto the active character with strength based on the difference between Afton\’s Base HP and the character with the closest Base HP to Afton\’s. Max 10 strength.</p>'],
                'UL': ['Undecided', 'S', '3', '1', '2','<p>Deal 3 dmg to the enemy.<br>Gain another reroll during the roll phase. (3 rounds)</p>']};
const alexAK = {'imgURL': 'cardImages/alexKurcan.png',
                'Name': 'Alex Arias-Kurcan',
                'HP': '30',
                'Attribute': 'Coder', 
                'Roles': ['Attack', 'Support'], 
                'attributeStacks': ['N', 'N', 'N'],
                'NA': ['Undecided', 'S', '2', '2', '<p>Deal 2 dmg to the enemy.</p>'],
                'SK': ['Undecided', 'D', '3', '1', '<p>Deal 2 dmg to the enemy and summon Sparring Partner.<br><u>Sparring Partner</u>: Deals 3 dmg at the end of the round. (3 rounds)</p>'],
                'UL': ['Undecided', 'D', '3', '1', '2', '<p>Summon <u>Sparring Partner</u>. If already present, refresh duration.<br>When an action occurs, Sparring Partner will deal 2 dmg to the enemy. (3 rounds)</p>']};
const angelC = {'imgURL': 'cardImages/angelCarmichael.png',
                'Name': 'Angel Carmichael',
                'HP': '35',
                'Attribute': 'Coder', 
                'Roles': ['Tank', 'Attack'], 
                'attributeStacks': ['N', 'N', 'N'],
                'NA': ['Undecided', 'S', '1', '1', '<p>Deal 1 dmg to the enemy.</p>'],
                'SK': ['Undecided', 'S', '3', '1', '<p>Place a shield with 7 strength to the active character.<br>When broken, deal 4 dmg.</p>'],
                'UL': ['Undecided', 'A', '3', '2', '3', '<p>If shield is present, break the shield and deal 3 piercing dmg to characters adjacent to the active enemy.<br>If shield is not present, deal 4 dmg to all characters.</p>']};
const beckketS = {'imgURL': 'cardImages/beckketSummers.png',
                  'Name': 'Beckket Summers',
                  'HP': '25',
                  'Attribute': 'Cyber', 
                  'Roles': ['Attack'], 
                  'attributeStacks': ['N', 'N', 'N'],
                  'NA': ['Try And Catch Me', 'S', '2', '1', '<p>Deal 3 dmg to the enemy.</p>'],
                  'SK': ['Blazin Doughnuts', 'D', '3', '2', '<p>Deal 2 dmg to the enemy and summon a Car.<br><u>Car:</u> Deal 4 dmg to all enemies at the end of the round. If the firewall is present, dmg increases by 4. (4 rounds)</p>'],
                  'UL': ['Rev It Up', 'S', '3', '3', '3', '<p>Deal 5 dmg to the enemy.<br>If a <u>Car</u> is present, refresh its duration. Increase the max amount of cars allowed to 2 and summon a <u>Car</u>.</p>']};
const biancaB = {'imgURL': 'cardImages/evanYango.png',
                 'Name':'Bianca Baccay',
                 'HP': '40',
                 'Attribute': 'Coder', 
                 'Roles': ['Attack'], 
                 'attributeStacks': ['N', 'N', 'N'],
                 'NA': ['Overwhelm The Enemy', 'A', '3', '2', '<p>Deal 1 dmg to all enemies.<br>If health is less than 20, heal by 10 HP.</p>'],
                 'SK': ['Friendly Fire', 'N', '3', '0', '<p>Decrease Bianca\'s HP by 4.<br>Every 4 HP away from Base HP increases <u>Overwhelm The Enemy</u> dmg by 2.</p>'],
                 'UL': ['Crash Out', 'S', '4', '1', '3', '<p>Deal 5 dmg to the enemy.<br>Decrease HP by 10. If HP is decreased below 0, set HP to 1.<br>The next two incoming attacks will not deal dmg.</p>']};
const birukY = {'imgURL': 'cardImages/birukYidnekachew.png',
                'Name': 'Biruk Yidnekachew',
                'HP': '35',
                'Attribute': 'Coder', 
                'Roles': ['Support'], 
                'attributeStacks': ['N', 'N', 'N'],
                'NA': ['For The People', 'A', '2', '1', '<p>Deal 1 dmg to all enemies.</p>'],
                'SK': ['Civic Duty', 'N', '2', '0', '<p>Englighten the party of their civic duty and responsibility.<br>Increase the party\'s DoT Attack Dmg by 3. (3 rounds)</p>'],
                'UL': ['Corruption At Its Finest', 'N', '3', '0', '3', '<p>Spread misinformation to reduce rebellion among your people.<br>All attacks are considered DoT attacks.<br>DoT Attack Dmg is further increased by 5 and incoming dmg reduced by 3. (3 rounds)</p>']};
const calebA = {'imgURL': 'cardImages/calebArrick.png',
                'Name': 'Caleb Arrick',
                'HP': '45',
                'Attribute': 'Biotech', 
                'Roles': ['Tank'], 
                'attributeStacks': ['N', 'N', 'N'],
                'NA': ['Undecided', 'S', '1', '1', '<p>Deal 1 dmg to the enemy.</p>'],
                'SK': ['Undecided', 'A', '3', '2', '<p>Deal 2 dmg to all enemies.<br>Place the Turtle shield with 7 strength to the active character.<br>When an action occurs, heal the shield by 1 strength.</p>'],
                'UL': ['Undecided', 'S', '4', '1', '2', '<p>Place the Turtle shield with 7 strength to the active character. If already present, reset strength to 7.<br> When the active character is attacked, reduce dmg by 1 and increase the shield strength by 3.</p>']};
const christopherM = {'imgURL': 'cardImages/christopherMarkham.png',
                      'Name': 'Christopher Markham',
                      'HP': '25',
                      'Attribute': 'Coder', 
                      'Roles': ['Attack'], 
                      'attributeStacks': ['N', 'N', 'N'],
                      'NA': ['Undecided', 'S', '1', '1', '<p>Deal 2 dmg to the enemy.<br>Gain 1 stack.</p>'],
                      'SK': ['Undecided', 'A', '5', '1', '<p>Deal 4 dmg to all enemies.<br>Every stack increases dmg by 1. Max 10 stacks can be used.</p>'],
                      'UL': ['Undecided', 'S', '2', '2', '5', '<p>Deal 5 dmg to the enemy.<br>Gain 5 stacks.</p>']};
const dennisW = {'imgURL': 'cardImages/evanYango.png',
                  'Name': 'Dennis Wright',
                  'HP': '40',
                  'Attribute': 'Cyber', 
                  'Roles': ['Support', 'Tank'], 
                  'attributeStacks': ['N', 'N', 'N'],
                  'NA': ['Undecided', 'S', '2', '1', '<p>Deal 2 dmg to the enemy.</p>'],
                  'SK': ['Defensive Tactics', 'S', '3', '3', '<p>Deal 2 dmg to the enemy and summon a Defender.<br><u>Defender:</u> Reduce incoming dmg by 4 and heal the lowest HP character by 4 at the end of the round. (3 rounds)</p>'],
                  'UL': ['Undecided', 'S', '3', '3', '2', '<p>Deal 4 dmg to the enemy.<br>Heal the party by 5 HP and increase dmg by 4. (4 rounds)</p>']};
const elizabethT = {'imgURL': 'cardImages/elizabethTaiwo.png',
                    'Name': 'Elizabeth Taiwo',
                    'HP': '30',
                    'Attribute': 'Coder', 
                    'Roles': ['Support', 'Attack'], 
                    'attributeStacks': ['N', 'N', 'N'],
                    'NA': ['Undecided', 'S', '2', '1', '<p>Deal 2 dmg to the enemy.</p>'],
                    'SK': ['Undecided', 'S', '3', '1', '<p>Steal 4 HP from the enemy and heal the lowest health character by 3 HP.<br>Save 1 HP to the <u>Health Bank.<u></p>'],
                    'UL': ['Undecided', 'N', '3', '0', '3', '<p>Unleash the Health Bank, healing the party based on HP saved.</p>']};
const evanY = {'imgURL': 'cardImages/evanYango.png',
               'Name': 'Evan Yango',
               'HP': '40',
               'Attribute': 'Coder', 
               'Roles': ['Attack', 'Support'], 
               'attributeStacks': ['N', 'N', 'N'],
               'NA': ['Undecided', 'S', '2', '1', '<p>Deal 2 dmg to the enemy.</p>'],
               'SK': ['Undecided', 'A', '3', '2', '<p>Deal 4 dmg to all enemies.<br>If enemies are stunned, deal twice as much dmg.</p>'],
               'UL': ['Undecided', 'S', '3', '2', '3', '<p>Deal 5 dmg to the enemy.<br>If a character in the party loses or gains HP, increase the next Skill dmg by 2. (3 rounds)</p>']};
const evelynM = {'imgURL': 'cardImages/evelynMeier.png',
                 'Name': 'Evelyn Meier',
                 'HP': '50',
                 'Attribute': 'Cyber', 
                 'Roles': ['Tank'], 
                 'attributeStacks': ['N', 'N', 'N'],
                 'NA': ['Undecided', 'S', '2', '1', '<p>Deal 2 dmg to the enemy.</p>'],
                 'SK': ['Undecided', 'N', '3', '0', '<p>Dmg taken by the party is reduced by half. (3 rounds)</p>'],
                 'UL': ['Undecided', 'A', '2', '2', '2', '<p>Deal 2 dmg to all enemies.<br>Ultimates do not require energy during this round.</p>']};
const karimRA = {'imgURL': 'cardImages/evanYango.png',
                  'Name': 'Karim Rivera-Apolinar',
                  'HP': '35',
                  'Attribute': 'Coder', 
                  'Roles': ['Attack'], 
                  'attributeStacks': ['N', 'N', 'N'],
                  'NA': ['Undecided', 'S', '2', '2', '<p>Deal 3 dmg to the enemy.</p>'],
                  'SK': ['Undecided', 'A', '3', '1', '<p>Deal 2 dmg to all enemies.</p>'],
                  'UL': ['Undecided', 'A', '4', '2', '2', '<p>Deal 3 dmg to all enemies.<br>When Karim is the active character, gain an extra action. (5 rounds)<br>When Karim uses his Normal Attack or Skill, their respective dmg is increased by 1.</p>']};
const katarinaR = {'imgURL': 'cardImages/evanYango.png',
                   'Name': 'Katarina Russo',
                   'HP': '30',
                   'Attribute': 'Cyber', 
                   'Roles': ['Support'], 
                   'attributeStacks': ['N', 'N', 'N'],
                   'NA': ['Undecided', 'S', '1', '1', '<p>Deal 1 dmg to the enemy.</p>'],
                   'SK': ['Undecided', 'D', '4', '1', '<p>Deal 3 dmg to the enemy and summon Fiesty Kat.<br><u>Fiesty Kat:</u> Heals 2 HP to the active character when they take an action and deals 2 dmg at the end of the round. (Thrice per round, 3 rounds)</p>'],
                   'UL': ['Undecided', 'D', '3', '2', '2', '<p>Deal 4 dmg to the enemy.<br>Summon <u>Fiesty Kat</u>. If already present, refresh duration.<br>Healing caused by <u>Fiesty kat</u> is increased by 2 HP.</p>']};
const keshavT = {'imgURL': 'cardImages/keshavTekalur.png',
                 'Name': 'Keshav Tekalur',
                 'HP': '25',
                 'Attribute': 'Biotech', 
                 'Roles': ['Attack'], 
                 'attributeStacks': ['N', 'N', 'N'],
                 'NA': ['Undecided', 'S', '2', '1', '<p>Deal 3 dmg to the enemy.<br>If the <u>Great Sword</u> is present, gain 1 sharpness stack.</p>'],
                 'SK': ['Undecided', 'A', '3', '2', '<p>Deal 2 dmg to all enemies.<br>If skill was used twice during the round, deal an additonal 2 dmg to all enemies.<br>If the <u>Great Sword</u> is present, gain 2 sharpness stacks.</p>'],
                 'UL': ['Undecided', 'S', '4', '1', '3', '<p>Summon the Great Sword.<br><u>Great Sword:</u> Deals 10 dmg to all enemies at the end of the round. Each sharpness stack increases dmg by 3.</p>']};
const khaniL = {'imgURL': 'cardImages/khaniLyan.png',
                'Name': 'Khani Lyan',
                'HP': '40',
                'Attribute': 'Coder', 
                'Roles': ['Support'], 
                'attributeStacks': ['N', 'N', 'N'],
                'NA': ['Undecided', 'S', '2', '1', '<p>Deal 2 dmg to the enemy.</p>'],
                'SK': ['Undecided', 'S', '3', '2', '<p>Deal 3 dmg to the enemy.<br>Heal the active character by 3 HP when a DoT Attack occurs. (Twice per round, 3 rounds)</p>'],
                'UL': ['Undecided', 'A', '3', '1', '2', '<p>Deal 2 dmg to all enemies and heal the party by 5 HP.</p>']};
const mandiN = {'imgURL': 'cardImages/mandiNguyen.png',
                'Name': 'Mandi Nguyen',
                'HP': '30',
                'Attribute': 'Cyber', 
                'Roles': ['Support'], 
                'attributeStacks': ['N', 'N', 'N'],
                'NA': ['Undecided', 'S', '1', '1', '<p>Deal 1 dmg to the enemy.</p>'],
                'SK': ['Undecided', 'S', '3', '1', '<p>Deal 2 dmg to the enemy.<br>Increase the active character\'s Skill Dmg by 4 and reduce Skill participation point cost by 1. (3 rounds)</p>'],
                'UL': ['Undecided', 'N', '2', '0', '4', '<p>Gain 3 extra dice during roll phase. (3 rounds)</p>']};
const marcusC = {'imgURL': 'cardImages/marcusCeradini.png',
                 'Name': 'Marcus Ceradini',
                 'HP': '40',
                 'Attribute': 'Coder', 
                 'Roles': ['Tank', 'Attack'], 
                 'attributeStacks': ['N', 'N', 'N'],
                 'NA': ['Undecided', 'S', '1', '1', '<p>Deal 1 dmg to the enemy.</p>'],
                 'SK': ['Undecided', 'S', '3', '1', '<p>Deal 4 dmg to the enemy.<br>Place the Iron shield with 6 strength to the active character.<br>When the <u>Iron shield</u> breaks, deal 2 dmg to all enemies.</p>'],
                 'UL': ['Undecided', 'A', '3', '2', '0', '<p>Deal 2 dmg to all enemies.<br>Place the <u>Iron Shield</u> to the active character. If already present, reset strength to 6.<br>If an action occurs, deal 1 dmg to all enemies. (Thrice per round)</p>']};
const marcusP = {'imgURL': 'cardImages/marcusPrado.png',
                 'Name': 'Marcus Alexio Prado',
                 'HP': '25',
                 'Attribute': 'Coder', 
                 'Roles': ['Support'], 
                 'attributeStacks': ['N', 'N', 'N'],
                 'NA': ['Undecided', 'S', '1', '1', '<p>Deal 1 dmg to the enemy.</p>'],
                 'SK': ['Undecided', 'S', '3', '3', '<p>Deal 2 dmg to the enemy.<br>Increase the party\'s dmg by 3. Dmg caused during stun is further increased by 4. (3 rounds)</p>'],
                 'UL': ['Undecided', 'S', '3', '4', '2', '<p>Deal 3 dmg to the enemy.<br>Increase the next stun duration by 2 rounds.</p>']};
const noahS = {'imgURL': 'cardImages/noahSanders.png',
               'Name': 'Noah Sanders',
               'HP': '35',
               'Attribute': 'Cyber', 
               'Roles': ['Tank'], 
               'attributeStacks': ['N', 'N', 'N'],
               'NA': ['Undecided', 'S', '2', '2', '<p>Deal 2 dmg to the enemy.</p>'],
               'SK': ['Undecided', 'N', '3', '2', '<p>Create a shield with strength of 14.<br>Reduce dmg taken by 3 when shield strength is an odd number.<br>Increase the party\'s dmg by 3 when shield strength is an even number.</p>'],
               'UL': ['Undecided', 'S', '2', '1', '3', '<p>Deal 2 dmg to the enemy.<br>Absorb all dmg take. (2 rounds)</p>']};
const oliviaD = {'imgURL': 'cardImages/oliviaDwyer.png',
                 'Name': 'Olivia Dwyer',
                 'HP': '30',
                 'Attribute': 'Biotech', 
                 'Roles': ['Attack', 'Support'], 
                 'attributeStacks': ['N', 'N', 'N'],
                 'NA': ['Undecided', 'S', '2', '1', '<p>Deal 2 dmg to the enemy.</p>'],
                 'SK': ['Undecided', 'D', '3', '1', '<p>Summon the Clone.<br><u>Clone:</u> Deals 2 dmg at the end of the round. When a character uses a Normal Attack or Skill, deal 3 dmg to the enemy and 2 piercing dmg to adjacent enemies. (Twice per round, 2 rounds)</p>'],
                 'UL': ['Undecided', 'N', '4', '0', '3', '<p>Summon the <u>Clone</u>. If already present, reset duration.<br>Heal the party by 1 HP when a character uses a Normal Attack or Skill. (3 rounds)</p>']};
const parthT = {'imgURL': 'cardImages/parthThite.png',
                'Name': 'Parth Thite',
                'HP': '35',
                'Attribute': 'Coder', 
                'Roles': ['Tank', 'Attack'], 
                'attributeStacks': ['N', 'N', 'N'],
                'NA': ['Undecided', 'S', '2', '1', '<p>Deal 2 piercing dmg to the enemy.</p>'],
                'SK': ['Undecided', 'S', '3', '1', '<p>Deal 2 dmg to all enemies.<br> Place the Auric shield with 6 strength to the active character.</p>'],
                'UL': ['Undecided', 'S', '4', '1', '2', '<p>Deal 3 dmg to the enemy.<br>Place the <u>Auric shield</u> to the active character. If already present, reset strength to 6.<br>Parth\'s Normal Attack dmg is increased based on the strength of <u>Auric Shield</u>.<br>Any action taken by a character increases <u>Auric Shield\'s</u> strength by 1.</p>']};
const rahulM = {'imgURL': 'cardImages/evanYango.png',
                'Name': 'Rahul Murgai',
                'HP': '35',
                'Attribute': 'Coder', 
                'Roles': ['Tank', 'Support'], 
                'attributeStacks': ['N', 'N', 'N'],
                'NA': ['Undecided', 'S', '1', '1', '<p>Deal 1 dmg to the enemy.</p>'],
                'SK': ['Undecided', 'S', '3', '1', '<p>Deal 2 dmg to the enemy.<br> Reduce dmg taken by enemies by 2. (2 rounds)<br>When the active character is attacked, create the Counter shield with strength based on half of the attack dmg. Max 7 strength. Subsequent attacks will increase the <u>Counter shield\'s</u> strength by 1 HP.</p>'],
                'UL': ['Undecided', 'N', '4', '0', '2', '<p>Heal the party by 4 HP. If the <u>Counter shield</u> is present, heal an additional 2 HP.</p>']};
const saraR = {'imgURL': 'cardImages/saraReinert.png',
               'Name': 'Sara Reinert',
               'HP': '35',
               'Attribute': 'Biotech', 
               'Roles': ['Support', 'Attack'],
               'attributeStacks': ['N', 'N', 'N'], 
               'NA': ['Egg Throw', 'S', '1', '1', '<p>Deal 1 dmg to the enemy.</p>'],
               'SK': ['Feather Falling', 'N', '2', '0', '<p>Place a feather onto the active character.<br><u>Feather:</u> When attacked, heal by 2 Hp. (Thrice per round, 2 rounds)</p>'],
               'UL': ['The Hooded Hero Strikes Again', 'D', '3', '2', '3', '<p>Deal 2 dmg to the enemy and summon the Turkey Catapult.<br><u>Turkey Catapult:</u> Deals 3 dmg at the end of the round. (3 rounds)</p>']};
const shamN = {'imgURL': 'cardImages/shamNemer.png',
               'Name': 'Sham Nemer',
               'HP': '40',
               'Attribute': 'Coder', 
               'Roles': ['Tank'], 
               'attributeStacks': ['N', 'N', 'N'],
               'NA': ['Not Worth My Time', 'S', '2', '1', '<p>Deal 2 dmg to the enemy.</p>'],
               'SK': ['"You alright ladies?"', 'S', '2', '2', '<p>Deal 3 dmg to the enemy.<br>When Sham is on standby, reduce dmg taken to the active character by 3. If Sham has atleast 20 HP, deal 2 dmg to herself. (Twice per round, 2 rounds)</p>'],
               'UL': ['Papichulo In The House!', 'N', '3', '0', '3', '<p>Place the Stunning Shield to the active character with strength based on Sham\'s HP.<br>For every 4 HP away from her Base HP, increase <u>Stunning Shield</u> strength by 3.</p>']};
const sophiaS = {'imgURL': 'cardImages/sophiaSwart.png',
                 'Name': 'Sophia Swart',
                 'HP': '40',
                 'Attribute': 'Biotech', 
                 'Roles': ['Tank', 'Support'], 
                 'attributeStacks': ['N', 'N', 'N'],
                 'NA': ['Undecided', 'S', '2', '1', '<p>Deal 2 dmg to the enemy.</p>'],
                 'SK': ['Undecided', 'A', '3', '2', '<p>Deal 3 dmg to all enemies.<br>Create the Dual shield with strength of 7. The active character\'s Normal Attack and Skill dmg is increased based on the strength of the shield.</p>'],
                 'UL': ['Undecided', 'A', '3', '3', '2', '<p>Deal 1 dmg to all enemies and heal the party by 2 HP.<br>When an action occurs, heal the Dual shield by 2 HP. Dual shield strength may not exceed over 9. (3 rounds)</p>']};
const tanishkaP = {'imgURL': 'cardImages/tanishkaPeddy.png',
                   'Name': 'Tanishka Peddy',
                   'HP': '25',
                   'Attribute': 'Biotech', 
                   'Roles': ['Attack'], 
                   'attributeStacks': ['N', 'N', 'N'],
                   'NA': ['Step Back', 'S', '1', '1', '<p>Deal 2 dmg to the enemy.</p>'],
                   'SK': ['I\'m Peddy Like That', 'S', '3', '2', '<p>Throw a tennies ball and deal 3 dmg to the enemy.<br>Deal 5 dmg to the enemy at the end of the round.</p>'],
                   'UL': ['I\'m #1 For A Reason', 'S', '4', '3', '5', '<p>Deal 12 dmg to the enemy.</p>']};
const samuelT = {'imgURL': 'cardImages/samuelTaiwo.png',
                  'Name': 'Samuel Taiwo',
                  'HP': '35',
                  'Attribute': 'Cyber', 
                  'Roles': ['Attack'], 
                  'attributeStacks': ['N', 'N', 'N'],
                  'NA': ['Undecided', 'S', '3', '2', '<p>Deal 2 dmg to the enemy.</p>'],
                  'SK': ['Undecided', 'S', '4', '1', '<p>Deal 4 dmg to the enemy and apply the buff status onto oneself.<br><u>Buff Status:</u> Increase Normal Attack dmg by 3. (4 usages) Using the buff status decreases HP by 3.<br>For every 1 HP from Base HP to current HP, increase buff status dmg by 1.</p>'],
                  'UL': ['Undecided', 'A', '4', '2', '8', '<p>Deal 2 dmg to all enemies and heal by 15 HP.</p>']};
