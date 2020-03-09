// Variables
var playerHeight = 80
var playerWidth = 20
var playerSpeed = 8
var playerL = 200
var playerR = 200

var scoreL = 0
var scoreR = 0

var ballX = 300
var ballY = 200
var ballSize = 20
var ballXSpeed = 4
var ballYSpeed = -2

function setup() {
  createCanvas(600, 400);
}

function draw() {
  
  background(200);
  
  // Leftbackground
  fill(100, 200, 255)
  rect(0, 0, 300, 400)
  noStroke()
  
  
  // Rightbackground
  fill(255, 125, 150)
  rect(300, 0, width, 400)
  noStroke()
  
  // draw left player
  fill(255, 125, 150)
  rect(0, playerL, playerWidth, playerHeight);
  
  // draw right player
  fill(100, 200, 255)
  rect(width-playerWidth, playerR, playerWidth, playerHeight);
  
  // draw ball
  fill(random(100, 255), random(100, 255), random(100, 255))
  ellipse(ballX, ballY, ballSize)
  
  
  /* User Input */
  // 'W' key
  if (keyIsDown(87)) {
    playerL = playerL - playerSpeed
  }
  // 'S' key
  if (keyIsDown(83)) {
    playerL = playerL + playerSpeed
  }
  
  if (keyIsDown(UP_ARROW)) {
    playerR = playerR - playerSpeed
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerR = playerR + playerSpeed
  }
  
  /* Game logic */
  if (playerL <= 0) {
    playerL = 0;
  }
  if (playerL > height - playerHeight) {
    playerL = height - playerHeight;
  }
  
  if (playerR <= 0) {
    playerR = 0;
  }
  if (playerR > height - playerHeight) {
    playerR = height - playerHeight;
  }
  
  ballX = ballX + ballXSpeed
  ballY = ballY + ballYSpeed
  
  // Bounce off top wall
  if (ballY < 0) {
    ballY = 0;
    ballYSpeed = -ballYSpeed;
  }

  // Bounce off bottom wall
  if (ballY > height) {
    ballY = height;
    ballYSpeed = -ballYSpeed;
  }
  
  
  // bounce off right player
  if (ballX > width - playerWidth && ballY >= playerR && ballY <= playerR + playerHeight) {
    ballX = width - playerWidth;
    ballXSpeed = -ballXSpeed;
  }
  
  // playerL scores!
  if (ballX > width) {
    ballX = width/2;
    ballY = height/2;
    scoreL = scoreL + 1;
    ballXSpeed = - ballXSpeed;
  }
  
   // bounce off left player
  if (ballX < 0 + playerWidth && ballY >= playerL && ballY <= playerL + playerHeight) {
    ballX = 0 + playerWidth;
    ballXSpeed = - ballXSpeed;
  }
  
  // playerR scores!
  if (ballX < 0) {
    ballX = width/2;
    ballY = height/2;
    scoreR = scoreR + 1;
    ballXSpeed = - ballXSpeed;
  }
  
  // PlayerL score number
  fill(240, 125, 150)
  textSize(60);
  text(scoreL, 150, 75);
  
  // PlayerL score number
  fill(100, 200, 240)
  textSize(60);
  text(scoreR, width - 174, 75);  
}
