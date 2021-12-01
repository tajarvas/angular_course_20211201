interface name {
    firstName: string;
    lastName: string;
}

class Greeter {
    fullName: string = "";
    skills: Array<{name: string, point: number}> = [
        {name: "programming", point: 5},
        {name: "cycling", point: 100}
    ];

    constructor(nameObj: name) {
        this.fullName = `${nameObj.lastName} ${nameObj.firstName}`;
    }

    greet() {
        return `<h1>Hello, my name is ${this.fullName}</h1>`;
    }
}

let g: Greeter = new Greeter({lastName: 'Járvás', firstName: 'Tamás'});
document.body.innerHTML = g.greet();