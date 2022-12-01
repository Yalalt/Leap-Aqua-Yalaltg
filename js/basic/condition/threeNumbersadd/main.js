let numberT = 987;
let totalSum =0;
if(numberT.toString().length == 3) {
totalSum = Number(numberT.toString().substr(0,1)) + Number(numberT.toString().substr(1,1)) + Number(numberT.toString().substr(2,1));
console.log(numberT + " sum is " + totalSum);
} else {
    console.log("Please enter true three digits number");
}