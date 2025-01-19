const crypto= require("node:crypto");
console.log("hello adarsh");

var a =10656546;
var b =656876;

// pbkdf2 :- password based key derivation function

// this syncronous function will block the main thread don't use it. 
crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha512");
console.log("first key is generated");


// assync function 
crypto.pbkdf2("password", "salt", 100000, 64, "sha512", (err, derivedKey) => {
console.log("Second key is generated");

});


function mul(a,b){
   return a*b;
}

var c= mul(a,b);
console.log(c);