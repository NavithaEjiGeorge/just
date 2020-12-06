var main,arrowI,blueH,character,death,enemy2I,enemy1I,eggI,star,rockI,potI,startBg;
var coinS,arrowS,eggS,applause;
var startButton
var waysButton;
var charactersButton;
var bloom;
var ground;
var arrow;
var line1;
var line2;
var line3;
var line4;
var line5;
var line6;
var line7;
var count = 5
var score = 0;
var egg1;
var egg2;
var egg3;
var egg4;
var egg5;
var egg6;
var egg7;
var egg8;
var egg9;
var egg10
var gameState="start"
var coin1;
var coin2;
var coin3;
var coin4;
var coin5;
var coin6;
var coin7;
var coin8;
var coin9;
var coin10;
var coin11;
var coin12;
var coin13;
var coin14;

var coinNo  = 2;
var rock;
var rock2;
var enemy1;
var arrowGr;
var stand;
var stand2;
var stand3;
var stand4;
var stand5;

var ch1;
var ch2;
var ch3;
var ch4;
var ch5;
var ch1I;
var ch2I;
var ch3I;
var ch3;
var ch4;
var ch5;

var go;

var c1;
var c2;
var c3;
var c4;
var c5;

//this is for leftmover1;
var leftmover1;
var inv1;

