

const Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  timer: undefined,
  gameW: undefined,
  gameH: undefined,
  framesCounter: 0,
  

  keys: {
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
    this.canvas = document.getElementById(canvasId)
    this.ctx = this.canvas.getContext("2d")
    this.setDimensions()
    this.makeBackgrounds()
    this.makeCharacter()
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

  start: function() {

    this.setAllListeners()
    this.motor()

  },

  motor: function() {
    this.interval = setInterval(() => {
      this.framesCounter++
      this.erase()
      this.drawAll()
      this.moveAll()

    }, 1000/this.fps);
  },

  makeBackgrounds: function() {
    this.backgroundMain = new BackgroundMain(this.ctx, this.gameW, this.gameH)
  },

  makeCharacter: function() {
    this.character = new Player(this.gameW, this.gameH, this.ctx, this.keys, this.backgroundMain, this.framesCounter)
  },

  drawAll: function() {
    this.backgroundMain.draw()
    this.character.draw()
  },

  moveAll: function(){
    this.character.animateImg(this.framesCounter)
  },

  setAllListeners() {
    this.character.setListeners()
    //this.character.endingListeners()
  },

  erase() {
    this.ctx.clearRect(0,0, this.gameW, this.gameH)
  }

}