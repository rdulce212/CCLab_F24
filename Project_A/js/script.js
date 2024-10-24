let x;
let y;
let img;
let currentMode = "alive";
let jumpScareActive = false;
let jumpScareCounter = 0;
let jumpScareInterval = 600; 
let jumpScareDuration = 100;

function setup() {
  let canvas = createCanvas(800, 500);
    canvas.id("p5-canvas");
    canvas.parent("p5-canvas-container");
  x = random(width);
  y = random(height);
  img = loadImage("../assets/axe.jpeg"); 
}
function draw() {
if (jumpScareActive) {
    background(0);
    jumpScare();
    jumpScareCounter++;
    if (jumpScareCounter > jumpScareDuration) {
      jumpScareActive = false;
      jumpScareCounter = 0;
    }
  } else {
    background(0, 0, 66);
    fill(124, 127, 69);
    rectMode(CENTER);
    rect(width / 2, height / 2 + 100, 800, 300); 
    drawStars();
    drawCreature();
    drawTree(width/2,height/2);
    drawTree(width/2-300, height/4-50);
    drawTree(width/2+200,height/4-50);
    drawTree(width/2+350,height/2);
    drawTree(width/2-300,height/2+50);
    move();
    if (frameCount % jumpScareInterval === 0 && random() < 0.1) {
      jumpScareActive = true;
      jumpScareCounter = 0;
    }
  }
  if (mouseOnCanvas()){
    if (mouseIsPressed) {
      x = lerp(x, mouseX, -0.05);
      y = lerp(y, mouseY, -0.05);
  }else {
    x = lerp(x, mouseX, 0.05);
    y = lerp(y, mouseY, 0.05);
  }
  }else{
    move();
  }
  if (keyIsPressed) {
    if (key == "k") {
      cursor("/assets/axe.jpeg");
      currentMode = "killing";
    }
  }
  if (mouseIsPressed && dist(mouseX, mouseY, x, y) < 20 && currentMode == "killing") {
    background(255, 0, 0);
  }
}
function drawStars() {
  if (frameCount % 3 ===0){
  for (i=0; i<width; i+=100){
      for (j=0; j< 155; j+=50){
        let numberStars = random(100);
        if (numberStars < 30) {
        let xOffset = random(-50, 50);
        let yOffset = random(-20, 20);
        stroke(253, 250, 114);
        fill(255);
        circle(i+xOffset, j+yOffset, random(2));
        circle(i+70+xOffset,j+30+yOffset,random(7));
        }
  }
  
      }
}
}
function move() {
  if (!jumpScareActive) {
    x = x + random(-10, 10);
    if (x > width || x < 0) {
      x = 0;
    }
    y = y + random(-3, 3);
    if (y > width || y < 0) {
      y = 0;
    }
  }
}
function mouseOnCanvas(){
  return mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height;
}
function drawCreature() {
  noStroke();
  fill(0);
  circle(x, y, 40);
  arc(x, y + 35, 90, 30, PI, 0);
  //arms
  rect(x, y + 65, 40, 80);
  triangle(x - 35, y + 150, x - 45, y + 35, x - 25, y + 33);
  triangle(x + 35, y + 150, x + 45, y + 35, x + 25, y + 33);
  //legs
  triangle(x - 10, y + 200, x - 20, y + 100, x, y + 100);
  triangle(x + 10, y + 200, x + 20, y + 100, x, y + 100);
  fill(255, 0, 0);
  circle(x + 10, y, 3);
  circle(x - 10, y, 3);
}

function drawTree(i,j) {
  fill(216, 181, 137);
  triangle(i + 40,j + 10,i + 5,j + 60,i - 5,j + 60);
  triangle(i - 40,j + 10,i + 5,j + 60,i - 5,j + 60);
  triangle(i, j, i + 15, j + 170, i - 15, j + 170);
  fill(120, 134, 107);
  circle (i + 40, j + 10, 50);
  circle(i - 40, j + 10,50);
  circle(i, j,70);
}
  function jumpScare() {
    push();
    strokeWeight(1);
  fill(0);
  ellipse(width / 2, height / 2, 150, 200);
  fill(255, 0, 0);
  circle(width / 2 - 30, height / 2 - 20, 15);
  circle(width / 2 + 30, height / 2 - 20, 15);
  fill(0);
  stroke(255);
  let y = -10;
  let teethDecrease = 7;
  for (c = 360; c < 460; c += 20) {
    fill(255);
    triangle(c, height / 2 + 60 + y, c - 5, height / 2 + 30 + y, c + 5, height / 2 + 30 + y);
    if (c < 400) {
      y += teethDecrease;
    } else {
      y -= teethDecrease;
    }
  }
  fill(0);
  stroke(0);
  arc(width / 2, height / 2, 100, 80, 0, PI);
  let k = -25;
  let toothDecrease2 = 5;
  for (c = 370; c < 450; c += 20){
    fill(255);
    if (c < 410){
        k += toothDecrease2;
        }else {
      k -= toothDecrease2;
    }
    triangle(c,height / 2 + 60 + k, c - 5, height / 2 + 90 + k, c + 5, height / 2 + 90 + k);
  }
  noFill()
  stroke(0);
  strokeWeight(10);
  arc(width / 2, height / 2+40, 100, 80, 0, PI, OPEN);
    pop();
}