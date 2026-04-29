let img;

function preload() {
  img = loadImage(" c0ee8e03-8cd0-426a-ae94-7db24090f343.png")
}

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(0);


  noStroke();
  for (let i = 0; i < 1000; i++) {
    fill(random(100, 255), random(100, 255), random(150, 255), 20);
    ellipse(random(width), random(height), random(20, 50));
  }
image(img, 100, 100, 200, 200);   

}