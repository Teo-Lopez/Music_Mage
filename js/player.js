class Player {
  constructor(gameW, gameH, ctx, keys, map) {
    this.gameW = gameW;
    this.gameH = gameH;
    this.ctx = ctx;
    this.keys = keys;
    this.map = map
    
    
    this.posX = this.map.startingPositionX;
    this.posY= map.startingPositionY
    this.direction = "E"


    this.img = new Image();
    this.img.src = "img/maleCharacter.png";

    // número de imágenes diferentes
    this.img.framesX = 4;
    this.img.frameIndexX = 0;

    this.img.framesY = 4
    this.img.frameIndexY = 2

    // medidas de la imagen a representar en el canvas
    this.width = 32;
    this.height = 48;
    

  
    //this.setListeners();
  }

  draw() {
    // Documentación drawImage:
    // https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/drawImage
    
    this.ctx.drawImage(
      this.img,
      this.img.frameIndexX * Math.floor(this.img.width / this.img.framesX),
      this.img.frameIndexY * Math.floor(this.img.height / this.img.framesY),      
      this.width,
      this.height,
      this.posX,
      this.posY,
      this.width*1.6,
      this.height*1.6
    );

    //this.animateImg(framesCounter);


  }

  animateImg(framesCounter) {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (framesCounter % 9 === 0) this.img.frameIndexX += 1;
    if (this.img.frameIndexX > 3) this.img.frameIndexX = 0;
    switch(this.direction) {
      case "E":
        this.img.frameIndexY = 2
        break;
      case "N":
        this.img.frameIndexY = 3
        break;
      case "W":
        this.img.frameIndexY = 1
        break;
      case "S":
        this.img.frameIndexY = 0
    }
  }

  move() {

  }

  setListeners() {
    document.onkeydown = event => {
      console.log("posX",this.posX, "posY",this.posY)
      console.log("mapX",this.map.posX, "mapY", this.map.posY)      
      
          //if (this.posX >= this.map.endingX && this.posY<= this.map.endingY && this.posX+this.width>=this.map.endingX-32 && this.posY+this.height >= this.map.endingY) {
          if(event.keycode === 13 && this.posX >= this.map.endingX && this.posY<= this.map.endingY && this.posX+this.width>=this.map.endingX-32 && this.posY+this.height >= this.map.endingY) alert("do")
        
          if (event.keyCode === this.keys.RIGHT_KEY && this.posX-1+this.width<= this.map.posX+this.map.width-64) {
            this.direction = "E"
            this.img.frameIndexX = 0
            this.posX += 32*2
        } else if (event.keyCode === this.keys.LEFT_KEY && this.posX-1>=this.map.posX+64) {
            this.direction = "W"
            this.posX -= 32*2
        } else if (event.keyCode === this.keys.DOWN_KEY && this.posY+this.height<=this.map.posY+this.map.height) {
            this.direction = "S"
            this.posY += 32*2
        } else if (event.keyCode === this.keys.TOP_KEY && this.posY>=this.map.posY+64) {
            this.img.frameIndexX = 0
            this.direction = "N"
            this.posY -= 32*2}
        }
      }
  }

  
/*
  endingListeners() {
    document.onkeyup = event => {
      console.log("do")
      
      if (){
        // let solution = []
        // switch(event.keyCode) {
        //   case this.keys.do:
        //     console.log("do")
        //     this.solution.push(this.keys.do)
        //     console.log(this.solution)
        //     break;
        // }

      
      }

    }*/
  
  

