
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}
 var myEngine, myWorld;
 var Dustbin, Paper
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    Dustbin1 = new Dustbin(293,123,50,50);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  Dustbin1.display();

function keyPressed() {
 if (keyCode === UP_ARROW)

   Matter.Body.applyForce(PaperObject.body.position,{x:85,y:-85});

}






}



