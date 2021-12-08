var rua,menino,dinheiro,diamantes,joias,espada,fim;
var ruaImage,meninoImage,dinheiroImage,diamantesImage,joiasImage,espadaImage,fimImage;
var colecaoDeTesouros = 0;
var grupoDeDinheiro,grupoDeDiamantes,grupoDeJoias,grupoDeEspadas;
var JOGAR = 1;
var FIM = 0;
var estadoDoJogo = 1;

function preload(){
  ruaImage = loadImage("Road.png");
  meninoImage = loadAnimation("Runner-1.png","Runner-2.png");
  dinheiroImage = loadImage("cash.png");
  diamantesImage = loadImage("diamonds.png");
  joiasImage = loadImage("jwell.png");
  espadaImage = loadImage("sword.png");
  fimImage = loadImage("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);

rua = createSprite(200,200);
rua.addImage(ruaImage);
rua.velocityY = 4;



menino = createSprite(70,500,20,20);
menino.addAnimation("animacao",meninoImage);
menino.scale = 0.08;
  
  console.log(menino.depth,rua.depth);
  
fim = createSprite(200,200,200,200)
fim.addImage(fimImage);
fim.visible = false;
  
  
grupoDeDinheiro = new Group();
grupoDeDiamantes = new Group();
grupoDeJoias = new Group();
grupoDeEspadas = new Group();

}

function draw() {

  if(estadoDoJogo === JOGAR){
  background("black");
  menino.x = World.mouseX;
  
  edges = createEdgeSprites();
  menino.collide(edges);

    
  if(rua.y > 400 ){
    rua.y = height/2;
  }
    
  if(grupoDeEspadas.isTouching(menino)) {
      estadoDoJogo = FIM;
  }  
    criarDinheiro();
    criarDiamantes();
    criarJoias();
    criarEspadas();
    
  if (grupoDeDinheiro.isTouching(menino)) {
      grupoDeDinheiro.destroyEach();
      colecaoDeTesouros = colecaoDeTesouros + 100;
    }
    else if (grupoDeDiamantes.isTouching(menino)) {
      grupoDeDiamantes.destroyEach();
      colecaoDeTesouros = colecaoDeTesouros + 150;
      
    }else if(grupoDeJoias.isTouching(menino)) {
      grupoDeJoias.destroyEach();
      colecaoDeTesouros = colecaoDeTesouros + 50;
  }
}
  if(estadoDoJogo == FIM){
    rua.velocityY = 0;
    fim.visible = true;
    menino.visible = false;
    grupoDeDinheiro.setVelocityYEach(0);
    grupoDeDinheiro.setLifetimeEach(-1);
    
    grupoDeDiamantes.setVelocityYEach(0);
    grupoDeDiamantes.setLifetimeEach(-1);
    
    grupoDeJoias.setVelocityYEach(0);
    grupoDeJoias.setLifetimeEach(-1);
    
    grupoDeEspadas.setVelocityYEach(0);
    grupoDeEspadas.setLifetimeEach(-1);
  }
  drawSprites();
  fill("black");
  textSize(20);
  text("Tesouros: "+ colecaoDeTesouros,150,30);
}

function criarDinheiro() {
  if (World.frameCount % 200 == 0) {
  var dinheiro = createSprite(Math.round(random(50, 350),40, 10, 10));
  dinheiro.addImage(dinheiroImage);
  dinheiro.scale=0.12;
  dinheiro.velocityY = 3;
  dinheiro.lifetime = 250;
  grupoDeDinheiro.add(dinheiro);
  }
}

function criarDiamantes() {
  if (World.frameCount % 320 == 0) {
  var diamantes = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamantes.addImage(diamantesImage);
  diamantes.scale = 0.03;
  diamantes.velocityY = 3;
  diamantes.lifetime = 250;
  grupoDeDiamantes.add(diamantes);
 }
}

function criarJoias() {
  if (World.frameCount % 410 == 0) {
  var joias = createSprite(Math.round(random(50, 350),40, 10, 10));
  joias.addImage(joiasImage);
  joias.scale = 0.13;
  joias.velocityY = 3;
  joias.lifetime = 250;
  grupoDeJoias.add(joias);
 }
}

function criarEspadas(){
  if (World.frameCount % 530 == 0) {
  var espada = createSprite(Math.round(random(50, 350),40, 10, 10));
  espada.addImage(espadaImage);
  espada.scale = 0.1;
  espada.velocityY = 3;  
  espada.lifetime = 250;  
  grupoDeEspadas.add(espada);
 }
}