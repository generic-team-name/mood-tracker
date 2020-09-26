class Values {
    constructor() {
    }

    addStuff(date, mood, entry) {
        fullArray.push([date, mood, entry])
    }

    getStuff() {
        return fullArray
    }
}