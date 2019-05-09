class Timer  {
  constructor(ctx, posX, posY, time, gameW, gameH) {

    this.ctx = ctx
    this.posX = posX+10
    this.posY = posY+30
    this.initialValue = time
    this.value = this.initialValue
    this.div = document.getElementById("timerDiv")
  }

  init()  {
  }
  
  update() {
    this.updateDiv()
    this.value--
  }

  checkGameOver() {
    if (this.value <= 0) {return true}    
  }

  updateDiv() {
    this.div.style.left = "24vh";
    this.div.setAttribute("class", "")
    this.div.innerHTML = "Time left: "+this.value

  }
}


