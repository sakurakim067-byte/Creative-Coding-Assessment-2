function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke(9);
}

function draw() {
  let x=random(width);
  let y=random(height);
  
  
  let r=random(90);
  fill(random(255),random(255),random(255),90);
  
  ellipse(x,y,r,r);
}