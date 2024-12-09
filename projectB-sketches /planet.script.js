let x=20;
let y;
let rocket;
function setup (){
  background(255);
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-container");
  y = height/2+50;
  rocket = new Rocket();
}

function draw(){
  background (25,25,112);
  setting ();
  drawStars();
  bill();
  rocket.display();
  rocket.update();
  if (rocket.cx > width) {
        rocket.cx = -100; 
    }
   if (keyIsPressed){
    if (keyCode=== LEFT_ARROW) {
        //update bill
        x-=2
    }else if (keyCode===RIGHT_ARROW){
        //update bill
        x+=2
    }
   }

   if (x<0){
    x = 20
   }
   if(x>width){
    textAppear();
   }
}
function textAppear() {
    textSize(15);
    fill(255);
    text('Looking for a new planet to suck the life out of.', width/2+20, height/2+170);
}

function setting (){
  fill(100,149,237);
  circle(width/2+150, height/2-50, 200);
}
function drawStars() {
  if (frameCount % 3 ===0){
  for (i=0; i<width; i+=100){
      for (j=0; j< height; j+=50){
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
class Rocket{
  constructor(){
    this.cx =-100;
    this.cy = height/4-40;
    this.speed = 4;

  }
  display(){
    fill(255,0,0);
    textSize(20);
    text('space ship',this.cx,this.cy);
  }
  update(){
    this.cx += this.speed
    this.cy+= random(-2,2)
  }
}

function bill (){
  noStroke();
  fill(255);
  rect(x-15, y-10, 20, 15);
  fill (220);
  rect(x-10, y-10, 20, 30);

  circle(x, y-20, 20);
  fill(0,150);
  circle(x, y-20, 30);
}