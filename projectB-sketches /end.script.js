let x=20;
let y;
let ox;
let oy;

function setup (){
  background(255);
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-container");
  y = height/2+200;
  ox = width/2;
  oy = height/2+200
}

function draw(){
  background (25,25,112);
  setting ();
  otherCharacters();
  bill();

   if (keyIsPressed){
    if (keyCode=== LEFT_ARROW) {
        //update bill
        x-=2
    }else if (keyCode===RIGHT_ARROW && x < width/4+70){
        //update bill
        x+=2
    }
   }

   if (x<0){
    x = 20
   }
   if(x>width/4+69){
    textAppear();
   }
}
function textAppear() {
  push();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(15);
  fill(0);
  let rectCenterX = width/2;
  let rectCenterY = height/2 - 50;
  let textWidth = 400;
  text('Regardless of how the world looks, it will have been our doing.', rectCenterX, rectCenterY - 20, textWidth);
  text('So I hope humans 1000 years in the future learn from our mistakes.', rectCenterX, rectCenterY + 20, textWidth);
  pop();
}

function setting (){
  //webpage
  push();
  fill(255);
  rectMode(CENTER);
  rect(width/2, height/2-50, 450, 300);
  fill(220);
  rect(width/2, height/2-190,450,30);
  fill(255,0,0);
  circle(width/4-10, height/2-190,12);
  fill(255,255,0);
  circle(width/4+10, height/2-190,12);
  fill(0,255,0);
  circle(width/4+30, height/2-190,12);
  pop();
  // bottom
  fill(255);
  rect(0,height/2+180, width, 100);
}

function bill (){
  noStroke();
  fill (220);
  rect(x-10, y-10, 20, 30);
  circle(x, y-20, 20);

}
function otherCharacters(){
  //astronaut 
  noStroke();
  fill(0);
  rect(ox-15, oy-10, 20, 15);
  fill (220);
  rect(ox-10, oy-10, 20, 30);
  circle(ox, oy-20, 20);
  fill(0,150);
  circle(ox, oy-20, 30);
  //random color guy
  fill (random(255), random(255), random(255));
  rect(ox-80, oy-10, 20, 30);
  circle(ox-70, oy-20, 20);
  //cyborg 
  fill (220);
  rect(ox+110, oy-10, 20, 30);
  circle(ox+120, oy-20, 20);
  fill(255,0,0);
  circle(ox+120,oy-20,8);
  stroke(0);
  line(ox+110,oy-20, ox+116,oy-20);
  strokeWeight(2);
  noStroke();
  // peace people and opps
  fill (255, 192, 203);
  rect(ox-110, oy-10, 20, 30);
  circle(ox-100, oy-20, 20);
  
  fill (24, 123, 205);
  rect(ox-50, oy-10, 20, 30);
  circle(ox-40, oy-20, 20);
  
  fill (0);
  rect(ox+70, oy-10, 20, 30);
  circle(ox+80, oy-20, 20);
  
  fill (255,0,0);
  rect(ox+30, oy-10, 20, 30);
  circle(ox+40, oy-20, 20);
  //upsidedown guy
  noStroke();
  fill (220);
  rect(ox-300, oy-450, 20, 30);
  circle(ox-290, oy -410, 20);

}