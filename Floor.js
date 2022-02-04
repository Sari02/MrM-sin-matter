class Floor {
    constructor(x,y,width,height) {
      this.width = width;
      this.height = height;
      this.xPosition = x;
      this.yPosition= y;
    }
    display(){
      rectMode(CENTER);
      fill("gray");
      rect(this.xPosition, this.yPosition, this.width, this.height);
    }
  };