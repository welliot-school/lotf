export class Sprite extends gObject {
  constructor(sprite, posX, posY, sizeW = 0, sizeH = 0) {
    super(posX, posY, sizeW, sizeH);
    this.sprite = new Image();
    this.sprite.src = sprite;
  }
  
  drawThis(ctx) {
    drawImage(ctx, this.sprite, this.posX, this.posY);
    super.drawThis();
  }
}
