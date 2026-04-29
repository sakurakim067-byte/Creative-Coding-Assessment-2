var pic;
function preload(){
  pic=loadImage('llxvisuals--unsplash.jpg')
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(pic,100,100,250,250);
  
  filter(GRAY)
}