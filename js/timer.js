class Timer  {
  constructor(ctx, posX, posY, time) {

    this.ctx = ctx
    this.posX = posX+10
    this.posY = posY+30
    this.initialValue = time
    this.value = this.initialValue
  }

  init()  {
  }
  
  update() {
    this.ctx.font = "30px serif";
    this.ctx.fillStyle = "red";
    this.ctx.fillText(this.value, this.posX, this.posY);
    this.value--
  }

  checkGameOver() {
    if (this.value <= 0) {return true}    
  }

}