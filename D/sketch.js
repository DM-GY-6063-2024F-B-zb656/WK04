function star(x, y, w, c, l) {
  let r = w / 2;
  push();
  translate(x, y);
  for (let cnt = 0; cnt < l; cnt++) {
    print(cnt);
    line(c, -c, r, 0);
    line(c, c, r, 0);
    rotate(360 / l);
  }
  pop();
}

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
  // draw a column of rows
  for (let y = 0; y < height; y += pitch) {
    // draw a row of squares
    for (let x = 0; x < width; x += pitch) {
      let rn = random(0, 6);
      let rr = random(256);
      let rg = random(256);
      let rb = random(256);

      let rcc = random(["#f5b000", "#008a0c", "#0e52e8"]); //< use sq brackets for an array

      push();
      translate(x, y);

      //conditionalsvv
      noFill();
      strokeWeight(5);
      stroke(rcc);
      if (rn < 2) {
        rect(0, 0, sqDim);
      } else if (rn < 4) {
        ellipse(0, 0, sqDim);
      } else {
        star(0, 0, sqDim, 10, 4);
      }

      pop();
    }
  }
}

function draw() {}

// if (whatevers in these parentheses is true) {
//   then do tis thing;
// } else if (whatevers in these parenthesis is true) {
// then do this thing;
// } else {
// do this thing
// }


function mouseClicked() {
  print("hey. clicked");
  setup();
}