noseX=0;
noseY=0;

function preload() {
  mustache = loadImage('https://pngimg.com/uploads/moustache/moustache_PNG38.png');
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    mustacheX = results[0].pose.mustache.x-15;
    mustacheY = results[0].pose.mustache.y-15;
  }
}

function draw() {
  image(video, 0, 0, 640, 480);
  image(mustache, noseX, noseY, 30, 30);
}

function take_snapshot(){    
  save('myFilterImage.png');
}