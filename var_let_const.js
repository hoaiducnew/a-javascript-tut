// (function a() {
//     for (var x = 1; x < 10; x++) {
//         console.log(x);
//     }
//     console.log(x); // 10
// })();

// (function a() {
//     for (let x = 1; x < 10; x++) {
//         console.log(x);
//     } // different x every loop
//     console.log(x); // error, x is not defined
// })();

var x = 'global';
let y = 'global';
console.log(this.x); // global
console.log(this.y); // undefined
console.log(window.x); // global
console.log(window.y); // undefined

const myNum = 7;
myNum = 20; // this will fail
console.log(myNum); // will print 7
const myNum = 20; // trying to redeclare a constant throws an error
var myNum = 20; // this will fail
const foo; // SyntaxError: missing = in const declaration
const myObject = {"key": "value"}; // const also works on objects
myObject = {"other_key": "other_value"}; // this will fail
myObject.key = "other_value"; // will work!