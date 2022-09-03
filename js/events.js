let events = [];


window.addEventListener("keydown", onEvent);
window.addEventListener("keyup", onEvent);
window.addEventListener("load", onEvent);
window.addEventListener("resize", onEvent);


function onEvent(event) {
  events.push(event);
}