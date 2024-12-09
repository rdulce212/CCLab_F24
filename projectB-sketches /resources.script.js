let img;
let bx = 20;
let by;
function preload(){
  img=loadImage("dryland.webp")
}
function setup (){
  background(255);
  canvas = createCanvas(800, 500);
  by = height/2-10;
}

function draw(){
  image(img, 0,0, width, height);
//   img.loadPixels();
//    for(let n =0; n < 100; n++){
//     let x = floor(random(img.width)); 
//     let y = floor(random(img.height));

//     let c = img.get(x,y);
//     fill(c);
//     noStroke();
//     circle(x,y,random(1,20));
//   }


  bill();
   if (keyIsPressed){
    if (keyCode=== LEFT_ARROW) {
        //update bill
        bx-=2
    }else if (keyCode===RIGHT_ARROW){
        //update bill
        bx+=2
    }
   }
   if (bx<0){
    bx = 20
   }
   if(bx>width){
    textAppear();
   }
}
function textAppear() {
    textSize(20);
    fill(255,0,0);
    text('And limited in our resources.', width/2+20, height/2-170);
}


function bill (){
    noStroke();
    fill (220);
    rect(bx-10, by, 20, 30);
    circle(bx, by-10, 20);
}