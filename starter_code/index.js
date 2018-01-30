const Elevator = require('./elevator.js');
const Person = require('./person.js');

const myElevator = new Elevator();
const myPerson = new Person("pepe",2,6);

console.log(myElevator)

myElevator.call(myPerson);
console.log(myElevator);

myElevator.start();