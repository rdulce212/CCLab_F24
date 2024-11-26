// https://kylemcdonald.github.io/cv-examples/
// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2

let osc, envelope;
let noseX, noseY;
let p_noseX, p_noseY;
var capture;
var tracker
var w = 640,
    h = 480;

function setup() {
    esc= new p5.Tri0sc();
    envelope= new p5.Env();
    envelope.setADSR(0.001, 0.5, )
    
    
    
    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function() {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    let canvas = createCanvas(w, h);
    canvas.parent("p5-container");
    createCanvas(w, h);
    capture.size(w, h);
    capture.hide();

    colorMode(HSB);

    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);
}

function draw() {
    image(capture, 0, 0, w, h);
    var positions = tracker.getCurrentPosition();

    noStroke();
    for (var i = 0; i < positions.length; i++) {
        fill(map(i, 0, positions.length, 0, 360), 50, 100);
        // ellipse(positions[62][0], positions[62][1], 4, 4);
        // text(62, positions[62][0], positions[62][1]);
    }

    if (positions.length > 0) {
        noseX = positions[62][0];
        noseY = positions[62][1];

        // let  freq = map(noseX, 0, width, 40, 880);
        // osc.freq(freq);
        let d = dist(noseX, noseY, p_noseX, p_noseY);
        // textSize(30);
        // text(d, 100, 100);

        if (d>10){
            osc.start();
            let freq = map(noseX, 0, width, 40, 880);
            osc.freq(freq);
            envelope.play(esc);
        }

    }
    p_noseX = noseX 
    p_noseY = noseY
}
