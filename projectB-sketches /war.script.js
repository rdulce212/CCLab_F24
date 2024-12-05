let x=20;
let y;
let o;
let p;
function setup (){
    let canvas = createCanvas(600, 400);
    canvas.parent("p5-container");
    y = height/2;
    o= width/2
    p = height/2
}

function draw(){
    background (255);
    setting();
    bill();
    oops(400,200);
    oops(350,200);

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
}

function setting (){
    fill(0);
    rect(width/4-150, height/2+100, width, 300);
    rect(width/4-150, height/2-30, width, 70);
    fill(255);
    textSize(12);
    text('Will we have failed to resolve our conlifts', width/2+50, height/2+150);
    //buildings
    fill(220);
    rect(width/4, height/4+60, 60,80);
    rect(width/4+100, height/4+40, 70,100);
    rect(width/4+150, height/4+60, 60,80);
    rect(width/4+280, height/4+10, 90,130);
    //more buildings 
    rect(width/4-70, height/2+120, 60,80);
    rect(width/4+70, height/4+170, 90,130);
    //fire
    fill(255, 0,0);
    arc(width/4+290, height/4+30, 50, 60, 0, PI);
    triangle (width/4+290, height/4-30, width/4+290, height/4+30, width/4+315, height/4+30);
    triangle (width/4+270, height/4-10, width/4+265, height/4+30, width/4+300, height/4+30);
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