var pot1;
function preload(){
  
  //images
  main = loadImage("images/onech.png")
  arrowI = loadImage("images/arrow.png")
  blueH = loadImage("images/blueheart.png")
  character = loadImage("images/character.png")
  death = loadImage("images/characterdeath.png")
  enemy1I = loadImage("images/enemy.png")
  enemy2I = loadImage("images/enemy2.png")
  eggI = loadImage("images/egg.png")
  star = loadImage("images/star.png")
  rockI = loadImage("images/rock.png")
  potI = loadImage("images/potI.png")
  startBg = loadImage("images/bg.png")
  ch1I=loadImage("images/chimg1.png")
  ch2I=loadImage("images/ch3I.png")
  ch3I=loadImage("images/ch4I.png")
  ch4I=loadImage("images/ch5I.png")
  ch5I=loadImage("images/ch6I.png")
  //sounds
  coinS = loadSound("sounds/coinsound.mp3")
  arrowS = loadSound("sounds/arrowS.mp3");
  eggS = loadSound("sounds/eggCollect.mp3")
  applause = loadSound("sounds/clapS.mp3")
}
function setup(){
  canvas = createCanvas(1365,653)
  bloom = createSprite(100,60)
  bloom.addImage(character)
  bloom.scale=0.3
  bloom.debug = true;
  bloom.setCollider("rectangle",-160,0,50,260)

  ground = createSprite(10000,650,22000,20)

  ch1 = createSprite(400,400,20,20)
  ch1.addImage(ch1I)
  ch1.visible=false;
  line1= createSprite(30,350,30,700)
  line1.shapeColor = "blue";
  line2 = createSprite(500,200,30,600)
  line2.shapeColor = "blue";
  line3 = createSprite(250,10,470,30)
  line3.shapeColor = "blue";
  line4 = createSprite(120,180,200,10)
  line4.shapeColor = "violet";
  line5 = createSprite(400,280,200,10)
  line5.shapeColor = "violet";
  line6 = createSprite(120,400,200,10)
  line6.shapeColor = "violet";
  line7 = createSprite(410,500,210,10)
  line7.shapeColor = "violet";

  egg1 = createSprite(390,250,20,20)
  egg1.addImage(eggI)
  egg1.scale=0.1
  egg1.setCollider("circle",20,20,20)

  egg2 = createSprite(130,370,20,20)
  egg2.addImage(eggI)
  egg2.scale=0.1
  egg2.setCollider("circle",20,20,20)

  egg3 = createSprite(1800,270,20,20)
  egg3.addImage(eggI)
  egg3.scale=0.1
  egg3.setCollider("circle",20,20,20)

  egg4 = createSprite(1850,270,20,20)
  egg4.addImage(eggI)
  egg4.scale=0.1
  egg4.setCollider("circle",20,20,20)

  egg5 = createSprite(1900,270,20,20)
  egg5.addImage(eggI)
  egg5.scale=0.1
  egg5.setCollider("circle",20,20,20)

  egg6 = createSprite(1950,270,20,20)
  egg6.addImage(eggI)
  egg6.scale=0.1
  egg6.setCollider("circle",20,20,20)

  egg7 = createSprite(1900,170,20,20)
  egg7.addImage(eggI)
  egg7.scale=0.1
  egg7.setCollider("circle",20,20,20)

  egg8 = createSprite(1950,170,20,20)
  egg8.addImage(eggI)
  egg8.scale=0.1
  egg8.setCollider("circle",20,20,20)

  egg9 = createSprite(2000,170,20,20)
  egg9.addImage(eggI)
  egg9.scale=0.1
  egg9.setCollider("circle",20,20,20)

  egg10 = createSprite(2050,170,20,20)
  egg10.addImage(eggI)
  egg10.scale=0.1
  egg10.setCollider("circle",20,20,20)

  coin1=createSprite(480,470,20,20)
  coin1.addImage(star)
  coin1.scale = 0.4
  coin1.setCollider("circle",20,20,20)

  coin2=createSprite(420,470,20,20)
  coin2.addImage(star)
  coin2.scale = 0.4  
  coin2.setCollider("circle",20,20,20)

  coin3=createSprite(360,470,20,20)
  coin3.addImage(star)
  coin3.scale = 0.4
  coin3.setCollider("circle",20,20,20)

  coin4=createSprite(1450,470,20,20)
  coin4.addImage(star)
  coin4.scale = 0.4
  coin4.setCollider("circle",20,20,20)

  coin5=createSprite(1500,470,20,20)
  coin5.addImage(star)
  coin5.scale = 0.4
  coin5.setCollider("circle",20,20,20)

  coin6=createSprite(1550,470,20,20)
  coin6.addImage(star)
  coin6.scale = 0.4
  coin6.setCollider("circle",20,20,20)

  coin7=createSprite(1600,470,20,20)
  coin7.addImage(star)
  coin7.scale = 0.4
  coin7.setCollider("circle",20,20,20)

  coin8=createSprite(1620,370,20,20)
  coin8.addImage(star)
  coin8.scale = 0.4
  coin8.setCollider("circle",20,20,20)

  coin9=createSprite(1670,370,20,20)
  coin9.addImage(star)
  coin9.scale = 0.4
  coin9.setCollider("circle",20,20,20)

  coin10=createSprite(1720,370,20,20)
  coin10.addImage(star)
  coin10.scale = 0.4
  coin10.setCollider("circle",20,20,20)

  coin11=createSprite(1770,370,20,20)
  coin11.addImage(star)
  coin11.scale = 0.4
  coin11.setCollider("circle",20,20,20)

  rock = createSprite(1000,585,20,20)
  rock.addImage(rockI)
  rock.scale = 0.2;
  rock.setCollider("rectangle",-390,100,400,400)

  rock2 = createSprite(1400,585,20,20)
  rock2.addImage(rockI)
  rock2.scale = 0.2;
  rock2.setCollider("rectangle",-390,100,400,400)

  enemy1 = createSprite(1200,595,20,20)
  enemy1.addImage(enemy1I)
  enemy1.scale=0.3;
  enemy1.setCollider("rectangle",100,80,100,160)

  stand  = createSprite(1520,500,240,10)
  stand2 = createSprite(1700,400,240,10)
  stand3 = createSprite(1900,300,240,10)
  stand4 = createSprite(2000,200,240,10)
  stand5 = createSprite(3000,120,300,20)

  leftmover1 = createSprite(2550,120,160,5)
  leftmover1.shapeColor="red"
  inv1 = createSprite(2000,100,240,60)
  inv1.visible = false;
  arrowGr =createGroup();

  pot1 = createSprite(3000,80,20,20)
  pot1.addImage(potI)
  pot1.scale = 0.6
  pot1.debug = true;
  pot1.setCollider("circle",20,0,0)

  startButton = createButton('PLAY')
  startButton.position(displayWidth/2,displayHeight/2);
  startButton.style('background-color',"lightgreen")
  startButton.style('font-size',"30px")
  startButton.style('color',"red")

  waysButton = createButton('HOW TO PLAY')
  waysButton.position(displayWidth/2-50,displayHeight/2+100);
  waysButton.style('background-color',"lightblue")
  waysButton.style('font-size',"30px")
  waysButton.style('color',"red")

  charactersButton = createButton('View characters')
  charactersButton.position(displayWidth/2-100,displayHeight/2-20);
  charactersButton.style('background-color',"lightblue")
  charactersButton.style('font-size',"30px")
  charactersButton.style('color',"red")
  charactersButton.hide()

  c1 = createButton('get him')
  c1.position(displayWidth/2-500,displayHeight/2+100);
  c1.style('background-color',"lightblue")
  c1.style('font-size',"30px")
  c1.style('color',"red")
  c1.hide()

  c2 = createButton('get him')
  c2.position(displayWidth/2-300,displayHeight/2+100);
  c2.style('background-color',"lightblue")
  c2.style('font-size',"30px")
  c2.style('color',"red")
  c2.hide()

  c3 = createButton('get her')
  c3.position(displayWidth/2-100,displayHeight/2+100);
  c3.style('background-color',"lightblue")
  c3.style('font-size',"30px")
  c3.style('color',"red")
  c3.hide()

  c4 = createButton('get her')
  c4.position(displayWidth/2+100,displayHeight/2+100);
  c4.style('background-color',"lightblue")
  c4.style('font-size',"30px")
  c4.style('color',"red")
  c4.hide()

  c5 = createButton('get him')
  c5.position(displayWidth/2+300,displayHeight/2+100);
  c5.style('background-color',"lightblue")
  c5.style('font-size',"30px")
  c5.style('color',"red")
  c5.hide()

  go = createButton('BACK')
  go.position(displayWidth/2+400,displayHeight/2-350);
  go.style('background-color',"lightblue")
  go.style('font-size',"30px")
  go.style('color',"red")
  go.hide()
}
function draw(){
  if(gameState==="start"){
    drawSprites()
    background(startBg)
    charactersButton.hide()
    startButton.show()
    waysButton.show()
    go.hide()
    c1.hide()
    c2.hide()
    c3.hide()
    c4.hide()
    c5.hide()
 startButton.mousePressed(()=>{
    gameState = "play"
    startButton.hide()
 })
 waysButton.mousePressed(()=>{
  gameState = "ways"
  startButton.hide()
  waysButton.hide();
})
  }
  console.log(gameState)
  if(gameState==="ways"){
    background("pink")
    textSize(20)
    go.show()
    fill("blue")
    text("Welcome to Bloom's Magic World.This is my World.I am bloom.Please help me to reach the end of this place",10,100)
    text("Press left arrow key to move me left",10,140)
    text("Press right arrow key to move me right",10,180)
    text("Press 'SPACE' key to make me jump",10,220)
    text("Press 'a' key to shoot blumos (arrows used to attack enemys in Bloom's World)",10,260)
    text("I have a helper here 'Angel Maria' .She will help you at difficult times. Just click the help button to reach her ",10,300)
    text("Get more coins to free my friends from my enemys. You can play with them too...",10,340);
    text("Kill my enemys by shooting blumos to get more coins",10,380)
    charactersButton.show()
    go.mousePressed(()=>{
      gameState="start"
    })

  }
  charactersButton.mousePressed(()=>{
    background("pink")
    gameState="ch"
    charactersButton.hide()
    textSize(30)
    text("The characters",600,100)
   })
  if(gameState==="ch"){
    image(ch4I,500,150,700,300)
    image(ch3I,300,150,700,300)
    image(ch2I,70,150,700,300)
    image(ch1I,0,150,700,300)
    image(ch5I,700,150,700,300)
    c1.show()
    c2.show()
    c3.show()
    c4.show()
    c5.show()
    c1.mousePressed(()=>{
      bloom.addImage(ch1I)

    })
    c2.mousePressed(()=>{
      bloom.addImage(ch2I)
      bloom.setCollider("rectangle",+50,0,50,260)
    })
    c3.mousePressed(()=>{
      bloom.addImage(ch3I)
      bloom.scale=0.2;
      bloom.setCollider("rectangle",-70,0,50,400)
    })
    c4.mousePressed(()=>{
      bloom.addImage(ch4I)
      bloom.setCollider("rectangle",-20,0,60,400)
      bloom.scale=0.2;
    })
    c5.mousePressed(()=>{
      bloom.addImage(ch5I)
      bloom.setCollider("rectangle",-60,0,60,400)
      bloom.scale=0.2;
    })
    go.show()
    go.mousePressed(()=>{
      gameState="start"
    })
  }
  if(gameState==="play"){

  background("pink")
  waysButton.hide()
console.log(leftmover1.x)
bloom.collide(ground)
bloom.collide(line1);
bloom.collide(line2);
bloom.collide(line3);
bloom.collide(line4);
bloom.collide(line5);
bloom.collide(line6);
bloom.collide(line7);
bloom.collide(rock);
bloom.collide(rock2);
bloom.collide(stand)
bloom.collide(stand2)
bloom.collide(stand3)
bloom.collide(stand4)
bloom.collide(stand5)
enemy1.velocityX=-3;
leftmover1.velocityX=-3;
leftmover1.bounceOff(inv1)
leftmover1.bounceOff(stand5)
enemy1.bounceOff(rock)
enemy1.bounceOff(rock2)
bloom.velocityY=bloom.velocityY+0.8;
camera.position.x=bloom.position.x+400;
//camera.position.y=bloom.position.y;

if(keyDown(LEFT_ARROW)){
  bloom.x=bloom.x-5
}
if(keyDown(RIGHT_ARROW)){
  bloom.x=bloom.x+5
}
if(keyWentDown("space")){
  bloom.velocityY=-18
}
if(keyWentUp("space")){
  bloom.velocityY=6
}
if(keyWentDown("a")&&count>0){
  count=count-1;
  createArrow()
  arrowS.play();
}

if(bloom.isTouching(egg1)){
  egg1.destroy()
  count+=+1;
  eggS.play();
}
if(bloom.isTouching(egg2)){
  egg2.destroy()
  count+=+1;
  eggS.play();
}
if(bloom.isTouching(egg3)){
  egg3.destroy()
  count+=+1;
  eggS.play();
}
if(bloom.isTouching(egg4)){
  egg4.destroy()
  count+=+1;
  eggS.play();
}
if(bloom.isTouching(egg5)){
  egg5.destroy()
  count+=+1;
  eggS.play();
}
if(bloom.isTouching(egg6)){
  egg6.destroy()
  count+=+1;
  eggS.play();
}
if(bloom.isTouching(egg7)){
  egg7.destroy()
  count+=+1;
  eggS.play();
}
if(bloom.isTouching(egg8)){
  egg8.destroy()
  count+=+1;
  eggS.play();
}
if(bloom.isTouching(egg9)){
  egg9.destroy()
  count+=+1;
  eggS.play();
}
if(bloom.isTouching(egg10)){
  egg10.destroy()
  count+=+1;
  eggS.play();
}
if(bloom.isTouching(coin1)){
  coin1.destroy();
  coinNo+=+1;
  coinS.play();
  score = score+10;
}
if(bloom.isTouching(coin2)){
  coin2.destroy();
  coinNo+=+1;
  coinS.play();
  score = score+10;
}if(bloom.isTouching(coin3)){
  coin3.destroy();
  coinNo+=+1;
  coinS.play();
  score = score+10;
}
if(bloom.isTouching(coin4)){
  coin4.destroy();
  coinNo+=+1;
  coinS.play();
  score = score+10;
}
if(bloom.isTouching(coin5)){
  coin5.destroy();
  coinNo+=+1;
  coinS.play();
  score = score+10;
}
if(bloom.isTouching(coin6)){
  coin6.destroy();
  coinNo+=+1;
  coinS.play();
  score = score+10;
}
if(bloom.isTouching(coin7)){
  coin7.destroy();
  coinNo+=+1;
  coinS.play();
  score = score+10;
}
if(bloom.isTouching(coin8)){
  coin8.destroy();
  coinNo+=+1;
  coinS.play();
  score = score+10;
}
if(bloom.isTouching(coin9)){
  coin9.destroy();
  coinNo+=+1;
  coinS.play();
  score = score+10;
}
if(bloom.isTouching(coin10)){
  coin10.destroy();
  coinNo+=+1;
  coinS.play();
  score = score+10;
}
if(bloom.isTouching(coin11)){
  coin11.destroy();
  coinNo+=+1;
  coinS.play();
  score = score+10;
}

if(bloom.isTouching(pot1)){
  pot1.destroy()
  score=score+100
  applause.play()
}

bloom.velocityX=0
//moving object functions
if(bloom.isTouching(leftmover1)){
  bloom.velocityX=leftmover1.velocityX
  bloom.velocityY=0
  if(keyWentDown("space")){
  bloom.velocityY=-18
}
}
drawSprites()

fill("black")
textSize(20)
text("🥚🥚 Blumos left🥚🥚:  " + count,camera.position.x+400,camera.position.y-250)
text("⭐Stars collected ⭐:   "+coinNo,camera.position.x+400,camera.position.y-200)
text(" score so far               :   "+score,camera.position.x+400,camera.position.y-150)
if(arrowGr.isTouching(enemy1)){
  enemy1.destroy();
  arrowGr.destroyEach()
}
}
}

function createArrow() {
  if(count>0)
 { arrow= createSprite(bloom.x, bloom.y,20, 10);
  arrow.velocityX = 4;
  arrow.addImage(arrowI)
  arrow.scale = 0.1;
  arrow.lifetime=300;
  arrowGr.add(arrow)
  arrow.debug =true;
  arrow.setCollider("rectangle",0,0,20,20)
  return arrow;
}

}