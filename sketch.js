var car,wall;
var speed,weight;


function setup() {
  createCanvas(900,600);
    speed=random(55,90);
 weight=random(400,1500);
 car=createSprite(100,60,30,30);
  wall=createSprite(500,60,20,100,hight=7);
 car.velocityx=speed;
}

if (wall.x-car.x<(car.width=wall.width)/7)
{
 car.valocityX=0;
 var deformation=0.5*weight*speed*speed/22509;
 if(deformation>180)
{
  car.shapeColor=color("red");
}
if(deformation<180 && deformation>100)
{
  car.shapeColor=color("yellow");
  }
  if(deformation<100)
  {
    car.shapeColor=color("green");
  }
}


function draw() {
  background("black");  
  drawSprites();
 background.display();
  car.display();
  color.display();
  wall.display();
}
