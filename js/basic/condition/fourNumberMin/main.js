let too1 = 120;
let too2 = 33;
let too3 = 15;
let too4 = 75;
let minToo;

if(too1 <= too2) {
    minToo = too1;
    if(minToo >= too3) {
        minToo = too3;
    } else if(minToo >= too4) {
        minToo = too4;
    }
} else if(too2 <= too3){
    minToo = too2;
    if(minToo >= too4) {
        minToo = too4;
    }
} else if(too3 <= too4){
    minToo = too3;
} else {
    minToo = too4;
}

console.log("input: " + too1 + ", " + too2 + ", " + too3 + ", " + too4);
console.log("output: " + minToo);