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
    

    this.doSound =document.createElement("audio")
    this.doSound.src = "audio/do.wav"
    this.reSound =document.createElement("audio")
    this.reSound.src = "audio/re.wav"
    this.miSound =document.createElement("audio")
    this.miSound.src = "audio/mi.wav"
    this.faSound =document.createElement("audio")
    this.faSound.src = "audio/fa.wav"
    this.solSound =document.createElement("audio")
    this.solSound.src = "audio/sol.wav"
    this.laSound =document.createElement("audio")
    this.laSound.src = "audio/la.wav"
    this.siSound =document.createElement("audio")
    this.siSound.src = "audio/si.wav"



  
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
      this.width*2,
      this.height*2
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

  playMusic() {
    document.onkeydown = event => {
      switch(event.keyCode) {
        case 49:
          this.doSound.play()
          break;
        case 50:
          this.reSound.play()
          break;

        case 51:
          this.miSound.play()
          break;


        case 52:
          this.faSound.play()
          break;


        case 53:
          this.solSound.play()
          break;

        case 54:
          this.laSound.play()
          break;

        case 55:
          this.siSound.play()
          break;

      }
    }
  }

  setListeners() {
    document.onkeydown = event => {
      
          //if (this.posX >= this.map.endingX && this.posY<= this.map.endingY && this.posX+this.width>=this.map.endingX-32 && this.posY+this.height >= this.map.endingY) {

            if(event.keyCode === 13 && this.posX+this.width*2 >= this.map.endingX && this.posY<=this.map.endingY+64){
              
               
              this.doSound.play();

              setTimeout(()=>{
                this.reSound.play();
              }, 1000)

              setTimeout(()=>{  
                this.miSound.play();
              }, 2000)

              setTimeout(()=>{
                this.faSound.play();
              }, 3000)
              setTimeout(()=>{
                this.solSound.play();
              }, 4000)
              setTimeout(()=>{
                this.laSound.play();
              }, 5000)
              setTimeout(()=>{
                this.siSound.play();
              }, 6000)


            }else {
              if (event.keyCode === this.keys.RIGHT_KEY && this.posX+this.width<= this.map.posX+this.map.width-64) {
                console.log(this.posX+this.width*2 <= this.map.endingX)
                
                this.direction = "E"
                this.img.frameIndexX = 0
                this.posX += 32*2
                console.log(this.posX+this.width, this.map.endingX)
            } else if (event.keyCode === this.keys.LEFT_KEY && this.posX>=this.map.posX+64) {
                this.direction = "W"
                this.posX -= 32*2

            } else if (event.keyCode === this.keys.DOWN_KEY && this.posY+this.height<=this.map.posY+this.map.height-64) {
                this.direction = "S"
                this.posY += 32*2
            } else if (event.keyCode === this.keys.TOP_KEY && this.posY>=this.map.posY+64-32) {
                this.img.frameIndexX = 0
                this.direction = "N"
                this.posY -= 32*2}
            }
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
  
  

