const Bodies;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ground1 = new Ground(300,150,100,50)
  ground2 = new Ground(320,50,100,50)

  //blocks
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40)
  block14 = new Block(390,195,30,40)
  block15 = new Block(420,195,30,40)
  //top
  block16 = new Block(390,155,30,40)
}

polygon.add(world)

function draw() {
  background(255,255,255);  
  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
    SlingShot.attach(this.polygon);
  }
}