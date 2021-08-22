function preload() {

}

function setup() {
    canvas = createCanvas(640,480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(640,480);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('Pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 640, 480);
}


function modelLoaded() {
    console.log('PoseNet is Initialised')
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("mustache x = " + results[0].pose.mustache.x);
        console.log("mustache y = " + results[0].pose.mustache.y);
    }
}

function saveImage() {
    save('myMustacheFilterImage.png');
}
