let img;

function preload() {
  img = loadImage('download (2).jpg'); 
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 221, 226);

  beginClip(); 
  
  circle(200, 200, 250); 
  
  endClip(); 

  image(img, 0, 0, 400, 400); 
}

