function setup() {
  createCanvas(400, 400);
  background(234, 224, 204);
 
  for (let x= 0; x < width; x+= 50) {
    for (let y= 0; y < height; y+= 50) {
      fill(random(255), random(255), random(255));
      rect(x, y, 40, 40);
    }
  }
}