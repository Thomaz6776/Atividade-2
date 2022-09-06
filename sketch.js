//Criando variaveis
var path,boy,leftBoundary,rightBoundary;
var pathImg;
var i;
var boyImg;

//Fazendo o preload das imagens
function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner1.png","Runner2.png");
}

//criando os objetos (função setup)
function setup(){
 createCanvas(400,400);

//FUNDO 
path=createSprite (200,200);
path.addImage(pathImg);
path.velocityY =4;
path.scale=1.2;

//BOY
boy=createSprite (200,200,60,100);
boy.addAnimation(boyImg);
boy.velocityY =4;
boy.scale = 1.2;
boy.depth = 2;

//Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(10,0,100,800);
leftBoundary.visible = false;

//Crie Boundary direito 
rightBoundary=createSprite(400,400,100,800);
rightBoundary.visible = false;

}

//Criando a função draw
function draw() {

//BACKGROUND
background(0);

//Movimentação (path)
path.velocityY = 13;

//Movimentação (boy)
boy.x = World.mouseX;

// Colições
edges= createEdgeSprites();
boy.collide(edges[3]);
boy.collide(leftBoundary);
boy.collide(rightBoundary);

//Repetição de fundo
 if (path.y >= 400) {
    path.y = 0;
 }

//drawSprites
 drawSprites();

 }




