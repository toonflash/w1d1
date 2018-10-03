var argv = process.argv.slice(2);

function obfuscate(password) {

  var result = "";

  for (var i = 0; i < password.length; i++ ) {

    var character = password[i];

    if (character === "a") {
      character = "4";
    }

    if (character === "e") {
      character = "3";
    }

    if (character === "o") {
      character = "0";
    }

    if (character === "l") {
      character = "1";
    }

    result += character;

  }

  return result;

}

for(var i = 0; i < argv.length; i++) {
  console.log(obfuscate(argv[i]));
}
