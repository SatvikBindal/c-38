class Player{
    constructor(){
        this.name=null
        this.index=0
        this.distance=0
    }

    getPlayerCount(){
        database.ref('playerCount').on('value',function(data){
            playerCount= data.val()
            console.log(playerCount)
        } )
    }
    updatePlayerCount(count){
        database.ref('/').update({playerCount:count})
    } 

    getPlayerInfo(){
        database.ref('players').on('value',(data) => {
            allPlayers=data.val()
            console.log(allPlayers)
        })
    }

    updatePlayerInfo(){
        database.ref('players/player'+this.index).update({
            name:this.name,
            distance:this.distance,
            index:this.index
        })
    }
}