class Laser {
  constructor(x,y,width,height) {
    this.width = 50;
    this.height = 50;
    this.xPosition = x;
    this.yPosition= y;
  }
  display(){
    rectMode(CENTER);
    fill("red");
    rect(this.xPosition, this.yPosition, this.width, this.height);
  }
  };