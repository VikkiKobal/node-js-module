class Car {
    constructor(licensePlate, year, make, color, condition, ownerLastName, ownerAddress) {
        const _generateId = () => {
            const crypto = require("crypto");
            return crypto.randomBytes(16).toString("hex");
        };

        this.id = _generateId();
        this.licensePlate = licensePlate;
        this.year = year;
        this.make = make;
        this.color = color;
        this.condition = condition;
        this.ownerLastName = ownerLastName;
        this.ownerAddress = ownerAddress;
    }
}

module.exports = Car;
