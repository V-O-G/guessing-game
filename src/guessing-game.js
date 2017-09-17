class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        var x = Math.ceil((this.min + this.max)/2);
        return parseInt(x)
    }

    lower() {
        var x = Math.ceil((this.min + this.max)/2);
        this.max = parseInt(x);
    }

    greater() {
        var x = Math.ceil((this.min + this.max)/2);
        this.min = parseInt(x);
    }
}

module.exports = GuessingGame;
