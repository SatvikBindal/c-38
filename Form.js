class Form{
    constructor(){
         this.input= createInput('name')
          this.button= createButton('play')
          this.greeting= createElement('h3')
    }

    hide(){
        this.greeting.hide()
    }

     display(){
    
        this.input.position(0,0)
        this.button.position(0,200)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name= this.input.value()
            this.greeting.html('hello '+ player.name)
            this.greeting.position(250,100)
            playerCount++
            player.index=playerCount
            player.updatePlayerCount(player.index)
            player.updatePlayerInfo()
        })
     }
}