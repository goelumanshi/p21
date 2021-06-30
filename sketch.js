var astronaut;
var line1,line2,line3,line4;
var edges;

function preload() {
  bg = loadImage("iss.png");
  sleep =loadAnimation("sleep.png");
  brush =loadAnimation("brush.png");
  drink =loadAnimation("drink1.png","drink2.png");
  move =loadAnimation("move.png","move1.png");
  gym =loadAnimation("gym1.png","gym11.png",
                 "gym12.png","gym2.png");
  eat =loadAnimation("eat1.png","eat2.png");
  bath =loadAnimation("bath1.png","bath2.png");
}

function setup() {
  createCanvas(400, 400);
  
  astronaut =createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale= 0.1;
  line1=createSprite(200,5,400,5);
  line2=createSprite(5,200,5,400);
  line3=createSprite(200,395,400,5);
  line4=createSprite(395,200,5,400);

  edges=createEdgeSprites();
}

function draw() {
  background(bg);

  astronaut.collide(edges);

  astronaut.bounceOff(line1);
  astronaut.bounceOff(line4);
  astronaut.bounceOff(line3);
  astronaut.bounceOff(line2);
  
  
if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
   }

if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gyming",gym);
  astronaut.changeAnimation("gyming");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
   }

if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing",bath);
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
   }

if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating",eat);
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
   }

if(keyDown("m")){
  
  astronaut.velocityX=4;
  astronaut.velocityY=4;
   }
drawSprites();
}