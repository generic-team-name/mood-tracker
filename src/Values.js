class Values {
    constructor() {
        var fullArray = []
    }

    addStuff(date, mood, entry) {
        fullArray.push([date, mood, entry])
    }

    getStuff() {
        return fullArray
    }
}