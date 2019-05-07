class Background{

  constructor(ctx, gameW, gameH, tilesX, tilesY) {
    this.ctx = ctx
    this.img = new Image()
    this.img.src = undefined
    this.gameW = gameW
    this.gameH = gameH
    
    this.tilesX = tilesX
    this.tilesY = tilesY

    this.width = this.tilesX*32
    this.height = this.tilesY*32

    this.posX = this.gameW/2-this.width
    this.posY = this.gameH/2-this.height

    this.startingPositionX = this.posX
    this.startingPositionY = this.posY+7*32*2-32    //32 sobra de altura de pj

    this.map = []
    this.ending = new Image()
    this.ending.src = "img/bonfire.png"
    this.endingX = this.posX+19*32*2
    this.endingY = this.posY
    this.endingMusic = [49, 50, 51, 52, 53, 54, 55]
  }

  draw() {
    console.log(this.posX)
    console.log(this.posY)
    console.log(this.width)
    console.log(this.height)
    this.ctx.drawImage(                   //mapa
      this.img,
      this.posX,
      this.posY,
      this.width,
      this.height
    )

    this.ctx.drawImage(                    //ending event
      this.ending,
      this.endingX,
      this.endingY,
      32*2,
      32*2
    )
  }

  drawEnding() {
    this.ending.src = "img/bonfireLighted.png"
    this.ending.framesX = 3;
    this.ending.frameIndex = 0;
    this.ending.width = 32
    this.ending.height = 32
    this.ctx.drawImage(
      this.ending,
      this.ending.frameIndex * Math.floor(this.ending.width / this.ending.framesX),
      0,      
      32,
      32,
      this.endingX,
      this.endingY,
      32,
      32)
    }
    
    animateEnding(framesCounter) {
      if (framesCounter % 9 === 0) this.ending.frameIndex += 1;
      if (this.img.frameIndex > 3) this.ending.frameIndex = 0;
    }

}

class BackgroundMain extends Background{
  constructor(ctx, gameW, gameH){
    super(ctx, gameW, gameH, 20, 10)

    this.img.src = "img/bg.png"
    this.width *= 2
    this.height *= 2
    this.completed = 0
  }

}