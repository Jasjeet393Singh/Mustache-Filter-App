function preload() {
    
}

function setup() {
    createCanvas(640,480);
}

function draw() {

}

function saveImage() {
    save('myMustacheFilterImage.png');
}

function imageSaved(saved,error) {
    if(saved) {
        console.log('Image Saved!');
    }
    if(error) {
        console.log('Error');
    }
}