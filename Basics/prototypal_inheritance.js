var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

var john = {
    firstName: 'John',
    lastName: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstName);

var jane = {
    firstName: 'Jane'
}

jane.__proto__ = person;
console.log(jane.getFullName());

person.getFormalFullName = function () {
    return this.lastName + ', ' + this.firstName;
}

console.log(john.getFormalFullName());
console.log(jane.getFormalFullName());

console.log("---------------------------------");

var a = {};
var b = function () {
};
var c = [];

console.log(b.prototype);
console.log(a.__proto__);   // Object
console.log(b.__proto__.__proto__); // Object
console.log(c.__proto__.__proto__); // Object

console.log("---------------------------------");
for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}

console.log("---------------------------------");
var may = {
    address: '111 Main St.',
    getFormalFullName: function () {
        return this.lastname + ', ' + this.firstname;
    }
}

var jim = {
    getFirstName: function () {
        return firstname;
    }
}

_.extend(john, may, jim);

console.log(john);