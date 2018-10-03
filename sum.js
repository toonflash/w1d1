// node sum.js 10 25 -> 35
// node sum.js 10 15 -> 25
// node sum.js 10 5 -> 15
// node sum.js -15 25 -> 10
// node sum.js 10 asdf -> asdf is not a number
// node sum.js 10  -> missing an argument
// node sum.js 10 25 -3  -> too many arguments


// get comand line args
// yell at people if there is less than two numbers
// yell at people if there are more than two numbers
// yell at people if there are non numneric numbers
// convert two numner inputs to numners
// ad them up
// console.log them


// when you're working on something and there's a part
// that you need to experiment, create a file and play around in there.


var args = process.argv.slice(2);

var sum = Number(args[0]) + Number(args[1]);

console.log(sum);