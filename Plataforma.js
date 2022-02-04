class Plataforma {
  constructor(x, y, width, height) {
    this.width = width;
    this.height = height;
    this.xPosition = x;
    this.yPosition= y;
  }
  display(){

    rectMode(CENTER);
    //strokeWeight(1);
    stroke("pink");
    fill("gray");
    rect(this.xPosition, this.yPosition, this.width, this.height);
  }
};
