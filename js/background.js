class Background {
  constructor(ctx, gameW, gameH, tilesX, tilesY) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = undefined;
    this.gameW = gameW;
    this.gameH = gameH;

    this.tilesX = tilesX;
    this.tilesY = tilesY;

    this.width = this.tilesX * 32;
    this.height = this.tilesY * 32;

    this.posX = this.gameW / 2 - this.width;
    this.posY = this.gameH / 2 - this.height;

    this.startingPositionX = this.posX;
    this.startingPositionY = this.posY + 7 * 32 * 2 - 32; //7tiles en Y a doble de ancho -32 que sobra de altura de pj

    this.map = [];
    this.ending = new Image();
    this.ending.src = "img/bonfire.png";
    this.endingX = this.posX + 19 * 32 * 2;
    this.endingY = this.posY;
    this.endingMusic = undefined;

    this.doSound = document.createElement("audio"); //Datos de que puede tocar el player
    this.doSound.src = "audio/do.wav";
    this.reSound = document.createElement("audio");
    this.reSound.src = "audio/re.wav";
    this.miSound = document.createElement("audio");
    this.miSound.src = "audio/mi.wav";
    this.faSound = document.createElement("audio");
    this.faSound.src = "audio/fa.wav";
    this.solSound = document.createElement("audio");
    this.solSound.src = "audio/sol.wav";
    this.laSound = document.createElement("audio");
    this.laSound.src = "audio/la.wav";
    this.siSound = document.createElement("audio");
    this.siSound.src = "audio/si.wav";
  }

  draw() {
    this.ctx.drawImage(
      //mapa
      this.img,
      this.posX,
      this.posY,
      this.width,
      this.height
    );

    this.ctx.drawImage(
      //ending event
      this.ending,
      this.endingX,
      this.endingY,
      32 * 2,
      32 * 2
    );
  }

  drawEnding() {
    this.ending.src = "img/bonfireLighted.png";
  }

  playEnding() {
    this.endingMusic.forEach((note, idx) => {
      switch (note) {
        case 49:
          setTimeout(() => {
            this.doSound.play();
          }, 1000 + idx * 700);
          break;
        case 50:
          setTimeout(() => {
            this.reSound.play();
          }, 1000 + idx * 700);

          break;
        case 51:
          setTimeout(() => {
            this.miSound.play();
          }, 1000 + idx * 700);

          break;
        case 52:
          setTimeout(() => {
            this.faSound.play();
          }, 1000 + idx * 700);

          break;
        case 53:
          setTimeout(() => {
            this.solSound.play();
          }, 1000 + idx * 700);

          break;
        case 54:
          setTimeout(() => {
            this.laSound.play();
          }, 1000 + idx * 700);

          break;
        case 55:
          setTimeout(() => {
            this.siSound.play();
          }, 1000 + idx * 700);

          break;
      }
    });
  }
}

class BackgroundMain extends Background {
  constructor(ctx, gameW, gameH) {
    super(ctx, gameW, gameH, 20, 10);

    this.img.src = "img/bg.png";
    this.width *= 2;
    this.height *= 2;
    this.completed = 0;
    this.endingMusic = [51, 52, 53, 53, 52, 51, 50];
  }
}

class Background2 extends Background {
  constructor(ctx, gameW, gameH) {
    super(ctx, gameW, gameH, 20, 10);

    this.img.src = "img/bg.png";
    this.width *= 2;
    this.height *= 2;
    this.completed = 1;
    this.endingMusic = [50, 51, 50, 52, 51, 53, 49];
  }
}

class Background3 extends Background {
  constructor(ctx, gameW, gameH) {
    super(ctx, gameW, gameH, 20, 10);

    this.img.src = "img/river.png";
    this.width *= 2;
    this.height *= 2;
    this.completed = 1;
    this.endingMusic = [49, 49, 50, 49, 52, 51, 49];

    this.castle = new Image();
    this.castle.src = "img/tower.png";
  }

  draw() {
    this.ctx.drawImage(
      //mapa
      this.img,
      this.posX,
      this.posY,
      this.width,
      this.height + 64 * 2
    );

    this.ctx.drawImage(this.castle, this.endingX - 64 - 20, this.endingY - 64 * 3 - 10, 300, 300);
  }
  drawEnding() {}
}
