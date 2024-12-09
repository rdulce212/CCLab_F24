let x=20;
let y;
let banner;
function setup (){
  background(255);
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-container");
  y = height/2-50;
  banner = new Banner();
}

function draw(){
  background (255);
  setting ();
  bill();

  banner.display();
  banner.update();   
  if (banner.cx > width) {
        banner.cx = -100; 
    }
   if (keyIsPressed){
    if (keyCode=== LEFT_ARROW) {
        //update bill
        x-=2
    }else if (keyCode===RIGHT_ARROW && x < width/4+80){
        //update bill
        x+=2
    }
   }
   if (x<0){
    x = 20
   }
   if(x>width/4+79){
    textAppear();
   }
}
function textAppear() {
    textSize(20);
    fill(255,0,0);
    text('Or are we celebrating years of peace?', width/2+20, height/2+170);
}

function setting (){
//people
  noStroke();
  fill (255, 192, 203);
  rect(width/2, 270-40, 25, 40);
  circle(width/2, 238-40, 25);
  
// actual setting
  noStroke();
  fill(220);
  rect(width/2, height/2+130, width, height/4+150)
  fill(196, 164, 132);
  rectMode(CENTER);
  rect(width/2, height/2+30, 130, 30);
  ellipse(width/2, height/2, 200, 50);
//more people
  noStroke();
  fill (255);
  rect(width/2, 270+10, 25, 40);
  circle(width/2, 238+10, 25);
  
  noStroke();
  fill (24, 123, 205);
  rect(width/2+120, 270-10, 25, 40);
  circle(width/2+120, 238-10, 25);

}

class Banner{
  constructor(){
    this.cx =-100;
    this.cy = height/4-40;
    this.speed = 4
  }
  display(){
    fill(220);
    rect(width/2,this.cy-5,width, 30)
    fill(255,0,0);
    textSize(20);
    text('900 Years of Peace',this.cx,this.cy);
  }
  update(){
    this.cx += this.speed
  }
}

function bill() {
    noStroke();
    fill (0);
    rect(x, y+70, 25, 40);
    circle(x, y +38, 25);

}