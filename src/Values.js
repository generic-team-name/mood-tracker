class Values {
    constructor() {
    }

    addStuff(date, mood, entry) {
        fullArray.push([Date.now(), mood, entry])
    }

    getStuff() {
        return fullArray
    }
}