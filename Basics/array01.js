var flavors = ["vanilla", "butterscotch", "lavender", "chocolate", "cookie dough"];

console.log("-----------------");
var flavorOfTheDay = flavors[2];
console.log(flavorOfTheDay);
console.log(flavors[2]);

console.log("-----------------");
console.log(flavors[3]);
flavors[3] = "vanilla chocolate chip";
console.log(flavors[3]);
console.log(flavors[10]);       // undefined

console.log("-----------------");
console.log(flavors.length);
console.log(flavors[flavors.length - 1]);    // last item

console.log("-----------------");
var genres = [];
genres[0] = "Rockabilly";
genres.push("Ambient"); // better way
console.log(genres.length);
console.log(genres[0]);
console.log(genres[1]);

console.log("-----------------");
var sparseArray = [];
sparseArray[0] = true;
sparseArray[100] = true;
console.log(sparseArray.length);    // 101
console.log(sparseArray[10]);       // undefined (the value assigned to a variable but not initialized << take up memory)

console.log("-----------------");
var myArray = new Array(3);
console.log(myArray.length);        // 3

