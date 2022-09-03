class Player {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 100;
    this.height = 100;
    this.tiltLeft = false;
    this.tiltRight = false;
  }
  
  input(event) {
    switch (event.type) {
    case "keydown":
      if (event.key == "a") {
        this.tiltLeft = true;
        this.tiltRight = false;
      } else if (event.key == "d") {
        this.tiltRight = true;
        this.tiltLeft = false;
      }
      break
    case "keyup":
      if (event.key == "a") {
        this.tiltLeft = false;
      } else if (event.key == "d") {
        this.tiltRight = false;
      }
    }
  }
  
  update(step) {
    if (this.tiltLeft) {
      this.x -= 100 * step;
    } else if (this.tiltRight) {
      this.x += 100 * step;
    }
  }
  
  draw(delta, context) {
    context.fillStyle = "yellow";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}