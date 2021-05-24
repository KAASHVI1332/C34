
var ground;
var backgroundImg;
var bg;
var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10,box11,box12;
var box13,box14,box15,box16,box17,box18,box19,box20;
var gameState="onrope";
var ball;
var rope;
var tractor;

const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies= Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
getBackgroundImg();
tractor=loadImage("Images/wreckingmachine.png");
}

function setup()
{
   createCanvas (1500,650);
   myengine = Engine.create();
   myworld = myengine.world;
  ground=new Ground(500,650,2000,50);
  
 box1=new Box(1000,400,50,50);
 box2=new Box (1000,400,50,50);
 box3=new Box (1000,400,50,50);
 box4=new Box (1000,400,50,50);
 box5=new Box (1000,400,50,50);
 box6=new Box (1000,400,50,50);
 
 box7=new Box(1100,400,50,50);
 box8=new Box(1100,400,50,50);
 box9=new Box(1100,400,50,50);
 box10=new Box(1100,400,50,50);
 box11=new Box(1100,400,50,50);
 box12=new Box(1100,400,50,50);
 
 
 box13=new Box(1200,400,50,50);
 box14=new Box(1200,400,50,50);
 box15=new Box(1200,400,50,50);
 box16=new Box(1200,400,50,50);
 box17=new Box(1200,400,50,50);
 box18=new Box(1200,400,50,50);
 box19=new Box(1200,400,50,50);
 box20=new Box(1200,400,50,50);

 ball=new Ball(200,200,100,100);
 rope=new Rope(ball.body,{x:650,y:220});

 
}
function draw()
{
  if(backgroundImg){
    background(backgroundImg);
  }
  else{
    background("white");
  }
  

  Engine.update(myengine);

ground.display();
fill("pink");
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();

fill("purple");
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();

fill("orange");
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();

ball.display();
rope.display();
image(tractor,400,370,700,600);
}

//calling if statment and reset function 
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "Images/daycity.png";
  }
  else{
      bg = "Images/nightcity.png";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
function mouseDragged(){
  function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }
}

}
function mouseReleased(){
  rope.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
     
     Matter.Body.setPosition(ball.body,{x:200,y:200});
     Matter.Body.setAngle(ball.body,0);
      rope.attach(ball.body);
      gameState="onrope";
  }
}
