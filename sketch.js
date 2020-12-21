var paper;
var dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(750, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new Paper(50,590,0,)
	dustbin1= new Dustbin(width/2,600,90,20)
	ground=new Ground(width/2,630,750,12.5)
	//Engine
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(123,456,789);
  
  //Display
  paper1.display();
  dustbin1.display();
  ground.display();
  keyPressed();
  drawSprites();
}

function keyPressed() {
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

	}
}

