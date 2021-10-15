

function setup() {
  createCanvas(1200,1200);
 
block50=new Block(5,10,10,1200)
block51=new Block(10,5,1200,10)
block52=new Block(600,5,10,1200)
block53=new Block(5,600,1200,10)
player=new Player(200,100,50,50);

block1=new Block(100,40,25,300);
block2=new Block(150,140,90,25);
block3=new Block(400,150,80,25);
block4=new Block(270,40,25,100);
block5=new Block(230,250,25,100);
block6=new Block(150,250,120,25);
block7=new Block(320,100,25,100);
block8=new Block(400,20,130,25);
block9=new Block(480,120,25,100);
block10=new Block(330,290,150,20)
block11=new Block(370,220,40,20)
block12=new Block(450,290,25,120)
block13=new Block(100,400,25,100)
block14=new Block(50,300,25,100)
block15=new Block(300,400,100,25)
block16=new Block(550,200,25,100)
block17=new Block(570,330,50,25)
block18=new Block(450,450,100,25)
block19=new Block(170,360,25,100)
block20=new Block(100,580,100,25)
block21=new Block(160,500,25,100)
block22=new Block(50,520,20,20)
block23=new Block(520,530,100,25)
block24=new Block(300,490,100,25)
block25=new Block(390,550,25,50)
}

function draw() {
  background(255,255,255); 
  
  
  if(keyDown("left")){
    player.moveLeft();
  }
  if(keyDown("right")){
    player.moveRight();
  }
  if(keyDown("up")){
    player.moveUp();
  }
  if(keyDown("down")){
    player.moveDown();
  }




  drawSprites();
}