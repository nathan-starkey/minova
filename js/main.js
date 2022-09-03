let timestep = 1/60;
let drift = 0;
let current;
let game = new Game();


function load() {
  resizeCanvas();
  
  current = performance.now() / 1000;
  requestAnimationFrame(loop);
}


function resize() {
  resizeCanvas();
}


function resizeCanvas() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}


function loop() {
  let previous = current;
  current = performance.now() / 1000;
  drift += current - previous;
  
  let event;
  
  while (event = events.shift()) {
    for (let object of game.objects) {
      object.input(event);
    }
    
    game.input(event);
  }
  
  while (drift >= timestep) {
    game.update(timestep);
    drift -= timestep;
  }
  
  game.draw(drift / timestep);
  
  requestAnimationFrame(loop);
}