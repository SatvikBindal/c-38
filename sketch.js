var database, gameState, playerCount, allPlayers;
var game, player, form, car1,car2,car3,car4,cars;
var track_img, car1_img,car2_img,car3_img,car4_img;

function preload(){
    track_img=loadImage('images/track.jpg');
    car1_img=loadImage('images/car1.png');
    car2_img=loadImage('images/car2.png')
    car3_img=loadImage('images/car3.png')
    car4_img=loadImage('images/car4.png')
}


function setup(){
    createCanvas(displayWidth-50,displayHeight-100);

    database= firebase.database()
    console.log(database)
    game=new Game();
    game.getGameState();
}

function draw(){
    background("white");
    imageMode(CENTER)
    image(track_img,width/2,height/2,width,height*5)
   if (playerCount==4){
       game.updateGameState(1)
   }
   if(gameState==1){
    game.play()
   }
   if(gameState==2){
       game.end()
   }
    drawSprites();
}
