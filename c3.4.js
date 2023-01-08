function ElectricalApp(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

ElectricalApp.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
};

ElectricalApp.prototype.plugOut = function() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
};

// Unit 1
function Heater(name, brand, ePower, hPower) {
    this.name = name;
    this.brand = brand;
    this.ePower = ePower;
    this.hPower = hPower;
}

Heater.prototype = new ElectricalApp();
const Heater1 = new Heater("Heating Coil", "Zanussi", "6.0 kW", "24.5 kW")
console.log(Heater1)
Heater1.plugIn()
Heater1.plugOut()

// // Unit 2
function Computer(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.isPlugged = false;
}

Computer.prototype = new ElectricalApp();
const PC1 = new Computer("PC", "Intel", 3, "static", "work")
console.log(PC1)
PC1.plugIn()
PC1.plugOut()