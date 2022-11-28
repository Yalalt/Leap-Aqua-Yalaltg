// 1. Comments can make code readable

// 2-3.
/**
 * Comments
 * can
 * make
 * code
 * readable **/
console.log("---- 1 - 4 -----")
 console.log("/** Comments */");
 console.log("* can");
 console.log("* make");
 console.log("* code");
 console.log("* readable **/");

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
console.log("---- 5. Typeof -----");

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
console.log("---- 11. Gurvaljingiin Perimeter ----");
//11. Gurvaljingiin perimeter
let ondor, orgon, urt, perimeter;
ondor = 12;
orgon = 10;
urt = 8;
perimeter = ondor + orgon + urt;
console.log("Gurbaljin perimeter : " + perimeter);

console.log("--");
console.log("---- 12. Toirgiin talbai oloh ----");
//12. Dugui dvrsnii talbai oloh
let radius = 3;
const pi = 3.1415;
let squareCircle = pi * (radius * radius);
console.log("Circle square is r-" + radius + " : " + squareCircle);

console.log("--");
console.log("---- 13. Expression ----");
//13. m = y2 - y1 / x2 - x1
let m, y2, y1, x2, x1;
y2 = 48;
y1 = 12;
x2 = 33;
x1 = 29;
m = y2 - y1 / x2 - x1;
console.log("Expression : m = y2-y1/x2-x1");
console.log("m = " + y2 + " - " + y1 + " / " + x2 + " - " + x1 + " = " + m);

console.log("--");
console.log("---- 14. 15GB? -----");
//14. 15 Gegabyte hed be?
let gbSize = 15;
let mgSize = gbSize * 1024;
let kbSize = mgSize * 1024;
let byteSize = kbSize * 1024;
let bitSize = byteSize * 8;
console.log(gbSize + "GB is in bit is " + bitSize + " bits");

console.log("--");
console.log("---- 15. 15MB per Mbit? ----");
//15. 15MB data 3sec download is per bit rate ?
let mbDownSizePerS = 15;
let persec = 3;
let bitAmountSecond = (mbDownSizePerS * 8) * persec;
console.log("15MB --> Bit rate per 3s is " + bitAmountSecond + "Mbit");
console.log("15MB --> Bit rate per 1s is " + (mbDownSizePerS * 8) + "Mbit");
console.log("--");
console.log("---- 16. Gurvaljin talbai -----");

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

// 17. Celsius to Farenheit convert
console.log("--");
console.log("----17. Farenheit Celsius -----");
let inputCelsius = 30;
let calculateFarenheit = (9 * inputCelsius + (32 * 5)) / 5;
console.log(inputCelsius + " - Celsius нь Fahrenheit -ийн " + calculateFarenheit);
console.log("--");

// 18. Farenheit to Celsius
let farenheitNo = 180;
let celsiusNo = (farenheitNo - 32) * 5 / 9;
console.log("Farenheit - " + farenheitNo + " to Celsius is " + celsiusNo);



console.log("--");
console.log("---- 19. Mathematic Vildel -----");


// 19. Mathematicals operations
let sum = 0;
let xxNumber = 42;
let yyNumber = 5;

const operationsPlus = "x + y => " + xxNumber + " + " + yyNumber + " = ";
const operationsMinus = "x - y => " + xxNumber + " - " + yyNumber + " = ";
const operationsMultiple = "x * y => " + xxNumber + " * " + yyNumber + " = ";
const operationsDivide = "x / y => " + xxNumber + " / " + yyNumber + " = ";
const operationsModule = "x % y => " + xxNumber + " % " + yyNumber + " = ";

sum = xxNumber + yyNumber;
console.log(operationsPlus + sum);
console.log("Өгөгдсөн 2 тооны нийлбэр нь " + sum);

sum = xxNumber - yyNumber;
console.log(operationsMinus + sum);
console.log("Өгөгдсөн 2 тооны ялгавар нь " + sum);

