// ball catch 

var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";
var img, img2;
var cursorImg;

function preload() { 
  img = loadImage('https://Punzoul.github.io/images/backgroundg.jpg');
  img2 = loadImage('https://Punzoul.github.io/images/starg.png');
  cursorImg = loadImage('https://Punzoul.github.io/images/firstocg.png');
}

function setup() {
  createCanvas(600,600);
  noCursor();
  textAlign(CENTER);
  textSize(20);
}

function draw(){
  background(img);

  if(gameState == "L1") levelOne();
  if(gameState == "L2") levelTwo();
  if(gameState == "L3") levelThree();
  if(gameState == "win") winGame();

  fill(255);
  text("Score: " + score, width / 2, 40);
}

// ---------- LEVEL 1 ----------
function levelOne(){
  image(cursorImg, mouseX-30, mouseY-30, 60, 60);
  text("Level 1", width/2, height-20);

  let d = dist(ballx, bally, mouseX, mouseY);
  if(d < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score++;
  }

  if(score >= 5) gameState = "L2";

  image(img2, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
}

// ---------- LEVEL 2 ----------
function levelTwo(){
  image(cursorImg, mouseX-30, mouseY-30, 60, 60);
  text("Level 2", width/2, height-20);

  let d = dist(ballx, bally, mouseX, mouseY);
  if(d < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score++;
  }

  if(score > 10) gameState = "L3";

  image(img2, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
}

// ---------- LEVEL 3 ----------
function levelThree(){
  image(cursorImg, mouseX-30, mouseY-30, 60, 60);
  text("Level 3", width/2, height-20);

  let d = dist(ballx, bally, mouseX, mouseY);
  if(d < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score++;
    ballSize = max(ballSize - 5, 10);
  }

  if(score > 15) gameState = "win";

  image(img2, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
}

// ---------- WIN SCREEN ----------
function winGame(){
  background(img);
  fill(255,204,0);
  textSize(60); 
  text("YOU WIN!", width/2, height/2);
}
