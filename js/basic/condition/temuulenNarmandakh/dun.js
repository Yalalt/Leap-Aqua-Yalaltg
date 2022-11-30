// 1. Bodlogo
console.log("1. n тоогоор илэрхийлсэн дүнг харуулах");
let dunVsgeer,
  n = 78;

0 < n && n <= 59
  ? (dunVsgeer = "F")
  : 60 < n && n <= 69
  ? (dunVsgeer = "D")
  : 70 < n && n <= 79
  ? (dunVsgeer = "C")
  : 80 < n && n <= 89
  ? (dunVsgeer = "B")
  : (dunVsgeer = "A");

console.log(n + " - " + dunVsgeer);

// 2. Bodlogo
console.log("2. 1<=n<=12 sariin odoruudiig oloh");

let nToo = 4;
console.log("n too " + nToo);

switch (nToo) {
  case 2:
    console.log("28 or 29 хоногтой");
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("31 хоногтой");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30 хоногтой");
    break;
}

// 3. Bodlogo
console.log("");
console.log("3. Өгөгдсөн М тооны 3, 7 үржвэрийг шалгах");
console.log("");

let m = 8;

if (m % 3 === 0 && m % 7 === 0) {
  console.log(m + " тоо нь 3 bolon 7-iin үржвэр мөн байна.");
} else if (m % 3 === 0) {
  console.log(m + " тоо нь 3-iin үржвэр мөн байна.");
} else if (m % 7 === 0) {
  console.log(m + " тоо нь 7-iin үржвэр мөн байна.");
} else {
  console.log(m + " тоо нь 3 болон 7-ийн үржвэр биш байна.");
}

// 4. Bodlogo
console.log("");
console.log("4. Өгөгдсөн тооны утгын эерэг, сөрөг шалгах");
console.log("");
let eyregSorog = -145;
let esTooTemdeg = eyregSorog < 0 ? "negative" : "positive";
console.log(eyregSorog + " too ni " + esTooTemdeg);

// 5. Bodlogo
console.log("");
console.log("5. weight/kg, height/cm - 2 variable");
console.log("");

// Jingee end kg oruulj turshij vzne
let wegPer1 = 89;
// Ondoriig cm bolon metereer oruulna. 1.65  165
let hegPer1 = 165;

let hegM2;
let bmiMsg;

// 165cm --> 1.65m
if (
  hegPer1.toString().indexOf(".") > -1 ||
  hegPer1.toString().indexOf(",") > -1
) {
  hegM2 = Math.pow(hegPer1, 2);
} else {
  hegM2 = (hegPer1 / 100) ** 2;
}
let bmi = (wegPer1 / hegM2).toFixed(1);

if (bmi < 18.5) {
  bmiMsg = "жингийн дутагдалтай байна.";
} else if (bmi >= 18.5 && bmi <= 25) {
  bmiMsg = "хэвийн жинтэй байна.";
} else if (bmi > 25 && bmi <= 30) {
  bmiMsg = "жингийн илүүдэлтэй байна.";
} else if (bmi > 30 && bmi <= 35) {
  bmiMsg = "хэт их жингийн илүүдэлтэй байна.";
} else {
  bmiMsg = "хэт их жингийн 2 ангилалын илүүдэлтэй байна. Эмчид үзүүлнэ үү!!";
}

console.log("Та " + bmiMsg);

// 6. Bodlogo
console.log("\n6. Өгөгдсөн тооны тэгш эсвэл сондгой болохыг харуулна\n");
let evenOdd = 3456;
console.log(
  evenOdd % 2 === 0 ? evenOdd + " тэгш тоо" : evenOdd + " сондгой тоо"
);

// 7. Bodlogo
console.log("\n8. Нас тооцоолох бодлого\n");

let yearOfBirth = 1996;

let old = 2022 - yearOfBirth;

let nameAge = 0 <= old && old <= 1 ? "Infant" :
    1 < old && old <= 3 ? "Toddler" :
    3 < old && old <= 5 ? "Preschool" :
    5 < old && old <= 12 ? "Gradeschool" :
    12 < old && old <= 18 ? "Teen" :
    18 < old && old <= 21 ? "Young adult" : "Adult";

console.log(old + " - " + nameAge);