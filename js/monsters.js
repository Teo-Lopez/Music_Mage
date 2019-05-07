class Monster {
  constructor(gameW, gameH, ctx,  map, direction, framesCounter) {
    this.gameW = gameW;                 //VALORES GENERALES
    this.gameH = gameH;
    this.ctx = ctx;
    this.map = map
    this.framesCounter = framesCounter

    
    this.posX = (Math.random()*1216)+105
    this.posY = this.map.posY +   (Math.random()*this.map.height)
    this.direction = direction
    this.vel= 2

    this.img = new Image()
    this.img.src = "img/wolf.png"


    this.img.framesX = 6;
    this.img.frameIndex = 0;

                                                        // medidas de la imagen a representar en el canvas
    this.width = 106;
    this.height = 64;
  }

  draw() {
    
    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * Math.floor(this.img.width / this.img.framesX),
      0,      
      this.width,
      this.height,
      this.posX,
      this.posY,
      108,
      64
    );
  }


  animateImg(framesCounter) {                                     //ANIMA AL PERSONAJE
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (framesCounter % 9 === 0) this.img.frameIndex += 1;
    if (this.img.frameIndex > 5) this.img.frameIndex = 0;
  }

  move() {

    switch(this.direction) {
      case "E":
      case "W":
          if (this.boundaries()){
            this.posX += this.vel

          } else { 
            this.vel *= -1
            this.posX += this.vel}
            break;
      case "N":
      case "S":
          if (this.boundaries()){
            this.posY += this.vel
            } else { 
            this.vel *= -1
            this.posY += this.vel}
            break;
    }

  }
  
  boundaries() {
    return (this.posX+this.width<=this.map.posX+1280 && this.posX-64>=this.map.posX && this.posY>=this.map.posY && this.posY+this.height<= this.map.posY+640)
  }
  
}  
