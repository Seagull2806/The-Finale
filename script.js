// Canvas setup
let cnv = document.getElementById('myCanvas');
let ctx = cnv.getContext('2d');
cnv.width = 1800;
cnv.height = 900;

// Do not add/remove code from this section:
// ***************************************************
// --- Global Vars
// --- Mouse
let mouseX;
let mouseY;

// --- Images
let bossImg = document.getElementById('bossImg')
let fakeBossImg = document.getElementById('bossMini')



// --- General Values
let frame = 0
let mute = false
let titleTextY = 500

// --- Warning Sign
let epilepsyWarningSignTime = 0
let epilepsyWarningActive = true
let epilepsyWarningTransperency = 0
let epilepsyWarningProceedTransperency = 0
let epilepsyWarningConfirmed = false
let epilepsyWarningFadeDelay = 60

// --- Player Stats
let progress = 400
let bestProgress = 400
let attempt = 1
let totalGrazed = 0
let grazeCooldown = 0
let totalHits = 0
let totalDamageTaken = 0
let totalBulletsShot = 0
let totalBulletsHit = 0

// --- Screen Shake && Game Over Effects

let screenShakeIntensity = 0
let screenShakeX = 0
let screenShakeY = 0
let gameOverCornerPlacement = -200
let gameOverSize = 0
let gameOverTransparency = 0
let gameOverTextEffectTransperency = 0
let gameOverInfoTransperency = 0
let newBestTransperency = 0
let restartCooldown = 0
let restartTransperency = 0
let restartSignPlacement = 0
let restartTransition = 0
let restarting = 0
let restarted = false

// --- Timer

let timerMillisecondsVisual = 0
let timerMilliseconds = 0
let timerMillisecondsHundredths = "0"
let timerMillisecondsTens = "0"
let timerSeconds = 0
let timerSecondsTens = "0"
let timerMinutes = 0
let timerMinutesTens = "0"

// --- Map Values
let controlButtonsMenu = false
let controlButtonsMenuTransperency = 0

let floorX = -5000;
let floorY = 800;
let floorSize = 10000;
let floorPatternX = 0

let platformPhase3SpawnedTime = 0

let platform1X = -10000
let platform1Y = 1000
let platform1Size = 200

let platform1YCalculation = 500

let platform2X = -10000
let platform2Y = 1000
let platform2Size = 200

let platform2YCalculation = 500

let platform3X = -10000
let platform3Y = 1000
let platform3Size = 200

let platform3YCalculation = 450

let platform4X = -10000
let platform4Y = 1000
let platform4Size = 200

let platform4YCalculation = 450

let platform5X = -10000
let platform5Y = 1000
let platform5Size = 200

let platform5YCalculation = 550

let platform6X = -10000
let platform6Y = 1000
let platform6Size = 200

let platform6YCalculation = 550

// --- Player Values
let movingRight = false
let movingLeft = false
let movingUp = false
let movingDown = false

let playerX = 0
let playerY = 775
let playerVelocityX = 25
let playerVelocityY = 0
let playerSize = 25
let canDoubleJump = false
let canDodge = false
let playerDoubleJump = true
let playerOnPlatform = false
let dodgeCooldownMax
let dodgeCooldown = 0
let immunityFrames = 0
let bulletCooldown = 0
let playerAttacked = false

let playerOnPlatform1 = false
let playerOnPlatform2 = false
let playerOnPlatform3 = false
let playerOnPlatform4 = false
let playerOnPlatform5 = false
let playerOnPlatform6 = false

let playerHealth = 100
let playerHealthMax = 100
let playerHealthPreview = 100
let playerHealthDamaged = 0
let playerRegenerationHitDelay = 0
let playerRegenerationDelay = 0
let playerDamageTakenDelay = 0

let doubleJumpEffectX = 0
let doubleJumpEffectY = 0
let doubleJumpEffectTransparency = 0
let doubleJumpEffectSize = 0

let dodgeEffectX = 0
let dodgeEffectY = 0
let dodgeEffectTransparency = 0
let dodgeEffectSize = 0

let playerBulletAttackUp = false
let playerBulletAttackDown = false
let playerBulletAttackLeft = false
let playerBulletAttackRight = false

let playerBullet1X = -1000					// 1
let playerBullet1Y = -1000
let playerBullet1Direction = ""
let playerBullet1Active = false

let playerBullet2X = -1000					// 2
let playerBullet2Y = -1000
let playerBullet2Direction = ""
let playerBullet2Active = false

let playerBullet3X = -1000					// 3
let playerBullet3Y = -1000
let playerBullet3Direction = ""
let playerBullet3Active = false

let playerBullet4X = -1000					// 4
let playerBullet4Y = -1000
let playerBullet4Direction = ""
let playerBullet4Active = false

let playerBullet1HitX = -100
let playerBullet1HitY = -100
let playerBullet2HitX = -100
let playerBullet2HitY = -100
let playerBullet3HitX = -100
let playerBullet3HitY = -100
let playerBullet4HitX = -100
let playerBullet4HitY = -100
let playerBullet1Transperency = 0
let playerBullet2Transperency = 0
let playerBullet3Transperency = 0
let playerBullet4Transperency = 0

// --- Boss Values

let bossHealth = 12000
let bossHealthMax = 12000
let bossHealthPreview = 12000
let bossHealthDamaged = 0

let currentBossHealth = bossHealth

let bossPhase2 = 8000
let bossPhase3 = 5000

let bossX = 1550
let bossY = 600
let bossSize = 200

let bossAttack = 0
let bossWait = 0
let bossRecentAttack = 0
let bossPhase = 1

let bossAttackXBeginingCalculation = 0
let bossAttackYBeginingCalculation = 0

let bossAttack1 = false
let bossAttack1X = 0
let bossAttack1Color = 255
let bossAttack1EffectTransperency = 1
let bossAttack1EffectPillarSize = 0

let bossAttack2 = false
let bossAttack2DirectionMovingLeft = false
let bossAttack2EffectPillarSize = 0

let bossAttack3 = false
let bossAttack3DirectionMovingLeft = false
let bossAttack3XAfterPosition = 0
let bossAttack3XSetAfterPosition = 0

let bossAttack3TopPartY = 0
let bossAttack3TopPartX = 900
let bossAttack3PartYCalculation = 0
let bossAttack3BottomPartY = 0
let bossAttack3BottomPartX = 0
let bossAttack3PartX = 0
let bossAttack3LazerX = 0
let bossAttack3LazerY = 0
let bossAttack3FireSize = 0

let bossAttack4 = false
let bossAttack4XAfterPosition = 0
let bossAttack4DirectionMovingLeft = false
let bossAttack4LazerLeftX = 0
let bossAttack4LazerRightX = 0
let bossAttack4LazerLeftXBeginingCalculation = 0
let bossAttack4LazerRightXBeginingCalculation = 0
let bossAttack4LazerY = 0
let bossAttack4LazeYBeginingCalculation = 0

let bossAttack5 = false
let bossAttack5Row = 0
let bossAttack5RowRecent = 0
let bossAttack5DirectionMovingLeft = false

let bossAttack6 = false
let bossAttack6DirectionMovingLeft = false

let bossAttack7 = false
let bossAttack7SpikeWallLeftX = -100
let bossAttack7SpikeWallLeftY = 0
let bossAttack7SpikeWallRightX = 1900
let bossAttack7SpikeWallRightY = 0
let bossAttack7Completed = false
let bossAttack7HitWall = false

let bossAttack8 = false
let bossAttack8BulletSize = 30
let bossAttack8Bullet1X = -1000
let bossAttack8Bullet1Y = -1000
let bossAttack8Bullet1XBeginingCalculation = 0
let bossAttack8Bullet1YBeginingCalculation = 0
let bossAttack8Bullet2X = -1000
let bossAttack8Bullet2Y = -1000
let bossAttack8Bullet2XBeginingCalculation = 0
let bossAttack8Bullet2YBeginingCalculation = 0
let bossAttack8Bullet3X = -1000
let bossAttack8Bullet3Y = -1000
let bossAttack8Bullet3XBeginingCalculation = 0
let bossAttack8Bullet3YBeginingCalculation = 0

let bossAttack9 = false
let bossAttack9PillarVertical1X = 0
let bossAttack9PillarHorizontal1Y = 0
let bossAttack9PillarDiagonalBottomLeft1X = 0
let bossAttack9PillarDiagonalBottomRight1X = 0

let bossAttack9PillarVertical2X = 0
let bossAttack9PillarHorizontal2Y = 0
let bossAttack9PillarDiagonalBottomLeft2X = 0
let bossAttack9PillarDiagonalBottomRight2X = 0

let bossAttack9PillarVertical3X = 0
let bossAttack9PillarHorizontal3Y = 0
let bossAttack9PillarDiagonalBottomLeft3X = 0
let bossAttack9PillarDiagonalBottomRight3X = 0

let bossAttack9Pillar1Timer = 0
let bossAttack9Pillar2Timer = 0
let bossAttack9Pillar3Timer = 0

let bossAttack9BulletSize = 50

let bossAttack9Pillar1Bullet1X = -10000
let bossAttack9Pillar1Bullet1Y = 0
let bossAttack9Pillar1Bullet2X = -10000
let bossAttack9Pillar1Bullet2Y = 0
let bossAttack9Pillar1Bullet3X = -10000
let bossAttack9Pillar1Bullet3Y = 0
let bossAttack9Pillar1Bullet4X = 10000
let bossAttack9Pillar1Bullet4Y = 0
let bossAttack9Pillar1Bullet5X = 10000
let bossAttack9Pillar1Bullet5Y = 0
let bossAttack9Pillar1Bullet6X = 10000
let bossAttack9Pillar1Bullet6Y = 0
let bossAttack9Pillar1Bullet7X = 10000
let bossAttack9Pillar1Bullet7Y = 0
let bossAttack9Pillar1Bullet8X = -10000
let bossAttack9Pillar1Bullet8Y = 0

let bossAttack9Pillar2Bullet1X = -10000
let bossAttack9Pillar2Bullet1Y = 0
let bossAttack9Pillar2Bullet2X = -10000
let bossAttack9Pillar2Bullet2Y = 0
let bossAttack9Pillar2Bullet3X = -10000
let bossAttack9Pillar2Bullet3Y = 0
let bossAttack9Pillar2Bullet4X = 10000
let bossAttack9Pillar2Bullet4Y = 0
let bossAttack9Pillar2Bullet5X = 10000
let bossAttack9Pillar2Bullet5Y = 0
let bossAttack9Pillar2Bullet6X = 10000
let bossAttack9Pillar2Bullet6Y = 0
let bossAttack9Pillar2Bullet7X = 10000
let bossAttack9Pillar2Bullet7Y = 0
let bossAttack9Pillar2Bullet8X = -10000
let bossAttack9Pillar2Bullet8Y = 0

let bossAttack9Pillar3Bullet1X = -10000
let bossAttack9Pillar3Bullet1Y = 0
let bossAttack9Pillar3Bullet2X = -10000
let bossAttack9Pillar3Bullet2Y = 0
let bossAttack9Pillar3Bullet3X = -10000
let bossAttack9Pillar3Bullet3Y = 0
let bossAttack9Pillar3Bullet4X = 10000
let bossAttack9Pillar3Bullet4Y = 0
let bossAttack9Pillar3Bullet5X = 10000
let bossAttack9Pillar3Bullet5Y = 0
let bossAttack9Pillar3Bullet6X = 10000
let bossAttack9Pillar3Bullet6Y = 0
let bossAttack9Pillar3Bullet7X = 10000
let bossAttack9Pillar3Bullet7Y = 0
let bossAttack9Pillar3Bullet8X = -10000
let bossAttack9Pillar3Bullet8Y = 0

let bossAttack10 = false
let bossAttack10PillarBlock1 = 0
let bossAttack10PillarBlock2 = 0
let bossAttack10PillarBlock3 = 0
let bossAttack10PillarBlock4 = 0
let bossAttack10PillarBlock5 = 0
let bossAttack10PillarBlock6 = 0
let bossAttack10PillarBlock7 = 0
let bossAttack10PillarBlock8 = 0
let bossAttack10PillarBlock9 = 0
let bossAttack10PillarBlock10 = 0
let bossAttack10PillarBlock11 = 0
let bossAttack10PillarBlock12 = 0


let fakeBossDeactivated = true

let fakeBossHealth = 0
let fakeBossTransperency = 0
let fakeBossX = -1000
let fakeBossY = -1000
let fakeBossSize = 100
let fakeBossHit = false
let fakeBossSummonedTime = 0
let fakeBossXBeginingCalculation = 0
let fakeBossXAfterCalculation = 0
let fakeBossYBeginingCalculation = 0
let fakeBossYAfterCalculation = 0
let fakeBossAttackTimer = 0

// Bullets go from left, top left, top, top right, right, bottom right, bottom, bottom left

let fakeBossBullet1X = -10000
let fakeBossBullet1Y = 0
let fakeBossBullet2X = -10000
let fakeBossBullet2Y = 0
let fakeBossBullet3X = -10000
let fakeBossBullet3Y = 0
let fakeBossBullet4X = 10000
let fakeBossBullet4Y = 0
let fakeBossBullet5X = 10000
let fakeBossBullet5Y = 0
let fakeBossBullet6X = 10000
let fakeBossBullet6Y = 0
let fakeBossBullet7X = 10000
let fakeBossBullet7Y = 0
let fakeBossBullet8X = -10000
let fakeBossBullet8Y = 0

let fakeBossBulletSize = 20

//

let bossPassiveAttack1Timer = 0
let bossPassiveAttack1X = 0
let bossPassiveAttack1Y = 560
let bossPassiveChainLength = 120
let bossPassiveIndicationColor = 0
let bossPassiveIndicationTransperency = 0

let bossPasiveLanePhase3 = 0

let bossPassiveAttack2 = false
let bossPassiveAttack2X = 0
let bossPassiveAttackAcceleration = 0

// --- Sounds
let Start = new sound("start")
let Begin = new sound("begin")
let VineBoom = new sound("vineBoom")
let PlayerHitLight = new sound("playerHitLight")
let PlayerHitHeavy = new sound("playerHitHeavy")
let DoubleJump = new sound("doubleJump")
let Dodge = new sound("dodge")
let Hit1 = new sound("hit1")
let Hit2 = new sound("hit2")
let Hit3 = new sound("hit3")
let Hit4 = new sound("hit4")
let Fail = new sound("fail")
let BossTheme = new sound("zero")
let Crash = new sound("crash")
let Moving1 = new sound("moving1")
let Moving2 = new sound("moving2")
let Moving3 = new sound("moving3")
let ChainHit = new sound("chainHit")
let ChainWarning = new sound("chainIncomming")
let FakeAttack = new sound("fakeAttack")
let FakeBossHit = new sound("fakeBossHit")
let FakeDeactivated = new sound("fakeDeactivated")
let LazerA3 = new sound("lazerA3")
let LazerA4 = new sound("lazerA4")
let SmashA7Left = new sound("smashA7Left")
let SmashA7Right = new sound("smashA7Right")
let SmashA7 = new sound("smashA7")
let LazerA8 = new sound("lazerA8")
let LazerA9 = new sound("lazerA9")
let LazerA10P1 = new sound("lazerA10P1")
let LazerA10P2 = new sound("lazerA10P2")
let LazerA10P3 = new sound("lazerA10P3")
let LazerA10P4 = new sound("lazerA10P4")

let lazerA10 = 1
let fadeOutVolume = 1

function sound(src) {
	this.sound = document.getElementById(src)
	this.play = function () {
		this.sound.volume = 1
		this.sound.play()
	}
	this.pause = function () {
		this.sound.pause()
	}
	this.stop = function () {
		this.sound.currentTime = 0
		this.sound.pause()
	}
	this.fadeOut = function () {
		this.sound.volume = (fadeOutVolume)
		fadeOutVolume -= 1 / 60
		if (fadeOutVolume < 0) {
			fadeOutVolume = 0
		}
	}
	this.mute = function () {
		this.sound.volume = 0
	}
	this.unmute = function () {
		this.sound.volume = 1
	}
}

// --- Gradients 
// Background (phase 1)
let grd1 = ctx.createLinearGradient(0, 900, 0, 0);
grd1.addColorStop(0, "rgba(255, 220, 133, 0.75)");
grd1.addColorStop(1, "rgba(255, 234, 181, 0.75)");


// Boss Attack 1 Pillar
let grd2 = ctx.createLinearGradient(0, 800, 0, 0);
grd2.addColorStop(0, "rgba(255, 169, 169, 0.75)");
grd2.addColorStop(1, "rgba(255, 169, 169, 0.25)");

// Boss Attack 2 Pillar (Left)
let grd3 = ctx.createLinearGradient(1800, 0, 0, 0);
grd3.addColorStop(1, "rgba(255, 169, 169, 0.25)");
grd3.addColorStop(0, "rgba(255, 169, 169, 0.75)");

// Boss Attack 2 Pillar (Right)
let grd4 = ctx.createLinearGradient(1800, 0, 0, 0);
grd4.addColorStop(1, "rgba(255, 169, 169, 0.75)");
grd4.addColorStop(0, "rgba(255, 169, 169, 0.25)");

// Background (phase 2)
let grd5 = ctx.createLinearGradient(0, 900, 0, 0);
grd5.addColorStop(0, "rgba(255, 200, 133, 0.75)");
grd5.addColorStop(1, "rgba(255, 211, 181, 0.75)");

// Background (phase 3)
let grd6 = ctx.createLinearGradient(0, 900, 0, 0);
grd6.addColorStop(0, "rgba(255, 180, 133, 0.75)");
grd6.addColorStop(1, "rgba(255, 198, 181, 0.75)");

// mouse movement listener
cnv.addEventListener('mousemove', mousemoveHandler);

// Math Helper Functions
function mousemoveHandler(event) {
	let rect = cnv.getBoundingClientRect();
	mouseX = event.clientX - rect.left;
	mouseY = event.clientY - rect.top;
	console.log('X: ' + (mouseX - 0) + '  Y: ' + (mouseY - 0));
}
// ***************************************************

// TESTING STUFF WITHIN HERE ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
document.addEventListener("keypress", function onEvent(event) {
	if (event.key == "p") {
		screenShakeIntensity = 30
	}
	if (event.key == "o") {
		screenShakeIntensity = 150
	}
	if (event.key == "i") {
		screenShakeIntensity = 750
	}
})
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

document.onkeydown = function (e) { // Movement Controls (Jump, Left, Right, Fall)
	e = e || window.event
	let charCode = e.keyCode || e.witch;
	let charString = String.fromCharCode(charCode).toLocaleLowerCase();
	if (playerHealth > 0) {
		if (charString == "w") {
			movingUp = true
		}
		if (charString == "s") {
			movingDown = true
		}
		if (charString == "a") {
			movingLeft = true
		}
		if (charString == "d") {
			movingRight = true
		}
		if (charString == "c") {
			controlButtonsMenu = true
		}
	}
}

document.onkeyup = function (e) { // Reverts action if the key was let go
	e = e || window.event
	let charCode = e.keyCode || e.witch;
	let charString = String.fromCharCode(charCode).toLocaleLowerCase();
	if (charString == "w") {
		movingUp = false
		canDoubleJump = true
	}
	if (charString == "s") {
		movingDown = false
	}
	if (charString == "a") {
		movingLeft = false
	}
	if (charString == "d") {
		movingRight = false
	}
	if (charString == "c") {
		controlButtonsMenu = false
	}
	if (charString == "m") {
		if (mute == true) {
			mute = false
		} else {
			mute = true
		}
	}
}


// Dodge Button
document.body.onkeydown = function (e) {
	if (e.keyCode == 32) {
		if (dodgeCooldown == 0 && playerHealth > 0 && epilepsyWarningConfirmed == true && canDodge == true) {
			if (movingRight == false && movingLeft == false && movingUp == true) {						// Dodge Up
				playerVelocityY = -25
				dodgeCooldown = 60
				dodgeCooldownMax = 60
				immunityFrames = 9
				dodgeEffect()
			} else if (movingRight == true && movingLeft == false == movingUp == false) {			// Dodge Right
				playerVelocityX += 25
				dodgeCooldown = 30
				dodgeCooldownMax = 30
				immunityFrames = 9
				dodgeEffect()
			} else if (movingRight == false && movingLeft == true && movingUp == false) {			// Dodge Left
				playerVelocityX -= 25
				dodgeCooldown = 30
				dodgeCooldownMax = 30
				immunityFrames = 9
				dodgeEffect()
			} else if (movingRight == true && movingLeft == false && movingUp == true) {			// Dodge Right Up
				playerVelocityX += Math.sqrt(1250) / 2
				playerVelocityY = -Math.sqrt(1250) / 1.5
				dodgeCooldown = 90
				dodgeCooldownMax = 90
				immunityFrames = 9
				dodgeEffect()
			} else if (movingRight == false && movingLeft == true && movingUp == true) {			// Dodge left Up
				playerVelocityX -= Math.sqrt(1250) / 2
				playerVelocityY = -Math.sqrt(1250) / 1.5
				dodgeCooldown = 90
				dodgeCooldownMax = 90
				immunityFrames = 9
				dodgeEffect()
			} else {																																					// Dodge Up (If no other keys pressed)
				playerVelocityY = -25
				dodgeCooldown = 60
				dodgeCooldownMax = 60
				immunityFrames = 9
				dodgeEffect()
			}
		}
		if (epilepsyWarningSignTime > 150 && epilepsyWarningConfirmed == false) {
			epilepsyWarningConfirmed = true
			Start.play()
		}
		if (playerHealth <= 0 && restartCooldown >= 150 && restarted == false) {																	// Reset Game (Only if player health > 0)
			restarted = true
			Start.play()
		}
	}
}

document.body.onkeyup = function (e) {
	if (e.keyCode == 32 && epilepsyWarningConfirmed == true) {
		canDodge = true
	}
}


// Attack Buttons
document.addEventListener("keydown", logKey)
function logKey() {
	if (playerHealth > 0) {
		if (event.key == "ArrowLeft") {
			playerBulletAttackLeft = true
			playerBulletAttackRight = false
		} else if (event.key == "ArrowRight") {
			playerBulletAttackRight = true
			playerBulletAttackLeft = false
		} else if (event.key == "ArrowUp") {
			playerBulletAttackUp = true
			playerBulletAttackDown = false
		} else if (event.key == "ArrowDown") {
			playerBulletAttackDown = true
			playerBulletAttackUp = false
		}
	}
}

