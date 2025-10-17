/*
Template for IMA's Creative Coding Lab 

Project A: Generative Creatures
CCLaboratories Biodiversity Atlas 
*/

function setup() {
  let canvas = createCanvas(800, 500);
canvas.parent("p5-canvas-container");

}

function draw() {
  background(220);

  drawCreature(width / 2, height / 2, 0, 1.0);
  //leftEar(300, 300);
  // rightEar (300, 300);
}

function drawCreature(x, y, a, s) {
  push();
  translate(x, y);
  rotate(a);
  scale(s);

  drawBody(0, 0, 0, 1.0);

  pop();
}

function drawBody(x, y) {
  push();
  translate(x, y);
  fill(43, 219, 107);
  ellipse(0, 0, 110, 130);
  fill(0);
  ellipse(0 - 50, 0 + 10, 37, 43);
  ellipse(0 + 45, 0 + 10, 37, 43);
  fill(255);
  ellipse(0 + 30, 0 + 2, 10, 10);
  ellipse(0 - 65, 0 + 2, 10, 10);
  leftEar(0, 0);
  rightEar(0, 0);
  drawTorso(0, 0);
  drawLeftArm(0, 0);
  drawRightArm(0, 0);
  drawLeg(0, 0);
  drawReg(0, 0);
  drawMouth (0,0);
  pop();
}

function leftEar(x, y) {
  push();
  translate(x, y);
  //circle(0, 0, 10);
  fill(43, 219, 107);
  //console.log(mouseX - x, mouseY - y);
  // Start drawing the shape.
  beginShape();

  // Add the first control point and draw a segment to it.
  curveVertex(0 - 25, 0 - 55);
  curveVertex(0 - 25, 0 - 55);

  // Add the anchor points. // mouseX - x, mouseY - y to find coords
  curveVertex(-60, -131); //-62, -151
  curveVertex(-32, -127);

  // Add the second control point.
  curveVertex(0 - 10, 0 - 65);
  curveVertex(0 - 10, 0 - 65);

  // Stop drawing the shape.
  endShape();

  pop();
}

function rightEar(x, y) {
  push();
  translate(x, y);

  fill(43, 219, 107);

  beginShape();
  // Add the first control point and draw a segment to it.
  curveVertex(0 + 25, 0 - 55);
  curveVertex(0 + 25, 0 - 55);

  // Add the anchor points. // mouseX - x, mouseY - y to find coords
  curveVertex(60, -131);
  curveVertex(32, -127);

  // Add the second control point.
  curveVertex(0 + 10, 0 - 65);
  curveVertex(0 + 10, 0 - 65);

  // Stop drawing the shape.
  endShape();

  pop();
}
function drawTorso(x, y) {
  noStroke();
  push();
  translate(x, y);
  fill(43, 219, 107);
  rectMode(CENTER);
  rect(0, 0 + 92, 43, 60);
  pop();
}

function drawLeftArm(x, y) {
  push();
  translate(x, y);

  fill(43, 219, 107);

  beginShape();
  // Add the first control point and draw a segment to it.
  curveVertex(0 + 21, 0 + 65);
  curveVertex(0 + 21, 0 + 65);
  console.log(mouseX - x, mouseY - y);

  // Add the anchor points. // mouseX - x, mouseY - y to find coords
  curveVertex(40, 80);
  curveVertex(40, 90);

  // Add the second control point.
  curveVertex(21, 79);
  curveVertex(21, 79);

  // Stop drawing the shape.
  endShape();

  pop();
}
function drawRightArm(x, y) {
  push();
  translate(x, y);
  fill(43, 219, 107);
  beginShape();
  
  // Add the first control point and draw a segment to it.
  curveVertex(0 - 21, 0 + 65);
  curveVertex(0 - 21, 0 + 65);
  console.log(mouseX - x, mouseY - y);

  // Add the anchor points. // mouseX - x, mouseY - y to find coords
  curveVertex(-40, 80);
  curveVertex(-40, 90);
  // Add the second control point.
  curveVertex(0 - 21, 79);
  curveVertex(0 - 21, 79);

  // Stop drawing the shape.
  endShape();

  pop();
}
function drawLeg(x, y) {
  push();
  translate(x, y);
  fill(43, 219, 107);
  beginShape();
  // Add the first control point and draw a segment to it.
  curveVertex(0 - 10, 0 + 123); //379, 393
  curveVertex(0 - 10, 0 + 123);
  console.log(mouseX - x, mouseY - y);

  // Add the anchor points. // mouseX - x, mouseY - y to find coords
  curveVertex(-25, 152);
  curveVertex(-25, 142);
  // Add the second control point.
  curveVertex(0 - 22, 120);
  curveVertex(0 - 22, 120);

  // Stop drawing the shape.
  endShape();

  pop();
}
function drawReg(x, y) {
  push();
  translate(x, y);
  fill(43, 219, 107);
  beginShape();
  // Add the first control point and draw a segment to it.
  curveVertex(0 + 10, 0 + 123); //379, 393
  curveVertex(0 + 10, 0 + 123);
  console.log(mouseX - x, mouseY - y);

  // Add the anchor points. // mouseX - x, mouseY - y to find coords
  curveVertex(24, 152);
  curveVertex(24, 142);
  // Add the second control point.
  curveVertex(0 + 22, 120);
  curveVertex(0 + 22, 120);

  // Stop drawing the shape.
  endShape();

  pop();
}

function drawMouth(x,y)  {
push();
translate(x, y);
  stroke(2);
//arc(0, 0 + 50, 35, 35, radians(240), radians(300));





pop();

}

