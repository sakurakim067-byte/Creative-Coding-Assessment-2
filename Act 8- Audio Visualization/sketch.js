let mic;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(213,184,147);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
 let micLevel=mic.getLevel()*height*5;
  fill(random(255),random(255),random(255));
  ellipse(mouseX,mouseY,micLevel);
}
function mousePressed(){
  background(100);
}