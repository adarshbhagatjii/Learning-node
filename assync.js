const fs = require("fs");
const https = require("https")

console.log("hello adarsh");

// this is synchronous function (blocking i/o funmction)

// fs.readFileSync("./file.txt", "utf8"); 
// console.log("This will execute only after file is read");

var a =10656546;
var b =656876;


https.get("https://fakestoreapi.com/products/1", (res)=>{
    console.log("data fetched successfully");
});
setTimeout(() => {
    console.log(" setTimeout called after 5 seconds"); 
}, 5000);

fs.readFile("./file.txt", "utf8", (err, data)=> {
    console.log("file Data ", data);
})

function mul(a,b){
   return a*b;
}

var c= mul(a,b);
console.log(c);


// output :- 

// hello adarsh
// 7000029310296
// file Data  this is the real data 
// data fetched successfully
//  setTimeout called after 5 seconds