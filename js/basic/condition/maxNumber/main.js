console.log("------ a B c toonii haritsuullalt --------");
let x = Math.floor(Math.random() * 77) + 1;
let y = Math.floor(Math.random() * 77) + 1;
let z = Math.floor(Math.random() * 77) + 1;

console.log("X: " + x);
console.log("Y: " + y);
console.log("Z: " + z);

let hamgiinUxUtga = x;
let hamgiinBagaUtga = y;

if(x >= y) {
    if (x >= z) {
        hamgiinUxUtga = x + " - X too ni hamgiin ih";
    } else {
        hamgiinUxUtga = z + " - Z too ni hamgiin ih";
    }
} else if(y >= z) {
    hamgiinUxUtga = y + " - Y too ni hamgiin ih";
} else {
    hamgiinUxUtga = z + " - Z too ni hamgiin ih";
}

// if
// x y z
// z x y
// x z y
// else
// z y x
// y z x
// y x z
if(x >= y){
    if(z >= y){
        hamgiinBagaUtga = y + " - Y too ni hamgiin baga";
    } else {
        hamgiinBagaUtga = z + " - Z too ni hamgiin baga";
    }
} else if(y >= z) {
    if(z >= x) {
        hamgiinBagaUtga = x + " - X too ni hamgiin baga";
    } else {
        hamgiinBagaUtga = z + " - Z too ni hamgiin baga";
    }
} else {
    hamgiinBagaUtga = x + " - X too ni hamgiin baga";
}

console.log(hamgiinUxUtga);
console.log(hamgiinBagaUtga);
console.log("-");
console.log("-");
