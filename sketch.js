var car , wall

var speed , weight

var deformation

function setup() {
  createCanvas(1500,400);
  car = createSprite(50, 200, 50, 40);
  car.shapeColor=255

  wall = createSprite(1200,200,60,height/2)  
  wall.shapeColor=color(80,80,80)

  speed = random(55,90)
  weight = random(400,1500)

  car.velocityX = speed
  
  deformation = 0.5 * weight * speed * speed / 22500
  console.log(deformation)
}

function draw() {
  background(0);   

    if(wall.x- car.x   <(car.width+wall.width)  /2)
    {
      car.velocityX-0;
      var deformation=0.5 * weight * speed * speed/22500;
      if(deformation > 180)
      {
        car.shapeColor=color(225,0,0);
      }
      if(deformation<180 && deformation>100)
      {
        car.shapeColor=color(230,230,0);

      }

      if(deformation<100)
      {
        car.shapeColor=color(0,255,0);
      }
    }
    
  drawSprites();
}


