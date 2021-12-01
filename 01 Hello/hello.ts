class Greeter {
    fullName: string = "";
    skills: Array<{name: string, point: number}> = [
        {name: "programming", point: 5},
        {name: "cycling", point: 100}
    ];

    constructor(firstName: string, lastName: string) {
        this.fullName = `${lastName} ${firstName}`;
    }

    greet() {
        return `<h1>Hello, my name is ${this.fullName}</h1>`;
    }
}

let g: Greeter = new Greeter("Tamás","Járvás");
document.body.innerHTML = g.greet();