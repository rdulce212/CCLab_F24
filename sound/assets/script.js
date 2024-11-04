// let mySound;
// function preload(){
// mySound = loadSound("assests/song.mp3")
let mic;
function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent("p5-container");
    mic= new p5.AudioIn();
    mic.start();
    //mySound.loop();
  }
  
  function draw() {
    background(220);
    circle (width/2, height/2, 100);
    let level = mic.getLevel();
    // textSize(30);
    // text(level, 50, height/2);
    let s = map(level, 0, 1, 0, 10*width);


    circle (width/2,height/2, level);
  }

//   function mousePressed(){
//     circle (mouseX, mouseY, 100);
//     if (mySound.isPlaying()==false){
//         mySound.play();
//     }else{
//     mySound.pause();
//     }
//   }