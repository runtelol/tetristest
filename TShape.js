class TShape {
    constructor(x, y,x2) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      
      this.body1 = Bodies.rectangle(x, y, 50, 100, options);
      this.Width = 50;
      this.Height = 100;
      this.body2 = Bodies.rectangle(x2, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body1);
      World.add(world, this.body2);
    }
    display(){
      var pos =this.body1.position;
      var pos1 =this.body2.position;
      var angle = this.body1.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("#5539cc");
      rect(0, 0, this.width, this.height);
      rect(0, 0, this.Width, this.Height);
      pop();
    }
  };