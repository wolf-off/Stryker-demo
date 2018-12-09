class Accumulator {
    constructor() {
        this.value = 0;
    }
    add(inValue) {
        this.value += inValue;
    }
    sub(inValue) {
        if (this.value > inValue) {
            this.value -= inValue;
        } else {
            this.value = 0;
        }
    }
}
