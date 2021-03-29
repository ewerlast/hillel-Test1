function Army(defaultUnits) {
    this.units = [];
    if (defaultUnits) {
        combineUnits(this.units, defaultUnits);
        console.log(this.units)
        return this.units;
    }
}

combineUnits.prototype = Army;


function combineUnits(arr, obj) {
    arr.push(obj);
    return arr;
}

Army.prototype.run = function() {
    console.log(this.units);
}
let army = new Army(unit1);
army.run();