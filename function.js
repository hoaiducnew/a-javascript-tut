// Function Statement
function sayHi() {
    console.log('Hi!');
}

sayHi();

// sayHello(); // ReferenceError: sayHello is not defined

// Function Expression
const sayHello = function () {
    console.log('Hello!');
}
sayHello();
// Functions are objects: create an anonymous function object and have the variable sayHello point to it

sayHello.number = 7;    // can add a property
console.log(sayHello.number);

// function sayGoodMorning() {
//     console.log("Good morning!");
// }
//
// window.onload = sayGoodMorning;

window.onload = function () {
    console.log("Good afternoon!");
}

// by value (primitives)
var a = 1;
var b = a;
a = 2;
console.log(a); // 2
console.log(b); // 1

// by reference (all objects)
var a = {fname: 'Duke'};
var b = a;
a.fname = 'May';
console.log(a.fname); // May
console.log(b.fname); // May
b.fname = 'Xuka';
console.log(a.fname); // Xuka
console.log(b.fname); // Xuka
a = {fname: 'Ha'};
console.log(a.fname); // Ha
console.log(b.fname); // Xuka
// = operator always sets a new memory space

// We created a function named invokeMe.
function invokeMe(f) {
    f();
}

// Upon calling the function invokeMe we passed to it an anonymous function
// The anonymous function will be invoked
invokeMe(function () {
    console.log('Hello Duke!');
});

function findMax() {
    var i;
    var max = -Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(findMax(5, 32, 24)); // 32

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(5, 5));

var multiply = (num1, num2) => num1 * num2;
console.log(multiply(5, 5));

// implicitly return an object? () => ({ })

function log() {
    console.log("No Arguments");
}

function log(x) {
    console.log("1 Argument: " + x);
}

function log(x, y) {
    console.log("2 Arguments: " + x + ", " + y);
}

log(); // 2 Arguments: undefined, undefined
log(5); // 2 Arguments: 5, undefined
log(5, 10); // 2 Arguments: 5, 10

function abc(x) {
    console.log(x);
}

abc(); // undefined // less than expected, rest will be undefined
abc(5); // 5
abc(5, 10); // 5 // more than expected, will simply be neglected

function display(products) {
    // let prods = typeof products !== 'undefined' ? products : [];
    let size = products.length; // Cannot read property 'length' of undefined
}

function display2(products = []) {
    let size = products.length;
}

function log(x = 10, y = 5) {
    console.log(x + ", " + y);
}

log(); // 10, 5
log(5); // 5, 5
log(5, 10); // 5, 10

var products = [{name: "Grapefruit", calories: 170, color: "red", sold: 8200},
    {name: "Orange", calories: 160, color: "orange", sold: 12101},
    {name: "Cola", calories: 210, color: "caramel", sold: 25412},
    {name: "Diet Cola", calories: 0, color: "caramel", sold: 43922},
    {name: "Lemon", calories: 200, color: "clear", sold: 14983},
    {name: "Raspberry", calories: 180, color: "pink", sold: 9427},
    {name: "Root Beer", calories: 200, color: "caramel", sold: 9909},
    {name: "Water", calories: 0, color: "clear", sold: 62123}
];

function compareSold(colaA, colaB) {
    if (colaA.sold > colaB.sold) {
        return 1;
    } else if (colaA.sold === colaB.sold) {
        return 0;
    } else {
        return -1;
    }
}

products.sort(compareSold);

console.log(products);

function addN(n) {
    var adder = function (x) {
        return n + x;
    };

    return adder;
}

var add2 = addN(2);
console.log(add2(10));

function createDrinkOrder(passenger) {
    if (passenger.ticket === "firstclass") {
        alert("Would you like a cocktail or wine?");
    } else {
        alert("Your choice is cola or water.");
    }
}

function serveCustomer(passenger) {
    createDrinkOrder(passenger);
    // get dinner order
    createDrinkOrder(passenger);
    createDrinkOrder(passenger);
    // show movie
    createDrinkOrder(passenger);
    // pick up trash
}

function createDrinkOrder2(passenger) {
    var orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            alert("Would you like a cocktail or wine?");
        };
    } else {
        orderFunction = function () {
            alert("Your choice is cola or water.");
        };
    }
    return orderFunction;
}

function serveCustomer2(passenger) {
    var getDrinkOrderFunction = createDrinkOrder2(passenger);
    getDrinkOrderFunction();
    // get dinner order
    getDrinkOrderFunction();
    getDrinkOrderFunction();
    // show movie
    getDrinkOrderFunction();
    // pick up trash
}