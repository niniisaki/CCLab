let x, j, y, shapeX, shapeY, r, shapeW, shapeS;
let s = 50;
const radius = 50;
const diameter = radius * 2;
let shapeMove = false;
//var h;
//var t;
//var v;
let creatureX = 400;
let creatureY = 250;
let creatureC = 0;
let angle = 100;

let rectSize = 10,
  rectSize2 = 10,
  rectSize3 = 10,
  rectSize4 = 10,
  rectSize5 = 10,
  rectSize6 = 10,
  rectSize7 = 10,
  rectSize8 = 10,
  rectSize9 = 10,
  rectSize10 = 10;

let color1,
  color2,
  color3,
  color4,
  color5,
  color6,
  color7,
  color8,
  color9,
  color10,
  color11,
  color12;

function setup() {
let canvas = createCanvas(800, 500);
canvas.parent("p5-canvas-container");
  h = random(255);
  t = random(255);
  v = random(255);

  shapeX = width / 2;
  shapeY = height / 2;
  y = constrain(y, 0, 500);

  for (let i = 0; i < 3; i++) {
    circle(i, height / 2, 100);
    x = width / 2;
    j = height / 2;
  }
  colorMode(HSB);
  let randomHue = random(221, 237);
  color1 = color(randomHue, 41, 18); //color 237, 41, 18);
  color2 = color(randomHue, 41, 18); //225, 59, 29
  color3 = color(randomHue, 41, 18); //221, 72, 39
  color4 = color(randomHue - 12, 50, 20); //218, 77, 44
  color5 = color(randomHue - 12, 59, 25); //211, 65, 55
  color6 = color(randomHue - 12, 59, 29); //250, 22, 84
  color7 = color(randomHue - 4, 52, 35); //183, 24, 85
  color8 = color(randomHue - 4, 52, 39); //234, 13, 84
  color9 = color(randomHue - 4, 52, 39); //188, 38, 87
  color10 = color(randomHue - 3, 57, 39); //189, 27, 84
  color11 = color(randomHue - 3, 57, 49);
  color12 = color(randomHue - 7, 50, 49);
  color13 = color(randomHue - 7, 50, 49);

  colorMode(RGB);

  noStroke();
  //ombre
}

function draw() {
  //background(220);
  noStroke();
  for (let j = 0; j < 40; j++) {
    fill(lerpColor(color1, color2, j / 40));
    rect(0, j, width, rectSize);
  }

  for (let j = 0; j < 40; j++) {
    fill(lerpColor(color2, color3, j / 40));
    rect(0, j + 40, width, rectSize2);
  }
  for (let j = 0; j < 40; j++) {
    fill(lerpColor(color3, color4, j / 40));
    rect(0, j + 80, width, rectSize3);
  }
  for (let j = 0; j < 40; j++) {
    fill(lerpColor(color4, color5, j / 40));
    rect(0, j + 120, width, rectSize4);
  }
  for (let j = 0; j < 40; j++) {
    fill(lerpColor(color5, color6, j / 40));
    rect(0, j + 160, width, rectSize4);
  }
  for (let j = 0; j < 40; j++) {
    fill(lerpColor(color6, color7, j / 40));
    rect(0, j + 200, width, rectSize5);
  }

  for (let j = 0; j < 40; j++) {
    fill(lerpColor(color7, color8, j / 40));
    rect(0, j + 240, width, rectSize5);
  }
  for (let j = 0; j < 40; j++) {
    fill(lerpColor(color8, color9, j / 40));
    rect(0, j + 280, width, rectSize5);
  }
  for (let j = 0; j < 40; j++) {
    fill(lerpColor(color9, color10, j / 40));
    rect(0, j + 320, width, rectSize5);

    for (let j = 0; j < 40; j++) {
      fill(lerpColor(color10, color10, j / 40));
      rect(0, j + 360, width, rectSize5);
    }
    for (let j = 0; j < 40; j++) {
      fill(lerpColor(color10, color10, j / 40));
      rect(0, j + 400, width, rectSize5);
    }
    for (let j = 0; j < 40; j++) {
      fill(lerpColor(color10, color10, j / 40));
      rect(0, j + 440, width, rectSize5);
    }
    for (let j = 0; j < 40; j++) {
      fill(lerpColor(color10, color10, j / 40));
      rect(0, j + 480, width, rectSize5);
    }
    for (let j = 0; j < 40; j++) {
      fill(lerpColor(color10, color10, j / 40));
      rect(0, j + 500, width, rectSize5);
    }
  }

  fill(255);
  circle(shapeX, shapeY, 100);
  drawS(0, 0);
  stroke(10);
  // let poX = 0 + 100;
  //let poY = 0 + 100;

  // poX = constrain(poX, poX, poY);
  //poY = constrain(poY, poX, poY);
  //drawCreature(poX, poY, 0, 1.0);
  //drawCreature(0, 0, 0, 1.0);

  drawCreature(creatureX, creatureY, creatureC - 13000, 1.0);
}
function drawCreature(x, y, a, s) {
  push();
  translate(x, y);
  rotate(a);
  scale(s);
  drawBody(
    -250 + noise(frameCount * 0.001) * 500,
    -100 + noise(frameCount * 0.008) * 200,
    0,
    1.0
  );

  pop();
}

