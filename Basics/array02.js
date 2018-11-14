// Destructuring Array
const details = ['Jim', 123, 'mum.edu'];
const [name, id, website] = details;

// Destructuring Object
const settings = {width: 300, color: 'black'}
const {width = 100, height = 100, color = 'blue', fontSize = 25} = settings;

// Swap variables
var color1 = 'Green';
var color2 = 'red';
[color1, color2] = [color2, color1];

// Object Destructuring with variable renaming & default values
const {w2: width2 = 400, h2: height2 = 500} = {w2: 800}
console.log(width2);    // 800 -- w2, h2 variables are renamed to width2, height2
console.log(height2);   // 500

console.log("-----------------");

function sum(x, y, ...more) {
    var total = x + y;
    if (more.length > 0) {
        for (var i = 0; i < more.length; i++) {
            total += more[i];
        }
    }
    console.log(total);
}

sum(4, 4); // 8
sum(4, 4, 4); // 12