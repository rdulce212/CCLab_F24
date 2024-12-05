let rain =  [];
let x;
let y;
let textX;
let textY;
function setup (){
    let canvas = createCanvas(600, 400);
    canvas.parent("p5-container");
    background(255);
    textX = width/2+100;
    textY = height/2;
    text('Are we forced to live on water', textX, textY-100);
    text('scouring the earth for livable land', textX, textY-80);  
}

function draw(){
    background(255);
    setting();
    bill();
    for (let i = 0; i < rain.length; i++) {
        rain[i].display();
        rain[i].update();
      }
    if(mouseIsPressed===false){
        rain.push(new Rain(random(width), random(height), random(40, 80)));
      }
        fill(0);
        text('Are we forced to live on water', textX, textY-100);
        text('scouring the earth for livable land', textX, textY-80);  
        // let d = dist(mouseX, mouseY, textX, textY)
        // if (d>10){
        //   textX = textX+200
        //   textY = textY-400
        // }
    }
    
function setting (){
    //ship
    stroke(0);
    strokeWeight(5);
    line(width/4-100, height/4+20, width/4-100, height/4+200);
    noStroke();
    fill(220);
    triangle(width/4-45, height/4+100, width/4-97, height/4+20, width/4-97, height/4+100);
    triangle(width/4-150, height/4+100, width/4-102, height/4+20, width/4-102, height/4+100);
    fill(0);

    triangle(width/4-50, height/2+150, width/4+50, height/2+20, width/4-300, height/2+20);
    fill(65,105,225);
    rect(width/4-150, height/2+100, width, 300);

    //trash

    //water 
}
function bill (){
    noStroke();
    fill (220);
    rect(width/4-10, height/2-10, 20, 30);
    circle(width/4, height/2-20, 20);
}
class Rain{
constructor(x,y){
    this.x = x
    this.y = y
}
display(){
    fill(0);
    textSize(random(5,10));
    text('climate change', this.x, this.y)
}
update(){
    this.y = this.y +20
    this.x = this.x -10 
}
}