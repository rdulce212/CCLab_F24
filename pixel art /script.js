let img;
let s = 20;
function preload() {
  img = loadImage("smile2.jpeg");
}
function setup() {
  createCanvas(img.width, img.height);
}
function draw() {
  background(0);
  img.loadPixels(); //very important
  //image(img, 0, 0, width, height);
  //we are not placing the image in the canvas now
  //we will use the colors from the image
  
  for (let x = 0; x < width; x += s) {
    for (let y = 0; y < height; y += s) {
      let c = img.get(x,y);
      fill(c);
      stroke(0);
      rect(x, y, s, s);

    }
  }
}
