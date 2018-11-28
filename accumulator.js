class Accumulator {
    constructor() {
        this.value = 0;
    }

    add(inValue) {
        this.value += inValue;
    }

    remove(inValue) {
        var result = inValue;
        if (this.value >= inValue) {
            this.value -= inValue;
        } else {
            result = this.value;
            this.value = 0;
        }
        return result;
    }
}
