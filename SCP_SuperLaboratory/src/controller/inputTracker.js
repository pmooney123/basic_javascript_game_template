class InputTracker {
    constructor() {
        this.info = []
    }
    keyUp(event) {
        if (this.info.includes(event.key))
            this.info.splice(this.info.indexOf(event.key), 1)
    }
    keyDown(event) {
        if (!this.info.includes(event.key))
            this.info.push(event.key)
    }

    isPressed(string) {
        return this.info.includes(string);
    }
    hasKey(string) {
        return this.isPressed(string)
    }
    pressed(string) {
        return this.isPressed(string)
    }

}
export {InputTracker}