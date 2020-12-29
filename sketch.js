var bullet,wall,thickness;
var speed,weight;
var bulletRightEdge;
var walLeftEdge;

 function setup() {
  createCanvas(1200,400);
 bullet=createSprite(50, 200, 50, 50);
 speed=random(223,321);
 weight=random(30,52);
 
 wall=createSprite(1100, 200,thickness,height/2);
thickness=random(22,83);

 }

function draw() {
  background(0);

 bullet.velocityX=speed;

 if (hascollided(bullet,wall))
 {
  bullet.velocityX=0;
  var damage=(0.5*weight*speed*speed)/thickness*thickness*thickness;
  if (damage>10)
  {
    bullet.shapeColor=color(255,0,0);
  }
  if (damage<10)
  {
    bullet.shapeColor=color(0,255,0);
  }
 }
  drawSprites();
}
function hascollided(lbullet,lwall)
{
 bulletRightEdge=lbullet.x+lbullet.width;
 wallLeftEdge=lwall.x;
 if (bulletRightEdge>=wallLeftEdge)
 {
   return true
 }
 {
   return false 
 }
}