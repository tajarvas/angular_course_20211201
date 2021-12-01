var Greeter = /** @class */ (function () {
    function Greeter(nameObj) {
        this.fullName = "";
        this.skills = [
            { name: "programming", point: 5 },
            { name: "cycling", point: 100 }
        ];
        this.fullName = "".concat(nameObj.lastName, " ").concat(nameObj.firstName);
    }
    Greeter.prototype.greet = function () {
        return "<h1>Hello, my name is ".concat(this.fullName, "</h1>");
    };
    return Greeter;
}());
var g = new Greeter({ lastName: 'Járvás', firstName: 'Tamás' });
document.body.innerHTML = g.greet();
