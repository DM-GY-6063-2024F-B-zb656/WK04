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
  background(150, 150, 220);
  strokeWeight(2);
  angleMode(DEGREES);

  star(width / 4, height / 2, 200, 10, 12);
  star(width / 2, height / 2, 350, 25, 200);
  star((3 * width) / 4, height / 2, 100, 10, 6);
}

function draw() {}
