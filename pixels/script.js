let img;
let s = 10
let cam;
function preload(){
    img=loadImage("hokusai.jpg")
}
function setup() {
    let canvas = createCanvas(640, 480);
    canvas.parent("p5-container");
    cam= createCapture (VIDEO);
    cam.hide();

}

function draw() {
    //image(img, 0,0, width, height);
    cam.loadPixels();
    // for (let x = 0; x < cam.width; x+= s){
    //     for (let y = 0; y< cam.height; y+= s){
    //         noStroke();
    //         let i = (x+y *cam.width)*4
    //         let r = cam.pixels[i+0];
    //         let g = cam.pixels[i+1];
    //         let b = cam.pixels[i+2];
    //         fill(r,g,b);
    //         //moving pixels by color
    //         let z = map(r, 0, 255, 300, 0);
    //         push();
    //         translate(x- width/2, y-height/2, z);
    //         circle(0, 0, s);
    //         pop();
    //     }
    // }
    for (let i=0; i<100; i++){
        let x = int(random(width));
        let y = int(random(height));
        let index = (x + y * cam.width)*4;
        let r = cam.pixels[index+0];
        let g = cam.pixels[index+1];
        let b = cam.pixels[index+2];
    //let c = cam.get(x, y);
        fill(r, g, b);
        noStroke();
        circle(x, y, random(1,20));
    }
}
