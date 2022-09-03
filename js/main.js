let timestep = 1/60;
let drift = 0;
let current;
let game = new Game();


window.addEventListener("load", function () {
  current = performance.now() / 1000;
  requestAnimationFrame(loop);
});


function loop() {
  let previous = current;
  current = performance.now() / 1000;
  drift += current - previous;
  
  let event;
  
  while (event = events.shift()) {
    game.input(event);
  }
  
  while (drift >= timestep) {
    game.update(timestep);
    drift -= timestep;
  }
  
  game.draw(drift / timestep);
  
  requestAnimationFrame(loop);
}