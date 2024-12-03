function setup (){
    let canvas = createCanvas(790, 390);
    canvas.parent("p5-container");
}

function draw(){
    setting();
    bill();
}

function setting (){
    //ship
    triangle();
    rect();
    //trash

    //water 
}
function bill (){
    noStroke();
    fill (220);
    rect(20, height/2+70, 20, 30);
    circle(30, height/2 +60, 20);
}
class rain{
constructor(){

}
display(){

}
update(){

}
}