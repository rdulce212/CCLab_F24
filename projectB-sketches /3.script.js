let x=20;
let y;
function setup (){
    let canvas = createCanvas(600, 400);
    canvas.parent("p5-container");
    y = height/4;
}

function draw(){
    background (255);
    setting();
    bill();

   if (keyIsPressed){
    if (keyCode=== LEFT_ARROW) {
        //update bill
        x+=2
    }else if (keyCode===RIGHT_ARROW){
        //update bill
        x-=2
    }
   }
   if (x<0){
    x = 20
   }

}

function setting (){
    fill(0);
    rect(width/4-150, height/4-200, width, 200);
    fill(0);
    textSize(18);
    text('Or if we function differently.', width/2+50, height/2+130);
    text('-->  <--', width/2+120, height/2+150);
}


function bill() {
    noStroke();
    fill (220);
    rect(x, y, 20, 30);
    circle(x+10, y +40, 20);

}
