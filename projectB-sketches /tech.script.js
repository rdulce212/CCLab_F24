let x=20;
let y;
let car;
function setup (){
   let canvas = createCanvas(800, 500);
   canvas.parent("p5-container");
    y = height/2;
  building1 = new Building1 ();
  car = new Car();
}

function draw(){
    background (255);
    setting();
    bill();
    let building1 = new Building1(width/4+70,   height/4+170);
    building1.display();
  let building2 = new Building1(width/4-150,   height/4-110);
    building2.display();
  let building3 = new Building1(width/2+250,   height/4-110);
    building3.display();
  car.display();
  car.update();   
  if (car.cx > width) {
        car.cx = -100; 
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
    fill(255,0,0);
    text('We will have become cyborgs reliant on technology?', width/2+20, height/2+170);
}
function setting (){
    fill(0);
    noStroke();
    rect(0, height/2+100, width, 300);
    rect(0, height/2-100, width, 70);
    //buildings
    fill(220);
    rect(width/4, height/4-10, 60,105);
    rect(width/4+100, height/4-30, 70,125);
    rect(width/4+150, height/4-10, 60,105);
    rect(width/4+280, height/4-60, 90,155);
    //more buildings 
    rect(width/4-70, height/2+120, 60,150);
    rect(width/4+70, height/4+170, 90,205);

}
class Building1{
  constructor(bx,by){
  //rect(width/4+70, height/4+170, 90,205);
  this.bx = bx
  this.by = by
  }
  display(){
  noStroke();
  fill(220);
  rect(this.bx, this.by, 90,205);
  for (let i = this.bx+10; i <this.bx+90; i+=40){
    for(let j = this.by+10; j <this.by+205; j+=40){
      noStroke();
      fill(random(255),random(255));
      rect(i, j, 30,30);
    }
    }
  }
}
class Car{
  constructor(){
    this.cx =-100;
    this.cy = height/4;
    this.speed = 4
  }
  display(){
    fill(255,0,0);
    textSize(20);
    text('Flying car',this.cx,this.cy);
  }
  update(){
    this.cx += this.speed
  }
}

function bill() {
    noStroke();
    fill (220);
    rect(x, y+70, 20, 30);
    circle(x+10, y +60, 20);
    fill(255,0,0);
    circle(x+10, y +60, 8);
    stroke(0);
    strokeWeight(2);
    line(x, y+60, x+6, y +60);

}