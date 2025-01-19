console.log("hello adarsh");

var a =10656546;
var b =656876;

// this callback is only pusshed to the call stack in v8 once the callback is empty. 
setTimeout(() => {
    console.log("call me right now");
}, 0);
setTimeout(() => {
    console.log("call me after 3 sec");
}, 3000);

function mul(a,b){
   return a*b;
}

var c= mul(a,b);
console.log(c);