export class gObject {
  constructor(posX, posY, sizeW, sizeH) {
    this.posX = posX;
    this.posY = posY;
    this.sizeW = sizeW;
    this.sizeH = sizeH;
    this.children = [];
  }
  
  start() {
    
  }
  
  update() {
    
  }
  
  drawThis() {
    for (let i=0; i<this.children.length; i++) {
      this.children[i].drawThis();
    }
  }
  
  addChild(child) {
    this.children.push(child);
  }
  
}
