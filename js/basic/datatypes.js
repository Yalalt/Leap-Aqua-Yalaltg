// String + number = string
// num + num = num
// num = num = string = added number string
let a = 10;
let b = 12;
console.log("" + a + b);
console.log(a + b + "");
console.log(a + ' ' + b);
console.log(a + "" + b);


// 4
let furstname = "Yalalt";
let lastname = "G.";
let martialStatus = "none";
let country = "Mongolia";
let age = 30;
let firstname, lostname, mortialStatus, cauntry, aged;
console.log("--");
console.log("--");

// 5 - 9
// Variables define
let too = 123;
let greetings = "Hello World";
let logicUtga = true;
let todorhoigvi;
let hooson = null;

console.log("Assignment - Typeof");
console.log("Too utga: " + too + " type is " + typeof too);
console.log("Strings utga: " + greetings + " type is " + typeof greetings);
console.log("Boolean utga: " + logicUtga + " type is " + typeof(logicUtga));
console.log("Undefined utga: " + todorhoigvi + " type is " + typeof todorhoigvi);
console.log("Null utga: " + hooson + " type is " + typeof(hooson));


// 10.
let myAge, yourAge;
myAge = 30;
yourAge = 28;

console.log("--");
console.log("--");
//11. Gurvaljingiin perimeter
let ondor, orgon, urt, perimeter;
ondor = 12;
orgon = 10;
urt = 8;
perimeter = ondor + orgon + urt;
console.log("Gurbaljin perimeter : " + perimeter);

console.log("--");
console.log("--");
//12. Durgui ni talbai
let radius = 3;
const pi = 3.1415;
let squareCircle = pi * (radius * radius);
console.log("Circle square is : " + squareCircle);

console.log("--");
console.log("--");
//13. m = y2 - y1 / x2 - x1
let m, y2, y1, x2, x1;
y2 = 48;
y1 = 12;
x2 = 33;
x1 = 29;
m = y2 - y1 / x2 - x1;
console.log("m = " + y2 + " - " + y1 + " / " + x2 + " - " + x1 + " = " + m);

console.log("--");
console.log("--");
//14. 15 Gegabyte hed be?
let gbSize = 15;
let mgSize = gbSize * 1024;
let kbSize = mgSize * 1024;
let byteSize = kbSize * 1024;
let bitSize = byteSize * 8;
console.log(gbSize + "GB is in bit is " + bitSize + " bits");

console.log("--");
console.log("--");
//15. 15MB data 3sec download is per bit rate ?
let mbDownSizePerS = 15;
let persec = 3;
let bitAmountSecond = (mbDownSizePerS * 8) * persec;
console.log("15MB --> Bit rate per 3s is " + bitAmountSecond + "Mbit");
console.log("15MB --> Bit rate per 1s is " + (mbDownSizePerS * 8) + "Mbit");
console.log("--");
console.log("--");

// 16. 3 tal ogogdson gurvaljingiin talbai oloh.  Side 1, 2, 3
let side1 = 3.8;
let side2 = 4.6;
let side3 = 5.2;
let perimeterTraingle = (side1 + side2 + side3) / 2;
let side1P = perimeterTraingle - side1;
let side2P = perimeterTraingle - side2;
let side3P = perimeterTraingle - side3;
let sumSidePeri = perimeterTraingle * (side1P * side2P * side3P);
let areaTriangle = Math.sqrt(sumSidePeri);
console.log("Triangle square is : " + areaTriangle);

console.log("--");
console.log("--");

// 17. Celsius to Farenheit convert
let inputCelsius = prompt("Enter celsius: ");
let calculateFarenheit = (9 * inputCelsius + (32 * 5)) / 5;
alert(inputCelsius + " - Celsius to Fahrenheit is - " + calculateFarenheit);
console.log("--");
console.log("--");

// 18. Farenheit to Celsius
let farenheitNo = 180;
let celsiusNo = (farenheitNo - 32) * 5 / 9;
console.log("Farenheit - " + farenheitNo + " to Celsius is " + celsiusNo);
console.log("--");
console.log("--");

// 19. Mathematicals operations
let aaNumber = 40;
let bbNumber = 5;


console.log("--");
console.log("--");