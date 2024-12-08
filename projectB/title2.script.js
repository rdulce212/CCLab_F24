let x, y;
let title;
function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("p5-container");
    x = width/2
    y = height/2
    title = new Title(x, y);

}

function draw() {
  //background(220);
  // title.display();
  // title.update();
  mouseHover();
}

class Title{
    constructor (x,y){
      this.x = x;
      this.y = y;
      //this.s = s;
      //this.speed = random(0.005,0.01);
    }
    display(){
      push();
      colorMode(HSB);
      translate (this.x, this.y);
      fill(random(360), random(360), random(360));
      textSize(100);
      textAlign(CENTER, CENTER);
      text('Future Predictions', 0, 0);
      pop();

    }
    update(){
      this.x = this.x + random(-2,2);
    }
}
function titleBlack(){
  fill(0);
  textSize(100);
  textAlign(CENTER, CENTER);
  text('Future Through', x, y);
  text('the Multiverse', x, y+100);
}
function mouseHover(){
  let d= dist(mouseX,mouseY, x, y);
  if (d<100){
    title.display();
    title.update();
  } else if (d>100){
    background(255);
    titleBlack();
  }
}