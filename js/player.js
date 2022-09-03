class Player {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
  
  input(event) {
    if (event.type == "keydown") {
      if (event.key == "d") {
        this.x += 10;
      } else if (event.key == "a") {
        this.x -= 10;
      } else if (event.key == "s") {
        this.y += 10;
      } else if (event.key == "w") {
        this.y -= 10;
      }
    }
  }
  
  update(step) {
    
  }
  
  draw(delta, context) {
    context.fillStyle = "yellow";
    context.fillRect(this.x, this.y, 100, 100);
  }
}