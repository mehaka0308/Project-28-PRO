const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world,tree,girl,girlimg,stone,ground,slingshot,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload(){
  girlimg = loadImage("girl.png");
}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  stone = new Stone(100,450,30);

  slingshot = new Slingshot(stone.body,{x:160,y:470});

  tree = new Tree(950,300);

  ground = new Ground(600,580,1200,30);

  mango1 = new Mango(1000,50,25);
  mango2 = new Mango(880,100,25);
	mango3 = new Mango(1080,130,25);
	mango4 = new Mango(770,180,25);
	mango5 = new Mango(850,210,25);
	mango6 = new Mango(950,160,25);
	mango7 = new Mango(1170,210,25);
	mango8 = new Mango(1020,220,25);
	mango9 = new Mango(1100,290,25);
	mango10 = new Mango(800,280,25);

  girl = createSprite(200,500,100,60);
  girl.addImage(girlimg);
  girl.scale = 0.1;

  Engine.run(engine);
  
}

function draw() {
  background(135,206,235);

  textSize(25);
  fill("black");
  textFont("Comic Sans MS")
  text("Press space for a second chance!!",50 ,50);

  tree.display();
  girl.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango8.display();
  mango9.display();
  mango10.display();
  slingshot.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  
  drawSprites(); 

}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY}) 
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body,{x:150,y:475}) 
	  slingshot.attach(stone.body);
	}
}

function detectCollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

  if(distance <= lmango.radius + lstone.radius){
  	Matter.Body.setStatic(lmango.body,false);
  }
}
