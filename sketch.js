function preload() {
  rocket = loadImage("rocket.png");
  fuel = loadImage("fuel.png");
  asteroid = loadImage("asteroid.png");

}

function setup() {
  createCanvas(400, 400);

  var rocket = createSprite(150, 150, 15, 15);
  rocket.addImage(rocket);
  scale = 0.7;

  asteriod = createGroup();
  fuel = createGroup();

  var score = 0;

  rocket.velocityY = 3;

}

function draw() {
  background(220);
  
  text("Score:" + score, 50 , 150)

  if(rocket.isTouching(fuel)) {

    score = score + 1;

  }

  if( rocket.isTouching(asteroid)) {
    rocket.destroy();
    fuelGroup.destroyEach();
    asteroidGroup.destroyEach();

  }

  if (keyDown(RIGHT_ARROW)) {
    
    rocket.velocityX = 3;

  }

  if (keyDown(LEFT_ARROW)) {

    rocket.velocityX = -3;

  }

  if (keyDown(UP_ARROW)) {

    rocket.velocityY = 3;

  }

  if (keyDown(DOWN_ARROW)) {

    rocket.velocityY = -3;
    
  }
}