let vid; 
function preload(){
    vid = createVideo('assets/robot.union.mp4')
}
function setup() {
    let canvas = createCanvas(400, 350);
    canvas.parent("p5-canvas");
    background(0);
  

    vid.hide();
    vid.size(400, 350);
    vid.play();
  }
  function draw() {
    image(vid, 0, 0);
  }
  