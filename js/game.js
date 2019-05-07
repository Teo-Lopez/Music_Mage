

const Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  timer: undefined,
  gameW: undefined,
  gameH: undefined,
  framesCounter: 0,
  timer: undefined,
  monsters: [],
  directionsArr: ["W", "N", "E", "S"],
  currentDirection: undefined,


  keys: {                       //Comandos de juego
    LEFT_KEY: 37,
    RIGHT_KEY: 39,
    TOP_KEY: 38,
    DOWN_KEY: 40,
    ENTER: 13,
    do: 49,
    re: 50,
    mi: 51,
    fa: 52,
    sol: 53,
    la: 54,
    si: 55,
  },

  init: function(canvasId) {
    this.canvas = document.getElementById(canvasId)       //Valores generales
    this.ctx = this.canvas.getContext("2d")
    this.setDimensions()
    this.makeBackgrounds()                                
    this.makeCharacter()
    this.makeTimer()

    setTimeout(() => {
      alert("Tengo que llegar hasta el final del camino antes de morir congelado. \nCreo que recuerdo un conjuro con el que prender una hoguera con aquella madera.")
    }, 500)
    this.start()
  },

  setDimensions: function() {         
    this.gameW = window.innerWidth
    this.gameH = window.innerHeight
    this.canvas.setAttribute('width', this.gameW)
    this.canvas.setAttribute('height', this.gameH)

  },

  makeTimer: function() { this.timer = new Timer(this.ctx, this.backgroundMain.posX, this.backgroundMain.posY, 6000)},

  start: function() {
    this.setAllListeners()
    this.motor()

  },

  motor: function() {
    this.interval = setInterval(() => {
      if(this.framesCounter > 2000) this.framesCounter=0
      this.framesCounter++
      this.erase()
      this.drawAll()
      this.timer.update()
      this.moveAll()
      this.changeMonstersDirection()
      this.checkMonsterCollision()
      
      if ( this.timer.checkGameOver()) {
        this.clear()
        this.drawGameOver()      
      } else if (this.character.checkEnding() && this.character.checkSolution()) {
        this.backgroundMain.drawEnding()
        //this.animateEnding(this.framesCounter)
        this.character.musicPlayed = []
        setTimeout(() => {
          this.clear()
          alert("Enhorabuena has superado el nivel!")
        }, 1000);
      }


    }, 1000/this.fps);
  },

  makeBackgrounds: function() {
    this.backgroundMain = new BackgroundMain(this.ctx, this.gameW, this.gameH)
  },

  makeCharacter: function() {
    this.character = new Player(this.gameW, this.gameH, this.ctx, this.keys, this.backgroundMain, this.framesCounter) 
    console.log(this.character)
    this.monsters.push(new Monster(this.gameW, this.gameH, this.ctx, this.backgroundMain, "W", this.framesCounter))
    this.monsters.push(new Monster(this.gameW, this.gameH, this.ctx, this.backgroundMain, "S", this.framesCounter))
    this.monsters.push(new Monster(this.gameW, this.gameH, this.ctx, this.backgroundMain, "E", this.framesCounter))

  },

  drawAll: function() {
    this.backgroundMain.draw()
    this.character.draw()
    this.monsters.forEach(monster => monster.draw())
  },

  moveAll: function(){
    this.character.animateImg(this.framesCounter)
    this.monsters.forEach(monster => monster.animateImg(this.framesCounter))
    this.monsters.forEach(monster => monster.move())
  },

  setAllListeners() {
    this.character.setListeners()
    //this.character.endingListeners()
  },

  erase() {
    this.ctx.clearRect(0,0, this.gameW, this.gameH)
  },

  clear() {
    clearInterval(this.interval)
  },

  drawGameOver() {
    this.erase()
    this.ctx.font = "120px serif";
    this.ctx.fillStyle = "red";
    this.ctx.fillText("GAME OVER", this.gameW/2-400, this.gameH/2);
    this.ctx.font = "30px serif";
    this.ctx.fillStyle = "red";
    this.ctx.fillText("Has muerto de frio", this.gameW/2-200, this.gameH/2+50);
  },

  checkMonsterCollision() {
    this.monsters.some(monster => {
      if(monster.posX<= this.character.posX+this.character.width-10 && monster.posX+monster.width>=this.character.posX+30 && monster.posY<=this.character.posY+this.character.height+32 && monster.posY+monster.height >= this.character.posY) {
        this.character.posX = this.character.posX0
        this.character.posY = this.character.posY0
        this.timer.value -= 200
      }
    })
  } ,

  changeMonstersDirection() {
    
    if(this.framesCounter%120==0) {
      console.log(this.directionsArr[Math.floor(Math.random()*4)])
      this.currentDirection = this.directionsArr[Math.floor(Math.random()*4)]
      this.monsters[Math.floor(Math.random()*this.monsters.length)].direction= this.currentDirection
    }
  }
    
  
}