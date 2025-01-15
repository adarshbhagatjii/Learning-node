console.log("sum file is executed")

const calculateSum = (a, b)=>{
    sum =a+b ;
    console.log(sum);
}
// export function calculateSum(a,b){
//    var sum =a+b ;
//     console.log(sum);
// }

// module.exports = calculateSum;


// module is exported as a object
// module.exports = {
//     calculateSum : calculateSum
// }


module.exports = {calculateSum};


// module.exports.calculateSum = calculateSum;