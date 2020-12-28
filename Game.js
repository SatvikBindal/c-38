class Game{
    constructor(){

    }
    
   getGameState(){
    database.ref('gameState').on('value',function(data){
        gameState= data.val()
        console.log(gameState);
        if(gameState==0){
            player= new Player()
            player.getPlayerCount()
            form= new Form()
            form.display()
        }
    })
    car1= createSprite(400,600)
    car2= createSprite(600,600)
    car3=createSprite(800,600)
    car4=createSprite(1000,600)
    car1.addImage(car1_img);
    car2.addImage(car2_img);
    car3.addImage(car3_img);
    car4.addImage(car4_img);
    cars=[car1,car2,car3,car4]
   }

   updateGameState(state){
       database.ref('/').update({gameState:state})
   } 
   
   play(){
       form.hide()
       imageMode(CENTER)
       image(track_img,width/2,height/2,width,height*5)
       player.getPlayerInfo()
       textSize(20);
        var y = 200; 
        var index = 0;
        var x = 400;

        for(var plr in allPlayers){
            cars[index].x = x
            cars[index].y = height-allPlayers[plr].distance;
            if(index + 1 == player.index){
                cars[index].shapeColor='red';
                camera.position.y=cars[index].y
            }
            index++
            x=x+200
             text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 200, y);
              y = y + 50;
         }

       if(keyWentDown(UP_ARROW)){
        player.distance=player.distance+50
        player.updatePlayerInfo()
       }
       if(player.distance>2200){
           gameState=2
       }
   }

   end(){
        fill('white')
        textSize(40)
       text('game over',width/2,height-player.distance-100)
   }
}
