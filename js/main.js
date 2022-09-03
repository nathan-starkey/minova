let timestep = 1/60;
let drift = 0;
let current;


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
  
  while (events[0]) {
    input(events.shift());
  }
  
  while (drift >= timestep) {
    update(timestep);
    drift -= timestep;
  }
  
  draw(drift / timestep);
  
  requestAnimationFrame(loop);
}