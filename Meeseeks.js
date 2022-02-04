class Meeseeks {
    constructor(x, y) {
      this.width = 50;
      this.height = 70;
      this.xPosition = x;
      this.yPosition= y;
    };
    display(){
      //x = mouseX;
      //y = mouseY;

      //A
      //if (keyiSDown(65)){
      //    x = x - 1;
          
      // }
      //D
      //if (keyIsDown(68)){
      //    x = x + 1;
      //}

      //W
      //if (keyIsDown(87)){
      //    y = y - 1;
      //}

      //S
      //if (keyIsDown(83)){
      //    y = y + 1;
      //}

      stroke('white')
      fill('blue')
      rectMode(CENTER)
      rect(this.xPosition, this.yPosition, this.width, this.height);
    }
};

