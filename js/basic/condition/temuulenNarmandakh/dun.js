// 1.
console.log("1. n toogoor ilerhiilsen dun");
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

// 2.
console.log("2. 1<=n<=12 sariin odoruudiig oloh");

let nToo = 4;
console.log("n too " + nToo);

switch (nToo) {
  case 2:
    console.log("28 or 29");
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("31");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30");
    break;
}

// 3.
console.log("");
console.log("3. Өгөгдсөн М тооны 3, 7 үржвэрийг шалгах");
console.log("");

let m = 8;

if (m % 3 === 0) {
  console.log(m + " тоо нь 3-iin үржвэр мөн байна.");
} else if (m % 7 === 0) {
  console.log(m + " тоо нь 7-iin үржвэр мөн байна.");
} else {
  console.log(m + " тоо нь 3 болон 7-ийн үржвэр биш байна.");
}

console.log("");
console.log("4. Өгөгдсөн тооны эерэг, сөрөг шалгах");
console.log("");
let evenOdd = 3456;
console.log(evenOdd%2===0?evenOdd+" positive":evenOdd+" negative");

console.log("");
console.log("5. weight, height 2 variable");
console.log("");

