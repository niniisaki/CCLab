// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 20; // Decide the initial number of particles.
let MAX_OF_PARTICLES = 200; // Decide the maximum number of particles.

let particles = [];
let colors = []
let topcolor, bottomcolor;


function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  
  

  


  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
}

function draw() {
//background(213, 234, 251);
particles.push(new Particle(random(width), random(height)));

 topcolor = color(213, 234, 251);
  bottomcolor = color(253, 213, 224);

  for (let y = 0; y < height; y++) {
    n = map(y, 0, height, 0, 1);

    let newcolor = lerpColor(topcolor, bottomcolor, n);
    stroke(newcolor);
    line(0, y, width, y);
     
  }
  


  // consider generating particles in draw(), using Dynamic Array

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
    p.checkBoundaries();
    fill(this.r, this.g, this.b, 175);
  }

  // limit the number of particles
  if (particles.length > MAX_OF_PARTICLES) {
    particles.splice(0, 1); // remove the first (oldest) particle
  }
  
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties (variables): particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = 30;
    this.angle = random(120, 180);
    this.scale = random(0.11, 0.35);
    this.windSpeed = random(-0.5, -1);
    this.ySpeed = random(0.01, 0.001);
    this.s = random(10, 50);
    //this.hue = fill(232, 172, 180);
    this.r = 253 + random(-20, 20);
    this.g = 180 + random(-20, 20);
    this.b = 208 + random(-20, 20);
  
    
  
  }
  // methods (functions): particle's behaviors
  update() {
    // (add) 
    this.x = this.x + this.windSpeed;
    this.y = this.y + map(noise(frameCount * this.ySpeed), 0, 1, 1, 3);

    
  }



  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    rotate(radians(this.angle));
    scale(this.scale);
    fill(this.r, this.g, this.b, 175);

    circle(0, 0, this.dia);


    //cherry blossom petals
    beginShape();
    vertex(-85, 0);
    bezierVertex(100, 180, 100, -180, -100, -10);
    endShape(CLOSE);

   
    pop();


  }


  checkBoundaries() {
  this.y = this.y + 1;
  this.x = this.x + (noise(frameCount / 20) * 2 - 1)

  }
}

  pop();




