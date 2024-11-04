/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;
let u= 0 
let v= 0
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  dancer = new Mosquito(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class Mosquito {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    this.u = 0;
    this.v = 0;
    this.bodyColor= color(255);
    this.eyeColor = color(255,0,0);
    this.hatColor = color(210,180,140);
    this.hatColor2 = color(0);
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.v = sin(frameCount * 0.1) *10
    this.u = cos(frameCount * 0.05) * 5;
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    fill(this.bodyColor);
    //legs 
    triangle (this.u-10, this.v+80, this.u-8, this.v+40, this.u-2, this.v+40);
    triangle (this.u+10, this.v+80, this.u+8, this.v+40, this.u+2, this.v+40);
    triangle (this.u-10, this.v+130, this.u-6, this.v+70, this.u-10, this.v+70);
    triangle (this.u+10, this.v+130, this.u+6, this.v+70, this.u+10, this.v+70);
    circle (this.u-8, this.v+70, 6);
    circle(this.u+8, this.v+70, 6);
    //arms 
    triangle(this.u-35,this.v+20, this.u-5, this.v+23, this.u-5, this.v+15);
    triangle(this.u+35, this.v+20, this.u+5, this.v+23, this.u+5, this.v+15);
    triangle(this.u+70, this.v+50, this.u+30, this.v+22, this.u+30, this.v+18);
    triangle(this.u-70, this.v+50, this.u-30, this.v+22, this.u-30, this.v+18);
    circle(this.u-30, this.v+20, 6);
    circle(this.u+30, this.v+20, 6);
    //body 
    ellipse(this.u, this.v+20, 20,55);
    //head 
    circle(this.u, this.v, 30);
    noStroke();
    fill(this.eyeColor);
    circle (this.u-8, this.v, 5);
    circle (this.u+8, this.v, 5);
    //hat
    fill(this.hatColor);
    ellipse(this.u, this.v-30, 50, 10); 
    ellipse(this.u+5, this.v-40, 15, 25);
    ellipse(this.u-5, this.v-40, 15, 25);
    fill(this.hatColor2);
    rect(this.u-12, this.v-36, 24, 2);

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/