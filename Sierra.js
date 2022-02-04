class Sierra {
  constructor(x,y,width,height) {
    this.width = 10;
    this.height = 10;
    this.xPosition = x;
    this.yPosition= y;
  }
  display(){
    rectMode(CENTER);
    fill("gray");
    rect(this.xPosition, this.yPosition, this.width, this.height);
  }
  };
  