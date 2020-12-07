var bullet ,wall;
var speed , weight;
function setup() {
  createCanvas(1200,800);
  speed = random(223,321)
  weight= random(30,55)
  thickness=random(22,83)
  bullet =createSprite(50, 400, 80, 50);
 
wall =createSprite(800, 400, thickness,height/2)
  
}

function draw() {
  background("black");  
  bullet.shapeColor="white";
  bullet .velocityX= speed;

if(hascollided(bullet,wall)){

 var damage=0.5*weight*speed*speed/(thickness *thickness*thickness);
 bullet.velocityX=0;

     if(damage<10){
     wall.shapeColor=color("green")

}
if(damage>10){
  wall.shapeColor=color("red")
  
  }
 
    console.log(damage)
  }

  drawSprites();
}
function hascollided(lbullet,lwall){
var bulletRightEdge=lbullet.x+lbullet.width;
var wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;
}
