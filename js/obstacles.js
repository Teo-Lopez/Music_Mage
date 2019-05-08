class Obstacle {
  constructor(gameW, gameH, ctx,  map){
    this.gameW = gameW;                 //VALORES GENERALES
    this.gameH = gameH;
    this.ctx = ctx;
    this.map = map

    this.posX = undefined
    this.posY = undefined
    this.width = undefined
    this.height = undefined

    this.img = new Image()
    this.img.src = undefined
    this.img.width = undefined
    this.img.height = undefined

  }

  draw() {
    this.ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height)
  }
}

class Tree extends Obstacle {
  constructor(gameW, gameH, ctx,  map, posX, posY) {
    super(gameW, gameH, ctx,  map)

    this.posX = posX
    this.posY = posY
    this.width = 64*2
    this.height = 64*3

    this.img.src = "img/tree.png"
  }
}