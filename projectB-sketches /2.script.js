let x=20;
let y;
function setup (){
    let canvas = createCanvas(800, 500);
    canvas.parent("p5-container");
    y = height/2;
}

function draw(){
    background (255);
    setting();
    bill();

   if (keyIsPressed){
    if (keyCode=== LEFT_ARROW) {
        //update bill
        x-=3
    }else if (keyCode===RIGHT_ARROW){
        //update bill
        x+=3
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
    textSize(20);
    fill(255,0,0);
    text('No matter our Differences.', width/2+20, height/2-100);
}

function setting (){
    fill(0);
    rect(0, height/2+100, width, 300);
}


function bill() {
    noStroke();
    fill (random(255), random(255), random(255));
    rect(x, y+70, 20, 30);
    circle(x+10, y +60, 20);

}
