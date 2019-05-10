

const Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  timer: undefined,
  gameW: undefined,
  gameH: undefined,
  framesCounter: 0,
  monsters: [],
  obstacles: [],
  directionsArr: ["W", "N", "E", "S"],
  currentDirection: undefined,
  loop: new Audio('audio/loop.wav'),
  buttonSound: new Audio('audio/button.mp3'),
  gameOverImg: new Image(),
  resetBtn: document.getElementById("reset"),
  scoreDiv: document.getElementById("bestScore"),
  

  level: 0,


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

  init: function(canvasId, gender) {
    
    document.getElementsByClassName("background")[0].setAttribute("class", "background2")
    this.canvas = document.getElementById(canvasId)       //Valores generales
    this.ctx = this.canvas.getContext("2d")
    this.setDimensions()
    this.updateBackgrounds()                                
    this.makeCharacter(gender)
    this.updateObstacles()
    this.updateMonsters()
    this.makeTimer()

  
    this.start()
  },

  setDimensions: function() {         
    this.gameW = window.innerWidth-10
    this.gameH = window.innerHeight-10
    this.canvas.setAttribute('width', this.gameW)
    this.canvas.setAttribute('height', this.gameH)

  },

  makeTimer: function() { this.timer = new Timer(this.ctx, this.backgroundMain.posX, this.backgroundMain.posY, 200000, this.gameW, this.gameH)},

  start: function() {
    this.playLoop()
    document.getElementById("body").setAttribute("class", "papiro1")
    setTimeout(()=>{
      document.getElementById("body").setAttribute("class", "papiro2")
    }, 12000)
    setTimeout(()=>{
      document.getElementById("body").setAttribute("class", "papiro3")
    }, 20000)
    setTimeout(()=>{
      document.getElementById("body").setAttribute("class", "background2")      
      this.setAllListeners()
      this.motor()
      
    }, 26000)

    setTimeout(() => {
      this.scoreDiv.setAttribute("class", "bestScore")
      this.scoreDiv.innerHTML = "High Score: "+localStorage.getItem("HighScore")      
  
    }, 26000)
  },
  
  motor: function() {
    this.interval = setInterval(() => {
      if(this.framesCounter > 2000) this.framesCounter=0
      setTimeout(()=> {

        this.framesCounter++
        this.pauseLoop()
        this.erase()
        this.drawAll()
        this.timer.update()
        this.moveAll()
        this.changeMonstersDirection()
        this.checkMonsterCollision()
        this.checkWin()

      },500)
      


    }, 1000/this.fps);
  },

  updateBackgrounds: function() {
    this.backgroundMain = mapsArray[this.level]
  },

  makeCharacter: function(gender) {
    this.character = new Player(this.gameW, this.gameH, this.ctx, this.keys, this.backgroundMain, gender) 

  },

  drawAll: function() {
    this.backgroundMain.draw()
    this.monsters.forEach(monster => monster.draw())
    this.character.draw()
    this.drawObstacles()
  },

  moveAll: function(){
    this.character.animateImg(this.framesCounter)
    this.monsters.forEach(monster => monster.animateImg(this.framesCounter))
    this.monsters.forEach(monster => monster.move(this.obstacles))
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
    this.hideDivs()
    this.resetBtn.setAttribute("class", "reset gameOver")
    this.reset()
    this.gameOverImg.src = "img/gameOver.jpeg"
    this.ctx.drawImage(                   
      this.gameOverImg,
      this.backgroundMain.posX,
      this.backgroundMain.posY,
      this.backgroundMain.width,
      this.backgroundMain.height
    )


    //this.ctx.font = "30px serif";
    //this.ctx.fillStyle = "red";
    //this.ctx.fillText("Has muerto de frio", this.gameW/2-200, this.gameH/2+50);
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
      this.currentDirection = this.directionsArr[Math.floor(Math.random()*4)]
      this.monsters[Math.floor(Math.random()*this.monsters.length)].direction= this.currentDirection
    }
  },
    
  checkWin() {
    if (this.timer.checkGameOver()) {
      this.clear()
      this.drawGameOver()      
    } else if (this.character.checkEnding() && this.character.checkSolution() && this.level<mapsArray.length - 1) {
      
      this.level++
      this.backgroundMain.drawEnding()
      this.updateBackgrounds()
      this.character.map = this.backgroundMain
      this.updateObstacles()
      this.updateMonsters()
      this.character.musicPlayed = []
      this.character.updatePosition()
      alert("Enhorabuena has superado el nivel!")
    } else if (this.character.checkEnding() && this.character.checkSolution()){
      this.clear()
      this.hideDivs()
      localStorage.setItem("HighScore",this.timer.initialValue-this.timer.value)
      this.scoreDiv.innerHTML = localStorage.getItem("HighScore")
      this.erase()
      document.getElementById("body").setAttribute("class", "win")
      this.resetBtn.setAttribute("class", "reset")      
      this.reset()
    }
  },

  updatePlayerPosition() {
    this.character.map = this.backgroundMain
    this.character.posX = this.backgroundMain.startingPositionX
    this.character.posY = this.backgroundMain.startingPositionY

  },

  updateMonsters() {
    this.monsters = []
    monstersArray[this.level].forEach(monster => this.monsters.push(monster))
  },

  drawObstacles() {
    obstaclesArray[this.level].forEach( obs => obs.draw())
  },

  updateObstacles() {
    this.obstacles = []
    obstaclesArray[this.level].forEach(obs => this.obstacles.push(obs))
    this.character.obstacles = this.obstacles
  },

  playLoop(){
    this.loop.volume = 0.3
    this.loop.loop = true
    this.loop.play();
  },
  
  pauseLoop(){
    if(this.character.checkEnding()){
      if(this.loop.volume>0.05) {this.loop.volume -= .01}
    } else {
        if(this.loop.volume<0.31) {this.loop.volume += .01}
    }
  },
  
  reset() {
    this.resetBtn.onclick = () => {
      this.buttonSound.play()
      this.framesCounter = 0
      this.character.musicPlayed = []
      this.character.posX = this.character.posX0
      this.character.posY = this.character.posY0
      this.level = 0
      this.updateBackgrounds()                                
      this.updateObstacles()
      this.updateMonsters()
      this.timer.value = this.timer.initialValue
      document.getElementById("body").setAttribute("class", "background2")
      this.scoreDiv.setAttribute("class", "bestScore")
      this.resetBtn.setAttribute("class", "reset hidden")


      this.motor()
    }
   
  },

  hideDivs() {
    document.getElementsByName("topBar").forEach(elm => {
      elm.setAttribute("class", "hidden")
      elm.innerHTML=""})
  }
}