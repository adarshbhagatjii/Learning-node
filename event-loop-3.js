

const fs= require ('fs');
const a=100;

setImmediate(()=>console.log('immediate'));


setTimeout(()=>console.log('timeout'),0);

Promise.resolve().then(()=>console.log('promise'));


fs.readFile("./file.txt", "utf8", ()=>{
    
    setTimeout(()=>console.log('timeout2'),0);
    process.nextTick(()=>console.log('nextTick2'));
    setImmediate(()=>console.log('immediate2'));

    
    console.log('readFile')});


process.nextTick(()=>console.log('nextTick'));

function print(){
    
    console.log('print', a);
}

print();
console.log('end of script');

// Output:-

// print 100
// end of script
// nextTick     
// promise      
// timeout      
// immediate    
// readFile     
// nextTick2 
//because event loop is in poll state and it will check for the setimmediate queue before the settimout queue.   
// immediate2   
// timeout2     