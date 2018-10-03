// Always make sure to log what is coming in to MAKE SURE it is what you are expecting
// the first argv returns an array.... we are wanting a string.
// var argv = process.argv.slice(2);
var argv = process.argv.slice(2).toString();

function reverse(string) {
    var reversedString = "";
    for (i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    console.log(reversedString);
}

reverse(argv);
