//let img;
let curTab = "main";
let curPic = "1";
let myInput;
let myInput2;
let msg = [];
let button = [];
let inputs = [];


//flower
let myPot;
let myFlower;
let mySeed;
let growth = 0;
let stemLength = 0;
let flowerSize = 0;
let flowerColor = "green";
let flowerPetals = 0;
let growing = false;
let progress = 0;
let filling = false;

function preload() {
  img1 = loadImage("assets/usagi.jpeg");
  img2 = loadImage("assets/chiikawa.jpeg");
  img3 = loadImage("assets/momo.jpeg");
  img4 = loadImage("assets/hachi.jpeg");
  img5 = loadImage("assets/pot.png");
  img6 = loadImage("assets/twit3.png");
  img7 = loadImage("assets/twit6.png");
   img8 = loadImage("assets/twit7.png");
    img9 = loadImage("assets/twit4.png");
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  imageMode(CENTER);

  myInput = createInput("");
  myInput.position(408, 493);
  myInput.size(604, 30.625);
  myInput.style("color", "black");
  myInput.attribute("placeholder", "...");

  myInput2 = createInput("");
  myInput2.position(350, 291.5);
  myInput2.size(200, 26);
  myInput2.style("color");
  myInput2.attribute("placeholder", "your name");

  button = createButton("Send");
  button.position(935, 493);
  button.size(100, 37.5);
  button.mousePressed(buttonPressed);

  //flower
  myPot = new Pot(width / 2, height / 2);
  myFlower = new Flower(myPot);

}

function draw() {
  background(220);
  imageMode(CENTER);

  rect(20, 12.5, 760, 475, 8);
  drawTabs();
  if (curTab == "main") {
    drawMain();
    drawPfp();
  } else if (curTab == "chat") {
    drawChat();
    drawPm();
    drawMsg();

  } else if (curTab == "about") {



    if (filling) {
      progress += 2;
    } else {
      progress -= 1;
    }
    progress = constrain(progress, 0, 250);


    if (progress >= 100) {
      growing = true;
    }

    drawAbout();
    myPot.x = width / 2;
    myPot.y = height * 0.75;
    //myPot.move();
    myPot.display();
    myFlower.update();
    myFlower.display();
    push()
    noStroke()
    fill('skyblue');
    rect(myPot.x - 150, myPot.y + 55, 50, -progress);
    pop()

  }
}

function keyPressed() {
  if (key === 'a') {
    filling = true;
  }

  if (keyCode === ENTER && curTab === "chat") { // only in chat
    msg.push(myInput.value());
    if (msg.length > 6) {
      msg.splice(0, 1);
    }
    myInput.value("");
  }
}

function keyReleased() {
  if (key === 'a') {
    filling = false;
  }
}
class Pot {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
  }
  update() {
    //add
  }
  display() {
    push();
    translate(this.x, this.y);
    image(img5, 0, -100, 400, 300);
    pop();
  }
}
class Flower {
  constructor(pot) {
    this.pot = pot;
    this.x = pot.x - 13;
    this.y = pot.y - 50;
    this.petalsXs = [];
    this.petalsYs = [];

    for (let i = 0; i < 90; i++) {
      this.petalsXs.push(random(-5, 5));
      this.petalsYs.push(i - 8);

    }

  }
  update() {
    //add
    if (growing) {
      growth++;
    }
    //stem
    if (growth > 0 && growth < 100) {
      stemLength = map(growth, 1, 100, 0, 100);
    }
    //petals
    if (growth > 150 && growth < 200) {
      // fill("purple");
      flowerPetals = map(growth, 150, 200, 0, 8);
    }
  }

  display() {
    push();
    translate(this.x, this.y);

    //stem
    stroke("green");
    strokeWeight(2.5);
    line(0, 0, 0, -stemLength);

    //flower petals
    // fill(flowerColor);
    noStroke();
    fill(150, 100, 200, 100);

    for (let i = 0; i < this.petalsXs.length; i++) {
      let petalSizeW = (flowerPetals / 2 + i * 0.2) * (flowerPetals / 16)
      let petalSizeH = (flowerPetals + i * 0.2) * (flowerPetals / 12)

      let bX = this.petalsXs[i];
      let bY = i - 6 - stemLength;

      if (i % 2 == 0) {
        fill(191, 148, 228, 80)
      } else {
        fill(115, 79, 150, 70)
      }


      // fill(150, 100, 200, 60)
      ellipse(bX, bY, petalSizeW, petalSizeH);
      // fill(100, 100, 100, 50)
      ellipse(bX, bY, petalSizeW, petalSizeH);
    }




    pop();

  }
}

function drawTabs() {
  push();
  if (curTab == "main") {
    fill(255, 0, 0);
  } else {
    fill(255);
  }
  rect(280, 25, 140, 25, 10);
  if (curTab == "chat") {
    fill(255, 0, 0);
  } else {
    fill(255);
  }
  rect(420, 25, 140, 25, 10);
  if (curTab == "about") {
    fill(255, 0, 0);
  } else {
    fill(255);
  }
  rect(560, 25, 140, 25, 10);
  fill(0);
  pop();
}

