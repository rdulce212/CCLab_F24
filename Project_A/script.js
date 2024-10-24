let x;
let y;
let i;
function setup() {
  let canvas= createCanvas(400, 400);
  canvas.parent("p5-canvas-container");
  x = random (width);
  y = random(height);
}

function draw() {
  background(0,0,66);
  fill(124,127,69);
  rectMode(CENTER);
  rect(width/2,height/2+100,400,300);

 
  drawStars();
  drawCreature();
  //drawTree();
  move();
  if (mouseIsPressed){
    x = lerp(x, mouseX, -0.05);
    y = lerp(y, mouseY, -0.05);
  }else{
    x = lerp(x, mouseX, 0.05);
    y = lerp(y, mouseY, 0.05);
  }
   if (keyIsPressed){
       if (key=='k'){
         cursor('https://www.shutterstock.com/image-vector/pixel-art-illustration-axe-pixelated-260nw-2375066613.jpg');
         if (mouseX,mouseY==x,y){
             //make creature dissappear 
             }
       }
  }
  //make creature attack if you havent interacted with him so like a jump scare 
  }
function drawStars(){

  stroke(253,250,114);
  fill(255);
  circle(30,80,random(10));
  circle(320,100,random(10));
  circle(180,100,random(10));
  
  circle(250,50,random(5));
  circle(100,20,random(5));
  circle(350,30,random(5));
  noStroke();
}
function move() {
  //movement using noise and like making him shrink as he moves back ward 
  // for(let i=0;i<x.length;i++){
  // x[i]=width*noise(frameCount*speedX[i]) 
  // y[i]=height*noise(frameCount*speedY[i])
  // }
   x=x+random(-10,10);
  if (x>width||x<0){
    x=0;
  }
  y=y+random(-3,3);
  if (y>width || y<0){
    y=0
  }
}

 function drawCreature (){
  noStroke();
  fill(0)
  circle (x, y, 40);
  arc(x, y+35, 90, 30, PI, 0);
//arms
  rect(x, y+65, 40, 80);
  triangle (x-35, y+150, x-45, y+35, x-25, y+33);
  triangle (x+35, y+150, x+45, y+35, x+25, y+33); 
//legs
  triangle (x-10, y+200, x-20,y+100, x, y+100);
  triangle (x+10, y+200, x+20,y+100, x, y+100);
  fill(255, 0, 0);
  circle(x+10, y, 3);
  circle(x-10, y, 3);
}

function drawTree() {
  fill(216, 181, 137);
  triangle (i+40, height/4+10, i+5, height/4+60, i-5, height/4+60);
  triangle (i-40, height/4+10, i+5, height/4+60, i-5, height/4+60);
  triangle(i, height/4, i+15, height/2+50, i-15, height/2+50); 
      for (x= 100; x<200; x+=random(20)){
        for(y= 80; y< 120; y+=random(20)){
          fill(120,134,107);
          ellipse (x+40, y+10, 23,8);
    }
      }
}