document.addEventListener("keyup", logKey2)
function logKey2() {
	if (event.key == "ArrowLeft") {
		playerBulletAttackLeft = false
	} else if (event.key == "ArrowRight") {
		playerBulletAttackRight = false
	} else if (event.key == "ArrowUp") {
		playerBulletAttackUp = false
	} else if (event.key == "ArrowDown") {
		playerBulletAttackDown = false
	}
}

function restart() {
	frame = 0
	screenShakeIntensity = 0
	screenShakeX = 0
	screenShakeY = 0
	// --- Player Stats
	progress = 400
	attempt++
	totalGrazed = 0
	totalHits = 0
	totalDamageTaken = 0
	totalBulletsShot = 0
	totalBulletsHit = 0

	// --- Game Over Effects
	gameOverCornerPlacement = -200
	gameOverSize = 0
	gameOverTransparency = 0
	gameOverTextEffectTransperency = 0
	restartCooldown = 0
	restartTransperency = 0
	restartSignPlacement = 0
	restarted = false

	// --- Timer

	timerMillisecondsVisual = 0
	timerMilliseconds = 0
	timerMillisecondsHundredths = "0"
	timerMillisecondsTens = "0"
	timerSeconds = 0
	timerSecondsTens = "0"
	timerMinutes = 0
	timerMinutesTens = "0"

	// --- Map Values
	controlButtonsMenu = false
	controlButtonsMenuTransperency = 0
	platformPhase3SpawnedTime = 0

	platform1X = -10000
	platform1Y = 1000

	platform2X = -10000
	platform2Y = 1000

	platform3X = -10000
	platform3Y = 1000

	platform4X = -10000
	platform4Y = 1000

	platform5X = -10000
	platform5Y = 1000

	platform6X = -10000
	platform6Y = 1000

	// --- Player Values
	movingRight = false
	movingLeft = false
	movingUp = false
	movingDown = false

	playerX = 0
	playerY = 775
	playerVelocityX = 25
	playerVelocityY = 0
	playerSize = 25
	canDoubleJump = false
	playerDoubleJump = true
	playerOnPlatform = false
	dodgeCooldownMax
	dodgeCooldown = 0
	immunityFrames = 0
	bulletCooldown = 0
	playerAttacked = false

	playerHealth = 100
	playerHealthMax = 100
	playerHealthPreview = 100
	playerHealthDamaged = 0
	playerRegenerationHitDelay = 0
	playerRegenerationDelay = 0
	playerDamageTakenDelay = 0

	doubleJumpEffectX = 0
	doubleJumpEffectY = 0
	doubleJumpEffectTransparency = 0
	doubleJumpEffectSize = 0

	dodgeEffectX = 0
	dodgeEffectY = 0
	dodgeEffectTransparency = 0
	dodgeEffectSize = 0

	playerBulletAttackUp = false
	playerBulletAttackDown = false
	playerBulletAttackLeft = false
	playerBulletAttackRight = false

	playerBullet1Transperency = 0
	playerBullet2Transperency = 0
	playerBullet3Transperency = 0
	playerBullet4Transperency = 0

	// --- Boss Values

	bossHealth = 12000
	bossHealthMax = 12000
	bossHealthPreview = 12000
	bossHealthDamaged = 0

	bossX = 1550
	bossY = 600

	bossAttack = 0
	bossWait = 0
	bossRecentAttack = 0
	bossPhase = 1

	bossPassiveAttack2 = false
	bossPassiveAttack2X = 0
	bossPassiveAttackAcceleration = 0

	bossAttackXBeginingCalculation = 0
	bossAttackYBeginingCalculation = 0

	bossAttack7Completed = false

	fakeBossHealth = 0
	fakeBossX = -1000
	fakeBossY = -1000
	fakeBossSize = 100
	fakeBossHit = false
	fakeBossSummonedTime = 0
	fakeBossAttackTimer = 0

	// Bullets go from left, top left, top, top right, right, bottom right, bottom, bottom left

	fakeBossBullet1X = -10000
	fakeBossBullet1Y = 0
	fakeBossBullet2X = -10000
	fakeBossBullet2Y = 0
	fakeBossBullet3X = -10000
	fakeBossBullet3Y = 0
	fakeBossBullet4X = 10000
	fakeBossBullet4Y = 0
	fakeBossBullet5X = 10000
	fakeBossBullet5Y = 0
	fakeBossBullet6X = 10000
	fakeBossBullet6Y = 0
	fakeBossBullet7X = 10000
	fakeBossBullet7Y = 0
	fakeBossBullet8X = -10000
	fakeBossBullet8Y = 0
}

function dodgeEffect() {
	dodgeEffectX = playerX
	dodgeEffectY = playerY
	dodgeEffectTransparency = 0.8
	dodgeEffectSize = 30
	Dodge.stop()
	Dodge.play()
}

function setBullet1() {
	playerBullet1X = playerX + playerSize / 2 // Sets the bullet behind the player
	playerBullet1Y = playerY + playerSize / 2
	playerBullet1Active = true // Makes it so the bullet cant be shot again (cause it breaks things)
	bulletCooldown -= 15
	totalBulletsShot++
}

function setBullet2() {
	playerBullet2X = playerX + playerSize / 2
	playerBullet2Y = playerY + playerSize / 2
	playerBullet2Active = true
	bulletCooldown -= 15
	totalBulletsShot++
}

function setBullet3() {
	playerBullet3X = playerX + playerSize / 2
	playerBullet3Y = playerY + playerSize / 2
	playerBullet3Active = true
	bulletCooldown -= 15
	totalBulletsShot++
}

function setBullet4() {
	playerBullet4X = playerX + playerSize / 2
	playerBullet4Y = playerY + playerSize / 2
	playerBullet4Active = true
	bulletCooldown -= 15
	totalBulletsShot++
}

function clearBullet1() {
	playerBullet1Active = false // Allows the bullet to be shot again
	playerBullet1Direction = ""
	playerBullet1X = -1000000 // To get it off screen if it somehow managed to stay on screen
	playerBullet1Y = 1000000
}

function clearBullet2() {
	playerBullet2Active = false
	playerBullet2Direction = ""
	playerBullet2X = -1000000
	playerBullet2Y = 1000000
}

function clearBullet3() {
	playerBullet3Active = false
	playerBullet3Direction = ""
	playerBullet3X = -1000000
	playerBullet3Y = 1000000
}

function clearBullet4() {
	playerBullet4Active = false
	playerBullet4Direction = ""
	playerBullet4X = -1000000
	playerBullet4Y = 1000000
}

function bulletEffect1() {
	playerBullet1HitX = playerBullet1X - 10
	playerBullet1HitY = playerBullet1Y - 10
	playerBullet1Transperency = 1
}

function bulletEffect2() {
	playerBullet2HitX = playerBullet2X - 10
	playerBullet2HitY = playerBullet2Y - 10
	playerBullet2Transperency = 1
}

function bulletEffect3() {
	playerBullet3HitX = playerBullet3X - 10
	playerBullet3HitY = playerBullet3Y - 10
	playerBullet3Transperency = 1
}

function bulletEffect4() {
	playerBullet4HitX = playerBullet4X - 10
	playerBullet4HitY = playerBullet4Y - 10
	playerBullet4Transperency = 1
}

function damageBoss() {							// Defualt is 50, if its higher its for testing reasons
	bossHealthDamaged += 50
	bossHealth -= 50
	totalBulletsHit++
	hitSound()
}

function damageFakeBoss() {
	if (fakeBossDeactivated == false) {
		if (fakeBossHit = false) {
			FakeBossHit.play()
		}
		fakeBossHit = true
		fakeBossHealth -= 50
		totalBulletsHit++
		hitSound()
	}
}

function smallDamagePlayer() {
	if (playerDamageTakenDelay == 0 && immunityFrames == 0 && playerHealth > 0 && bossHealth > 0) {
		playerHealthDamaged += 5
		playerHealth -= 5
		totalDamageTaken += 5
		regenDelay()
		PlayerHitLight.stop()
		PlayerHitLight.play()
	} else if (immunityFrames > 0 && grazeCooldown == 0 && playerHealth > 0 && bossHealth > 0) {
		totalGrazed++
		grazeCooldown += 6
	}
}

function damagePlayer() {
	if (playerDamageTakenDelay == 0 && immunityFrames == 0 && playerHealth > 0 && bossHealth > 0) {
		playerHealthDamaged += 10
		playerHealth -= 10
		totalDamageTaken += 10
		regenDelay()
		PlayerHitLight.stop()
		PlayerHitLight.play()
	} else if (immunityFrames > 0 && grazeCooldown == 0 && playerHealth > 0 && bossHealth > 0) {
		totalGrazed++
		grazeCooldown += 6
	}
}

function bigDamagePlayer() {
	if (playerDamageTakenDelay == 0 && immunityFrames == 0 && playerHealth > 0 && playerHealth > 0 && bossHealth > 0) {
		playerHealthDamaged += 20
		playerHealth -= 20
		totalDamageTaken += 20
		regenDelay()
		PlayerHitHeavy.stop()
		PlayerHitHeavy.play()
	} else if (immunityFrames > 0 && grazeCooldown == 0 && playerHealth > 0 && playerHealth > 0 && bossHealth > 0) {
		totalGrazed++
		grazeCooldown += 6
	}
}

function veryBigDamagePlayer() {
	if (playerDamageTakenDelay == 0 && immunityFrames == 0 && playerHealth > 0 && playerHealth > 0 && bossHealth > 0) {
		playerHealthDamaged += 40
		playerHealth -= 40
		totalDamageTaken += 40
		regenDelay()
		PlayerHitHeavy.stop()
		PlayerHitHeavy.play()
	} else if (immunityFrames > 0 && grazeCooldown == 0 && playerHealth > 0 && playerHealth > 0 && bossHealth > 0) {
		totalGrazed++
		grazeCooldown += 6
	}
}

function regenDelay() {
	playerDamageTakenDelay = 60
	if (bossPhase == 1) {
		playerRegenerationHitDelay = 600
	} else if (bossPhase == 2) {
		playerRegenerationHitDelay = 420
	} else if (bossPhase == 3) {
		playerRegenerationHitDelay = 60
	}
	totalHits++
}

function hitSound() {
	if (Math.floor(Math.random() * 4) + 1 == 1) {
		Hit1.stop()
		Hit1.play()
	} else if (Math.floor(Math.random() * 3) + 1 == 1) {
		Hit2.stop()
		Hit2.play()
	} else if (Math.floor(Math.random() * 2) + 1 == 1) {
		Hit3.stop()
		Hit3.play()
	} else {
		Hit4.stop()
		Hit4.play()
	}
}

function moveSound() {
	if (Math.floor(Math.random() * 3) + 1 == 1) {
		Moving1.stop()
		Moving1.play()
	} else if (Math.floor(Math.random() * 2) + 1 == 1) {
		Moving2.stop()
		Moving2.play()
	} else {
		Moving3.stop()
		Moving3.play()
	}
}

requestAnimationFrame(draw);

