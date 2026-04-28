let text1 = "Merhaba! I'm Laiba";
var font1
let fontSize = 48;
function preload(){
  font1=loadFont('charlotte.ttf');
}

function setup() {
  createCanvas(600, 200);
  textSize(fontSize);
  textFont(font1,50);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(20);
  fill(255);

let x = width / 2;
let y = height / 2 

text(text1, x, y);
}