export default class Values {
    constructor() {
        this.state = {
            fullArray: []
        };
    }

    addStuff(mood, entry) {
        const array = this.state.fullArray;
        array.push([Date.now(), mood, entry])
    }

    getStuff() {
        return this.state.fullArray
    }
}