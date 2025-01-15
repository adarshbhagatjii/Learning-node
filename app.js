// require ("./sum");

// const calculateSum = require("./sum")

// const obj = require("./sum")
// const {calculateSum} =require("./sum")
// import {calculateSum} from "./Learning-node/sum.js"
// import { calculateMultiply } from "./Learning-node/multiply.js";

//  const { calculateSum} =require("./calculate/sum.js")
//  const { calculateMultiply} =require("./calculate/multiply.js")

const { calculateSum, calculateMultiply } = require("./calculate");
const data = require("./data.json");

var a=10;
var b=20;

// obj.calculateSum(a,b);

calculateSum(a, b);

calculateMultiply(a, b);
console.log(data);