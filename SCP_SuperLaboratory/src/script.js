//Import Classes
import {Game} from "./game.js";
import {InputTracker} from "./controller/inputTracker.js";

//Engine Components
let inputTracker = new InputTracker()
let game = new Game(800, 600, inputTracker)

//Event Listeners
document.addEventListener('keydown', function(event){
    inputTracker.keyDown(event)
});
document.addEventListener('keyup', function(event){
    inputTracker.keyUp(event)
});

//Begin updating script
window.requestAnimationFrame(step)

//Default step
function step() {
    game.update()
    requestAnimationFrame(step)
}