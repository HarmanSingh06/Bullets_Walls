var bullet,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  
  //Speed and Weight
  speed=random(223,321);
  weight=random(30,52);
  thickness = random(22,83);

  //car and wall
  bullet = createSprite(50,200,thickness,50);
  bullet.velocityX=speed;

  wall = createSprite(1500,200,60,height/2);

}

function draw() {
  background(0);
  drawSprites();
  
  if(collide(wall,bullet)){
    
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    //console.log(damage);
    
    if(damage>10){
      wall.shapeColor="red";
    }
    
    if(damage<10){
      wall.shapeColor="green";
    }
  }
}
function collide(wall,bullet){
  bulletRightEdge = bullet.x + bullet.width;
  
  wallLeftEdge = wall.x;
  
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
}