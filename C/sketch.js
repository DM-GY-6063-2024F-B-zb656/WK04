function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  background(220, 120, 120);

  strokeWeight(2);
  let pitch = 100;
  let sqDim = 0.9 * pitch;
  translate(pitch / 2, pitch / 2);


  // randomSeed(1010);
  //this starts the random at the same point every time, so the things generated are random but will stay the same on every refresh
  // draw a column of rows
  for (let y = 0; y < height; y += pitch) {
    // draw a row of squares
    for (let x = 0; x < width; x += pitch) {
      let dd = random(sqDim/2,sqDim);
      let vx = random(-50,50);
      let vy = random(-50,50);
      push();
      translate(x, y);
      rect(vx, vy, dd);
      pop();
    }
  }
}

function draw() {}
