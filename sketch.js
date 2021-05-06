var garden, gardenImg, cat, catImg, cat_standing, mouse_standing, mouse_teasing, mouse_final;

function preload() {
  gardenImg = loadImage("garden.png");
  mouse_standing = loadAnimation("mouse1.png");
  mouse_teasing = loadAnimation("mouse2.png", "mouse3.png");
  mouse_final = loadAnimation("mouse4.png");
  catImg = loadAnimation("cat1.png");
  cat_standing = loadAnimation("cat2.png", "cat3.png");
}

function setup() {
  createCanvas(600, 600);
  background("blue");
  
  garden = createSprite(width/2, height/2);
  garden.addImage(gardenImg);
  garden.scale = 0.86;
  
  mouse = createSprite(140, 520);
  mouse.addAnimation("standing", mouse_standing);
  mouse.scale = 0.07;

  cat = createSprite(500, 520);
  cat.addAnimation("sleeping", catImg);
  cat.scale = 0.12;
}

function draw() {
  drawSprites();

  if(keyDown(LEFT_ARROW)){
    mouse.addAnimation("teasing", mouse_teasing);
    mouse.changeAnimation("teasing", mouse_teasing);

    cat.velocityX = -5;
    cat.addAnimation("walking", cat_standing);
    cat.changeAnimation("walking", cat_standing);
  }

  if(cat.isTouching(mouse)){
    cat.velocityX = 0;
    cat.changeAnimation("sleeping", catImg);

    mouse.addAnimation("final", mouse_final);
    mouse.changeAnimation("final", mouse_final);
  }
}
