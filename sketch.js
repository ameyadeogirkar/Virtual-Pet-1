var dog, happyDog, database, foodS, foodStock;
var dogImg,happyDogImg;
var backgroundImg;

function preload(){
  dogImg = loadImage("Dog.png");
  happyDogImg = loadImage("happydog.png");
  backgroundImg = loadImage("download.jpg");
}

function setup(){
  createCanvas(500,500);
  
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  dog = createSprite(250,400,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.2;

}


function draw(){  
  background(backgroundImg);

  if(keyCode === 32){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }


  drawSprites();
  //add styles here

  fill("black");
  textSize(20);
  //stroke(5);
  text("Press space To Feed Mr.popeye milk",70,100);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  
  if(x<=0){
    x=0;
  }else{
    x=x+1;
  }

  database.ref("/").update({food:x})
}

