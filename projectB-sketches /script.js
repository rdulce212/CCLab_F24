let x=20;
let y;
function setup (){
    let canvas = createCanvas(790, 390);
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
        x-=1
    }else if (keyCode===RIGHT_ARROW){
        //update bill
        x+=1
    }
   }
}

function setting (){
    fill(0);
    rect(width/4-210, height/2+100, width, 300);
    rect(width/4+200, height/2+80, 260, 30);
    rect(width/4+230, height/2+60, 200, 20);
}


function bill() {
    noStroke();
    fill (220);
    rect(x, y+70, 20, 30);
    circle(x+10, y +60, 20);
}
