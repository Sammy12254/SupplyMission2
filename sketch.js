//creating the game objects
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;

//creating the const engine, world, bodies, body
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//creating the function preload
function preload(){

	//loading the Images 
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
}

//creating the function setup
function setup() {

	//creating the Canvas 
	createCanvas(800, 700);
	
    //creating the packageSprite
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	//creating the helicopterSprite
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	//creating the groundSprite
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

    //creating the engine
	engine = Engine.create();
	world = engine.world;

	//creating the packageBody 
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Creating a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//creating the Boxs
	box1 = new Box(400,650,220,20,"red");
	box2 = new Box(500,610,20,100,"red");
	box3 = new Box(300,610,20,100,"red");
	
	//running the engine
	Engine.run(engine);
}

//creating the function draw
function draw() {

  //creating the background
  background(0);

  //giving the retMode as 'Center'
  rectMode(CENTER);

  //making the packageSprite as same as position for packageBody in x,y axis
  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y 

  //creating the drawSprites
  drawSprites();

  //if keyDown is DOWN key then the Matter.Body.setStatic(packageBody,false);
  if(keyDown(DOWN_ARROW)) {
	Matter.Body.setStatic(packageBody,false);
  }	
 
    //displaying the boxs
	box1.display();
	box2.display();
	box3.display();

	//we are updating the engine
    Engine.update(engine);
}