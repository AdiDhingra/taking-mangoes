
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var man1,tree1,stem1,stem2,stem3,mango1,mango2,mango3;
var stone1,slingShot;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;
man1=new Man(100,600,150,400)
tree1=new Tree(500,400,400,600)
stem1=new Stem(600,310,10,1);
stem2=new Stem(410,310,10,1);
stem3=new Stem(500,270,10,1);
mango1=new Mango(550,211,50,50);
mango2=new Mango(580,210,50,50);
mango3=new Mango(560,212,50,50);
stone1=new Stone(200,100,50,50);
slingShot = new SlingShot(man1.body,stone1.body);
ground =new Ground(950,700,10000,10);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  man1.display();
  tree1.display();
  stem1.display();
  stem2.display();
  stem3.display();
  mango1.display();
  mango2.display();
  mango3.display();
  stone1.display();
  slingShot.display();
  ground.display();
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
    slingShot.fly()
}


