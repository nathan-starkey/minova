let timestep = 1/60;
let drift = 0;
let current;
let game = new Game();
let events = [];


window.addEventListener("keydown", onEvent);
window.addEventListener("keyup", onEvent);
window.addEventListener("load", onEvent);
window.addEventListener("resize", onEvent);


function load() {
  current = performance.now() / 1000;
  requestAnimationFrame(loop);
}


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


function onEvent(event) {
  events.push(event);
}