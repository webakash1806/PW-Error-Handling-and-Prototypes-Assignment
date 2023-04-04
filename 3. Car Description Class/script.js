class Car {

    constructor(com, mod, yr) {
        this.company = com;
        this.model = mod;
        this.year = yr;
    }

    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}. `
    }
}

let p = new Car("Skoda", "Rapid", 2022);
console.log(p.getDescription());