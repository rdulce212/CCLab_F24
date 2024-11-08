// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 5; // Decide the initial number of particles.

let particles = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");
  //generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
  colorMode(HSB);
}

function draw() {
  background(50);
  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
    p.bounce();
  }
  if (particles.length > 30) {
    kill();
    particles.splice(0,5)
  }
}

function mousePressed(){
  particles.push(new Particle(mouseX, mouseY));
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties (variables): particle's characteristics
    this.x = startX;
    this.y = startY;
    this.speedX = random(5,8);
    this.speedY = random(-3,3);
    this.beetleColor = random(360);
    this.direction = 1;
  }
  // methods (functions): particle's behaviors
  update() {
    // (add) 
    this.x += this.speedX
    this.y += this.speedY
  }
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    scale(this.direction, 1);
    //legs
    fill(0);
    strokeWeight(3);
    stroke(0);
    line(0, 0, 8, 16);
    line(0, 0, 8, -16);

    line(-3, 0, -13, -16);
    line(-3, 0, -13, 16);
    strokeWeight(2);
    line(8,16, -8, 20);
    line(8,-16, -8, -20);
    line(-13, -16, -25, -16);
    line(-13, 16, -25, 16);
    //antena 
    strokeWeight(1);
    noFill();
    arc(19, -6, 50, 10, 0, PI);
    arc(19, 6, 50, 10, PI, 0);
    //fill(this.beetleColor, 50, 100);
    fill(0);
    ellipse(0, 0, 35, 25);
    circle(19, 0, 15);
    pop();
    
  }
  bounce() {
    if (this.x < 0 || this.x > width) {
      this.speedX = -this.speedX;
      this.direction = -this.direction;
    }
    if (this.y < 0 || this.y > height) {
      this.speedY = -this.speedY;
    }
  }
}

function kill(){
  rectMode(CENTER);
  fill(76, 86, 96);
  rect(width/2, height/2+180, 30,250);
  //noFill();
  strokeWeight(3);
  stroke(76, 86, 96);
  arc(width/2, height/2-120, 230, 350, 0, PI, OPEN);
}