// 2 too prompt
console.log("1. 2 too prompt awna");

let startoo = Number(prompt("Ehnii toog oruulna uu"));
let endtoo = Number(prompt("Daraagiin toog oruul"));


let generatedToo = Math.floor((Math.random() * Math.abs(startoo - endtoo)) + Math.min(startoo, endtoo));
console.log(generatedToo);
