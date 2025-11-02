
let dancer;

function setup() {

  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  dancer = new HamDancer(width / 2, height / 2);
}

function draw() {

  background(0);
  drawFloor();

  dancer.update();
  dancer.display();

}

class HamDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.color1 = "white";
    this.u = width / 2;
    this.v = height / 2;
    this.a = 0;


  }
  update() {

    this.v = 30 * sin(frameCount * 5);
    let angle = sin(frameCount * 10);
    this.larm = map(angle, -1, 1, -PI / 10, PI / 10);
  }
  display() {

    push();
    translate(this.x, this.y + this.v);


    beginShape();
    vertex(-85, 40);
    bezierVertex(0, -165, 0, -150, 85, 40);

    endShape(CLOSE);
    fill(0);
    line(20, -5, -20, -5);

    noStroke();
    fill("pink");
    triangle(-8, -20, 0, -35, 8, -20);

    fill(this.color1);
    noStroke();

    rect(-89, 10, 178, 85, 80);

    push();
    translate(-35, 25);
    fill(0);
    fill(255, 193, 246, 245)
    quad(-50, 40, 120, 40, 160, 70, -80, 70);
    pop();

    angleMode(RADIANS);
    push();
    rotate(this.larm);
    rect(50, 10, 40, 10, 100, 10, 10, 10);
    rect(-85, 0, 25, 7, 100, 10, 10, 10);
    stroke('magenta');
    strokeWeight(5);
    line(85, 15, 80, -50)
    fill(255);
    translate(80, -50);
    scale(.5);
    beginShape();
    vertex(0, -50);
    vertex(14, -20);
    vertex(47, -15);
    vertex(23, 7);
    vertex(29, 40);
    vertex(0, 25);
    vertex(-29, 40);
    vertex(-23, 7);
    vertex(-47, -15);
    vertex(-14, -20);
    endShape(CLOSE);

    pop();

    fill(0);
    noStroke();
    angleMode(DEGREES);
    rotate(10);
    ellipse(-35, -45, 28, 35);
    fill(255);
    ellipse(-35, -56, 12, 5);
    fill(0);
    rotate(-20);
    ellipse(34, -45, 28, 35);
    fill(255);
    ellipse(35, -56, 12, 5)
    rotate(25)
    ellipse(15, -45, 12, 5)
    angleMode(DEGREES);
    rotate(330);
    fill(255)
    ellipse(-13, -45, 12, 5);
    angleMode();

    pop();

    pop();
  }
  drawReferenceShapes() {


  }
}


