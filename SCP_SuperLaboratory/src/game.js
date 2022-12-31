import {Display} from "./display/display.js"
import {System} from "./engine/system.js";
import {GameElement} from "./gameElement.js";

class Game {
    constructor(width, height, inputTracker)
    {
        this.inputTracker = inputTracker
        this.display = new Display(width, height)
        this.system = new System(width, height)

        this.count = 0

        this.elements = []

        this.createElement(50, 50, 50)
    }

    update()
    {
        //Update Simulation
        this.count++

        this.display.update(this.elements)
        this.system.update(this.elements)

        if (this.inputTracker.pressed("a"))
            this.elements[0].x++
        if (this.inputTracker.pressed("w"))
            this.elements[0].y--
        if (this.inputTracker.pressed("s"))
            this.elements[0].y++
        if (this.inputTracker.pressed("d"))
            this.elements[0].x++

    }

    //Element
    createElement(x, y, size)
    {
        let element = new GameElement(x, y, size)
        this.addElement(element)
        return element
    }
    addElement(element)
    {
        if (!this.elements.includes(element))
            this.elements.push(element)
    }
    removeElement(element)
    {
        if (this.elements.includes(element)) {
            this.elements.splice(this.elements.indexOf(element), 1)
        }
    }

}
export {Game}