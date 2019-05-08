class Monster {
  constructor(gameW, gameH, ctx,  map, direction, framesCounter) {
    this.gameW = gameW;                 //VALORES GENERALES
    this.gameH = gameH;
    this.ctx = ctx;
    this.map = map
    this.framesCounter = framesCounter

    
    this.posX = (Math.random() * (this.map.width+this.map.posX-200 - this.map.posX+64)) + this.map.posX+64
    this.posY = (Math.random()* (this.map.height+this.map.posY-200 - this.map.posY)) + this.map.posY
    this.direction = direction
    this.vel= 4

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

  move(obstacles) {
    const obs = obstacles
    
    console.log(this.posX+64+this.width>= obs.posX && obs.posX+obs.width - 64>= this.posX && this.posY+this.height>= obs.posY+64 && obs.height  - 64 +obs.posY>= this.posY)
    switch(this.direction) {
      case "E":
      case "W":
          if ((this.posX+64+this.width>= obs.posX && obs.posX+obs.width - 64>= this.posX && this.posY+this.height>= obs.posY+64 && obs.height  - 64 +obs.posY>= this.posY)){
            this.vel*=-1
          } else if (this.boundaries()){
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
  
      checkObsBounds(newPosX, newPosY) {
        const posX = newPosX + this.posX;
        const posY = newPosY + this.posY;
    
        return (obs.some( obs => {
          return (posX+this.width>= obs.posX && obs.posX+obs.width - 64>= posX && posY+this.height>= obs.posY+64 && obs.height  - 64 +obs.posY>= posY)
        }))
      }
  
  boundaries() {
    return (this.posX+this.width<=this.map.posX+1280 && this.posX-64>=this.map.posX && this.posY>=this.map.posY && this.posY+this.height<= this.map.posY+640)
  }
  

}  

class Troll extends Monster {
  constructor(gameW, gameH, ctx,  map, direction, framesCounter) {
    super(gameW, gameH, ctx,  map, direction, framesCounter)

    this.vel= 1

    this.img = new Image()
    this.img.src = "img/troll1.png"


    this.img.framesX = 2;
    this.img.frameIndex = 0;

                                                        // medidas de la imagen a representar en el canvas
    this.width = 80;
    this.height = 144;

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
      this.width*1.5,
      this.height*1.5
    );
    }

  animateImg(framesCounter) {                                     //ANIMA AL PERSONAJE
    if (this.direction === "W") {this.img.frameIndex = 0 } else if (this.direction === "E") { this.img.frameIndex = 1}
  }
  
}