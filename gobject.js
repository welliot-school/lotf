export class gObject {
  constructor(posX, posY, sizeW, sizeH) {
    this.posX = posX;
    this.posY = posY;
    this.sizeW = sizeW;
    this.sizeH = sizeH;
    this.children = [];
  }
  
  update() {
    for (let i=0; i<this.children.length; i++) {
      this.children[i].update();
    }
  }
  
  drawThis(ctx) {
    for (let i=0; i<this.children.length; i++) {
      this.children[i].drawThis(ctx);
    }
  }
  
  addChild(child) {
    this.children.push(child);
  }
  
}
