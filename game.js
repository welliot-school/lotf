class Game extends gObject {
  constructor(posX, posY, sizeW, sizeH) {
    super(posX, posY, sizeW, sizeH);
    let sprite = new Sprite("kris.png", 50, 50);
    this.addChild(sprite);
  }
}
