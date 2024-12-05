let x=20;
let y;
function setup (){
    let canvas = createCanvas(600, 400);
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
    fill(255);
    textSize(18);
    text('No matter our differences.', width/2+50, height/2+150);
}


function bill() {
    noStroke();
    fill (random(255), random(255), random(255));
    rect(x, y+70, 20, 30);
    circle(x+10, y +60, 20);

}