function drawBody(x, y) {
  push();
  translate(x, y);
  rotate(0);
  fill(h, t, v);
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
  drawMouth(0, 0);
  //wasd movement
  if (keyIsPressed) {
    if (key == "a") {
      creatureX = creatureX - 15;
    }
  }
  if (keyIsPressed) {
    if (key == "d") {
      creatureX = creatureX + 15;
    }
  }
  if (keyIsPressed) {
    if (key == "w") {
      creatureY = creatureY - 15;
    }
  }
  if (keyIsPressed) {
    if (key == "s") {
      creatureY = creatureY + 15;
    }
  }
  if (shapeMove == true) {
    creatureC = frameCount * 0.1;
  } else {
    creatureC = 0;
  }

  pop();
}
function leftEar(x, y) {
  push();
  translate(x, y);
  //circle(0, 0, 10);
  fill(h, t, v);
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

  fill(h, t, v);

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
  // noStroke();
  push();
  translate(x, y);
  fill(h, t, v);
  rectMode(CENTER);
  rect(0, 0 + 92, 43, 60);
  pop();
}

function drawLeftArm(x, y) {
  push();
  translate(x, y);

  fill(h, t, v);

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
  fill(h, t, v);
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
  fill(h, t, v);
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
  fill(h, t, v);
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

function drawMouth(x, y) {
  push();
  translate(x, y);
  stroke(2);
  //arc(0, 0 + 50, 35, 35, radians(240), radians(300));

  pop();
}
function mouseClicked() {
  h = random(0, 255);
  t = random(0, 255);
  v = random(0, 255);
}
function mousePressed() {
  let d = dist(mouseX, mouseY, shapeX, shapeY);
  if (d < radius) {
    shapeMove = true;
  } else {
    shapeMove = false;
  }
}
function mouseReleased() {
  shapeMove = false;
}

function mouseDragged() {
  if (shapeMove) {
    shapeX = mouseX;
    shapeY = mouseY;
  }
}
function drawS(i, j) {
  noFill();
  for (let i = 0; i < width; i += s) {
    for (let j = 0; j < width; j += s) {
      let d = dist(mouseX, mouseY, i, j);
      let f = map(d, 0, sqrt(width * width + height * height), 0.1, 3);
      let h = map(d, 0, width, 0, 100);
      let sat = map((angle % 2) * PI, 0, 2 * PI, 0, 100);
      angle = map(d, 0, sqrt(width * width + height * height), 0, 2 * PI);
      stroke(h, sat, 100);
      push();
      translate(i, j);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, s * f, s * f);
      pop();
    }
  }
}
