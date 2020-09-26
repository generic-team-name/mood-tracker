class Values {
    constructor() {
        var fullArray = []
    }

    addStuff(entry, mood, date) {
        fullArray.push([entry, mood, date])
    }

    getStuff() {
        return fullArray
    }
}