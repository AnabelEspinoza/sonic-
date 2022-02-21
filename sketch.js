/*
escape del castillo
es un juego multijugador de 2 jugadores,
 que iran saltando diferente obstaculos,
 en caso de caer fuera de las plataformas estaria comenzado el juego,
se moveran de izquierda a derechea y hacia arriba con las teclas de direccion
el segundo jugador se movera con las letras de direccion A, W, D
*/
var fondoImg, fondo, sonic,sonicImg;
function preload() {
 fondoImg = loadImage("castillo 2.png");
 //fondo.scale = 0.05;
 //sonicImg = loadAnimation("sonic.webp","sonicRun.jpg","sonicRun1.jpg");
 sonicImg=loadImage("sonic.webp");
}

function setup() {
  canvas = createCanvas(888, 600);
  fondo=createSprite(400,300);
  fondo.addImage(fondoImg);
  fondo.x=width/4;

  sonic = createSprite(100, 400);
  sonic.addImage(sonicImg);
  sonic.scale = 0.1;
}

function draw() {
  background(51);
  fondo.velocityX = -2
  if (fondo.x < 0){
    fondo.x = fondo.width/4;
  }

  if (keyDown(RIGHT_ARROW)){
    sonic.position.x=sonic.position.x+5;
  }
  if (keyDown(LEFT_ARROW)){
    sonic.position.x=sonic.position.x-5;
  }
  //image(fondo,0,0);
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
