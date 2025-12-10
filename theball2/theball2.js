//ball catch 

var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";
var img, img2, img3;

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('backgroundg.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://Punzoul.github.io/images/backgroundg.jpg');
  img2 = loadImage('http://Punzoul.github.io/images/starg.jpg');
  img3 = loadImage('http://Punzoul.github.io/images/firstocg.jpg');
}

function setup() {
  createCanvas(600,600);
  textAlign(CENTER);
  textSize(20);
}//end of setup ===========

function draw(){
  background(img);
  cursor(img3);
  if(gameState == "L1"){
  levelOne();
  }
  if(gameState == "L2"){
  levelTwo();
  }
  if(gameState == "L3"){
    levelThree();
  }
  if(gameState == "win"){
    winGame();
  }

  text("Score: " + score, width / 2, 40);
}//end of draw ========

function levelOne(){
  text("Level 1", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score + 1;
  }
  
  if(score>= 5){
   gameState = "L2";
  }
  
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);

  
}//end of level 1========

function levelTwo(){
  background(img);
  text("Level 2", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score + 1;
  }
  
  if(score >10){
   gameState = "L3";
  }
  //line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);

}//end of level 2========

function levelThree(){
  background(img);
  text("Level 2", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score + 1;
    ballSize = ballSize -5;
  }
  
  if(score >15){
    gameState = "win";
    background(random(255));
  }
  //line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);

  
}//end of level 3========

function winGame(){
  background(0,100,200);
  textSize(60); 
  text("winGame", width/2, height/2);
  
}//end of winGame========
