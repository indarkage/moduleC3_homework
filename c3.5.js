class ElectricalApp {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }

  plugIn() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }
  
  plugOut() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
  }
}

// Unit 1
class Heater extends ElectricalApp {
  constructor (name, brand, power, hPower) {
    super(name, power);
    this.brand = brand;
    this.hPower = hPower;
    this.isPlugged = true;
  }
}

// Unit 2
class Computer extends ElectricalApp {
  constructor(name, brand, power, type, functionality) {
    super(name, power); 
    this.brand = brand;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
  }
}

const Heater1 = new Heater("Heating Coil", "Zanussi", "6.0 kW", "24.5 kW");
Heater1.plugOut();
Heater1.plugIn();

const PC1 = new Computer("PC", "Intel", 3, "static", "work");
PC1.plugIn();
PC1.plugOut();

console.log(Heater1);
console.log(PC1);