let x=20;
let y;
let o;
let p;
let boom = [];
function setup (){
    let canvas = createCanvas(800, 500);
    canvas.parent("p5-container");
    y = height/2;
    o= width/2
    p = height/2
}

function draw(){
    background (255);
    setting();
    bill();
    oops(width/2 +50,height/2);
    oops(width/2 -50,height/2-100);
    oops(width/2 +200,height/2-100);
    oops(width/2 +200,height/2+140);
    let d = dist(x, y, width/2 +50,height/2);
    let d2 = dist(x, y, width/2 -50,height/2-100);
    let d3 = dist(x, y, width/2 +200,height/2-100);
    let d4 = dist(x, y, width/2 +200,height/2+140);
   if (keyIsPressed){
    if (keyCode=== LEFT_ARROW) {
        //update bill
        x-=2;
    }else if (keyCode===RIGHT_ARROW){
        //update bill
        x+=2;
    }
   }
   if (keyIsPressed){
    if (keyCode=== UP_ARROW) {
        //update bill
        y-=2;
    }else if (keyCode===DOWN_ARROW){
        //update bill
        y+=2;
    }
   }
   if (x<0){
    x = 20;
   }
   if(x>width){
    textAppear();
   }
   if (d<15||d2<15|| d3<15|| d4<15){
    x = 20;
    y = height/2;
   }
   for (let i = boom.length - 1; i >= 0; i--) {
    boom[i].display();
    boom[i].update();
    if (boom[i].s > 50){
        boom.splice(i, 1);
    }
    }
}

function textAppear() {
    textSize(20);
    fill(255,0,0);
    text('Will we have failed to resolve our conflicts.', width/2+20, height/2+170);
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
    //fire
    fill(255, 0,0);
    arc(width/4+290, height/4-40, 50, 60, 0, PI);
    triangle (width/4+290, height/4-100, width/4+290, height/4-40, width/4+315, height/4-40);
    triangle (width/4+270, height/4-80, width/4+265, height/4-40, width/4+300, height/4-40);
}


function bill() {
    noStroke();
    fill (220);
    rect(x, y+70, 20, 30);
    circle(x+10, y +60, 20);
}
function oops(o,p){
    noStroke();
    fill (255,0,0);
    rect(o, p+70, 20, 30);
    circle(o+10, p +60, 20);
}
function mousePressed(){
    for (let i = 0; i < 10; i++) {
        boom.push(new Boom(mouseX, mouseY, random(10)));
    }
}
class Boom{
    constructor(x,y,s){
        this.x = x;
        this.y = y;
        this.s = s;
    }
    display(){
        fill(255,0,0);
        textSize(this.s);
        text('BOOM', this.x, this.y);
    }
    update(){
       this.s= this.s + 1;
    }
    }