function draw() {
	if (epilepsyWarningActive == false) {

		if (playerAttacked == false) {
			Begin.play()
		} else {
			Begin.stop()
		}

		// Background
		if (bossPhase == 1) {
			ctx.fillStyle = grd1;
		} else if (bossPhase == 2) {
			ctx.fillStyle = grd5;
		} else {
			ctx.fillStyle = grd6;
		}
		ctx.strokeStyle = '#000000';
		ctx.fillRect(0 + screenShakeX, 0 + screenShakeY, cnv.width, cnv.height);

		// Platforms
		ctx.fillStyle = '#555555';
		ctx.strokeStyle = '#363636'
		if (bossPhase == 1) {
			platform1Y = 1000
			platform2Y = 1000
		}
		if (bossPhase == 2 || bossPhase == 3) {
			if (bossPhase == 2) {
				platform1X = 300
				platform2X = 1300
				if (bossHealth <= bossPhase3) {
					platform1YCalculation = (-platform1Y + 1000) / 25
					platform2YCalculation = (-platform2Y + 1000) / 25
				}
			}

			if (bossPhase == 3) {
				if (platformPhase3SpawnedTime < 2) {
					platform1X = 300
					platform3X = platform1X + 220
					platform4X = platform3X + 220
					platform5X = platform4X + 220
					platform6X = platform5X + 220
					platform2X = platform6X + 220
					platform1Y = 1000
					platform3Y = 1500
					platform4Y = 2000
					platform5Y = 2500
					platform6Y = 3000
					platform2Y = 3500
				}
				ctx.lineWidth = 10;

				if (platform2X > 0) {
					ctx.beginPath();
					ctx.moveTo(platform2X + 100 + screenShakeX, platform2Y + 10 + screenShakeY, 50, 50);
					ctx.lineTo(platform6X + 100 + screenShakeX, platform6Y + 10 + screenShakeY, 50, 50);
					ctx.closePath();
					ctx.stroke();
				}
				if (platform6X > 0) {
					ctx.beginPath();
					ctx.moveTo(platform6X + 100 + screenShakeX, platform6Y + 10 + screenShakeY, 50, 50);
					ctx.lineTo(platform5X + 100 + screenShakeX, platform5Y + 10 + screenShakeY, 50, 50);
					ctx.closePath();
					ctx.stroke();
				}
				if (platform5X > 0) {
					ctx.beginPath();
					ctx.moveTo(platform5X + 100 + screenShakeX, platform5Y + 10 + screenShakeY, 50, 50);
					ctx.lineTo(platform4X + 100 + screenShakeX, platform4Y + 10 + screenShakeY, 50, 50);
					ctx.closePath();
					ctx.stroke();
				}
				if (platform4X > 0) {
					ctx.beginPath();
					ctx.moveTo(platform4X + 100 + screenShakeX, platform4Y + 10 + screenShakeY, 50, 50);
					ctx.lineTo(platform3X + 100 + screenShakeX, platform3Y + 10 + screenShakeY, 50, 50);
					ctx.closePath();
					ctx.stroke();
				}
				if (platform3X > 0) {
					ctx.beginPath();
					ctx.moveTo(platform3X + 100 + screenShakeX, platform3Y + 10 + screenShakeY, 50, 50);
					ctx.lineTo(platform1X + 100 + screenShakeX, platform1Y + 10 + screenShakeY, 50, 50);
					ctx.closePath();
					ctx.stroke();
				}
			}
			platform1YCalculation = (-platform1Y + 500) / 50
			platform1Y += platform1YCalculation
			ctx.fillRect(platform1X + screenShakeX, platform1Y + screenShakeY, platform1Size, 20);
			ctx.fill();
			platform2YCalculation = (-platform2Y + 500) / 50
			platform2Y += platform2YCalculation
			ctx.fillRect(platform2X + screenShakeX, platform2Y + screenShakeY, platform2Size, 20);
			ctx.fill();
			if (bossPhase == 3) {
				platformPhase3SpawnedTime++
				platform1X += bossPassiveAttack2X / 2
				platform2X += bossPassiveAttack2X / 2
				platform3X += bossPassiveAttack2X / 2
				platform4X += bossPassiveAttack2X / 2
				platform5X += bossPassiveAttack2X / 2
				platform6X += bossPassiveAttack2X / 2
				if (platform1X > 2000 || platform1X < -1000) {
					platform1X = platform3X - 200
					platform1Y = Math.floor(Math.random() * 600 + 100)
				}
				if (platform2X > 2000 || platform2X < -1000) {
					platform2X = -200
					platform2Y = Math.floor(Math.random() * 600 + 100)
				}
				if (platform3X > 2000 || platform3X < -1000) {
					platform3X = platform4X - 200
					platform3Y = Math.floor(Math.random() * 600 + 100)
				}
				if (platform4X > 2000 || platform4X < -1000) {
					platform4X = platform5X - 200
					platform4Y = Math.floor(Math.random() * 600 + 100)
				}
				if (platform5X > 2000 || platform5X < -1000) {
					platform5X = platform6X - 200
					platform5Y = Math.floor(Math.random() * 600 + 100)
				}
				if (platform6X > 2000 || platform6X < -1000) {
					platform6X = platform2X - 200
					platform6Y = Math.floor(Math.random() * 600 + 100)
				}
				platform3YCalculation = (-platform3Y + 500) / 50
				platform3Y += platform3YCalculation
				ctx.fillRect(platform3X + screenShakeX, platform3Y + screenShakeY, platform3Size, 20);
				ctx.fill();

				platform4YCalculation = (-platform4Y + 500) / 50
				platform4Y += platform4YCalculation
				ctx.fillRect(platform4X + screenShakeX, platform4Y + screenShakeY, platform4Size, 20);
				ctx.fill();

				platform5YCalculation = (-platform5Y + 500) / 50
				platform5Y += platform5YCalculation
				ctx.fillRect(platform5X + screenShakeX, platform5Y + screenShakeY, platform5Size, 20);
				ctx.fill();

				platform6YCalculation = (-platform6Y + 500) / 50
				platform6Y += platform6YCalculation
				ctx.fillRect(platform6X + screenShakeX, platform6Y + screenShakeY, platform6Size, 20);
				ctx.fill();
			}

			ctx.lineWidth = 1;

			if (playerOnPlatform1 == true && movingUp == false && movingDown == false) {
				playerY = platform1Y - playerSize
				playerX += bossPassiveAttack2X / 2
			} else if (playerOnPlatform2 == true && movingUp == false && movingDown == false) {
				playerY = platform2Y - playerSize
				playerX += bossPassiveAttack2X / 2
			} else if (playerOnPlatform3 == true && movingUp == false && movingDown == false) {
				playerY = platform3Y - playerSize
				playerX += bossPassiveAttack2X / 2
			} else if (playerOnPlatform4 == true && movingUp == false && movingDown == false) {
				playerY = platform4Y - playerSize
				playerX += bossPassiveAttack2X / 2
			} else if (playerOnPlatform5 == true && movingUp == false && movingDown == false) {
				playerY = platform5Y - playerSize
				playerX += bossPassiveAttack2X / 2
			} else if (playerOnPlatform6 == true && movingUp == false && movingDown == false) {
				playerY = platform6Y - playerSize
				playerX += bossPassiveAttack2X / 2
			}
		}

		// Floor
		ctx.fillStyle = '#555555';
		ctx.fillRect(floorX + screenShakeX, floorY + screenShakeY, cnv.width + floorSize, cnv.height);
		ctx.fill();
		ctx.fillStyle = '#454545';
		ctx.fillRect(floorX + screenShakeX, floorY + screenShakeY, cnv.width + floorSize, 15);
		ctx.fill();
		if (bossPassiveAttack2 == true) {
			bossPassiveAttackAcceleration = (-bossPassiveAttack2X + 50) / 750
			bossPassiveAttack2X += bossPassiveAttackAcceleration
			floorX -= bossPassiveAttack2X
		}
		if (floorX < -8000) {
			floorX = 0
		}
		for (let i = 0; i < floorSize / 333; i++) {
			ctx.fillRect(floorX + floorPatternX + screenShakeX, floorY + screenShakeY, 10, 500);
			floorPatternX += 333
		}
		floorPatternX = 0
		if (playerY + playerSize == floorY) {
			playerX -= bossPassiveAttack2X
		}

		// Controls
		if (controlButtonsMenu == true || playerAttacked == false) {
			controlButtonsMenuTransperency += 0.05
		} else {
			controlButtonsMenuTransperency -= 0.05
		}
		if (controlButtonsMenuTransperency > 1) {
			controlButtonsMenuTransperency = 1
		} else if (controlButtonsMenuTransperency < 0) {
			controlButtonsMenuTransperency = 0
		}

		ctx.lineWidth = 5;
		ctx.fillStyle = 'rgba(169, 169, 169, ' + controlButtonsMenuTransperency + ')';
		ctx.strokeStyle = 'rgba(191, 191, 191, ' + controlButtonsMenuTransperency + ')';
		ctx.textAlign = 'center';
		// WASD Keys	
		ctx.fillRect(310 + screenShakeX, 340 + screenShakeY, 100, 100);
		ctx.strokeRect(310 + screenShakeX, 340 + screenShakeY, 100, 100);
		ctx.fillRect(200 + screenShakeX, 450 + screenShakeY, 100, 100);
		ctx.strokeRect(200 + screenShakeX, 450 + screenShakeY, 100, 100);
		ctx.fillRect(310 + screenShakeX, 450 + screenShakeY, 100, 100);
		ctx.strokeRect(310 + screenShakeX, 450 + screenShakeY, 100, 100);
		ctx.fillRect(420 + screenShakeX, 450 + screenShakeY, 100, 100);
		ctx.strokeRect(420 + screenShakeX, 450 + screenShakeY, 100, 100);

		// Space Bar
		ctx.fillRect(600 + screenShakeX, 475 + screenShakeY, 600, 100);
		ctx.strokeRect(600 + screenShakeX, 475 + screenShakeY, 600, 100);

		// Arrow Keys	
		ctx.fillRect(1390 + screenShakeX, 340 + screenShakeY, 100, 100);
		ctx.strokeRect(1390 + screenShakeX, 340 + screenShakeY, 100, 100);
		ctx.fillRect(1280 + screenShakeX, 450 + screenShakeY, 100, 100);
		ctx.strokeRect(1280 + screenShakeX, 450 + screenShakeY, 100, 100);
		ctx.fillRect(1390 + screenShakeX, 450 + screenShakeY, 100, 100);
		ctx.strokeRect(1390 + screenShakeX, 450 + screenShakeY, 100, 100);
		ctx.fillRect(1500 + screenShakeX, 450 + screenShakeY, 100, 100);
		ctx.strokeRect(1500 + screenShakeX, 450 + screenShakeY, 100, 100);

		// All the text
		ctx.fillStyle = 'rgba(101, 101, 101, ' + controlButtonsMenuTransperency + ')';
		ctx.font = "50px Inter";
		ctx.fillText("Movement Controls", 360 + screenShakeX, 250 + screenShakeY);
		ctx.font = "80px Inter";
		ctx.fillText("W", 360 + screenShakeX, 420 + screenShakeY);
		ctx.fillText("A", 250 + screenShakeX, 530 + screenShakeY);
		ctx.fillText("S", 360 + screenShakeX, 530 + screenShakeY);
		ctx.fillText("D", 470 + screenShakeX, 530 + screenShakeY);
		ctx.font = "15px Inter";
		ctx.fillText("Press W in the air to double jump", 360 + screenShakeX, 330 + screenShakeY);

		ctx.font = "50px Inter";
		ctx.fillText("Dodge Button", 900 + screenShakeX, 400 + screenShakeY);
		ctx.font = "80px Inter";
		ctx.fillText("Space Bar", 900 + screenShakeX, 555 + screenShakeY);
		ctx.font = "20px Inter";
		ctx.fillText("You must be moving to dodge", 900 + screenShakeX, 600 + screenShakeY);
		ctx.fillText("Dodging grants you Immunity Frames for a short time", 900 + screenShakeX, 630 + screenShakeY);
		ctx.font = "10px Inter";
		ctx.fillText("(Dodge will automatically go up if no movement keys are pressed)", 900 + screenShakeX, 610 + screenShakeY);

		ctx.font = "50px Inter";
		ctx.fillText("Attack Controls", 1440 + screenShakeX, 250 + screenShakeY);
		ctx.font = "80px Inter";
		ctx.fillText("↑", 1440 + screenShakeX, 420 + screenShakeY);
		ctx.fillText("←", 1330 + screenShakeX, 530 + screenShakeY);
		ctx.fillText("↓", 1440 + screenShakeX, 530 + screenShakeY);
		ctx.fillText("→", 1550 + screenShakeX, 530 + screenShakeY);
		ctx.font = "20px Inter";
		ctx.fillText("You may also attack diagonally", 1440 + screenShakeX, 580 + screenShakeY);

		ctx.textAlign = 'start';
		ctx.fillStyle = 'rgb(49, 49, 49)'
		if (mute == false) {
			ctx.fillText('Sound: On [Press M to Mute]', 25 + screenShakeX, 870 + screenShakeY);
		} else {
			ctx.fillText('Sound: Off [Press M to Unmute]', 25 + screenShakeX, 870 + screenShakeY);
		}

		// Things that appears if started, or after started
		ctx.fillStyle = 'rgba(49, 49, 49, ' + (1 - controlButtonsMenuTransperency) + ')';
		ctx.font = "20px Inter";

		if (playerAttacked == true) {
			ctx.fillText('Hold "C" to show controls', 25 + screenShakeX, 890 + screenShakeY);
		} else {
			ctx.fillStyle = 'rgba(81, 81, 81, ' + controlButtonsMenuTransperency + ')';
			ctx.textAlign = 'center';
			ctx.font = "65px Inter";
			ctx.fillText('Attack the boss to start', 900 + screenShakeX, 780 + screenShakeY);
			ctx.textAlign = 'start';
		}
		ctx.lineWidth = 1;
		ctx.fillStyle = '#454545';

		// Boss Attacks
		if (playerHealth > 0) {
			if (bossHealth < bossHealthMax) {
				playerAttacked = true
			}
			if (bossWait == 0 && playerAttacked == true) { // Checks if player started game
				if (bossHealth > bossPhase2) {
					bossPhase = 1
				} else if (bossHealth > bossPhase3) {
					bossPhase = 2
				} else if (bossHealth <= bossPhase3) {
					bossPhase = 3
				}
				bossAttack = Math.floor(Math.random() * 2 + 1); // Picks a random attack, does not repeat the same action twice in a row
				if (bossPhase == 1) {
					if (bossAttack == 1 && bossRecentAttack != 1) {
						bossAttack1 = true
						bossWait = 200
					} else if (bossAttack == 2 && bossRecentAttack != 2) {
						bossAttack2 = true
						bossWait = 300
					} else {
						bossAttack3 = true
						bossWait = 200
					}
				} else if (bossPhase == 2) {
					if (fakeBossHit == false) {		// Chooses attacks if the fake boss is NOT on screen
						if (bossAttack == 1 && bossRecentAttack != 4) {
							bossAttack4 = true
							bossWait = 200
						} else if (bossAttack == 2 && bossRecentAttack != 5) {
							bossAttack5 = true
							bossWait = 420
						} else {
							bossAttack6 = true
							bossWait = 250
						}
					} else {											// Chooses attacks if the fake boss IS on screen
						if (bossAttack == 1 && bossRecentAttack != 4) {
							bossAttack4 = true
							bossWait = 200
						} else {
							bossAttack5 = true
							bossWait = 420
						}
					}
				} else if (bossPhase == 3) {
					if (bossAttack7Completed == false) {		// Does attack 7 as the first attack in phase 3
						bossAttack7 = true
						bossWait = 320
					} else if (bossAttack == 1 && bossRecentAttack != 8) {
						bossAttack8 = true
						bossWait = 300
					} else if (bossAttack == 2 && bossRecentAttack != 9) {
						bossAttack9 = true
						bossWait = 180
					} else {
						bossAttack10 = true
						bossWait = 240
					}
				}
			}
		}

		if (playerAttacked == false) { // Just here to prevent the whole game breaking completely when restarting
			bossX = 1550
			bossY = 600
		} else if (bossWait < 0) { // Same goes with here but its for attacking instead
			bossWait = 0
		}

		// Boss Attack 1
		if (bossHealth > 0) {
			if (bossAttack1 == true) { // Attack 1 ----------------------------------------------------------------------------------------
				let i = 50
				if (bossWait > 150) { // Boss goes up
					bossY -= 40 + i
					i--
					bossAttack1EffectPillarSize = 0
				} else if (bossWait == 125) { // Boss follows the attack position
					bossX = bossAttack1X;
				} else if (bossWait > 100) { // Boss goes down
					bossY += 40 + i
					i++
				} else if (bossWait == 100) { // Camera shake
					screenShakeIntensity = 30
					bossY += 40 + i
				} else if (bossWait >= 0) { // Boss Ends Attack
					bossAttack1 == false
				}
				if (bossWait < 175 && bossWait > 125) {	// Attack follows player
					bossAttack1EffectTransperency = 1
					bossAttack1X = playerX + playerSize / 2 - 100
					if (bossAttack1X < 0) {  // This and below to prevent boss from "going" out the map
						bossAttack1X = 0
					}
					if (bossAttack1X > 1600) {
						bossAttack1X = 1600
					}
					ctx.fillStyle = 'rgb(255,' + bossAttack1Color + ', ' + bossAttack1Color + ')';
					ctx.fillRect(playerX + playerSize / 2 - 110 + screenShakeX, 800 + screenShakeY, 220, 15);
				} else if (bossWait <= 125) {	// Attack stops following player
					ctx.fillStyle = 'rgba(255,' + bossAttack1Color + ', ' + bossAttack1Color + ', ' + bossAttack1EffectTransperency + ')';
					ctx.fillRect(bossAttack1X + screenShakeX - 10, 800 + screenShakeY, 220, 15);

				}
				if (bossWait > 175) {			// Colors for floor indication
					bossAttack1Color = 182					// 1
				} else if (bossWait == 167) {
					bossAttack1Color = 255
				} else if (bossWait == 160) {
					bossAttack1Color = 163					// 2
				} else if (bossWait == 152) {
					bossAttack1Color = 255
				} else if (bossWait == 145) {
					bossAttack1Color = 141					// 3
				} else if (bossWait == 137) {
					bossAttack1Color = 255
				} else if (bossWait == 130) {
					bossAttack1Color = 115					// 4
				} else if (bossWait == 122) {
					bossAttack1Color = 255
				} else if (bossWait == 115) {
					bossAttack1Color = 81 					// 5
				} else if (bossWait == 107) {
					bossAttack1Color = 255
				} else if (bossWait <= 100) {
					bossAttack1Color = 0						// 6
					bossAttack1EffectTransperency -= 0.05
				}
				// Hitbox Calculation
				if (bossWait <= 125 && bossWait >= 100 && playerX >= bossX && bossX >= playerX - bossSize && playerY >= bossY && bossY >= playerY - bossSize) {
					veryBigDamagePlayer()
				}
				if (bossWait < 125) { // Creates the pillar indication
					ctx.fillStyle = grd2;
					ctx.fillRect(bossAttack1X + 10 + screenShakeX - 10, bossAttack1EffectPillarSize + screenShakeY, 200, 800 - bossAttack1EffectPillarSize);
					ctx.fill();
				}
				if (bossWait == 110) {
					Crash.play()
				}
				if (bossWait < 105 && 95 < bossWait) { // Beam effect to just disapear without looking weird
					bossAttack1EffectPillarSize += 80
				}

				bossWait--
			} else if (bossAttack2 == true) { // Attack 2 ----------------------------------------------------------------------------------------
				if (bossWait > 275) {
					if (bossX + (bossSize / 2) >= 900) { // Checks if boss is on left or right, whichever is closest it will go to that edge
						bossAttackXBeginingCalculation = (1800 - bossX - bossSize) / 4
					} else {
						bossAttackXBeginingCalculation = (-bossX) / 4
					}
					bossX += bossAttackXBeginingCalculation
				} else if (bossWait == 275) { // Making sure that the boss is at the edge
					if (bossX + (bossSize / 2) >= 900) {
						bossX = 1600
					} else {
						bossX = 0
					}
				} else if (bossWait == 274) {
					if (bossX == 1600) { // Checks for the direction the boss is NOT at
						bossAttack2DirectionMovingLeft = true
					} else {
						bossAttack2DirectionMovingLeft = false
					}
					moveSound()
				} else if (bossWait > 169 && bossWait < 244) {

					if (bossAttack2DirectionMovingLeft == true) { // Goes to the direction previouslly stated
						bossAttackXBeginingCalculation = (-bossX) / 9
					} else {
						bossAttackXBeginingCalculation = (1800 - bossX - bossSize) / 9
					}
					// Hitbox Calculation
					if (playerX >= bossX && bossX >= playerX - bossSize && playerY >= bossY && bossY >= playerY - bossSize) {
						bigDamagePlayer()
					}
					bossX += bossAttackXBeginingCalculation
				} else if (bossWait == 169) { // Checks again for the direction the boss is NOT at
					if (bossAttack2DirectionMovingLeft == true) {
						bossX = 0
						bossAttack2DirectionMovingLeft = false
					} else {
						bossX = 1600
						bossAttack2DirectionMovingLeft = true
					}
					moveSound()
				} else if (bossWait > 63 && bossWait < 138) {
					if (bossAttack2DirectionMovingLeft == true) { // Again, goes to the previouslly stated direction
						bossAttackXBeginingCalculation = (-bossX) / 9
					} else {
						bossAttackXBeginingCalculation = (1800 - bossX - bossSize) / 9
					}
					// Hitbox Calculation
					if (playerX >= bossX && bossX >= playerX - bossSize && playerY >= bossY && bossY >= playerY - bossSize) {
						bigDamagePlayer()
					}
					bossX += bossAttackXBeginingCalculation
				} else if (bossWait == 72) { // Sets boss to a flat value at the end
					if (bossAttack2DirectionMovingLeft == true) {
						bossX = 0
					} else {
						bossX = 1600
					}
				}
				if (bossWait < 275 && bossWait > 169) { // Creates the attack indication for the first dash
					if (bossAttack2DirectionMovingLeft == true) {
						ctx.fillStyle = grd3;
						ctx.fillRect(bossX - 1800 + screenShakeX, 600 + screenShakeY, 1800, 200);
						ctx.fill()
					} else {
						ctx.fillStyle = grd4;
						ctx.fillRect(bossX + screenShakeX, 600 + screenShakeY, 1800, 200);
						ctx.fill()
					}
				} else if (bossWait < 169 && bossWait > 63) { // Creates the attack indication for the second dash
					if (bossAttack2DirectionMovingLeft == true) {
						ctx.fillStyle = grd3;
						ctx.fillRect(bossX - 1800 + screenShakeX, 600 + screenShakeY, 1800, 200);
						ctx.fill()
					} else {
						ctx.fillStyle = grd4;
						ctx.fillRect(bossX + screenShakeX, 600 + screenShakeY, 1800, 200);
						ctx.fill()
					}
				}
				bossWait--
			} else if (bossAttack3 == true) { // Attack 3 ----------------------------------------------------------------------------------------
				if (bossWait == 200) {
					bossAttack3FireSize = 0
					bossAttack3TopPartY = 1000
					bossAttack3BottomPartX = 1400
					bossAttack3BottomPartY = 1000
					if (bossX >= 900) {	// Checks which side its on
						bossAttack3DirectionMovingLeft = true
					} else {
						bossAttack3DirectionMovingLeft = false
					}
				} else if (bossWait == 50) { // Finds a random direction to go to after the attack is done
					bossAttack3XSetAfterPosition = Math.floor(Math.random() * 500)
					bossAttack3DirectionMovingLeft = Math.floor(Math.random() * 2 + 1)
				}
				if (bossWait >= 150) { // Goes to the top/center of the screen
					if (bossAttack3DirectionMovingLeft == true) {
						bossAttackXBeginingCalculation = (-bossX + 800) / 9
					} else {
						bossAttackXBeginingCalculation = (1000 - bossX - bossSize) / 9
					}
					bossX += bossAttackXBeginingCalculation

					bossAttackYBeginingCalculation = (-bossY + 100) / 9
					bossY += bossAttackYBeginingCalculation
				} else if (bossWait < 50 && bossY < 600) {

					if (bossAttack3DirectionMovingLeft == true) {
						bossAttack3XAfterPosition = (-bossAttack3XSetAfterPosition / (bossX / 850)) / 20
						bossX -= bossAttack3XAfterPosition
					} else {
						bossX += bossAttack3XAfterPosition
						bossAttack3XAfterPosition = (-bossAttack3XSetAfterPosition * (bossX / 850)) / 20
					}
					bossAttackYBeginingCalculation = (-bossY + 50) / 17
					bossY -= bossAttackYBeginingCalculation
				}
				ctx.fillStyle = '#ff3333';
				if (bossWait < 160 && bossWait > 50) { // Animating the floor turning red
					ctx.fillRect(1800 - bossAttack3FireSize + screenShakeX, 800 + screenShakeY, bossAttack3FireSize, 15);
					if (bossWait > 150) {
						bossAttack3FireSize += 4.5
					}
					if (bossWait < 127) {
						bossAttack3FireSize -= 5.5
					}
					if (bossWait < 126) {
						bossAttack3FireSize += 1.5
					}
					if (bossWait < 105) {
						bossAttack3FireSize += 4
					}
					if (bossWait < 90) {
						bossAttack3FireSize += 7.5
					}
					bossAttack3FireSize += 20
					if (playerX >= 1800 - bossAttack3FireSize && playerY >= 775 - 1) { // Hitbox Calculation
						damagePlayer()
					}
				} else if (bossWait == 50) { // Resets the fire size to be a clean number
					ctx.fillRect(0 + screenShakeX, 800 + screenShakeY, bossAttack3FireSize, 15);
					bossAttack3FireSize = 1800
				} else if (bossWait < 50) { // Slowly removes the fire size
					ctx.fillRect(0 + screenShakeX, 800 + screenShakeY, bossAttack3FireSize, 15);
					bossAttack3FireSize -= 70
				}
				if (bossWait <= 50) { // Hitbox Calculation
					if (playerX >= bossAttack3FireSize && bossAttack3FireSize >= playerX - bossSize && playerY >= 775 - 1) {
						damagePlayer()
					}
				}
				bossWait--
			} else if (bossAttack4 == true) { // Attack 4 ----------------------------------------------------------------------------------------
				if (bossWait == 200) {
					if (bossX >= 900) { // Checks which direction its at
						bossAttack4DirectionMovingLeft = true
					} else {
						bossAttack4DirectionMovingLeft = false
					}
				} else if (bossWait == 49) { // Does math to find a random spot to go to after
					bossAttack4XSetAfterPosition = Math.floor(Math.random() * 500)
					bossAttack4DirectionMovingLeft = Math.floor(Math.random() * 2 + 1)
				}
				if (bossWait > 150) { // Goes to the center of screen
					if (bossAttack4DirectionMovingLeft == true) {
						bossAttackXBeginingCalculation = (-bossX + 800) / 9
					} else {
						bossAttackXBeginingCalculation = (1000 - bossX - bossSize) / 9
					}
					bossX += bossAttackXBeginingCalculation

					bossAttackYBeginingCalculation = (-bossY) / 11
					bossY += bossAttackYBeginingCalculation
				} else if (bossWait >= 50) { // Attacks with lazers, and slowly goes down
					ctx.fillStyle = '#ff4a46'
					screenShakeIntensity += 1
					ctx.fillRect(-1000 + screenShakeX, bossY + 117.5 + screenShakeY, cnv.width + 2000, 25);
					ctx.strokeRect(-1000 + screenShakeX, bossY + 117.5 + screenShakeY, cnv.width + 2000, 25);
					if (playerY <= bossY + 117.5 && bossY + 117.5 <= playerY + playerSize + 25) {
						bigDamagePlayer()
					}
					bossY += 6
					LazerA4.play()
				} else if (bossWait > 0) { // Goes to the random direction found previouslly
					if (bossAttack4DirectionMovingLeft == true) {
						bossAttack4XAfterPosition = (-bossAttack4XSetAfterPosition / (bossX / 850)) / 20
						bossX -= bossAttack4XAfterPosition
					} else {
						bossX += bossAttack4XAfterPosition
						bossAttack4XAfterPosition = (-bossAttack4XSetAfterPosition * (bossX / 850)) / 20
					}
					bossAttackYBeginingCalculation = (-bossY + 200) / 9
					bossY += bossAttackYBeginingCalculation
					LazerA4.stop()
				}
				bossWait--
			} else if (bossAttack5 == true) { // Attack 5 ----------------------------------------------------------------------------------------
				if (bossWait % 70 == 0) {
					bossAttack5Row = Math.floor(Math.random() * 3 + 1) // Goes to a random row the boss hasn't gone to twice in a row
					if (bossPassiveAttack1Timer > 1040) { // Checks if the chain attack is in the way, if so, boss won't go there
						if (bossAttack5Row == 1 && bossAttack5RowRecent != 1) {
							bossAttack5Row = 0
							bossAttack5RowRecent = 1
						} else if (bossAttack5Row == 2 && bossAttack5RowRecent != 2) {
							bossAttack5Row = 1
							bossAttack5RowRecent = 2
						} else {
							bossAttack5Row = 2
							bossAttack5RowRecent = 3
						}
					} else {
						if (bossAttack5Row == 1 && bossAttack5RowRecent != 1) {
							bossAttack5Row = 0
							bossAttack5RowRecent = 1
						} else if (bossAttack5Row == 2 && bossAttack5RowRecent != 2) {
							bossAttack5Row = 1
							bossAttack5RowRecent = 2
						} else if (bossAttack5Row == 3 && bossAttack5RowRecent != 3) {
							bossAttack5Row = 2
							bossAttack5RowRecent = 3
						} else {
							bossAttack5Row = 3
							bossAttack5RowRecent = 4
						}
					}
				}
				if (bossWait % 70 == 35) { // Attack indication for the first part
					if (bossX >= 900) {
						bossAttack5DirectionMovingLeft = true
						ctx.fillStyle = grd3;
					} else {
						bossAttack5DirectionMovingLeft = false
						ctx.fillStyle = grd4;
					}
				}
				if (bossWait % 70 >= 35) { // Attack for the second part
					if (bossAttack5DirectionMovingLeft == false) {
						ctx.fillStyle = grd3;
						ctx.fillRect(bossX - 1600 + screenShakeX, bossY + screenShakeY, 1800, 200);
						ctx.fill()
					} else {
						ctx.fillStyle = grd4;
						ctx.fillRect(bossX + screenShakeX, bossY + screenShakeY, 1800, 200);
						ctx.fill()
					}
				}
				if (bossAttack5DirectionMovingLeft == true) { // Smooth movement
					bossAttackXBeginingCalculation = (-bossX) / 9
				} else {
					bossAttackXBeginingCalculation = (-bossX + 1600) / 9
				}
				if (bossWait % 70 <= 35) { // Hitbox Calculation
					if (playerX >= bossX && bossX >= playerX - bossSize && playerY >= bossY && bossY >= playerY - bossSize) {
						damagePlayer()
					}
				}
				if (bossWait % 70 == 50) {
					moveSound()
				}
				bossX += bossAttackXBeginingCalculation
				bossAttackYBeginingCalculation = (-bossY + bossAttack5Row * 200) / 9
				bossY += bossAttackYBeginingCalculation
				bossWait--
			} else if (bossAttack6 == true) { // Attack 6 ----------------------------------------------------------------------------------------
				if (bossWait > 230) { // Resets everything and moves boss up
					fakeBossTransperency = 0.7
					fakeBossHit = false
					bossAttackYBeginingCalculation = (-bossY - 300) / 9
					bossAttackXBeginingCalculation = 0
					bossY += bossAttackYBeginingCalculation
				} else if (bossWait == 200) {
					currentBossHealth = bossHealth // Checks the current boss health, used for later
					if (Math.floor(Math.random() * 2) + 1 == 1) { // Picks a random spot to go to before moving in screen
						bossAttack6DirectionMovingLeft = true
						bossX = -1000
						fakeBossX = 2600
					} else {
						bossAttack6DirectionMovingLeft = false
						bossX = 2600
						fakeBossX = -1000
					}
					bossY = 300
					fakeBossY = 300
				} else if (bossWait < 200) { // Moves in screen
					if (bossAttack6DirectionMovingLeft == false) {
						bossAttackXBeginingCalculation = (-bossX + 1200) / 9
						fakeBossXBeginingCalculation = (-fakeBossX + 400) / 9
					} else {
						bossAttackXBeginingCalculation = (-bossX + 400) / 9
						fakeBossXBeginingCalculation = (-fakeBossX + 1200) / 9
					}
					if (bossHealth < currentBossHealth) { // If the player attacks the real boss, the fake boss disapears
						fakeBossDeactivated = true
						if (fakeBossTransperency == 0.7) {
							FakeDeactivated.play()
						}
						if (fakeBossTransperency > 0) {
							fakeBossTransperency -= 0.025
						}
						fakeBossXBeginingCalculation = (-fakeBossX + bossX) / 5 // Fake boss moving towards the player
						if (fakeBossDeactivated == true) {
							if (fakeBossX >= bossX - 1 && bossX >= fakeBossX - 1 || fakeBossX < bossX - 2000) {
								fakeBossX = -5000
							}
						}
					}
					bossX += bossAttackXBeginingCalculation
					fakeBossX += fakeBossXBeginingCalculation
				}
				if (bossWait <= 2 && fakeBossDeactivated == false) { // If the player doesnt attack anything for a while, it auto spawns the fake boss
					fakeBossHit = true
				}
				if (bossWait > 180) {
					fakeBossHealth = 0
					fakeBossHit = false
				}
				bossWait--
			} else if (bossAttack7 == true) {
				if (bossWait == 320) {
					bossAttack7SpikeWallLeftX = -100
					bossAttack7SpikeWallRightX = 1900
				} else if (bossWait > 280) { // Goes to the center of screen
					bossAttackXBeginingCalculation = (-bossX + 800) / 9
					bossAttackYBeginingCalculation = (-bossY + 250) / 11
					bossX += bossAttackXBeginingCalculation
				} else if (bossWait > 240) {
					if (bossAttack7HitWall == true) {
						bossAttackXBeginingCalculation = (-bossX + 200) / 9
						bossX += bossAttackXBeginingCalculation
					} else {
						bossAttackXBeginingCalculation = (-bossX - 200) / 9
						bossX += bossAttackXBeginingCalculation
					}
					if (bossX < 0) {
						bossAttackXBeginingCalculation = (-bossX + 200) / 9
						bossX += bossAttackXBeginingCalculation
						bossAttack7HitWall = true
						screenShakeIntensity += 20
						SmashA7Left.play()
					}

				} else if (bossWait == 240) {
					bossAttack7HitWall = false
				} else if (bossWait > 200) {
					if (bossAttack7HitWall == true) {
						bossAttackXBeginingCalculation = (-bossX + 1400) / 9
						bossX += bossAttackXBeginingCalculation
					} else {
						bossAttackXBeginingCalculation = (-bossX + 1800) / 9
						bossX += bossAttackXBeginingCalculation
					}
					if (bossX > 1600) {
						bossAttackXBeginingCalculation = (-bossX + 1400) / 9
						bossX += bossAttackXBeginingCalculation
						bossAttack7HitWall = true
						screenShakeIntensity += 20
						SmashA7Right.play()
					}
				} else if (bossWait > 170) {
					bossAttackXBeginingCalculation = (-bossX + 800) / 6.5
					bossX += bossAttackXBeginingCalculation
					bossAttack7HitWall = false
				} else {
					if (bossAttack7HitWall == true) {
						bossAttackYBeginingCalculation = (-bossY + 100) / 15
					} else {
						bossAttackYBeginingCalculation = (-bossY + 1200) / 7
					}
					if (bossY >= 600) {
						screenShakeIntensity += 20
						SmashA7.play()
						bossPassiveAttack2 = true
						bossAttack7HitWall = true
					}
				}
				if (bossWait >= 220 && bossWait < 270) {
					bossAttack7SpikeWallLeftX += 2
				}
				if (bossWait >= 180 && bossWait < 230) {
					bossAttack7SpikeWallRightX -= 2
				}
				bossY += bossAttackYBeginingCalculation
				bossWait--
			} else if (bossAttack8 == true) {
				if (bossWait == 300) {
					LazerA8.play()
					if (Math.floor(Math.random() * 2) + 1 == 1) {
						bossAttack8Bullet1X = -100
					} else {
						bossAttack8Bullet1X = 1900
					}
					if (Math.floor(Math.random() * 2) + 1 == 1) {
						bossAttack8Bullet2X = -100
					} else {
						bossAttack8Bullet2X = 1900
					}
					if (Math.floor(Math.random() * 2) + 1 == 1) {
						bossAttack8Bullet3X = -100
					} else {
						bossAttack8Bullet3X = 1900
					}
					bossAttack8Bullet1Y = Math.floor(Math.random() * 900) + 1
					bossAttack8Bullet2Y = Math.floor(Math.random() * 900) + 1
					bossAttack8Bullet3Y = Math.floor(Math.random() * 900) + 1
					bossAttack8Bullet1XBeginingCalculation = 0
					bossAttack8Bullet1YBeginingCalculation = 0
					bossAttack8Bullet2XBeginingCalculation = 0
					bossAttack8Bullet2YBeginingCalculation = 0
					bossAttack8Bullet3XBeginingCalculation = 0
					bossAttack8Bullet3YBeginingCalculation = 0
				} else if (bossWait > 280) {

				}
				if (bossWait < 220 && bossWait >= 120) {
					bossAttack8Bullet1XBeginingCalculation = (-bossAttack8Bullet1X + playerX) / 12
					bossAttack8Bullet1YBeginingCalculation = (-bossAttack8Bullet1Y + playerY) / 12
				}
				if (bossWait < 160 && bossWait >= 60) {
					bossAttack8Bullet2XBeginingCalculation = (-bossAttack8Bullet2X + playerX) / 12
					bossAttack8Bullet2YBeginingCalculation = (-bossAttack8Bullet2Y + playerY) / 12
				}
				if (bossWait < 100 && bossWait >= 0) {
					bossAttack8Bullet3XBeginingCalculation = (-bossAttack8Bullet3X + playerX) / 12
					bossAttack8Bullet3YBeginingCalculation = (-bossAttack8Bullet3Y + playerY) / 12
				}
				bossWait--
			} else if (bossAttack9 == true) {
				ctx.fillStyle = "rgba(255, 155, 155, 0.5)"
				ctx.strokeStyle = "rgba(255, 155, 155, 0.5)"
				ctx.lineWidth = 30
				if (bossWait > 150) {
					bossAttack9PillarVertical1X = playerX + (playerSize / 2) - 20
					bossAttack9PillarHorizontal1Y = playerY + (playerSize / 2) - 20
					bossAttack9PillarDiagonalBottomLeft1X = playerX + (playerSize / 2) - 20
					bossAttack9PillarDiagonalBottomRight1X = playerX + (playerSize / 2) - 20
					ctx.fillRect(bossAttack9PillarVertical1X + screenShakeX, -1000 + screenShakeY, 40, 2000);
					ctx.fillRect(-1000 + screenShakeX, bossAttack9PillarHorizontal1Y + screenShakeY, 3800, 40);
					ctx.beginPath();
					ctx.moveTo(-1960 + bossAttack9PillarVertical1X + screenShakeX, 2000 + bossAttack9PillarHorizontal1Y + screenShakeY, 30, 30);
					ctx.lineTo(2040 + bossAttack9PillarVertical1X + screenShakeX, -2000 + bossAttack9PillarHorizontal1Y + screenShakeY, 30, 30);
					ctx.closePath();
					ctx.stroke();
					ctx.beginPath();
					ctx.moveTo(1960 + bossAttack9PillarVertical1X + screenShakeX, 2000 + bossAttack9PillarHorizontal1Y + screenShakeY, 30, 30);
					ctx.lineTo(-2040 + bossAttack9PillarVertical1X + screenShakeX, -2000 + bossAttack9PillarHorizontal1Y + screenShakeY, 30, 30);
					ctx.closePath();
					ctx.stroke();
				} else if (bossWait == 150) {
					LazerA9.stop()
					LazerA9.play()
					bossAttack9Pillar1Timer = 100
					bossAttack9Pillar1Bullet1Y = bossAttack9PillarHorizontal1Y
					bossAttack9Pillar1Bullet1X = bossAttack9PillarVertical1X - 20 * 100
					bossAttack9Pillar1Bullet2Y = bossAttack9PillarHorizontal1Y - Math.sqrt(200) * 100
					bossAttack9Pillar1Bullet2X = bossAttack9PillarVertical1X - Math.sqrt(200) * 100
					bossAttack9Pillar1Bullet3Y = bossAttack9PillarHorizontal1Y - 20 * 100
					bossAttack9Pillar1Bullet3X = bossAttack9PillarVertical1X
					bossAttack9Pillar1Bullet4Y = bossAttack9PillarHorizontal1Y - Math.sqrt(200) * 100
					bossAttack9Pillar1Bullet4X = bossAttack9PillarVertical1X + Math.sqrt(200) * 100
					bossAttack9Pillar1Bullet5Y = bossAttack9PillarHorizontal1Y
					bossAttack9Pillar1Bullet5X = bossAttack9PillarVertical1X + 20 * 100
					bossAttack9Pillar1Bullet6Y = bossAttack9PillarHorizontal1Y + Math.sqrt(200) * 100
					bossAttack9Pillar1Bullet6X = bossAttack9PillarVertical1X + Math.sqrt(200) * 100
					bossAttack9Pillar1Bullet7Y = bossAttack9PillarHorizontal1Y + 20 * 100
					bossAttack9Pillar1Bullet7X = bossAttack9PillarVertical1X
					bossAttack9Pillar1Bullet8Y = bossAttack9PillarHorizontal1Y + Math.sqrt(200) * 100
					bossAttack9Pillar1Bullet8X = bossAttack9PillarVertical1X - Math.sqrt(200) * 100
				} else if (bossWait > 90 && bossWait < 120) {
					bossAttack9PillarVertical1X = playerX + (playerSize / 2) - 20
					bossAttack9PillarHorizontal1Y = playerY + (playerSize / 2) - 20
					bossAttack9PillarDiagonalBottomLeft1X = playerX + (playerSize / 2) - 20
					bossAttack9PillarDiagonalBottomRight1X = playerX + (playerSize / 2) - 20
					ctx.fillRect(bossAttack9PillarVertical1X + screenShakeX, -1000 + screenShakeY, 40, 2000);
					ctx.fillRect(-1000 + screenShakeX, bossAttack9PillarHorizontal1Y + screenShakeY, 3800, 40);
					ctx.beginPath();
					ctx.moveTo(-1960 + bossAttack9PillarVertical1X + screenShakeX, 2000 + bossAttack9PillarHorizontal1Y + screenShakeY, 30, 30);
					ctx.lineTo(2040 + bossAttack9PillarVertical1X + screenShakeX, -2000 + bossAttack9PillarHorizontal1Y + screenShakeY, 30, 30);
					ctx.closePath();
					ctx.stroke();
					ctx.beginPath();
					ctx.moveTo(1960 + bossAttack9PillarVertical1X + screenShakeX, 2000 + bossAttack9PillarHorizontal1Y + screenShakeY, 30, 30);
					ctx.lineTo(-2040 + bossAttack9PillarVertical1X + screenShakeX, -2000 + bossAttack9PillarHorizontal1Y + screenShakeY, 30, 30);
					ctx.closePath();
					ctx.stroke();
				} else if (bossWait == 90) {
					LazerA9.stop()
					LazerA9.play()
					bossAttack9Pillar2Timer = 100
					bossAttack9Pillar2Bullet1Y = bossAttack9PillarHorizontal1Y
					bossAttack9Pillar2Bullet1X = bossAttack9PillarVertical1X - 20 * 100
					bossAttack9Pillar2Bullet2Y = bossAttack9PillarHorizontal1Y - Math.sqrt(200) * 100
					bossAttack9Pillar2Bullet2X = bossAttack9PillarVertical1X - Math.sqrt(200) * 100
					bossAttack9Pillar2Bullet3Y = bossAttack9PillarHorizontal1Y - 20 * 100
					bossAttack9Pillar2Bullet3X = bossAttack9PillarVertical1X
					bossAttack9Pillar2Bullet4Y = bossAttack9PillarHorizontal1Y - Math.sqrt(200) * 100
					bossAttack9Pillar2Bullet4X = bossAttack9PillarVertical1X + Math.sqrt(200) * 100
					bossAttack9Pillar2Bullet5Y = bossAttack9PillarHorizontal1Y
					bossAttack9Pillar2Bullet5X = bossAttack9PillarVertical1X + 20 * 100
					bossAttack9Pillar2Bullet6Y = bossAttack9PillarHorizontal1Y + Math.sqrt(200) * 100
					bossAttack9Pillar2Bullet6X = bossAttack9PillarVertical1X + Math.sqrt(200) * 100
					bossAttack9Pillar2Bullet7Y = bossAttack9PillarHorizontal1Y + 20 * 100
					bossAttack9Pillar2Bullet7X = bossAttack9PillarVertical1X
					bossAttack9Pillar2Bullet8Y = bossAttack9PillarHorizontal1Y + Math.sqrt(200) * 100
					bossAttack9Pillar2Bullet8X = bossAttack9PillarVertical1X - Math.sqrt(200) * 100
				} else if (bossWait > 30 && bossWait < 60) {
					bossAttack9PillarVertical1X = playerX + (playerSize / 2) - 20
					bossAttack9PillarHorizontal1Y = playerY + (playerSize / 2) - 20
					bossAttack9PillarDiagonalBottomLeft1X = playerX + (playerSize / 2) - 20
					bossAttack9PillarDiagonalBottomRight1X = playerX + (playerSize / 2) - 20
					ctx.fillRect(bossAttack9PillarVertical1X + screenShakeX, -1000 + screenShakeY, 40, 2000);
					ctx.fillRect(-1000 + screenShakeX, bossAttack9PillarHorizontal1Y + screenShakeY, 3800, 40);
					ctx.beginPath();
					ctx.moveTo(-1960 + bossAttack9PillarVertical1X + screenShakeX, 2000 + bossAttack9PillarHorizontal1Y + screenShakeY, 30, 30);
					ctx.lineTo(2040 + bossAttack9PillarVertical1X + screenShakeX, -2000 + bossAttack9PillarHorizontal1Y + screenShakeY, 30, 30);
					ctx.closePath();
					ctx.stroke();
					ctx.beginPath();
					ctx.moveTo(1960 + bossAttack9PillarVertical1X + screenShakeX, 2000 + bossAttack9PillarHorizontal1Y + screenShakeY, 30, 30);
					ctx.lineTo(-2040 + bossAttack9PillarVertical1X + screenShakeX, -2000 + bossAttack9PillarHorizontal1Y + screenShakeY, 30, 30);
					ctx.closePath();
					ctx.stroke();
				} else if (bossWait == 30) {
					LazerA9.stop()
					LazerA9.play()
					bossAttack9Pillar3Timer = 100
					bossAttack9Pillar3Bullet1Y = bossAttack9PillarHorizontal1Y
					bossAttack9Pillar3Bullet1X = bossAttack9PillarVertical1X - 20 * 100
					bossAttack9Pillar3Bullet2Y = bossAttack9PillarHorizontal1Y - Math.sqrt(200) * 100
					bossAttack9Pillar3Bullet2X = bossAttack9PillarVertical1X - Math.sqrt(200) * 100
					bossAttack9Pillar3Bullet3Y = bossAttack9PillarHorizontal1Y - 20 * 100
					bossAttack9Pillar3Bullet3X = bossAttack9PillarVertical1X
					bossAttack9Pillar3Bullet4Y = bossAttack9PillarHorizontal1Y - Math.sqrt(200) * 100
					bossAttack9Pillar3Bullet4X = bossAttack9PillarVertical1X + Math.sqrt(200) * 100
					bossAttack9Pillar3Bullet5Y = bossAttack9PillarHorizontal1Y
					bossAttack9Pillar3Bullet5X = bossAttack9PillarVertical1X + 20 * 100
					bossAttack9Pillar3Bullet6Y = bossAttack9PillarHorizontal1Y + Math.sqrt(200) * 100
					bossAttack9Pillar3Bullet6X = bossAttack9PillarVertical1X + Math.sqrt(200) * 100
					bossAttack9Pillar3Bullet7Y = bossAttack9PillarHorizontal1Y + 20 * 100
					bossAttack9Pillar3Bullet7X = bossAttack9PillarVertical1X
					bossAttack9Pillar3Bullet8Y = bossAttack9PillarHorizontal1Y + Math.sqrt(200) * 100
					bossAttack9Pillar3Bullet8X = bossAttack9PillarVertical1X - Math.sqrt(200) * 100
				}
				bossWait--
			} else if (bossAttack10 == true) {
				if (bossWait == 240) {
					bossAttack10PillarBlock1 = -34.5 - 20
					bossAttack10PillarBlock2 = -79 - 20
					bossAttack10PillarBlock3 = -123.5 - 20
					bossAttack10PillarBlock4 = -168 - 20
					bossAttack10PillarBlock5 = -212.5 - 20
					bossAttack10PillarBlock6 = -257 - 20
					bossAttack10PillarBlock7 = 1790 - 20
					bossAttack10PillarBlock8 = 1834.5 - 20
					bossAttack10PillarBlock9 = 1879 - 20
					bossAttack10PillarBlock10 = 1923.5 - 20
					bossAttack10PillarBlock11 = 1968 - 20
					bossAttack10PillarBlock12 = 2012.5 - 20

				}
				if (bossWait % 5 == 0) {
					bossAttack10PillarBlock1 += 44.5
					bossAttack10PillarBlock2 += 44.5
					bossAttack10PillarBlock3 += 44.5
					bossAttack10PillarBlock4 += 44.5
					bossAttack10PillarBlock5 += 44.5
					bossAttack10PillarBlock6 += 44.5
					bossAttack10PillarBlock7 -= 44.5
					bossAttack10PillarBlock8 -= 44.5
					bossAttack10PillarBlock9 -= 44.5
					bossAttack10PillarBlock10 -= 44.5
					bossAttack10PillarBlock11 -= 44.5
					bossAttack10PillarBlock12 -= 44.5
					console.log(bossAttack10PillarBlock1 + ' one')
				}
				if (bossWait <= 210 && bossWait % 5 == 0) {
					lazerA10++
					if (lazerA10 == 1) {
						LazerA10P1.stop()
						LazerA10P1.play()
					} else if (lazerA10 == 2) {
						LazerA10P2.stop()
						LazerA10P2.play()
					} else if (lazerA10 == 3) {
						LazerA10P3.stop()
						LazerA10P3.play()
					} else if (lazerA10 == 4) {
						LazerA10P4.stop()
						LazerA10P4.play()
					}
					if (lazerA10 > 4) {
						lazerA10 = 1
					}
				}
				ctx.fillStyle = "rgba(255, 48, 48, 0.1)"
				ctx.fillRect(bossAttack10PillarBlock1 + screenShakeX, -500 + screenShakeY, 30, 1500);
				ctx.fillRect(bossAttack10PillarBlock7 + screenShakeX, -500 + screenShakeY, 30, 1500);
				ctx.fillStyle = "rgba(255, 48, 48, 0.2)"
				ctx.fillRect(bossAttack10PillarBlock2 + screenShakeX, -500 + screenShakeY, 30, 1500);
				ctx.fillRect(bossAttack10PillarBlock8 + screenShakeX, -500 + screenShakeY, 30, 1500);
				ctx.fillStyle = "rgba(255, 48, 48, 0.3)"
				ctx.fillRect(bossAttack10PillarBlock3 + screenShakeX, -500 + screenShakeY, 30, 1500);
				ctx.fillRect(bossAttack10PillarBlock9 + screenShakeX, -500 + screenShakeY, 30, 1500);
				ctx.fillStyle = "rgba(255, 48, 48, 0.4)"
				ctx.fillRect(bossAttack10PillarBlock4 + screenShakeX, -500 + screenShakeY, 30, 1500);
				ctx.fillRect(bossAttack10PillarBlock10 + screenShakeX, -500 + screenShakeY, 30, 1500);
				ctx.fillStyle = "rgba(255, 48, 48, 0.5)"
				ctx.fillRect(bossAttack10PillarBlock5 + screenShakeX, -500 + screenShakeY, 30, 1500);
				ctx.fillRect(bossAttack10PillarBlock11 + screenShakeX, -500 + screenShakeY, 30, 1500);
				if (bossWait % 5 < 2) {
					ctx.fillStyle = "rgba(255, 200, 200, 0.8)"
				} else {
					ctx.fillStyle = "rgb(255, 48, 48)"
				}
				ctx.fillRect(bossAttack10PillarBlock6 + screenShakeX, -500 + screenShakeY, 30, 1500);
				ctx.fillRect(bossAttack10PillarBlock12 + screenShakeX, -500 + screenShakeY, 30, 1500);
				if (bossAttack10PillarBlock6 + playerSize >= playerX && playerX >= bossAttack10PillarBlock6 - 30) {
					damagePlayer()
				}
				if (bossAttack10PillarBlock12 + playerSize >= playerX && playerX >= bossAttack10PillarBlock12 - 30) {
					damagePlayer()
				}
				bossWait--
			}
			if (bossWait <= 0) { // Resets attacks, and tells the recent attack done
				fakeBossDeactivated = false
				if (bossAttack1 == true) {
					bossAttack1 = false
					bossRecentAttack = 1
				} else if (bossAttack2 == true) {
					bossAttack2 = false
					bossRecentAttack = 2
				} else if (bossAttack3 == true) {
					bossAttack3 = false
					bossRecentAttack = 3
				} else if (bossAttack4 == true) {
					bossAttack4 = false
					bossRecentAttack = 4
				} else if (bossAttack5 == true) {
					bossAttack5 = false
					bossRecentAttack = 5
				} else if (bossAttack6 == true) {
					bossAttack6 = false
					bossRecentAttack = 6
				} else if (bossAttack7 == true) {
					bossAttack7 = false
					bossAttack7Completed = true
				} else if (bossAttack8 == true) {
					bossAttack8 = false
					bossRecentAttack = 8
				} else if (bossAttack9 == true) {
					bossAttack9 = false
					bossRecentAttack = 9
				} else if (bossAttack10 == true) {
					bossAttack10 = false
					bossRecentAttack = 10
				}
			}
		}
		if (bossWait > 230 || bossAttack6 != true || playerAttacked == false) {
			if (fakeBossHealth > 0) {
				fakeBossHit = true
			} else {
				fakeBossHit = false
			}
		}

		// Attack 8 
		bossAttack8Bullet1X += bossAttack8Bullet1XBeginingCalculation
		bossAttack8Bullet1Y += bossAttack8Bullet1YBeginingCalculation
		bossAttack8Bullet2X += bossAttack8Bullet2XBeginingCalculation
		bossAttack8Bullet2Y += bossAttack8Bullet2YBeginingCalculation
		bossAttack8Bullet3X += bossAttack8Bullet3XBeginingCalculation
		bossAttack8Bullet3Y += bossAttack8Bullet3YBeginingCalculation
		ctx.fillStyle = "#ff0000"
		ctx.fillRect(bossAttack8Bullet1X + screenShakeX, bossAttack8Bullet1Y + screenShakeY, bossAttack8BulletSize, bossAttack8BulletSize)
		ctx.fillRect(bossAttack8Bullet2X + screenShakeX, bossAttack8Bullet2Y + screenShakeY, bossAttack8BulletSize, bossAttack8BulletSize)
		ctx.fillRect(bossAttack8Bullet3X + screenShakeX, bossAttack8Bullet3Y + screenShakeY, bossAttack8BulletSize, bossAttack8BulletSize)

		if (bossAttack8Bullet1X + playerSize >= playerX && playerX >= bossAttack8Bullet1X - bossAttack8BulletSize && bossAttack8Bullet1Y + playerSize >= playerY && playerY >= bossAttack8Bullet1Y - bossAttack8BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack8Bullet2X + playerSize >= playerX && playerX >= bossAttack8Bullet2X - bossAttack8BulletSize && bossAttack8Bullet2Y + playerSize >= playerY && playerY >= bossAttack8Bullet2Y - bossAttack8BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack8Bullet3X + playerSize >= playerX && playerX >= bossAttack8Bullet3X - bossAttack8BulletSize && bossAttack8Bullet3Y + playerSize >= playerY && playerY >= bossAttack8Bullet3Y - bossAttack8BulletSize) {
			smallDamagePlayer()
		}

		// Attack 9
		if (bossAttack9Pillar1Timer > 0) {
			bossAttack9Pillar1Bullet1X += 40
			bossAttack9Pillar1Bullet2Y += Math.sqrt(800)
			bossAttack9Pillar1Bullet2X += Math.sqrt(800)
			bossAttack9Pillar1Bullet3Y += 40
			bossAttack9Pillar1Bullet4Y += Math.sqrt(800)
			bossAttack9Pillar1Bullet4X -= Math.sqrt(800)
			bossAttack9Pillar1Bullet5X -= 40
			bossAttack9Pillar1Bullet6Y -= Math.sqrt(800)
			bossAttack9Pillar1Bullet6X -= Math.sqrt(800)
			bossAttack9Pillar1Bullet7Y -= 40
			bossAttack9Pillar1Bullet8Y -= Math.sqrt(800)
			bossAttack9Pillar1Bullet8X += Math.sqrt(800)
			bossAttack9Pillar1Timer--
		}
		if (bossAttack9Pillar2Timer > 0) {
			bossAttack9Pillar2Bullet1X += 40
			bossAttack9Pillar2Bullet2Y += Math.sqrt(800)
			bossAttack9Pillar2Bullet2X += Math.sqrt(800)
			bossAttack9Pillar2Bullet3Y += 40
			bossAttack9Pillar2Bullet4Y += Math.sqrt(800)
			bossAttack9Pillar2Bullet4X -= Math.sqrt(800)
			bossAttack9Pillar2Bullet5X -= 40
			bossAttack9Pillar2Bullet6Y -= Math.sqrt(800)
			bossAttack9Pillar2Bullet6X -= Math.sqrt(800)
			bossAttack9Pillar2Bullet7Y -= 40
			bossAttack9Pillar2Bullet8Y -= Math.sqrt(800)
			bossAttack9Pillar2Bullet8X += Math.sqrt(800)
			bossAttack9Pillar2Timer--
		}
		if (bossAttack9Pillar3Timer > 0) {
			bossAttack9Pillar3Bullet1X += 40
			bossAttack9Pillar3Bullet2Y += Math.sqrt(800)
			bossAttack9Pillar3Bullet2X += Math.sqrt(800)
			bossAttack9Pillar3Bullet3Y += 40
			bossAttack9Pillar3Bullet4Y += Math.sqrt(800)
			bossAttack9Pillar3Bullet4X -= Math.sqrt(800)
			bossAttack9Pillar3Bullet5X -= 40
			bossAttack9Pillar3Bullet6Y -= Math.sqrt(800)
			bossAttack9Pillar3Bullet6X -= Math.sqrt(800)
			bossAttack9Pillar3Bullet7Y -= 40
			bossAttack9Pillar3Bullet8Y -= Math.sqrt(800)
			bossAttack9Pillar3Bullet8X += Math.sqrt(800)
			bossAttack9Pillar3Timer--
		}

		ctx.fillRect(bossAttack9Pillar1Bullet1X + screenShakeX, bossAttack9Pillar1Bullet1Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)
		ctx.fillRect(bossAttack9Pillar1Bullet2X + screenShakeX, bossAttack9Pillar1Bullet2Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)
		ctx.fillRect(bossAttack9Pillar1Bullet3X + screenShakeX, bossAttack9Pillar1Bullet3Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)
		ctx.fillRect(bossAttack9Pillar1Bullet4X + screenShakeX, bossAttack9Pillar1Bullet4Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)
		ctx.fillRect(bossAttack9Pillar1Bullet5X + screenShakeX, bossAttack9Pillar1Bullet5Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)
		ctx.fillRect(bossAttack9Pillar1Bullet6X + screenShakeX, bossAttack9Pillar1Bullet6Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)
		ctx.fillRect(bossAttack9Pillar1Bullet7X + screenShakeX, bossAttack9Pillar1Bullet7Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)
		ctx.fillRect(bossAttack9Pillar1Bullet8X + screenShakeX, bossAttack9Pillar1Bullet8Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)

		ctx.fillRect(bossAttack9Pillar2Bullet1X + screenShakeX, bossAttack9Pillar2Bullet1Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)
		ctx.fillRect(bossAttack9Pillar2Bullet2X + screenShakeX, bossAttack9Pillar2Bullet2Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)
		ctx.fillRect(bossAttack9Pillar2Bullet3X + screenShakeX, bossAttack9Pillar2Bullet3Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)
		ctx.fillRect(bossAttack9Pillar2Bullet4X + screenShakeX, bossAttack9Pillar2Bullet4Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)
		ctx.fillRect(bossAttack9Pillar2Bullet5X + screenShakeX, bossAttack9Pillar2Bullet5Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)
		ctx.fillRect(bossAttack9Pillar2Bullet6X + screenShakeX, bossAttack9Pillar2Bullet6Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)
		ctx.fillRect(bossAttack9Pillar2Bullet7X + screenShakeX, bossAttack9Pillar2Bullet7Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)
		ctx.fillRect(bossAttack9Pillar2Bullet8X + screenShakeX, bossAttack9Pillar2Bullet8Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)

		ctx.fillRect(bossAttack9Pillar3Bullet1X + screenShakeX, bossAttack9Pillar3Bullet1Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)
		ctx.fillRect(bossAttack9Pillar3Bullet2X + screenShakeX, bossAttack9Pillar3Bullet2Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)
		ctx.fillRect(bossAttack9Pillar3Bullet3X + screenShakeX, bossAttack9Pillar3Bullet3Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)
		ctx.fillRect(bossAttack9Pillar3Bullet4X + screenShakeX, bossAttack9Pillar3Bullet4Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)
		ctx.fillRect(bossAttack9Pillar3Bullet5X + screenShakeX, bossAttack9Pillar3Bullet5Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)
		ctx.fillRect(bossAttack9Pillar3Bullet6X + screenShakeX, bossAttack9Pillar3Bullet6Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)
		ctx.fillRect(bossAttack9Pillar3Bullet7X + screenShakeX, bossAttack9Pillar3Bullet7Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)
		ctx.fillRect(bossAttack9Pillar3Bullet8X + screenShakeX, bossAttack9Pillar3Bullet8Y + screenShakeY, bossAttack9BulletSize, bossAttack9BulletSize)

		if (bossAttack9Pillar1Bullet1X + playerSize >= playerX && playerX >= bossAttack9Pillar1Bullet1X - bossAttack9BulletSize && bossAttack9Pillar1Bullet1Y + playerSize >= playerY && playerY >= bossAttack9Pillar1Bullet1Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack9Pillar1Bullet2X + playerSize >= playerX && playerX >= bossAttack9Pillar1Bullet2X - bossAttack9BulletSize && bossAttack9Pillar1Bullet2Y + playerSize >= playerY && playerY >= bossAttack9Pillar1Bullet2Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack9Pillar1Bullet3X + playerSize >= playerX && playerX >= bossAttack9Pillar1Bullet3X - bossAttack9BulletSize && bossAttack9Pillar1Bullet3Y + playerSize >= playerY && playerY >= bossAttack9Pillar1Bullet3Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack9Pillar1Bullet4X + playerSize >= playerX && playerX >= bossAttack9Pillar1Bullet4X - bossAttack9BulletSize && bossAttack9Pillar1Bullet4Y + playerSize >= playerY && playerY >= bossAttack9Pillar1Bullet4Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack9Pillar1Bullet5X + playerSize >= playerX && playerX >= bossAttack9Pillar1Bullet5X - bossAttack9BulletSize && bossAttack9Pillar1Bullet5Y + playerSize >= playerY && playerY >= bossAttack9Pillar1Bullet5Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack9Pillar1Bullet6X + playerSize >= playerX && playerX >= bossAttack9Pillar1Bullet6X - bossAttack9BulletSize && bossAttack9Pillar1Bullet6Y + playerSize >= playerY && playerY >= bossAttack9Pillar1Bullet6Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack9Pillar1Bullet7X + playerSize >= playerX && playerX >= bossAttack9Pillar1Bullet7X - bossAttack9BulletSize && bossAttack9Pillar1Bullet7Y + playerSize >= playerY && playerY >= bossAttack9Pillar1Bullet7Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack9Pillar1Bullet8X + playerSize >= playerX && playerX >= bossAttack9Pillar1Bullet8X - bossAttack9BulletSize && bossAttack9Pillar1Bullet8Y + playerSize >= playerY && playerY >= bossAttack9Pillar1Bullet8Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack9Pillar2Bullet1X + playerSize >= playerX && playerX >= bossAttack9Pillar2Bullet1X - bossAttack9BulletSize && bossAttack9Pillar2Bullet1Y + playerSize >= playerY && playerY >= bossAttack9Pillar2Bullet1Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack9Pillar2Bullet2X + playerSize >= playerX && playerX >= bossAttack9Pillar2Bullet2X - bossAttack9BulletSize && bossAttack9Pillar2Bullet2Y + playerSize >= playerY && playerY >= bossAttack9Pillar2Bullet2Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack9Pillar2Bullet3X + playerSize >= playerX && playerX >= bossAttack9Pillar2Bullet3X - bossAttack9BulletSize && bossAttack9Pillar2Bullet3Y + playerSize >= playerY && playerY >= bossAttack9Pillar2Bullet3Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack9Pillar2Bullet4X + playerSize >= playerX && playerX >= bossAttack9Pillar2Bullet4X - bossAttack9BulletSize && bossAttack9Pillar2Bullet4Y + playerSize >= playerY && playerY >= bossAttack9Pillar2Bullet4Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack9Pillar2Bullet5X + playerSize >= playerX && playerX >= bossAttack9Pillar2Bullet5X - bossAttack9BulletSize && bossAttack9Pillar2Bullet5Y + playerSize >= playerY && playerY >= bossAttack9Pillar2Bullet5Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack9Pillar2Bullet6X + playerSize >= playerX && playerX >= bossAttack9Pillar2Bullet6X - bossAttack9BulletSize && bossAttack9Pillar2Bullet6Y + playerSize >= playerY && playerY >= bossAttack9Pillar2Bullet6Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack9Pillar2Bullet7X + playerSize >= playerX && playerX >= bossAttack9Pillar2Bullet7X - bossAttack9BulletSize && bossAttack9Pillar2Bullet7Y + playerSize >= playerY && playerY >= bossAttack9Pillar2Bullet7Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack9Pillar2Bullet8X + playerSize >= playerX && playerX >= bossAttack9Pillar2Bullet8X - bossAttack9BulletSize && bossAttack9Pillar2Bullet8Y + playerSize >= playerY && playerY >= bossAttack9Pillar2Bullet8Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack9Pillar3Bullet1X + playerSize >= playerX && playerX >= bossAttack9Pillar3Bullet1X - bossAttack9BulletSize && bossAttack9Pillar3Bullet1Y + playerSize >= playerY && playerY >= bossAttack9Pillar3Bullet1Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack9Pillar3Bullet2X + playerSize >= playerX && playerX >= bossAttack9Pillar3Bullet2X - bossAttack9BulletSize && bossAttack9Pillar3Bullet2Y + playerSize >= playerY && playerY >= bossAttack9Pillar3Bullet2Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack9Pillar3Bullet3X + playerSize >= playerX && playerX >= bossAttack9Pillar3Bullet3X - bossAttack9BulletSize && bossAttack9Pillar3Bullet3Y + playerSize >= playerY && playerY >= bossAttack9Pillar3Bullet3Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack9Pillar3Bullet4X + playerSize >= playerX && playerX >= bossAttack9Pillar3Bullet4X - bossAttack9BulletSize && bossAttack9Pillar3Bullet4Y + playerSize >= playerY && playerY >= bossAttack9Pillar3Bullet4Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack9Pillar3Bullet5X + playerSize >= playerX && playerX >= bossAttack9Pillar3Bullet5X - bossAttack9BulletSize && bossAttack9Pillar3Bullet5Y + playerSize >= playerY && playerY >= bossAttack9Pillar3Bullet5Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack9Pillar3Bullet6X + playerSize >= playerX && playerX >= bossAttack9Pillar3Bullet6X - bossAttack9BulletSize && bossAttack9Pillar3Bullet6Y + playerSize >= playerY && playerY >= bossAttack9Pillar3Bullet6Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack9Pillar3Bullet7X + playerSize >= playerX && playerX >= bossAttack9Pillar3Bullet7X - bossAttack9BulletSize && bossAttack9Pillar3Bullet7Y + playerSize >= playerY && playerY >= bossAttack9Pillar3Bullet7Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}
		if (bossAttack9Pillar3Bullet8X + playerSize >= playerX && playerX >= bossAttack9Pillar3Bullet8X - bossAttack9BulletSize && bossAttack9Pillar3Bullet8Y + playerSize >= playerY && playerY >= bossAttack9Pillar3Bullet8Y - bossAttack9BulletSize) {
			smallDamagePlayer()
		}

		// Passive Attacks
		ctx.lineWidth = 10;
		if (bossPhase == 1) {
			bossPassiveAttack1X = -1000000
			bossPassiveAttack1Timer = 160
		} else if (bossPhase == 2 || bossPhase == 3) {
			if (bossPassiveAttack1Timer == 60) {
				this.sound.currentTime = 0.2
			}
			if (bossPassiveAttack1Timer == 150) {
				ChainHit.play()
			}
			if (bossPassiveAttack1Timer == 60) {
				ChainWarning.play()
			}
			if (bossPassiveAttack1Timer <= 60) {
				if (Math.floor(bossPassiveAttack1Timer / 4) % 2 == 0) {
					bossPassiveIndicationTransperency = 0
				} else {
					bossPassiveIndicationTransperency = 1
				}
				ctx.lineWidth = 5;
				ctx.fillStyle = 'rgba(255, ' + bossPassiveIndicationColor + ', ' + bossPassiveIndicationColor + ', ' + (bossPassiveIndicationTransperency - 0.75) + ') ';
				ctx.strokeStyle = 'rgb(255, ' + bossPassiveIndicationColor + ', ' + bossPassiveIndicationColor + ', ' + bossPassiveIndicationTransperency + ') ';
				ctx.fillRect(0 + screenShakeX, 560 - bossPasiveLanePhase3 + screenShakeY, cnv.width, 240);
				ctx.strokeRect(0 + screenShakeX, 560 - bossPasiveLanePhase3 + screenShakeY, cnv.width, 240);
				ctx.fillRect(0 + screenShakeX, 560 - bossPasiveLanePhase3 + screenShakeY, cnv.width, 240);
				ctx.strokeRect(0 + screenShakeX, 560 - bossPasiveLanePhase3 + screenShakeY, cnv.width, 240);
				ctx.beginPath();
				ctx.moveTo(915 + screenShakeX, 600 - bossPasiveLanePhase3 + screenShakeY, 30, 30);
				ctx.lineTo(885 + screenShakeX, 600 - bossPasiveLanePhase3 + screenShakeY, 30, 30);
				ctx.lineTo(890 + screenShakeX, 700 - bossPasiveLanePhase3 + screenShakeY, 30, 30);
				ctx.lineTo(910 + screenShakeX, 700 - bossPasiveLanePhase3 + screenShakeY, 30, 30);
				ctx.closePath();
				ctx.stroke();
				ctx.fill();
				ctx.beginPath();
				ctx.moveTo(908.5 + screenShakeX, 730 - bossPasiveLanePhase3 + screenShakeY, 30, 30);
				ctx.lineTo(891.5 + screenShakeX, 730 - bossPasiveLanePhase3 + screenShakeY, 30, 30);
				ctx.lineTo(892.5 + screenShakeX, 750 - bossPasiveLanePhase3 + screenShakeY, 30, 30);
				ctx.lineTo(907.5 + screenShakeX, 750 - bossPasiveLanePhase3 + screenShakeY, 30, 30);
				ctx.closePath();
				ctx.stroke();
				ctx.fill();
			} else {
				ChainWarning.stop()
			}

			bossPassiveIndicationTransperency = 1
			if (bossPassiveAttack1Timer % 2 == 0) {
				ctx.fillStyle = '#ff4a46'
				ctx.strokeStyle = '#f4413b'
			} else {
				ctx.fillStyle = '#c71710'
				ctx.strokeStyle = '#d2231c'
			}

			ctx.lineWidth = 15;

			for (let i = 0; i < bossPassiveChainLength; i++) {
				ctx.beginPath();
				ctx.moveTo(bossPassiveAttack1X + 60 + screenShakeX, bossPassiveAttack1Y + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + screenShakeX, bossPassiveAttack1Y + 60 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + screenShakeX, bossPassiveAttack1Y + 120 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 60 + screenShakeX, bossPassiveAttack1Y + 120 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 60 + screenShakeX, bossPassiveAttack1Y + 90 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 90 + screenShakeX, bossPassiveAttack1Y + 60 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 270 + screenShakeX, bossPassiveAttack1Y + 60 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 300 + screenShakeX, bossPassiveAttack1Y + 90 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 300 + screenShakeX, bossPassiveAttack1Y + 150 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 270 + screenShakeX, bossPassiveAttack1Y + 180 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 90 + screenShakeX, bossPassiveAttack1Y + 180 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 60 + screenShakeX, bossPassiveAttack1Y + 150 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 60 + screenShakeX, bossPassiveAttack1Y + 120 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + screenShakeX, bossPassiveAttack1Y + 120 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + screenShakeX, bossPassiveAttack1Y + 180 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 60 + screenShakeX, bossPassiveAttack1Y + 240 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 300 + screenShakeX, bossPassiveAttack1Y + 240 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 360 + screenShakeX, bossPassiveAttack1Y + 180 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 360 + screenShakeX, bossPassiveAttack1Y + 60 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 300 + screenShakeX, bossPassiveAttack1Y + screenShakeY, 30, 30);
				ctx.closePath();
				ctx.stroke();
				ctx.fill();

				ctx.beginPath();
				ctx.moveTo(bossPassiveAttack1X + 240 + screenShakeX, bossPassiveAttack1Y + 90 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 240 + screenShakeX, bossPassiveAttack1Y + 150 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 300 + screenShakeX, bossPassiveAttack1Y + 150 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 300 + screenShakeX, bossPassiveAttack1Y + 90 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 300 + screenShakeX, bossPassiveAttack1Y + 150 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 540 + screenShakeX, bossPassiveAttack1Y + 150 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 540 + screenShakeX, bossPassiveAttack1Y + 90 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 540 + screenShakeX, bossPassiveAttack1Y + 150 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 600 + screenShakeX, bossPassiveAttack1Y + 150 + screenShakeY, 30, 30);
				ctx.lineTo(bossPassiveAttack1X + 600 + screenShakeX, bossPassiveAttack1Y + 90 + screenShakeY, 30, 30);
				ctx.closePath();
				ctx.stroke();
				ctx.fill();
				bossPassiveAttack1X += 480
			}
			if (playerHealth > 0) {
				bossPassiveAttack1X -= (480 * bossPassiveChainLength)
			} else {
				bossPassiveAttack1X -= (480 * bossPassiveChainLength) - 333
			}
			if (bossPassiveAttack1Timer < 75) {
				screenShakeIntensity += Math.abs(bossPassiveAttack1Timer - 75) / 120
			} else if (bossPassiveAttack1Timer < 1040 && bossPassiveAttack1Timer >= 965 && bossPhase == 2) {
				screenShakeIntensity += (bossPassiveAttack1Timer - 964) / 120
			}
			if (bossPassiveAttack1Timer == 70) {
				if (bossPhase == 3) {
					bossPasiveLanePhase3 = Math.floor(Math.random() * 2) + 1
					if (bossPasiveLanePhase3 == 1) {
						bossPasiveLanePhase3 = 210
					} else {
						bossPasiveLanePhase3 = 0
					}
				}
			}
			if (bossPhase == 2) {
				bossPassiveAttack1Y = 560 + (Math.random() * 20 - 10)
				bossPasiveLanePhase3 = 0
			} else if (bossPhase == 3) {
				bossPassiveAttack1Y = 560 - bossPasiveLanePhase3 + (Math.random() * 20 - 10)
			}
			if (bossPassiveAttack1X >= -480 * bossPassiveChainLength) {
				screenShakeIntensity = 20
				if (playerX >= bossPassiveAttack1X && bossPassiveAttack1X >= playerX - 480 * bossPassiveChainLength && playerY + playerSize >= bossPassiveAttack1Y && bossPassiveAttack1Y + 240 >= playerY) {
					bigDamagePlayer()
					if (bossPassiveAttack1Y + 20 > 560) {
						playerVelocityY = -30
					} else {
						playerVelocityY = 30
					}
					playerVelocityX = -20
				}
			}
		}
		ctx.lineWidth = 1;

		// Fake boss (Phase 2)
		if (playerHealth > 0) {
			if (fakeBossHit == true && fakeBossHealth > 0) {
				if (bossPhase == 2) {
					if (fakeBossAttackTimer % 100 == 30) {
						fakeBossXAfterCalculation = Math.floor(Math.random() * 1100) + 300 // 1700 is the whole screen (inside number + outside number/2)
						fakeBossYAfterCalculation = Math.floor(Math.random() * 500) + 100 // 700 is the whole screen
					}
				} else {
					if (fakeBossAttackTimer % 70 == 30) {
						fakeBossXAfterCalculation = Math.floor(Math.random() * 1100) + 300 // 1700 is the whole screen (inside number + outside number/2)
						fakeBossYAfterCalculation = Math.floor(Math.random() * 500) + 100 // 700 is the whole screen
					}
				}
				if (fakeBossAttackTimer < 0) {
					if (bossPhase == 2) {
						fakeBossAttackTimer = 100
					} else {
						fakeBossAttackTimer = 70
					}
					FakeAttack.stop()
					FakeAttack.play()
					fakeBossBullet1X = fakeBossX + fakeBossSize / 2 - fakeBossBulletSize / 2
					fakeBossBullet1Y = fakeBossY + fakeBossSize / 2 - fakeBossBulletSize / 2
					fakeBossBullet2X = fakeBossX + fakeBossSize / 2 - fakeBossBulletSize / 2
					fakeBossBullet2Y = fakeBossY + fakeBossSize / 2 - fakeBossBulletSize / 2
					fakeBossBullet3X = fakeBossX + fakeBossSize / 2 - fakeBossBulletSize / 2
					fakeBossBullet3Y = fakeBossY + fakeBossSize / 2 - fakeBossBulletSize / 2
					fakeBossBullet4X = fakeBossX + fakeBossSize / 2 - fakeBossBulletSize / 2
					fakeBossBullet4Y = fakeBossY + fakeBossSize / 2 - fakeBossBulletSize / 2
					fakeBossBullet5X = fakeBossX + fakeBossSize / 2 - fakeBossBulletSize / 2
					fakeBossBullet5Y = fakeBossY + fakeBossSize / 2 - fakeBossBulletSize / 2
					fakeBossBullet6X = fakeBossX + fakeBossSize / 2 - fakeBossBulletSize / 2
					fakeBossBullet6Y = fakeBossY + fakeBossSize / 2 - fakeBossBulletSize / 2
					fakeBossBullet7X = fakeBossX + fakeBossSize / 2 - fakeBossBulletSize / 2
					fakeBossBullet7Y = fakeBossY + fakeBossSize / 2 - fakeBossBulletSize / 2
					fakeBossBullet8X = fakeBossX + fakeBossSize / 2 - fakeBossBulletSize / 2
					fakeBossBullet8Y = fakeBossY + fakeBossSize / 2 - fakeBossBulletSize / 2
				}
				if (fakeBossBullet1X + playerSize >= playerX && playerX >= fakeBossBullet1X - fakeBossBulletSize && fakeBossBullet1Y + playerSize >= playerY && playerY >= fakeBossBullet1Y - fakeBossBulletSize) {
					smallDamagePlayer()
				}
				if (fakeBossBullet2X + playerSize >= playerX && playerX >= fakeBossBullet2X - fakeBossBulletSize && fakeBossBullet2Y + playerSize >= playerY && playerY >= fakeBossBullet2Y - fakeBossBulletSize) {
					smallDamagePlayer()
				}
				if (fakeBossBullet3X + playerSize >= playerX && playerX >= fakeBossBullet3X - fakeBossBulletSize && fakeBossBullet3Y + playerSize >= playerY && playerY >= fakeBossBullet3Y - fakeBossBulletSize) {
					smallDamagePlayer()
				}
				if (fakeBossBullet4X + playerSize >= playerX && playerX >= fakeBossBullet4X - fakeBossBulletSize && fakeBossBullet4Y + playerSize >= playerY && playerY >= fakeBossBullet4Y - fakeBossBulletSize) {
					smallDamagePlayer()
				}
				if (fakeBossBullet5X + playerSize >= playerX && playerX >= fakeBossBullet5X - fakeBossBulletSize && fakeBossBullet5Y + playerSize >= playerY && playerY >= fakeBossBullet5Y - fakeBossBulletSize) {
					smallDamagePlayer()
				}
				if (fakeBossBullet6X + playerSize >= playerX && playerX >= fakeBossBullet6X - fakeBossBulletSize && fakeBossBullet6Y + playerSize >= playerY && playerY >= fakeBossBullet6Y - fakeBossBulletSize) {
					smallDamagePlayer()
				}
				if (fakeBossBullet7X + playerSize >= playerX && playerX >= fakeBossBullet7X - fakeBossBulletSize && fakeBossBullet7Y + playerSize >= playerY && playerY >= fakeBossBullet7Y - fakeBossBulletSize) {
					smallDamagePlayer()
				}
				if (fakeBossBullet8X + playerSize >= playerX && playerX >= fakeBossBullet8X - fakeBossBulletSize && fakeBossBullet8Y + playerSize >= playerY && playerY >= fakeBossBullet8Y - fakeBossBulletSize) {
					smallDamagePlayer()
				}

				fakeBossXBeginingCalculation = (-fakeBossX + fakeBossXAfterCalculation) / 9
				fakeBossYBeginingCalculation = (-fakeBossY + fakeBossYAfterCalculation) / 9
				fakeBossX += fakeBossXBeginingCalculation
				fakeBossY += fakeBossYBeginingCalculation
				fakeBossAttackTimer--
			}
			if (bossPhase == 2) {
				fakeBossBullet1X -= 20
				fakeBossBullet2X -= Math.sqrt(200)
				fakeBossBullet2Y -= Math.sqrt(200)
				fakeBossBullet3Y -= 20
				fakeBossBullet4X += Math.sqrt(200)
				fakeBossBullet4Y -= Math.sqrt(200)
				fakeBossBullet5X += 20
				fakeBossBullet6X += Math.sqrt(200)
				fakeBossBullet6Y += Math.sqrt(200)
				fakeBossBullet7Y += 20
				fakeBossBullet8X -= Math.sqrt(200)
				fakeBossBullet8Y += Math.sqrt(200)
			} else {
				fakeBossBullet1X -= 30
				fakeBossBullet2X -= Math.sqrt(450)
				fakeBossBullet2Y -= Math.sqrt(450)
				fakeBossBullet3Y -= 30
				fakeBossBullet4X += Math.sqrt(450)
				fakeBossBullet4Y -= Math.sqrt(450)
				fakeBossBullet5X += 30
				fakeBossBullet6X += Math.sqrt(450)
				fakeBossBullet6Y += Math.sqrt(450)
				fakeBossBullet7Y += 30
				fakeBossBullet8X -= Math.sqrt(450)
				fakeBossBullet8Y += Math.sqrt(450)
			}
		}
		ctx.fillRect(fakeBossBullet1X + screenShakeX, fakeBossBullet1Y + screenShakeY, fakeBossBulletSize, fakeBossBulletSize);
		ctx.fillRect(fakeBossBullet2X + screenShakeX, fakeBossBullet2Y + screenShakeY, fakeBossBulletSize, fakeBossBulletSize);
		ctx.fillRect(fakeBossBullet3X + screenShakeX, fakeBossBullet3Y + screenShakeY, fakeBossBulletSize, fakeBossBulletSize);
		ctx.fillRect(fakeBossBullet4X + screenShakeX, fakeBossBullet4Y + screenShakeY, fakeBossBulletSize, fakeBossBulletSize);
		ctx.fillRect(fakeBossBullet5X + screenShakeX, fakeBossBullet5Y + screenShakeY, fakeBossBulletSize, fakeBossBulletSize);
		ctx.fillRect(fakeBossBullet6X + screenShakeX, fakeBossBullet6Y + screenShakeY, fakeBossBulletSize, fakeBossBulletSize);
		ctx.fillRect(fakeBossBullet7X + screenShakeX, fakeBossBullet7Y + screenShakeY, fakeBossBulletSize, fakeBossBulletSize);
		ctx.fillRect(fakeBossBullet8X + screenShakeX, fakeBossBullet8Y + screenShakeY, fakeBossBulletSize, fakeBossBulletSize);

		ctx.beginPath();
		ctx.moveTo(bossPassiveAttack1X + 240 + screenShakeX, bossPassiveAttack1Y + 90 + screenShakeY, 30, 30);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();

		// Spike Wall (Phase 3)
		if (bossPhase == 3) {
			for (let i = 0; i <= 100; i++) {
				ctx.beginPath();
				ctx.moveTo(bossAttack7SpikeWallLeftX + screenShakeX, i * 50 - 50 + bossAttack7SpikeWallLeftY + screenShakeY, 50, 50);
				ctx.lineTo(bossAttack7SpikeWallLeftX + Math.sqrt(1875) + screenShakeX, i * 50 - 25 + bossAttack7SpikeWallLeftY + screenShakeY, 50, 50);
				ctx.lineTo(bossAttack7SpikeWallLeftX + screenShakeX, i * 50 + bossAttack7SpikeWallLeftY + screenShakeY, 50, 50);
				ctx.closePath();
				ctx.stroke();
				ctx.fill();
			}
			ctx.fillRect(bossAttack7SpikeWallLeftX - 1000 + screenShakeX, bossAttack7SpikeWallLeftY + screenShakeY, 1000, 5000);
			bossAttack7SpikeWallLeftY -= 70
			if (bossAttack7SpikeWallLeftY < -2500) {
				bossAttack7SpikeWallLeftY = 0
			}
			for (let i = 0; i >= -100; i--) {
				ctx.beginPath();
				ctx.moveTo(bossAttack7SpikeWallRightX + screenShakeX, i * 50 - 50 + bossAttack7SpikeWallRightY + screenShakeY, 50, 50);
				ctx.lineTo(bossAttack7SpikeWallRightX - Math.sqrt(1875) + screenShakeX, i * 50 - 25 + bossAttack7SpikeWallRightY + screenShakeY, 50, 50);
				ctx.lineTo(bossAttack7SpikeWallRightX + screenShakeX, i * 50 + bossAttack7SpikeWallRightY + screenShakeY, 50, 50);
				ctx.closePath();
				ctx.stroke();
				ctx.fill();
			}
			ctx.fillRect(bossAttack7SpikeWallRightX + screenShakeX, bossAttack7SpikeWallRightY - 5000 + screenShakeY, 1000, 10000);
			bossAttack7SpikeWallRightY += 70
			if (bossAttack7SpikeWallRightY > 4500) {
				bossAttack7SpikeWallRightY = 1000
			}
			if (bossAttack7SpikeWallLeftX >= playerX) {
				damagePlayer()
				playerVelocityX = 20
				playerVelocityY = -30
			}
			if (bossAttack7SpikeWallRightX - 100 <= playerX + playerSize) {
				damagePlayer()
				playerVelocityX = -20
				playerVelocityY = 30
			}
		}

		// Drawing Fake Boss
		if (bossY > 600) {
			bossY = 600
		}
		if (bossPhase == 3) {
			fakeBossHit = true
			fakeBossHealth = 9001
		}
		if (fakeBossHit == true) {
			fakeBossSummonedTime++
			fakeBossSize = 100
			fakeBossTransperency = 1
			ctx.fillStyle = 'rgba(255, 57, 57, ' + fakeBossTransperency + ')'
			ctx.fillRect(fakeBossX + screenShakeX, fakeBossY + screenShakeY, fakeBossSize, fakeBossSize);
			ctx.strokeRect(fakeBossX + screenShakeX, fakeBossY + screenShakeY, fakeBossSize, fakeBossSize);
			ctx.fill();
			ctx.stroke();
			if (Math.floor(fakeBossSummonedTime / 8) + 1 % 2 == 0 && fakeBossSummonedTime < 40) {
				ctx.drawImage(fakeBossImg, fakeBossX + screenShakeX + (playerX - fakeBossX) / 80, fakeBossY - 10 + screenShakeY + (playerY - fakeBossY) / 80, fakeBossSize, fakeBossSize);
			} else {
				ctx.drawImage(fakeBossImg, fakeBossX + screenShakeX + (playerX - fakeBossX) / 80, fakeBossY + screenShakeY + (playerY - fakeBossY) / 80, fakeBossSize, fakeBossSize);
			}
		} else {
			if (bossAttack6 != true) {
				fakeBossX = -10000
			}
			fakeBossSummonedTime = 0
			ctx.fillStyle = 'rgba(255, 57, 57, ' + fakeBossTransperency + ')'
			fakeBossSize = 200
			ctx.fillRect(fakeBossX + screenShakeX, fakeBossY + screenShakeY, fakeBossSize, fakeBossSize);
			ctx.strokeRect(fakeBossX + screenShakeX, fakeBossY + screenShakeY, fakeBossSize, fakeBossSize);
			ctx.fill();
			ctx.stroke();
			ctx.drawImage(bossImg, fakeBossX + screenShakeX + (playerX - fakeBossX) / 40, fakeBossY + screenShakeY + (playerY - fakeBossY) / 40, 200, 200);
		}
		if (fakeBossSummonedTime == 1) {
			fakeBossHealth = 300
		}
		if (fakeBossHealth <= 0) {
			fakeBossHit = false
		}

		// Drawing Boss
		ctx.fillStyle = '#ff3939';
		ctx.strokeStyle = '#000000';
		if (bossY > 600) {
			bossY = 600
		}
		ctx.fillRect(bossX + screenShakeX, bossY + screenShakeY, bossSize, bossSize);
		ctx.strokeRect(bossX + screenShakeX, bossY + screenShakeY, bossSize, bossSize);
		ctx.fill();
		ctx.stroke();
		if (playerAttacked == false) {
			bossImg = document.getElementById('bossImgStart')
		} else if (bossPhase == 1) {
			bossImg = document.getElementById('bossImg')
		} else if (bossPhase == 2 && bossX <= playerX) {
			bossImg = document.getElementById('bossImgPhase2Left')
		} else if (bossPhase == 2 && bossX > playerX) {
			bossImg = document.getElementById('bossImgPhase2Right')
		}
		ctx.drawImage(bossImg, bossX + screenShakeX + (playerX - bossX) / 40, bossY + screenShakeY + (playerY - bossY) / 40, 200, 200);

		// Boss Attacks (Infront Boss Layer Effects)
		if (bossHealth > 0) {
			if (bossAttack3 == true) {
				if (bossWait < 190 && bossWait > 100) {
					bossAttack3PartYCalculation = (-bossAttack3TopPartY + 200) / 16
					bossAttack3TopPartY += bossAttack3PartYCalculation
					bossAttack3BottomPartY += bossAttack3PartYCalculation
				} else if (bossWait < 70 && bossWait > 20) {
					bossAttack3PartYCalculation = (-bossAttack3TopPartY + 200) / 5
					bossAttack3TopPartY -= bossAttack3PartYCalculation
					bossAttack3BottomPartY -= bossAttack3PartYCalculation
				}
				if (bossWait < 175 && bossWait > 25) {
					bossAttack3BottomPartX -= 8
					bossAttack3BottomPartY += (bossAttack3BottomPartX - bossAttack3TopPartX) / 100
				}
				ctx.strokeStyle = '#ff8e8e'
				if (bossWait < 170 && bossWait > 70) {
					let bossAttack3LazerX = bossAttack3BottomPartX - bossAttack3TopPartX
					let bossAttack3LazerY = bossAttack3BottomPartY + 100 - bossAttack3TopPartY
					LazerA3.play()
					ctx.beginPath();
					ctx.lineWidth = 20;
					ctx.moveTo(bossAttack3TopPartX + screenShakeX, bossAttack3TopPartY + 76 + screenShakeY, 50, 50);
					ctx.lineTo(bossAttack3BottomPartX + bossAttack3LazerX * 2000, bossAttack3BottomPartY + bossAttack3LazerY * 2000);
					ctx.closePath();
					ctx.stroke();
					screenShakeIntensity = 10
				} else {
					LazerA3.stop()
				}
				ctx.lineWidth = 50;
				ctx.fillStyle = '#ff8e8e'
				ctx.strokeStyle = '#626262'
				ctx.beginPath();
				ctx.moveTo(bossAttack3TopPartX + screenShakeX, bossAttack3TopPartY + 75 + screenShakeY, 50, 50);
				ctx.lineTo(bossAttack3BottomPartX + screenShakeX, bossAttack3BottomPartY + 175 + screenShakeY, 50, 50);
				ctx.closePath();
				ctx.stroke();
				ctx.fillStyle = '#3a3737'
				ctx.fillRect(bossAttack3TopPartX - 37.5 + screenShakeX, bossAttack3TopPartY + 37.5 + screenShakeY, 75, 75);
			} else if (bossAttack4 == true) {
				ctx.fillStyle = '#534646'
				if (bossWait > 190) {
					bossAttack4LazerY = 1000
					bossAttack4LazerLeftX = 0
					bossAttack4LazerRightX = 1800
				} else if (bossWait > 150) {

					bossAttack4LazerLeftXBeginingCalculation = (bossAttack4LazerLeftX - 750) / 9
					bossAttack4LazerLeftX -= bossAttack4LazerLeftXBeginingCalculation


					bossAttack4LazerRightXBeginingCalculation = (-bossAttack4LazerRightX + 1050) / 9
					bossAttack4LazerRightX += bossAttack4LazerRightXBeginingCalculation

					bossAttack4LazerYBeginingCalculation = (-bossAttack4LazerY + 100) / 9
					bossAttack4LazerY += bossAttack4LazerYBeginingCalculation
				} else if (bossWait >= 50) {
					bossAttack4LazerY = bossY + 100
				} else {
					bossAttack4LazerYBeginingCalculation = (-bossAttack4LazerY + 100) / 9
					bossAttack4LazerY -= bossAttack4LazerYBeginingCalculation
				}
				ctx.beginPath();
				ctx.moveTo(bossAttack4LazerLeftX + screenShakeX, bossAttack4LazerY + screenShakeY, 50, 50);
				ctx.lineTo(bossAttack4LazerLeftX + screenShakeX, bossAttack4LazerY + 50 + screenShakeY, 50, 50);
				ctx.lineTo(bossAttack4LazerLeftX + 75 + screenShakeX, bossAttack4LazerY + 50 + screenShakeY, 50, 50);
				ctx.lineTo(bossAttack4LazerLeftX + 100 + screenShakeX, bossAttack4LazerY + 25 + screenShakeY, 50, 50);
				ctx.lineTo(bossAttack4LazerLeftX + 75 + screenShakeX, bossAttack4LazerY + screenShakeY, 50, 50);
				ctx.closePath();
				ctx.stroke();
				ctx.fill();

				ctx.beginPath();
				ctx.moveTo(bossAttack4LazerRightX + screenShakeX, bossAttack4LazerY + screenShakeY, 50, 50);
				ctx.lineTo(bossAttack4LazerRightX + screenShakeX, bossAttack4LazerY + 50 + screenShakeY, 50, 50);
				ctx.lineTo(bossAttack4LazerRightX - 75 + screenShakeX, bossAttack4LazerY + 50 + screenShakeY, 50, 50);
				ctx.lineTo(bossAttack4LazerRightX - 100 + screenShakeX, bossAttack4LazerY + 25 + screenShakeY, 50, 50);
				ctx.lineTo(bossAttack4LazerRightX - 75 + screenShakeX, bossAttack4LazerY + screenShakeY, 50, 50);
				ctx.closePath();
				ctx.stroke();
				ctx.fill();
				ctx.beginPath();
				ctx.closePath();
			}
		}
		ctx.lineWidth = 1;

		// Output
		// ScreenShake
		if (screenShakeIntensity > 0) {
			screenShakeX = Math.random() * screenShakeIntensity * 2 - screenShakeIntensity
			screenShakeY = Math.random() * screenShakeIntensity * 2 - screenShakeIntensity
			screenShakeIntensity /= 1.1
			if (screenShakeIntensity > 50) {
				screenShakeIntensity == 50
			}
		}
		// Checking Player X Velocity
		if (movingLeft == true) {
			playerVelocityX -= 2
		}
		if (movingRight == true) {
			playerVelocityX += 2
		}
		if (movingDown == true) {
			playerVelocityX *= 0.9
		}
		playerX += playerVelocityX
		playerVelocityX *= 0.925
		if (playerX < 0) {
			playerX = 0
			playerVelocityX = 0
		} else if (playerX > 1800 - playerSize) {
			playerX = 1800 - playerSize
			playerVelocityX = 0
		}

		// Checking Player Y Velocity & if able to jump
		if (movingUp == true) {
			if (playerY + playerSize == floorY || playerOnPlatform == true) {
				playerVelocityY = -18
				canDoubleJump = false
			} else if (playerDoubleJump == true && canDoubleJump == true) {
				playerVelocityY = -20
				playerDoubleJump = false
			}
		}

		playerY += playerVelocityY
		if (playerX + playerSize >= platform1X && platform1X + platform1Size >= playerX && playerY + playerSize >= platform1Y && platform1Y + playerVelocityY >= playerY) {
			playerOnPlatform1 = true
		} else {
			playerOnPlatform1 = false
		}
		if (playerX + playerSize >= platform2X && platform2X + platform2Size >= playerX && playerY + playerSize >= platform2Y && platform2Y + playerVelocityY >= playerY) {
			playerOnPlatform2 = true
		} else {
			playerOnPlatform2 = false
		}
		if (playerX + playerSize >= platform3X && platform3X + platform3Size >= playerX && playerY + playerSize >= platform3Y && platform3Y + playerVelocityY >= playerY) {
			playerOnPlatform3 = true
		} else {
			playerOnPlatform3 = false
		}
		if (playerX + playerSize >= platform4X && platform4X + platform4Size >= playerX && playerY + playerSize >= platform4Y && platform4Y + playerVelocityY >= playerY) {
			playerOnPlatform4 = true
		} else {
			playerOnPlatform4 = false
		}
		if (playerX + playerSize >= platform5X && platform5X + platform5Size >= playerX && playerY + playerSize >= platform5Y && platform5Y + playerVelocityY >= playerY) {
			playerOnPlatform5 = true
		} else {
			playerOnPlatform5 = false
		}
		if (playerX + playerSize >= platform6X && platform6X + platform6Size >= playerX && playerY + playerSize >= platform6Y && platform6Y + playerVelocityY >= playerY) {
			playerOnPlatform6 = true
		} else {
			playerOnPlatform6 = false
		}
		if ((playerOnPlatform1 == true || playerOnPlatform2 == true || playerOnPlatform3 == true || playerOnPlatform4 == true || playerOnPlatform5 == true || playerOnPlatform6 == true) && playerVelocityY >= 0 && movingDown == false) {
			playerOnPlatform = true
			if (playerY + playerSize != platform1Y && playerOnPlatform1) {
				playerY = platform1Y - playerSize
			}
			if (playerY + playerSize != platform2Y && playerOnPlatform2) {
				playerY = platform2Y - playerSize
			}
			if (playerY + playerSize != platform3Y && playerOnPlatform3) {
				playerY = platform3Y - playerSize
			}
			if (playerY + playerSize != platform4Y && playerOnPlatform4) {
				playerY = platform4Y - playerSize
			}
			if (playerY + playerSize != platform5Y && playerOnPlatform5) {
				playerY = platform5Y - playerSize
			}
			if (playerY + playerSize != platform6Y && playerOnPlatform6) {
				playerY = platform6Y - playerSize
			}
		} else {
			playerOnPlatform = false
		}
		if (playerY + playerSize < floorY && playerOnPlatform == false) {
			playerVelocityY++
			if (playerY < 0) {
				playerY = 0
				playerVelocityY = 0
			}
			if (movingDown == true) {
				playerVelocityY += 5
			}
		} else if (playerY + playerSize > floorY) {
			playerY = floorY - playerSize
			playerDoubleJump = true
		} else {
			playerVelocityY = 0
			playerDoubleJump = true
		}
		// Double Jump
		if (playerY + playerSize < floorY && playerDoubleJump == false && canDoubleJump == true && playerVelocityY < -10 && doubleJumpEffectTransparency <= 0) {
			ctx.fillStyle = "#000000";
			doubleJumpEffectTransparency = 0.8
			doubleJumpEffectSize = 30
			doubleJumpEffectX = playerX
			doubleJumpEffectY = playerY
			DoubleJump.stop()
			DoubleJump.play()
		}
		if (doubleJumpEffectTransparency > 0) {
			ctx.fillStyle = 'rgba(255, 255, 255,' + doubleJumpEffectTransparency + ')';
			ctx.fillRect(doubleJumpEffectX + playerSize / 2 - doubleJumpEffectSize / 2 + screenShakeX, doubleJumpEffectY + playerSize / 2 - doubleJumpEffectSize / 2 + screenShakeY, doubleJumpEffectSize, doubleJumpEffectSize);
			doubleJumpEffectTransparency -= 0.014
			doubleJumpEffectSize += 1.25
		}
		// Dodge Effect
		if (dodgeEffectTransparency > 0) {
			ctx.fillStyle = 'rgba(255, 255, 255,' + dodgeEffectTransparency + ')';
			ctx.fillRect(dodgeEffectX + playerSize / 2 - dodgeEffectSize / 2 + screenShakeX, dodgeEffectY + playerSize / 2 - dodgeEffectSize / 2 + screenShakeY, dodgeEffectSize, dodgeEffectSize);
			dodgeEffectTransparency -= 1 / 30
			dodgeEffectSize += 1.25
		}
		// Player Bullet Direction Check
		if (playerBulletAttackLeft == true && playerBulletAttackUp == true) {
			if (bulletCooldown == 15) {
				if (playerBullet1Active == false) {
					setBullet1()
					playerBullet1Direction = "leftUp"
				} else if (playerBullet2Active == false) {
					setBullet2()
					playerBullet2Direction = "leftUp"
				} else if (playerBullet3Active == false) {
					setBullet3()
					playerBullet3Direction = "leftUp"
				} else if (playerBullet4Active == false) {
					setBullet4()
					playerBullet4Direction = "leftUp"
				}
			}
		} else if (playerBulletAttackRight == true && playerBulletAttackUp == true) {
			if (bulletCooldown == 15) {
				if (playerBullet1Active == false) {
					setBullet1()
					playerBullet1Direction = "rightUp"
				} else if (playerBullet2Active == false) {
					setBullet2()
					playerBullet2Direction = "rightUp"
				} else if (playerBullet3Active == false) {
					setBullet3()
					playerBullet3Direction = "rightUp"
				} else if (playerBullet4Active == false) {
					setBullet4()
					playerBullet4Direction = "rightUp"
				}
			}
		} else if (playerBulletAttackLeft == true && playerBulletAttackDown == true) {
			if (bulletCooldown == 15) {
				if (playerBullet1Active == false) {
					setBullet1()
					playerBullet1Direction = "leftDown"
				} else if (playerBullet2Active == false) {
					setBullet2()
					playerBullet2Direction = "leftDown"
				} else if (playerBullet3Active == false) {
					setBullet3()
					playerBullet3Direction = "leftDown"
				} else if (playerBullet4Active == false) {
					setBullet4()
					playerBullet4Direction = "leftDown"
				}
			}
		} else if (playerBulletAttackRight == true && playerBulletAttackDown == true) {
			if (bulletCooldown == 15) {
				if (playerBullet1Active == false) {
					setBullet1()
					playerBullet1Direction = "rightDown"
				} else if (playerBullet2Active == false) {
					setBullet2()
					playerBullet2Direction = "rightDown"
				} else if (playerBullet3Active == false) {
					setBullet3()
					playerBullet3Direction = "rightDown"
				} else if (playerBullet4Active == false) {
					setBullet4()
					playerBullet4Direction = "rightDown"
				}
			}
		} else if (playerBulletAttackLeft == true) {
			if (bulletCooldown == 15) {
				if (playerBullet1Active == false) {
					setBullet1()
					playerBullet1Direction = "left"
				} else if (playerBullet2Active == false) {
					setBullet2()
					playerBullet2Direction = "left"
				} else if (playerBullet3Active == false) {
					setBullet3()
					playerBullet3Direction = "left"
				} else if (playerBullet4Active == false) {
					setBullet4()
					playerBullet4Direction = "left"
				}
			}
		} else if (playerBulletAttackRight == true) {
			if (bulletCooldown == 15) {
				if (playerBullet1Active == false) {
					setBullet1()
					playerBullet1Direction = "right"
				} else if (playerBullet2Active == false) {
					setBullet2()
					playerBullet2Direction = "right"
				} else if (playerBullet3Active == false) {
					setBullet3()
					playerBullet3Direction = "right"
				} else if (playerBullet4Active == false) {
					setBullet4()
					playerBullet4Direction = "right"
				}
			}
		} else if (playerBulletAttackUp == true) {
			if (bulletCooldown == 15) {
				if (playerBullet1Active == false) {
					setBullet1()
					playerBullet1Direction = "up"
				} else if (playerBullet2Active == false) {
					setBullet2()
					playerBullet2Direction = "up"
				} else if (playerBullet3Active == false) {
					setBullet3()
					playerBullet3Direction = "up"
				} else if (playerBullet4Active == false) {
					setBullet4()
					playerBullet4Direction = "up"
				}
			}
		} else if (playerBulletAttackDown == true) {
			if (bulletCooldown == 15) {
				if (playerBullet1Active == false) {
					setBullet1()
					playerBullet1Direction = "down"
				} else if (playerBullet2Active == false) {
					setBullet2()
					playerBullet2Direction = "down"
				} else if (playerBullet3Active == false) {
					setBullet3()
					playerBullet3Direction = "down"
				} else if (playerBullet4Active == false) {
					setBullet4()
					playerBullet4Direction = "down"
				}
			}
		}
		// Player Bullets Movement
		ctx.fillStyle = "#849aff"
		ctx.fillRect(playerBullet1X + screenShakeX - 7.5, playerBullet1Y - 7.5 + screenShakeY, 15, 15);
		if (playerBullet1Active == true || playerBullet2Active == true || playerBullet3Active == true || playerBullet4Active == true) {
			if (playerBullet1Direction == "up") {
				playerBullet1Y -= 40
				if (playerBullet1Y < 0) {
					clearBullet1()
				}
			} else if (playerBullet1Direction == "down") {
				playerBullet1Y += 40
				if (playerBullet1Y > 900) {
					clearBullet1()
				}
			} else if (playerBullet1Direction == "left") {
				playerBullet1X -= 40
				if (playerBullet1X < 0) {
					clearBullet1()
				}
			} else if (playerBullet1Direction == "right") {
				playerBullet1X += 40
				if (playerBullet1X > 1800) {
					clearBullet1()
				}
			} else if (playerBullet1Direction == "leftUp") {
				playerBullet1X -= Math.sqrt(3200)
				playerBullet1Y -= Math.sqrt(3200)
				if (playerBullet1X < 0 || playerBullet1Y < 0) {
					clearBullet1()
				}
			} else if (playerBullet1Direction == "rightUp") {
				playerBullet1X += Math.sqrt(3200)
				playerBullet1Y -= Math.sqrt(3200)
				if (playerBullet1X > 1800 || playerBullet1Y < 0) {
					clearBullet1()
				}
			} else if (playerBullet1Direction == "leftDown") {
				playerBullet1X -= Math.sqrt(3200)
				playerBullet1Y += Math.sqrt(3200)
				if (playerBullet1X < 0 || playerBullet1Y > 900) {
					clearBullet1()
				}
			} else if (playerBullet1Direction == "rightDown") {
				playerBullet1X += Math.sqrt(3200)
				playerBullet1Y += Math.sqrt(3200)
				if (playerBullet1X > 1800 || playerBullet1Y > 900) {
					clearBullet1()
				}
			}
			// Bullet 2
			ctx.fillRect(playerBullet2X + screenShakeX - 7.5, playerBullet2Y - 7.5 + screenShakeY, 15, 15);
			if (playerBullet2Direction == "up") {
				playerBullet2Y -= 40
				if (playerBullet2Y < 0) {
					clearBullet2()
				}
			} else if (playerBullet2Direction == "down") {
				playerBullet2Y += 40
				if (playerBullet2Y > 900) {
					clearBullet2()
				}
			} else if (playerBullet2Direction == "left") {
				playerBullet2X -= 40
				if (playerBullet2X < 0) {
					clearBullet2()
				}
			} else if (playerBullet2Direction == "right") {
				playerBullet2X += 40
				if (playerBullet2X > 1800) {
					clearBullet2()
				}
			} else if (playerBullet2Direction == "leftUp") {
				playerBullet2X -= Math.sqrt(3200)
				playerBullet2Y -= Math.sqrt(3200)
				if (playerBullet2X < 0 || playerBullet2Y < 0) {
					clearBullet2()
				}
			} else if (playerBullet2Direction == "rightUp") {
				playerBullet2X += Math.sqrt(3200)
				playerBullet2Y -= Math.sqrt(3200)
				if (playerBullet2X > 1800 || playerBullet2Y < 0) {
					clearBullet2()
				}
			} else if (playerBullet2Direction == "leftDown") {
				playerBullet2X -= Math.sqrt(3200)
				playerBullet2Y += Math.sqrt(3200)
				if (playerBullet2X < 0 || playerBullet2Y > 900) {
					clearBullet2()
				}
			} else if (playerBullet2Direction == "rightDown") {
				playerBullet2X += Math.sqrt(3200)
				playerBullet2Y += Math.sqrt(3200)
				if (playerBullet2X > 1800 || playerBullet2Y > 900) {
					clearBullet2()
				}
			}
			// Bullet 3
			ctx.fillRect(playerBullet3X + screenShakeX - 7.5, playerBullet3Y - 7.5 + screenShakeY, 15, 15);
			if (playerBullet3Direction == "up") {
				playerBullet3Y -= 40
				if (playerBullet3Y < 0) {
					clearBullet3()
				}
			} else if (playerBullet3Direction == "down") {
				playerBullet3Y += 40
				if (playerBullet3Y > 900) {
					clearBullet3()
				}
			} else if (playerBullet3Direction == "left") {
				playerBullet3X -= 40
				if (playerBullet3X < 0) {
					clearBullet3()
				}
			} else if (playerBullet3Direction == "right") {
				playerBullet3X += 40
				if (playerBullet3X > 1800) {
					clearBullet3()
				}
			} else if (playerBullet3Direction == "leftUp") {
				playerBullet3X -= Math.sqrt(3200)
				playerBullet3Y -= Math.sqrt(3200)
				if (playerBullet3X < 0 || playerBullet3Y < 0) {
					clearBullet3()
				}
			} else if (playerBullet3Direction == "rightUp") {
				playerBullet3X += Math.sqrt(3200)
				playerBullet3Y -= Math.sqrt(3200)
				if (playerBullet3X > 1800 || playerBullet3Y < 0) {
					clearBullet3()
				}
			} else if (playerBullet3Direction == "leftDown") {
				playerBullet3X -= Math.sqrt(3200)
				playerBullet3Y += Math.sqrt(3200)
				if (playerBullet3X < 0 || playerBullet3Y > 900) {
					clearBullet3()
				}
			} else if (playerBullet3Direction == "rightDown") {
				playerBullet3X += Math.sqrt(3200)
				playerBullet3Y += Math.sqrt(3200)
				if (playerBullet3X > 1800 || playerBullet3Y > 900) {
					clearBullet3()
				}
			}
			// Bullet 4
			ctx.fillRect(playerBullet4X + screenShakeX - 7.5, playerBullet4Y - 7.5 + screenShakeY, 15, 15);
			if (playerBullet4Direction == "up") {
				playerBullet4Y -= 40
				if (playerBullet4Y < 0) {
					clearBullet4()
				}
			} else if (playerBullet4Direction == "down") {
				playerBullet4Y += 40
				if (playerBullet4Y > 900) {
					clearBullet4()
				}
			} else if (playerBullet4Direction == "left") {
				playerBullet4X -= 40
				if (playerBullet4X < 0) {
					clearBullet4()
				}
			} else if (playerBullet4Direction == "right") {
				playerBullet4X += 40
				if (playerBullet4X > 1800) {
					clearBullet4()
				}
			} else if (playerBullet4Direction == "leftUp") {
				playerBullet4X -= Math.sqrt(3200)
				playerBullet4Y -= Math.sqrt(3200)
				if (playerBullet4X < 0 || playerBullet4Y < 0) {
					clearBullet4()
				}
			} else if (playerBullet4Direction == "rightUp") {
				playerBullet4X += Math.sqrt(3200)
				playerBullet4Y -= Math.sqrt(3200)
				if (playerBullet4X > 1800 || playerBullet4Y < 0) {
					clearBullet4()
				}
			} else if (playerBullet4Direction == "leftDown") {
				playerBullet4X -= Math.sqrt(3200)
				playerBullet4Y += Math.sqrt(3200)
				if (playerBullet4X < 0 || playerBullet4Y > 900) {
					clearBullet4()
				}
			} else if (playerBullet4Direction == "rightDown") {
				playerBullet4X += Math.sqrt(3200)
				playerBullet4Y += Math.sqrt(3200)
				if (playerBullet4X > 1800 || playerBullet4Y > 900) {
					clearBullet4()
				}
			}
		}

		// Bullet Hitting Boss
		if (playerBullet1X >= bossX && bossX >= playerBullet1X - bossSize && playerBullet1Y >= bossY && bossY >= playerBullet1Y - bossSize) {
			bulletEffect1()
			clearBullet1()
			damageBoss()
		}
		if (playerBullet2X >= bossX && bossX >= playerBullet2X - bossSize && playerBullet2Y >= bossY && bossY >= playerBullet2Y - bossSize) {
			bulletEffect2()
			clearBullet2()
			damageBoss()
		}
		if (playerBullet3X >= bossX && bossX >= playerBullet3X - bossSize && playerBullet3Y >= bossY && bossY >= playerBullet3Y - bossSize) {
			bulletEffect3()
			clearBullet3()
			damageBoss()
		}
		if (playerBullet4X >= bossX && bossX >= playerBullet4X - bossSize && playerBullet4Y >= bossY && bossY >= playerBullet4Y - bossSize) {
			bulletEffect4()
			clearBullet4()
			damageBoss()
		}
		// Bullet Hitting Fake Boss
		if (playerBullet1X >= fakeBossX && fakeBossX >= playerBullet1X - fakeBossSize && playerBullet1Y >= fakeBossY && fakeBossY >= playerBullet1Y - fakeBossSize) {
			bulletEffect1()
			clearBullet1()
			damageFakeBoss()
		}
		if (playerBullet2X >= fakeBossX && fakeBossX >= playerBullet2X - fakeBossSize && playerBullet2Y >= fakeBossY && fakeBossY >= playerBullet2Y - fakeBossSize) {
			bulletEffect2()
			clearBullet2()
			damageFakeBoss()
		}
		if (playerBullet3X >= fakeBossX && fakeBossX >= playerBullet3X - fakeBossSize && playerBullet3Y >= fakeBossY && fakeBossY >= playerBullet3Y - fakeBossSize) {
			bulletEffect3()
			clearBullet3()
			damageFakeBoss()
		}
		if (playerBullet4X >= fakeBossX && fakeBossX >= playerBullet4X - fakeBossSize && playerBullet4Y >= fakeBossY && fakeBossY >= playerBullet4Y - fakeBossSize) {
			bulletEffect4()
			clearBullet4()
			damageFakeBoss()
		}

		// Bullet Hitting Boss (Effects)
		ctx.fillStyle = 'rgba(255, 255, 255,' + playerBullet1Transperency + ')';
		ctx.fillRect(playerBullet1HitX + screenShakeX, playerBullet1HitY + screenShakeY, 30, 30);
		ctx.fillStyle = 'rgba(255, 255, 255,' + playerBullet2Transperency + ')';
		ctx.fillRect(playerBullet2HitX + screenShakeX, playerBullet2HitY + screenShakeY, 30, 30);
		ctx.fillStyle = 'rgba(255, 255, 255,' + playerBullet3Transperency + ')';
		ctx.fillRect(playerBullet3HitX + screenShakeX, playerBullet3HitY + screenShakeY, 30, 30);
		ctx.fillStyle = 'rgba(255, 255, 255,' + playerBullet4Transperency + ')';
		ctx.fillRect(playerBullet4HitX + screenShakeX, playerBullet4HitY + screenShakeY, 30, 30);

		// DrawingPlayer
		if (playerHealth > 0) {
			ctx.lineWidth = 1;
			ctx.fillStyle = '#ffffff';
			ctx.strokeStyle = '#000000';
			ctx.fillRect(playerX + screenShakeX, playerY + screenShakeY, playerSize, playerSize);
			ctx.strokeRect(playerX + screenShakeX, playerY + screenShakeY, playerSize, playerSize);
			ctx.fill();
			ctx.stroke();
		}

		// Timer Base
		ctx.fillStyle = '#bababa';
		ctx.strokeStyle = "#858585"
		ctx.beginPath();
		ctx.lineTo(700 + screenShakeX, 40 + screenShakeY, 30, 30);
		ctx.lineTo(1100 + screenShakeX, 40 + screenShakeY, 30, 30);
		ctx.lineTo(1050 + screenShakeX, 85 + screenShakeY, 30, 30);
		ctx.lineTo(750 + screenShakeX, 85 + screenShakeY, 30, 30);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.lineTo(262 + screenShakeX, -100 + screenShakeY, 30, 30);
		ctx.lineTo(312 + screenShakeX, -100 + screenShakeY, 30, 30);
		ctx.lineTo(372 + screenShakeX, 10 + screenShakeY, 30, 30);
		ctx.lineTo(322 + screenShakeX, 10 + screenShakeY, 30, 30);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.lineTo(1538 + screenShakeX, -100 + screenShakeY, 30, 30);
		ctx.lineTo(1488 + screenShakeX, -100 + screenShakeY, 30, 30);
		ctx.lineTo(1428 + screenShakeX, 10 + screenShakeY, 30, 30);
		ctx.lineTo(1478 + screenShakeX, 10 + screenShakeY, 30, 30);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();


		// Boss Health
		ctx.font = "20px Inter";
		ctx.textAlign = "center";
		ctx.fillRect(395 + screenShakeX, 20 + screenShakeY, 1010, 30);
		ctx.strokeRect(395 + screenShakeX, 20 + screenShakeY, 1010, 30);
		if (bossHealthPreview <= bossPhase3) {
			ctx.fillStyle = "#454545"
			ctx.fillRect(400 + screenShakeX, 25 + screenShakeY, (bossHealthPreview / bossPhase3) * 1000, 20);
			ctx.fillStyle = '#ffffff';
			ctx.fillText(Math.round(bossHealthPreview) + " / " + bossPhase3, 900 + screenShakeX, 42 + screenShakeY);
		} else {
			ctx.fillStyle = "#454545"
			ctx.fillRect(400 + screenShakeX, 25 + screenShakeY, 1000, 20);
		}
		if (bossHealthPreview <= bossPhase2 && bossHealthPreview > bossPhase3) {
			ctx.fillStyle = "#646464"
			ctx.fillRect(400 + screenShakeX, 25 + screenShakeY, (bossHealthPreview - bossPhase3) / (bossPhase2 - bossPhase3) * 1000, 20);
			ctx.fillStyle = '#ffffff';
			ctx.fillText(Math.round(bossHealthPreview - bossPhase3) + " / " + (bossPhase2 - bossPhase3), 900 + screenShakeX, 42 + screenShakeY);
		} else if (bossHealthPreview > bossPhase2) {
			ctx.fillStyle = "#646464"
			ctx.fillRect(400 + screenShakeX, 25 + screenShakeY, 1000, 20);
		}
		if ((bossHealthPreview - bossPhase2) / (bossHealthMax - bossPhase2) * 1000 > 0) {
			ctx.fillStyle = "#858585"
			ctx.fillRect(400 + screenShakeX, 25 + screenShakeY, (bossHealthPreview - bossPhase2) / (bossHealthMax - bossPhase2) * 1000, 20);
			ctx.fillStyle = '#ffffff';
			ctx.fillText(Math.round(bossHealthPreview - bossPhase2) + " / " + (bossHealthMax - bossPhase2), 900 + screenShakeX, 42 + screenShakeY);
		}
		ctx.strokeStyle = "#4f4f4f"
		ctx.strokeRect(400 + screenShakeX, 25 + screenShakeY, 1000, 20);

		if (bossHealthPreview < 0) {
			bossHealth = 0
			bossHealthDamaged = 0
			bossHealthPreview = 0
		}

		bossHealthPreview = bossHealth + bossHealthDamaged
		bossHealthDamaged = bossHealthDamaged / 1.1

		ctx.fillStyle = '#474747';
		ctx.strokeStyle = "#858585"
		ctx.beginPath();
		ctx.lineTo(302 + screenShakeX, 10 + screenShakeY, 30, 30);
		ctx.lineTo(392 + screenShakeX, 10 + screenShakeY, 30, 30);
		ctx.lineTo(422 + screenShakeX, 65 + screenShakeY, 30, 30);
		ctx.lineTo(332 + screenShakeX, 65 + screenShakeY, 30, 30);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		ctx.beginPath();
		ctx.lineTo(1498 + screenShakeX, 10 + screenShakeY, 30, 30);
		ctx.lineTo(1408 + screenShakeX, 10 + screenShakeY, 30, 30);
		ctx.lineTo(1378 + screenShakeX, 65 + screenShakeY, 30, 30);
		ctx.lineTo(1468 + screenShakeX, 65 + screenShakeY, 30, 30);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();






		// Player Health
		if (playerHealthPreview <= 0) { // Check if player health is 0
			playerHealth = 0
			playerHealthPreview = 0
			playerHealthDamaged = 0
		} else {
			// Base
			ctx.font = "20px Inter";
			ctx.fillStyle = '#bababa';
			ctx.strokeStyle = "#858585"
			ctx.fillRect(600 + screenShakeX, 820 + screenShakeY, 605, 30);
			// Outline
			ctx.fillStyle = "#4f4f4f"
			ctx.fillRect(604 + screenShakeX, 824 + screenShakeY, playerHealthPreview / playerHealthMax * 595 + 2, 22);
			// Main
			ctx.fillStyle = "#858585"
			ctx.fillRect(605 + screenShakeX, 825 + screenShakeY, playerHealthPreview / playerHealthMax * 595, 20);

			// Player Healing Cooldown
			if (playerHealth < 100) {
				ctx.fillStyle = "#565656"
				if (bossPhase == 3) {
					ctx.fillRect(604 + screenShakeX, 824 + screenShakeY, playerRegenerationDelay / 12 * 595, 7);
				} else {
					ctx.fillRect(604 + screenShakeX, 824 + screenShakeY, playerRegenerationDelay / 20 * 595, 7);
				}
			}
			ctx.fillStyle = "rgba(255, 111, 111, 0.5)"
			if (bossPhase == 3) {
				ctx.fillRect(604 + screenShakeX, 824 + screenShakeY, playerRegenerationHitDelay / 60 * 595, 22);
			} else if (bossPhase == 2) {
				ctx.fillRect(604 + screenShakeX, 824 + screenShakeY, playerRegenerationHitDelay / 420 * 595, 22);
			} else {
				ctx.fillRect(604 + screenShakeX, 824 + screenShakeY, playerRegenerationHitDelay / 600 * 595, 22);
			}

			// Player Health text
			ctx.fillStyle = '#ffffff';
			ctx.textAlign = 'center';
			ctx.fillText(Math.round(playerHealthPreview) + " / " + playerHealthMax, 900 + screenShakeX, 842 + screenShakeY);

		}



		playerHealthPreview = playerHealth + playerHealthDamaged
		playerHealthDamaged = playerHealthDamaged / 1.1

		// Dodge Cooldown & Iframes
		if (dodgeCooldown > 0) {
			ctx.lineWidth = 10;
			ctx.fillStyle = 'rgba(255, 255, 255, 0)';
			ctx.strokeStyle = "#3a63ff"
			ctx.beginPath();
			ctx.arc(playerX + playerSize / 2 + screenShakeX, playerY + playerSize / 2 + screenShakeY, 50, -1, (-2.3183 + (dodgeCooldown / dodgeCooldownMax * 30) * 0.02111) * Math.PI); // -1.685 to -2.3183
			ctx.fill();
			ctx.stroke();
			dodgeCooldown--
			ctx.lineWidth = 1;
		}
		if (dodgeCooldown == 0) {
			dodgeCooldownMax = 0
		}
		if (immunityFrames > 0) {
			immunityFrames--
		}

		// makes the arc above not break somehow
		ctx.beginPath();
		ctx.arc(400, 150, 0, 0, 2 * Math.PI);
		ctx.fill();

		// Player Healing Cooldown
		if (playerHealth > 0) {
			if (playerRegenerationHitDelay > 0) {
				playerRegenerationHitDelay--
			} else {
				if (playerRegenerationDelay > 0) {
					playerRegenerationDelay--
				} else {
					if (playerHealth < playerHealthMax) {
						playerHealth++
						playerHealthDamaged--
					} else {
						playerHealth = playerHealthMax
					}
					if (bossPhase == 3) {
						playerRegenerationDelay += 12
					} else {
						playerRegenerationDelay += 20
					}
				}
			}
			if (playerRegenerationHitDelay > 600 && bossPhase == 1) {
				playerRegenerationHitDelay = 600
			}
			if (playerRegenerationHitDelay > 420 && bossPhase == 2) {
				playerRegenerationHitDelay = 420
			}
			if (playerRegenerationHitDelay > 60 && bossPhase == 3) {
				playerRegenerationHitDelay = 60
			}
		}

		// Player Damage Taken && Graze Cooldown
		if (playerDamageTakenDelay > 0) {
			playerDamageTakenDelay--
		}
		if (grazeCooldown > 0) {
			grazeCooldown--
		}

		// Bullet Cooldown
		if (bulletCooldown < 15) {
			bulletCooldown++
		}
		ctx.fillStyle = "#000000"

		// TESTING STUFF **********************************************************************************************
		// ctx.textAlign = "start";
		// ctx.fillText(bulletCooldown, 25 + screenShakeX, 42 + screenShakeY);
		// ctx.fillText(bossWait, 25 + screenShakeX, 84 + screenShakeY);
		// ctx.fillText(playerBullet1HitX, 25 + screenShakeX, 126 + screenShakeY);
		// ctx.fillText(playerBullet1HitY, 25 + screenShakeX, 168 + screenShakeY);
		// ctx.fillText(bossPassiveAttack1Timer, 25 + screenShakeX, 210 + screenShakeY);
		// ctx.fillText(bossAttack4LazerLeftX, 25 + screenShakeX, 252 + screenShakeY);
		// ctx.fillText(bossAttack4LazerRightX, 25 + screenShakeX, 294 + screenShakeY);
		// ctx.fillText(bossX + "Boss X", 25 + screenShakeX, 336 + screenShakeY);
		// ctx.fillText(bossY + "Boss Y", 25 + screenShakeX, 378 + screenShakeY);
		// ctx.fillText(bossPassiveAttack1X, 25 + screenShakeX, 420 + screenShakeY);
		// ctx.fillText(floorX, 25 + screenShakeX, 462 + screenShakeY);
		// ctx.fillText(bossPassiveAttack2X, 25 + screenShakeX, 504 + screenShakeY);
		// ctx.fillText(fakeBossX + "FakeBoss X", 25 + screenShakeX, 336 + screenShakeY);
		// ctx.fillText(fakeBossY + "FakeBoss Y", 25 + screenShakeX, 378 + screenShakeY);
		// ctx.fillText(bossAttack8 + "boss 8", 25 + screenShakeX, 336 + screenShakeY);
		// ctx.fillText(bossAttack9 + "boss 9", 25 + screenShakeX, 378 + screenShakeY);
		// ctx.textAlign = "center";
		// ctx.font = "35px Inter";
		// Not testing stuff after this part **************************************************************************

		// Player Damaged Flash Effect
		ctx.fillStyle = 'rgba(255, 55, 55,' + ((playerDamageTakenDelay - 40) / 20) + ')';
		ctx.fillRect(-1000 + screenShakeX, -1000 + screenShakeY, 10000, 10000);

		// Player Bullet Effect Transperency
		if (playerBullet1Transperency > 0) {
			playerBullet1Transperency -= 1 / 15
		}
		if (playerBullet2Transperency > 0) {
			playerBullet2Transperency -= 1 / 15
		}
		if (playerBullet3Transperency > 0) {
			playerBullet3Transperency -= 1 / 15
		}
		if (playerBullet4Transperency > 0) {
			playerBullet4Transperency -= 1 / 15
		}

		ctx.fillStyle = "#000000"
		ctx.font = "35px Inter";

		// Timer
		ctx.fillText(timerMinutesTens + timerMinutes + ' : ' + timerSecondsTens + timerSeconds + ' : ' + timerMillisecondsHundredths + timerMillisecondsTens + timerMillisecondsVisual, 900 + screenShakeX, 80 + screenShakeY);
		if (bossHealth > 0 && playerAttacked == true && playerHealth > 0) {
			timerMilliseconds += 50 / 3
			timerMillisecondsVisual = Math.floor(timerMilliseconds)

			if (timerMilliseconds < 10) {
				timerMillisecondsTens = "0"
			} else {
				timerMillisecondsTens = ""
			}
			if (timerMilliseconds < 100) {
				timerMillisecondsHundredths = "0"
			} else {
				timerMillisecondsHundredths = ""
			}
			if (timerSeconds < 10) {
				timerSecondsTens = "0"
			} else {
				timerSecondsTens = ""
			}
			if (timerMinutes < 10) {
				timerMinutesTens = "0"
			} else {
				timerMinutesTens = ""
			}


			if (timerMilliseconds >= 1000) {
				timerMilliseconds = 0
				timerSeconds++
			}
			if (timerSeconds == 60) {
				timerSeconds = 0
				timerMinutes++
			}
		}
		if (bossPhase == 2 || bossPhase == 3) {
			bossPassiveAttack1Timer -= 1
			bossPassiveIndicationColor = bossPassiveAttack1Timer * 2
			bossPassiveAttack1X -= 333
			if (bossPassiveAttack1Timer <= 0 && playerHealth > 0) {
				if (bossPhase == 2) {
					bossPassiveAttack1Timer = 1200
				} else {
					bossPassiveAttack1Timer = 800
				}
				bossPassiveAttack1X = 1800
			}
		}

		// Game Over Screen
		if (playerHealth <= 0 || bossHealth <= 0) {
			if (bossHealth <= 0) {
				ctx.fillRect(0, 0, cnv.width, cnv.height);
			}
			if (restartCooldown < 2) {
				Fail.play()
			}
			if (restartCooldown > 1) {
				newBestTransperency = 0
			}
			if (gameOverTransparency < 0.7) {
				gameOverTransparency += 0.025
			}
			if (gameOverSize < 700) {
				gameOverSize += (-gameOverSize + 700) / 15
			}
			if (playerHealth <= 0) {
				if (frame % 2 == 0) {
					gameOverTextEffectTransperency = Math.random()
				}
			} else {
				if (frame % 2 == 0) {
					gameOverTextEffectTransperency = (Math.random() + 0.5) / 2
				}
			}
			if (gameOverCornerPlacement < 0) {
				gameOverCornerPlacement += -gameOverCornerPlacement / 30
			}
			if (restartCooldown >= 40 && gameOverInfoTransperency < 1) {
				gameOverInfoTransperency += 0.025
			}
			progress += (-progress + (Math.abs((bossHealth / bossHealthMax) - 1) * 1000 + 400)) / 25

			playerRegenerationHitDelay = 600
			bossWait = 12
			fakeBossAttackTimer = 0
			ctx.fillStyle = 'rgba(255, 255, 255, ' + gameOverTransparency + ' )'
			ctx.fillRect(50, Math.abs(450 - (gameOverSize / 1.75)), 1700, gameOverSize);
			ctx.fillStyle = 'rgba(255, 255, 255, ' + gameOverInfoTransperency + ' )'
			ctx.strokeStyle = 'rgba(144, 144, 144, ' + gameOverInfoTransperency + ' )'
			ctx.fillRect(400, 350, 1000, 25);
			ctx.strokeRect(400, 350, 1000, 25);

			ctx.strokeRect(progress, 350, 1, 25);

			ctx.strokeRect(1400 - (bossPhase2 / bossHealthMax * 1000), 340, 1, 45);
			ctx.strokeRect(1400 - (bossPhase3 / bossHealthMax * 1000), 340, 1, 45);

			ctx.font = "15px Orbitron";
			ctx.fillStyle = 'rgba(0, 0, 0, ' + gameOverInfoTransperency + ' )'
			ctx.fillText(((progress - 400) / 10).toFixed(2) + "%", progress, 400);
			if (attempt > 1 && bestProgress > 400) {
				ctx.strokeRect(bestProgress, 345, 1, 35);
				if (progress > bestProgress) {
					ctx.fillText("Previous Best", bestProgress, 325);
					if (restartCooldown > 90) {
						ctx.fillStyle = 'rgba(0, 0, 0, ' + newBestTransperency + ' )'
						ctx.font = "10px Orbitron";
						ctx.fillText("New Best", progress, 415);
						newBestTransperency += 1 / 60
					}
				} else {
					ctx.fillText("Current Best", bestProgress, 325);
				}
			}
			ctx.fillStyle = 'rgba(0, 0, 0, ' + gameOverInfoTransperency + ' )'
			ctx.font = "30px Orbitron";
			ctx.textAlign = "start";
			ctx.fillText("Attacks Grazed", 100, 620);
			ctx.fillText("Times Hit", 100, 660);
			ctx.fillText("Damage Taken", 100, 700);
			ctx.textAlign = "end";
			ctx.fillText("Shots Hit / Missed", 1700, 660);
			ctx.fillText("Firing Accuracy", 1700, 700);

			ctx.textAlign = "center";
			ctx.font = "45px Orbitron";
			ctx.fillText("Progress", 900, 290);
			ctx.textAlign = "start";
			ctx.font = "30px Orbitron";
			ctx.fillText(totalGrazed, 450, 620);
			ctx.fillText(totalHits, 450, 660);
			ctx.fillText(totalDamageTaken, 450, 700);
			ctx.textAlign = "end";
			ctx.fillText((totalBulletsHit / totalBulletsShot * 100).toFixed(2) + " %", 1350, 700);
			ctx.fillText((totalBulletsHit) + " / " + (totalBulletsShot - totalBulletsHit), 1350, 660);
			ctx.font = "50px Orbitron";
			ctx.textAlign = "start";
			if (playerHealth <= 0) {
				ctx.fillStyle = 'rgba(255, 155, 155, ' + gameOverTextEffectTransperency + ' )'
				ctx.fillText("Mission Failed", 100, 135);
			}
			if (bossHealth <= 0) {
				ctx.fillStyle = 'rgba(155, 155, 255, ' + gameOverTextEffectTransperency + ' )'
				ctx.fillText("Mission Completed", 100, 135);
			}
			ctx.textAlign = "end";
			ctx.fillText("Attempt: " + attempt, 1700, 135);
			ctx.fillRect(30 + gameOverCornerPlacement, 30 + gameOverCornerPlacement, 300, 15);
			ctx.fillRect(30 + gameOverCornerPlacement, 45 + gameOverCornerPlacement, 15, 185);
			ctx.fillRect(55 + gameOverCornerPlacement, 55 + gameOverCornerPlacement, 200, 15);
			ctx.fillRect(55 + gameOverCornerPlacement, 70 + gameOverCornerPlacement, 15, 85);
			ctx.fillRect(1470 - gameOverCornerPlacement, 30 + gameOverCornerPlacement, 300, 15);
			ctx.fillRect(1755 - gameOverCornerPlacement, 45 + gameOverCornerPlacement, 15, 185);
			ctx.fillRect(1545 - gameOverCornerPlacement, 55 + gameOverCornerPlacement, 200, 15);
			ctx.fillRect(1730 - gameOverCornerPlacement, 70 + gameOverCornerPlacement, 15, 85);
			ctx.fillRect(30 + gameOverCornerPlacement, 755 - gameOverCornerPlacement, 300, 15);
			ctx.fillRect(30 + gameOverCornerPlacement, 570 - gameOverCornerPlacement, 15, 185);
			ctx.fillRect(55 + gameOverCornerPlacement, 730 - gameOverCornerPlacement, 200, 15);
			ctx.fillRect(55 + gameOverCornerPlacement, 645 - gameOverCornerPlacement, 15, 85);
			ctx.fillRect(1470 - gameOverCornerPlacement, 755 - gameOverCornerPlacement, 300, 15);
			ctx.fillRect(1755 - gameOverCornerPlacement, 570 - gameOverCornerPlacement, 15, 185);
			ctx.fillRect(1545 - gameOverCornerPlacement, 730 - gameOverCornerPlacement, 200, 15);
			ctx.fillRect(1730 - gameOverCornerPlacement, 645 - gameOverCornerPlacement, 15, 85);
			ctx.lineWidth = 5;
			ctx.textAlign = "center";
			ctx.font = "30px Orbitron";
			if (restartCooldown >= 120 && bossHealth > 0) {
				if (restartTransperency < 2) {
					restartTransperency += 1 / 60
				}
				restartSignPlacement += (-restartSignPlacement + 200) / 25
				ctx.fillStyle = 'rgba(0, 0, 0, ' + (restartTransperency - 1) + ' )'
				ctx.strokeStyle = 'rgba(0, 0, 0, ' + restartTransperency + ' )'
				ctx.fillText("Press [Space] to restart", 900, 693);
				ctx.beginPath();
				ctx.moveTo(900 - restartSignPlacement, 650, 50, 50);
				ctx.lineTo(870 - restartSignPlacement, 680, 50, 50);
				ctx.lineTo(900 - restartSignPlacement, 710, 50, 50);
				ctx.lineTo(870 - restartSignPlacement, 680, 50, 50);
				ctx.closePath();
				ctx.stroke();
				ctx.beginPath();
				ctx.moveTo(900 + restartSignPlacement, 650, 50, 50);
				ctx.lineTo(930 + restartSignPlacement, 680, 50, 50);
				ctx.lineTo(900 + restartSignPlacement, 710, 50, 50);
				ctx.lineTo(930 + restartSignPlacement, 680, 50, 50);
				ctx.closePath();
				ctx.stroke();
			} else if (bossHealth <= 0) {
				if (restartTransperency < 2) {
					restartTransperency += 1 / 60
				}
				ctx.font = "20px Orbitron";
				ctx.fillStyle = 'rgba(50, 50, 50, ' + (restartTransperency - 1) + ' )'
				ctx.fillText("Congrats on beating the game", 900, 693);
				Start.pause()
				Begin.stop()
				VineBoom.pause()
				PlayerHitLight.pause()
				PlayerHitHeavy.pause()
				DoubleJump.pause()
				Dodge.pause()
				Hit1.pause()
				Hit2.pause()
				Hit3.pause()
				Hit4.pause()
				Fail.pause()
				Crash.pause()
				Moving1.pause()
				Moving2.pause()
				Moving3.pause()
				ChainHit.pause()
				ChainWarning.pause()
				FakeDeactivated.pause()
				LazerA3.pause()
				LazerA4.pause()
				SmashA7Left.pause()
				SmashA7Right.pause()
				SmashA7.pause()
				LazerA8.pause()
				LazerA9.pause()
				LazerA10P1.pause()
				LazerA10P2.pause()
				LazerA10P3.pause()
				LazerA10P4.pause()
			}
			restartCooldown++
		} else {
			restartTransperency = 0
			gameOverTransparency = 0
			restartCooldown = 0
		}
		if (restarted == true) {
			restartCooldown--
			restarting++
			BossTheme.fadeOut()
			if (restartCooldown >= 150) {
				restarting = 0
				restartTransition = 0
				restartCooldown = 120
			}
			restartTransition += 1 / 30

			if (restarting >= 60) {
				if (progress > bestProgress) {
					bestProgress = progress
				}
				restart()
				BossTheme.stop()
				fadeOutVolume = 1
			}
		}
	} else {

		ctx.fillStyle = "#000000"
		ctx.fillRect(0, 0, cnv.width, cnv.height);
		if (epilepsyWarningSignTime > 40) {
			if (epilepsyWarningTransperency < 1) {
				epilepsyWarningTransperency += 1 / 120
			}
		}
		ctx.font = "100px Orbitron";
		ctx.fillStyle = "#ffffff"
		ctx.fillText('The Finale', 900, titleTextY);
		if (epilepsyWarningSignTime > 20) {
			titleTextY += (-titleTextY + 150) / 15
		}
		ctx.fillStyle = "rgba(255, 55, 55, " + epilepsyWarningTransperency + " )"
		ctx.textAlign = "center"
		ctx.font = "30px Orbitron";
		ctx.fillText('This game contains multiple parts with flashing lights or fast moving parts', 900, 450);
		ctx.fillText('It may cause discomfort to certain people', 900, 490);
		if (epilepsyWarningSignTime > 120) {
			if (epilepsyWarningProceedTransperency < 1) {
				epilepsyWarningProceedTransperency += 1 / 120
			}
			ctx.fillStyle = "rgba(255, 255, 255, " + epilepsyWarningProceedTransperency + " )"
			ctx.fillText('Press [Space] to start', 900, 800);
		}
		epilepsyWarningSignTime++
	}
	if (epilepsyWarningConfirmed == true) {
		epilepsyWarningActive = false
		ctx.fillStyle = "rgba(0, 0, 0, " + (epilepsyWarningFadeDelay / 60) + " )"
		ctx.fillRect(0, 0, cnv.width, cnv.height);
		epilepsyWarningFadeDelay--
	}
	ctx.fillStyle = 'rgba(0, 0, 0, ' + restartTransition + ' )'
	ctx.fillRect(0, 0, cnv.width, cnv.height);
	restartTransition -= 1 / 60

	// Sound
	if (mute == true) {
		Start.pause()
		Begin.pause()
		VineBoom.pause()
		PlayerHitLight.pause()
		PlayerHitHeavy.pause()
		DoubleJump.pause()
		Dodge.pause()
		Hit1.pause()
		Hit2.pause()
		Hit3.pause()
		Hit4.pause()
		Fail.pause()
		BossTheme.pause()
		Crash.pause()
		Moving1.pause()
		Moving2.pause()
		Moving3.pause()
		ChainHit.pause()
		ChainWarning.pause()
		FakeAttack.pause()
		FakeDeactivated.pause()
		LazerA3.pause()
		LazerA4.pause()
		SmashA7Left.pause()
		SmashA7Right.pause()
		SmashA7.pause()
		LazerA8.pause()
		LazerA9.pause()
		LazerA10P1.pause()
		LazerA10P2.pause()
		LazerA10P3.pause()
		LazerA10P4.pause()
	} else {
		if (playerAttacked == true) {
			BossTheme.play()
		}
	}

	frame++
	requestAnimationFrame(draw);
}