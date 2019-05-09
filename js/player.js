class Player {
  constructor(gameW, gameH, ctx, keys, map, loop) {
    this.gameW = gameW;                 //VALORES GENERALES
    this.gameH = gameH;
    this.ctx = ctx;
    this.keys = keys;
    this.map = map
    this.obstacles = undefined
    this.loop = loop
    
    this.posX0 =  this.map.startingPositionX
    this.posY0= this.map.startingPositionY

    this.posX = this.map.startingPositionX         //VALORES INICIALES DE POSICION
    this.posY= map.startingPositionY
    this.direction = "E"


    this.img = new Image();                                     //SPRITES
    this.img.src = "img/maleCharacter.png";

    // número de imágenes diferentes
    this.img.framesX = 4;
    this.img.frameIndexX = 0;

    this.img.framesY = 4
    this.img.frameIndexY = 2

                                                        // medidas de la imagen a representar en el canvas
    this.width = 32;
    this.height = 48;
    
    
    this.walkingSound = document.createElement("audio")
    this.walkingSound.src = "audio/walkingshort.mp3"
    this.doSound =document.createElement("audio")         //Datos de que puede tocar el player
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

    this.musicPlayed = []                      //array donde se almacenaran las teclas
    this.divArray = [
      document.getElementById("note1"),
      document.getElementById("note2"),
      document.getElementById("note3"),
      document.getElementById("note4"),
      document.getElementById("note5"),
      document.getElementById("note6"),
      document.getElementById("note7")
    ]       

  }

  updatePosition() {
    this.posX = this.posX0
    this.posY = this.posY0
  }

  draw() {                                                      //PINTA AL PERSONAJE
    
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


  }

  animateImg(framesCounter) {                                     //ANIMA AL PERSONAJE
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (framesCounter % 9 === 0) this.img.frameIndexX += 1;
    if (this.img.frameIndexX > 3) this.img.frameIndexX = 0;
    switch(this.direction) {                  //DEFINE LA DIRECCIÓN EN LA QUE MIRA
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

  clearNotesDiv(){
    this.musicPlayed = []
    this.divArray.forEach(div => div.innerHTML="")
  }

  setListeners() {

    
    document.onkeyup = event => {
      if(this.musicPlayed.length >=7) {
        this.errorSound()
        this.clearNotesDiv()
      } else {

      switch(event.keyCode) {           //CAPACITA AL PLAYER PARA TOCAR
        case 49:
          console.log("do")
          this.doSound.play()
          this.divArray[this.musicPlayed.length].innerHTML = "DO"
          this.divArray[this.musicPlayed.length].setAttribute("class", "")
          this.musicPlayed.push(event.keyCode)
          break;
        case 50:
          this.reSound.play()
          this.divArray[this.musicPlayed.length].innerHTML = "RE"
          this.divArray[this.musicPlayed.length].setAttribute("class", "")
          this.musicPlayed.push(event.keyCode)
          break;

        case 51:
          this.miSound.play()
          this.divArray[this.musicPlayed.length].innerHTML = "MI"
          this.divArray[this.musicPlayed.length].setAttribute("class", "")
          this.musicPlayed.push(event.keyCode)
          break;


        case 52:
          this.faSound.play()
          this.divArray[this.musicPlayed.length].innerHTML = "FA"
          this.divArray[this.musicPlayed.length].setAttribute("class", "")
          this.musicPlayed.push(event.keyCode)
          break;


        case 53:
          this.solSound.play()
          this.divArray[this.musicPlayed.length].innerHTML = "SOL"
          this.divArray[this.musicPlayed.length].setAttribute("class", "")
          this.musicPlayed.push(event.keyCode)
          break;

        case 54:
          this.laSound.play()
          this.divArray[this.musicPlayed.length].innerHTML = "LA"
          this.divArray[this.musicPlayed.length].setAttribute("class", "")
          this.musicPlayed.push(event.keyCode)
          break;

        case 55:
          this.siSound.play()
          this.divArray[this.musicPlayed.length].innerHTML = "SI"
          this.divArray[this.musicPlayed.length].setAttribute("class", "")
          this.musicPlayed.push(event.keyCode)
          break;

      
      }
    }

      if(this.checkEnding() && event.keyCode === 13){   
                        //INICIA LA RESOLUCION
              alert("A ver si recuerdo como iba el conjuro...") 
              
               
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

        } else {                                                    //COMANDOS DE MOVIMIENTO
            if (event.keyCode === this.keys.RIGHT_KEY && this.posX+this.width<= this.map.posX+this.map.width-64 && !this.checkObsBounds(64, 0)) {
                this.moveRight()
          } else if (event.keyCode === this.keys.LEFT_KEY && this.posX>=this.map.posX+64 && !this.checkObsBounds(-64, 0)) {
                this.moveLeft()
          } else if (event.keyCode === this.keys.DOWN_KEY && this.posY+this.height<=this.map.posY+this.map.height-64 && !this.checkObsBounds(0, 64)) {
                this.moveDown()
          } else if (event.keyCode === this.keys.TOP_KEY && this.posY>=this.map.posY+32 && !this.checkObsBounds(0, -64) ) {
                this.moveUp()
          }
        }
      
      }

    
  }
  
  moveRight() {
    this.direction = "E"
    this.img.frameIndexX = 0
    this.posX += 32*2
    this.walkingSound.volume = 0.4
    this.walkingSound.play()
  }

  moveLeft() {
    this.direction = "W"
    this.posX -= 32*2
    this.walkingSound.volume = 0.4
    this.walkingSound.play()

  }

  moveDown() {
    this.direction = "S"
    this.posY += 32*2
    this.walkingSound.volume = 0.4
    this.walkingSound.play()

  }

  moveUp() {
    this.img.frameIndexX = 0
    this.direction = "N"
    this.posY -= 32*2
    this.walkingSound.volume = 0.4
    this.walkingSound.play()

  }

  checkEnding() {
    return (this.posX+this.width*2 >= this.map.endingX && this.posY<=this.map.endingY+64)
  }

  checkSolution() {
    if (this.musicPlayed.length===8) {this.musicPlayed= []}
    else if (this.musicPlayed.length===this.map.endingMusic.length && this.map.endingMusic.every((note, idx) => {return  note==this.musicPlayed[idx]})){
      return true
    }
  }  
  
  checkObsBounds(newPosX, newPosY) {
    const posX = newPosX + this.posX;
    const posY = newPosY + this.posY;

    return (this.obstacles.some( obs => {
      return (posX+this.width>= obs.posX && obs.posX+obs.width - 64>= posX && posY+this.height>= obs.posY+64 && obs.height  - 64 +obs.posY>= posY)
    }))
  }

  errorSound() {
    this.doSound.play()
    this.reSound.play()
    this.miSound.play()
    this.faSound.play()
    this.solSound.play()
    this.laSound.play()
    this.siSound.play()
  }
}
