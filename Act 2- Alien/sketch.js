function setup() {
  createCanvas(736, 796);
  background(230);
  
}

function draw() {
  background(235);

// Shadow
  noStroke();
  fill(210, 220, 215, 120);
  ellipse(368, 620, 420, 55);

//tail
 stroke(10);
strokeWeight(5);
fill(130, 255, 130);
  
ellipse(520, 470, 50, 50);
ellipse(555, 430, 50, 50);
ellipse(570, 384, 40, 40);

// Body
fill(145, 255, 135);
ellipse(368, 430, 260, 300);

// Head
ellipse(368, 280, 420, 360);

// Left Ear
stroke(50);
strokeWeight(5);
fill(120, 255, 120);
triangle(220, 180, 170, 70, 315, 140);

fill(70, 220, 160);
triangle(220, 170, 205, 95, 275, 145);

 // Right Ear
  fill(120, 255, 120);
  triangle(515, 180, 565, 70, 420, 140);

  fill(70, 220, 160);
  triangle(510, 170, 530, 95, 455, 145);

  // Antennas
  stroke(50);
  strokeWeight(5);
  line(320, 104, 300, 20);
  line(430, 105, 450, 20);

  fill(130, 255, 130);
  ellipse(300, 20, 45, 45);
  ellipse(450, 20, 45, 45);

  fill(255, 255, 255, 180);
  noStroke();
  ellipse(290, 10, 12, 12);
  ellipse(440, 10, 12, 12);

  // Eyes
  fill(25);
  stroke(25);
  ellipse(255, 315, 95, 75);
  ellipse(480, 315, 95, 75);

  // Eye shine
  noStroke();
  fill(255);
ellipse(230, 295, 25, 20);
 ellipse(455, 295, 25, 20);

fill(255, 180);
 ellipse(245, 310, 8, 8);
ellipse(470, 310, 8, 8);


stroke(40);
strokeWeight(4);
line(362, 360, 368, 365);
line(368, 365, 374, 360);

  // Arms
  stroke(50);
  strokeWeight(5);
  fill(130, 255, 130);
  ellipse(255, 520, 70, 120);
  ellipse(470, 520, 70, 120);

  // Legs
ellipse(315, 565, 55, 130);
ellipse(370, 575, 55, 135);
ellipse(425, 565, 55, 130);

  // Highlights on head
noStroke();
fill(255, 255, 255, 120);
ellipse(335, 180, 35, 25);
ellipse(375, 190, 15, 15);

// Tail highlight
ellipse(575, 455, 18, 28);

}