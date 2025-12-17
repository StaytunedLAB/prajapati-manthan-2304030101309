function Car(brand, model) {
    this.brand = brand;
    this.model = model;
    this.getInfo = function() {
        return this.brand + " " + this.model;
    };
}

let myCar = new Car("Toyota", "Camry");
console.log("Car info:", myCar.getInfo());