let events = [];


window.onkeydown = onEvent;
window.onkeyup = onEvent;


function onEvent(event) {
  events.push(event);
}