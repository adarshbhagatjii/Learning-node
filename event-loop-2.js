

const fs= require ('fs');
const a=100;

setImmediate(()=>console.log('immediate'));

Promise.resolve().then(()=>console.log('promise'));

fs.readFile("./file.txt", "utf8", ()=>{console.log('readFile')});

setTimeout(()=>console.log('timeout'),0);

process.nextTick(()=>console.log('nextTick'));

function print(){
    
    console.log('print');
}

print();
console.log('end of script');

// Output:-

// print
// end of script
// nextTick     
// promise      
// timeout      
// immediate    
// readFile     