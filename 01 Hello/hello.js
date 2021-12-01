var Greeter = /** @class */ (function () {
    function Greeter(firstName, lastName) {
        this.fullName = "";
        this.fullName = "".concat(lastName, " ").concat(firstName);
    }
    Greeter.prototype.greet = function () {
        return "<h1>Hello, my name is ".concat(this.fullName, "</h1>");
    };
    return Greeter;
}());
var g = new Greeter("Tamás", "Járvás");
document.body.innerHTML = g.greet();
