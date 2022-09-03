class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.context = canvas.getContext("2d");
    this.objects = [];
  }
  
  input(event) {
    switch (event.type) {
    case "load":
      this.objects.push(new Player());
    case "resize":
      this.canvas.width = innerWidth;
      this.canvas.height = innerHeight;
    }
    
    for (let object of this.objects) {
      object.input(event);
    }
  }
  
  update(step) {
    for (let object of this.objects) {
      object.update(step);
    }
  }
  
  draw(delta) {
    let context = this.context;
    
    context.reset();
    
    for (let object of this.objects) {
      object.draw(delta, context);
    }
  }
}