sum = xxNumber * yyNumber;
console.log(operationsMultiple + sum);
console.log("Өгөгдсөн 2 тооны үржвэр нь " + sum);

sum = xxNumber / yyNumber;
console.log(operationsDivide + sum);
console.log("Өгөгдсөн 2 тооны хуваалт нь " + sum);

sum = xxNumber % yyNumber;
console.log(operationsModule + sum);
console.log("Өгөгдсөн 2 тооны модуль нь " + sum);


console.log("-");
console.log("---- 20. Inch to Cm , Cm to Inch -----");
const inchPerCm = 0.393701;
const cmPerInch = 2.54;
let x1Cm = 3;
let x2Cm = 13;
let x1Inch = 14;
let x2Inch = 21;

let calcCmtoInch = x1Cm * inchPerCm;
console.log("3cm is " + calcCmtoInch + " inch");
calcCmtoInch = x2Cm * inchPerCm;
console.log("13cm is " + calcCmtoInch + " inch");

let calcInchPerCm = x1Inch * cmPerInch;
console.log("14inch is " + calcInchPerCm + " cm");
calcInchPerCm = x2Inch * cmPerInch;
console.log("21inch is " + calcInchPerCm + " cm");

console.log("");
console.log("----- 22. First cipher oloh -----");
let too3oront = 689;
let remToo1 = (too3oront - (too3oront % 10)) / 10;
let remToo2 = (remToo1 - (remToo1 % 10)) / 10;
console.log(`Өгөгдсөн тоо нь ${too3oront} : Эхний цифр нь ${remToo2}`);

console.log("");
console.log("----- 23. Baby Shark Link -----");

let babySharkDooDoo = ", doo-doo, doo-doo";
let babyShark = "Baby Shark";
let mommyShark = "Mommy Shark";
let daddyShark = "Daddy Shark";
let grandmaShark = "Grandma Shark";
let grandpaShark = "Grandpa Shark";
let letsGo = "Let's go hunt";
let runAway = "Run away";
let safeLast = "Safe at last";
let theEnd = "It's the end";

console.log("Lyrics");
console.log(babyShark + babySharkDooDoo);
console.log(babyShark + babySharkDooDoo);
console.log(babyShark + babySharkDooDoo);
console.log(babyShark);
console.log("");
console.log(mommyShark + babySharkDooDoo);
console.log(mommyShark + babySharkDooDoo);
console.log(mommyShark + babySharkDooDoo);
console.log(mommyShark);
console.log("");
console.log(daddyShark + babySharkDooDoo);
console.log(daddyShark + babySharkDooDoo);
console.log(daddyShark + babySharkDooDoo);
console.log(daddyShark);
console.log("");
console.log(grandmaShark + babySharkDooDoo);
console.log(grandmaShark + babySharkDooDoo);
console.log(grandmaShark + babySharkDooDoo);
console.log(grandmaShark);
console.log("");
console.log(grandpaShark + babySharkDooDoo);
console.log(grandpaShark + babySharkDooDoo);
console.log(grandpaShark + babySharkDooDoo);
console.log(grandpaShark);
console.log("");
console.log(letsGo + babySharkDooDoo);
console.log(letsGo + babySharkDooDoo);
console.log(letsGo + babySharkDooDoo);
console.log(letsGo);
console.log("");
console.log(runAway + babySharkDooDoo);
console.log(runAway + babySharkDooDoo);
console.log(runAway + babySharkDooDoo);
console.log(runAway + "(ah!)");
console.log("");
console.log(safeLast + babySharkDooDoo);
console.log(safeLast + babySharkDooDoo);
console.log(safeLast + babySharkDooDoo);
console.log(safeLast + "(phew)");
console.log("");
console.log(theEnd + babySharkDooDoo);
console.log(theEnd + babySharkDooDoo);
console.log(theEnd + babySharkDooDoo);
console.log(theEnd);
console.log("");