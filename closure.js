console.log("------------------");
var justAVar = "Oh, don't you worry about it, I'm GLOBAL";

function whereAreYou() {
    var justAVar = "Just an every day LOCAL";

    function inner() {
        return justAVar;
    }

    return inner;
}

var innerFunc = whereAreYou();
var result = innerFunc();
console.log(result);    // Just an every day LOCAL

console.log("------------------");
var add = (function () {
    var counter = 0;
    return function () {
        return counter += 1;
    }
})();

add();
add();
add();


// the counter is now 3
