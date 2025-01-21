

const fs= require ('fs');
const a=100;

setImmediate(()=>console.log('immediate'));


fs.readFile("./file.txt", "utf8", ()=>{console.log('readFile')});

setTimeout(()=>console.log('timeout'),0);


function print(){

    console.log('print');
}

print();
console.log('end of script');

// Output:-
// print
// end of script
// timeout
// immediate
// readFile
