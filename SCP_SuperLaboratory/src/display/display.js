import {DisplayParameters} from "./displayParameters.js"
import {Canvas} from "./canvas.js"

class Display {
    constructor(width, height) {
        this.paused = false
        this.parameters = new DisplayParameters(width, height)
        this.canvas = new Canvas(width, height)
        this.drawLines = false
        this.drawForces = false
    }

    update(elements) {
        this.canvas.clear()
        elements.forEach(element => {
            this.canvas.drawSquare(element.x, element.y, "red", element.size)
        })

    }

    toggle_pause() {
        this.paused = !this.paused
    }
}

export {Display}