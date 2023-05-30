class star
{
  constructor(x, y, w)
  {
    this.x = x;
    this.y = y;
    this.w = w;
  }
  make()
  {
    fill("yellow");
    circle(this.x, this.y, this.w);
  }
}

let stars = [];

function setup() {
  createCanvas(400, 400);
  for(let i = 100;i>0;i--)
  {
    let x = random(0, 400);
    let y = random(0, 400);
    let w = random(1, 5);
    stars.push(new star(x, y, w));
  }
}

function draw() {
  background(0);
  let h = hour();
  let m = minute();
  let s = second();
  
  for(let s of stars)
  {
    s.make();
  }
  
  noStroke();
  
  fill("green");
  arc(100, 100, 100, 100, 0, h/3.82);
  fill(127, 230, 83);
  circle(100, 100, h*1.65);
  
  fill("red");
  arc(200, 200, 100, 100, 0, m/9.55);
  fill(232, 51, 51);
  circle(200, 200, m*1.65);
  
  fill("purple");
  arc(300, 300, 100, 100, 0, s/9.55);
  fill(150, 111, 227);
  circle(300, 300, s*1.65);
}