function mousePressed() {
  //array storing for msgs
  msg.push(myInput.value());
  if (msg.length > 6) {
    msg.splice(0, 1);
  }

  let mx = mouseX / 2;
  let my = mouseY / 1.25;

  if (mx > 140 && mx < 210 && my > 20 && my < 40) {
    curTab = "main";
    myInput.hide();
    button.hide();
    myInput2.show();
  }
  if (mx > 210 && mx < 280 && my > 20 && my < 40) {
    curTab = "chat";
    myInput.show();
    button.show();
    myInput2.hide();
  }
  if (mx > 280 && mx < 350 && my > 20 && my < 40) {
    curTab = "about";
    myInput.hide();
    button.hide();
    myInput2.hide();
  }

  //pfp buttons
  if (mx > 45 && mx < 65 && my > 175 && my < 195) curPic = "1";
  if (mx > 45 && mx < 65 && my > 200 && my < 220) curPic = "2";
  if (mx > 45 && mx < 65 && my > 225 && my < 245) curPic = "3";
  if (mx > 45 && mx < 65 && my > 250 && my < 270) curPic = "4";
}

function drawMain() {
  push();
  textSize(42);
  textAlign(CENTER, CENTER);
  // text("Hi", width / 2, height / 2);
  pop();
}

function drawChat() {
  push();
  textSize(42);
  textAlign(CENTER, CENTER);
  // text("Chat", width / 2, height / 2 - 120);
  pop();
}

function drawAbout() {
  push();
  textSize(42);
  textAlign(CENTER, CENTER);
  textSize(18)
  text("hold down A", 200, 100);
  let text1 = "In the 1920s, lavender was a slang to imply gay men, then later lesbian women. But in the 1940s-1950s, in the US, there was historical event called the lavender scare, which was a witch hunt against queer goverment workers. Since then it has been a symbol of empowerment, remembrance, and resistance in queer communities."
  text(text1, 50, 280, 700, 300);
  pop();
}

function drawPfp() {
  push();
  //name box
  rect(30, 162.5, 200, 30);
  //pfp coding
  rect(30, 18.75, 200, 125);

  //pfp choices
  if (curPic == "1") {
    image(img1, 130, 81.25, 194, 121.25);
  } else if (curPic == "2") {
    image(img2, 130, 81.25, 194, 121.25);
  } else if (curPic == "3") {
    image(img3, 130, 81.25, 194, 121.25);
  } else if (curPic == "4") {
    image(img4, 130, 81.25, 194, 121.25);
  }
  if (curPic == "1") {
    image(img6, 450, 325, 600, 230);
  } else if (curPic == "2") {
    image(img7, 450, 325, 600, 230);
  } else if (curPic == "3") {
    image(img8, 450, 325, 600, 230);
  } else if (curPic == "4") {
    image(img9, 450, 325, 600, 230);
  }

  //button selection
  circle(110, 231.25, 40);
  circle(110, 262.5, 40);
  circle(110, 293.75, 40);
  circle(110, 325, 40);

  //bio
  rect(284, 66.25, 416, 125, 10);
  let tbio = 'mixed signals, mixed heritage, mixed playlists. ✦ queer and chronically unbothered ✩ ™future relic,ᵉˢᵗ2025';
  text(tbio, 294, 71.25, 416, 125)
  let tb2 = '☆*:.｡.꒰ঌ chengdu ໒꒱.｡.:*☆'
  text(tb2, 348, 133.75, 416, 125);
  let tb3 = '𓆝 𓆟 they/them 𓆝 𓆟'
  text(tb3, 348, 158.75, 416, 125);

  //tweets
  //rect(180, 212.5, 560, 225, 10)
  // image(img6, 450, 325, 600, 230);

  pop();
}

function drawPm() {
  push();
  //pm/bulletin board
  rect(56, 62.5, 680, 43.75, 4.3);

  //chatbox/typing
  rect(56, 425, 680, 43.75, 4.3);

  //message display
  rect(56, 125, 680, 287.5, 4.3);
  rect(88, 137.5, 620, 262.5, 4.3);
  fill(0, 0, 0, 50);
  rect(88, 362.5, 620, 37.5, 0, 0, 4.3, 4.3);

  //message 
  let ct1 = 'bulletin board';
  fill('black')
  textSize(20);
  text(ct1, 66, 72.5, 700);
  textSize(15)
  let ct2 = 'send an encouraging msg !';
  text(ct2, 550, 75, 700);

  pop();
}

function drawMsg() {
  for (let i = 0; i < msg.length; i++) {
    text(msg[i], 160, 150 + i * 13.75);
  }
}

function buttonPressed() {
  msg.push(myInput.value());
  if (msg.length > 6) {
    msg.splice(0, 1);
  }
  myInput.value("");
}

