class Values {
    constructor() {
        var fullArray = [null]
    }

    addStuff(date, mood, entry) {
        fullArray.push([date, mood, entry])
    }

    getStuff() {
        return fullArray
    }
}