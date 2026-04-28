function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(0);

  //body of the car
  fill(180, 134, 159);
  rect(120, 150, 160, 50);

//roof of the car
  fill(180, 134, 159);
rect(155, 110, 120, 40);
//windows
  fill(166, 177, 225)
rect(156, 132, 15, 18);
  //Tires
  fill(199, 214, 213);
  ellipse(150, 205, 40, 40);
  ellipse(250, 205, 40, 40);
  //Front Headlight
  fill(234, 242, 124);
  circle(120,190,10);
  
}