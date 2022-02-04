class Door {
    constructor(x, y, width, height) {
      this.width = 110;
      this.height = 150;
      this.xPosition = x;
      this.yPosition= y;
    }
    display(){
      rectMode(CENTER);
      //strokeWeight(4);
      stroke("brown");
      fill("brown");
      rect(this.xPosition, this.yPosition, this.width, this.height);
    }
  };
