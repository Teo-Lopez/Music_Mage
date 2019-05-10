const canvas = document.getElementById("myGame") 
const ctx = canvas.getContext("2d")
const gameW = window.innerWidth
const gameH = window.innerHeight


const Level1 = new BackgroundMain(ctx, gameW, gameH)

const monsters1 = [
    new Monster(gameW, gameH, ctx, Level1, "W", this.framesCounter),
    new Monster(gameW, gameH, ctx, Level1, "E", this.framesCounter),
    new Monster(gameW, gameH, ctx, Level1, "N", this.framesCounter),
    new Monster(gameW, gameH, ctx, Level1, "W", this.framesCounter),
    new Monster(gameW, gameH, ctx, Level1, "N", this.framesCounter),
    new Monster(gameW, gameH, ctx, Level1, "S", this.framesCounter),
    new Monster(gameW, gameH, ctx, Level1, "N", this.framesCounter),
    new Monster(gameW, gameH, ctx, Level1, "S", this.framesCounter),
]

const obstacles1 = [
  new Tree(gameW, gameH,ctx,Level1, Level1.posX+64*4,64*2),
  new Tree(gameW, gameH,ctx,Level1, Level1.posX+64*10,64*6),
  new Tree(gameW, gameH,ctx,Level1, Level1.posX+64*17,64*8)

]




const Level2 = new Background2(ctx, gameW, gameH)

const monsters2 = [
    new Monster(gameW, gameH, ctx, Level2, "W", this.framesCounter),
    new Monster(gameW, gameH, ctx, Level2, "S", this.framesCounter),
    new Monster(gameW, gameH, ctx, Level2, "E", this.framesCounter),
    new Monster(gameW, gameH, ctx, Level2, "W", this.framesCounter),
    new Monster(gameW, gameH, ctx, Level2, "N", this.framesCounter),
    new Monster(gameW, gameH, ctx, Level2, "E", this.framesCounter),

    new Troll(gameW, gameH, ctx, Level2, "S", this.framesCounter),
    new Troll(gameW, gameH, ctx, Level2, "S", this.framesCounter),
    new Troll(gameW, gameH, ctx, Level2, "E", this.framesCounter),
    new Troll(gameW, gameH, ctx, Level2, "N", this.framesCounter),


]
const obstacles2 = [
  new Tree(gameW, gameH,ctx,Level2, Level2.posX+64*17,64*8),
  new Tree(gameW, gameH,ctx,Level2, Level2.posX+64*4,Level2.posY+64*0),
  new Tree(gameW, gameH,ctx,Level2, Level2.posX,Level2.posY+64*3),
  new Tree(gameW, gameH,ctx,Level2, Level2.posX+64*8,Level2.posY+64*3),
  new Tree(gameW, gameH,ctx,Level2, Level2.posX,Level2.posY+64*3),
  new Tree(gameW, gameH,ctx,Level2, Level2.posX+64*13,Level2.posY*6),



]

const Level3 = new Background3(ctx, gameW, gameH)

const monsters3 = [
  new Troll(gameW, gameH, ctx, Level3, "S", this.framesCounter),
  new Troll(gameW, gameH, ctx, Level3, "E", this.framesCounter),
  new Troll(gameW, gameH, ctx, Level3, "W", this.framesCounter),
  new Troll(gameW, gameH, ctx, Level3, "N", this.framesCounter),
  new Troll(gameW, gameH, ctx, Level3, "W", this.framesCounter),
  new Troll(gameW, gameH, ctx, Level3, "E", this.framesCounter),
  new Troll(gameW, gameH, ctx, Level3, "S", this.framesCounter),
  new Troll(gameW, gameH, ctx, Level3, "N", this.framesCounter),
  new Troll(gameW, gameH, ctx, Level3, "N", this.framesCounter),


]
const obstacles3 = [
  new Tree(gameW, gameH,ctx,Level3, Level3.posX,Level3.posY),
  new Tree(gameW, gameH,ctx,Level3, Level3.posX+64*10,Level3.posY+64*1),
  new Tree(gameW, gameH,ctx,Level3, Level3.posX+64*4,Level3.posY+64*0),
  new Tree(gameW, gameH,ctx,Level3, Level3.posX+64*5,Level3.posY+64*3),
  new Tree(gameW, gameH,ctx,Level3, Level3.posX+64*12,Level3.posY+64*5),
  new Tree(gameW, gameH,ctx,Level3, Level3.posX+64*15,Level3.posY+64*1),
  new Tree(gameW, gameH,ctx,Level3, Level3.posX+64*15,Level3.posY+64*6),
  new Tree(gameW, gameH,ctx,Level3, Level3.posX+64*7,Level3.posY+64*7),
  new Tree(gameW, gameH,ctx,Level3, Level3.posX+64*3,Level3.posY+64*3),
  new Tree(gameW, gameH,ctx,Level3, Level3.posX+64,Level3.posY+64*5),

]


const mapsArray = [Level1, Level2, Level3]
const monstersArray = [monsters1, monsters2, monsters3]
const obstaclesArray = [obstacles1, obstacles2, obstacles3]