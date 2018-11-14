var things = {'a': 97, 'b': 98, 'c': 99};
for (const key in things) {
    console.log(key + ', ' + things[key]);
} // a, 97 // b, 98 // c, 99

var things = ['a', 'b', 'c'];
for (const key in things) {
    console.log(key + ', ' + things[key]);
} // 0, a // 1, b // 2, c

var things = ['a', 'b', 'c'];
for (const alphabet of things) {
    console.log(alphabet);
} // a // b // c

var things = ['a', 'b'];
for (const alphabet of things.entries()) {
    console.log(alphabet);
} // [0, 'a'] // [1, 'b']

const alphabet = things.entries(); // ArrayIterator Object
const letterA = alphabet.next();
console.log(letterA.done);   // false
console.log(letterA.value[0]); // 0
console.log(letterA.value[1]); // a
console.log(letterA.value[2]); // undefined
const letterB = alphabet.next();
console.log(letterB.done);   // false
const letterC = alphabet.next();
console.log(letterC.done);   // true

var name = "Jim";
for (const alphabet of name) {
    console.log(alphabet);
} // J // i // m

var things = {'a': 97, 'b': 98, 'c': 99 };
// for (const val of things) {
//     console.log(val);
// } // Uncaught TypeError: things is not iterable

for (const key of Object.keys(things)) {
    console.log(key + ', ' + things[key]);
}   // a, 97 // b, 98 // c, 99
// Object.keys(obj) will return an array like contains all the keys