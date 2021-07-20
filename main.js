mX = 0
mY = 0
function preload(){
    beard = loadImage("https://i.postimg.cc/25jtCKrR/Pngtree-hand-drawn-beard-5362364.png");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(500, 200);
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 400, 400);
    image(beard, mX, mY, 170, 170)
}

function modelLoaded() {
    console.log("poseNet Loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        mX = results[0].pose.nose.x - 85;
        mY = results[0].pose.nose.y - 50;
        console.log('nose x = ' + mX);
        console.log('nose y = ' + mY);
    }
}

function takeSnap() {
    save("the_yeetin_clown.png");
}