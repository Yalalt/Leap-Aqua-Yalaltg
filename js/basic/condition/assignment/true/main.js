let i = 4 > 3; //true
let iii = 4 < 3; //false
let ii = 4 >= 3; //T
let iv = 4 <= 3; //f
let v = 4 == 4; //t
let vi = 4 === 4; //t
let vii = 4 != 4; //f
let iix = 4 !== 4; //f
let ix = 4 != "4"; //f
let x = 4 == "4"; //t
let xi = 4 === "4"; //F

console.log("1-р бодлогын хариулт:");

console.log("i \t4 > 3 = " + i);
console.log("iii \t4 < 3 = " + iii);
console.log("ii \t4 >= 3 = " + ii);
console.log("iv \t4 <= 3 = " + iv);
console.log("v \t4 == 4 = " + v);
console.log("vi \t4 === 4 = " + vi);
console.log("vii \t4 != 4 = " + vii);
console.log("iix \t4 !== 4 = " + iix);
console.log('ix \t4 != "4" = ' + ix);
console.log('x \t4 == "4" = ' + x);
console.log('xi \t4 === "4" = ' + xi);

console.log("");
console.log("2-р бодлогын хариулт:");

let one = 4 > 3 && 10 < 12;
let two = 4 > 3 && 10 > 12;
let three = 4 > 3 || 10 < 12;
let four = 4 > 3 || 10 > 12;
let five = !(4 > 3);
let six = !(4 < 3);
let eight = !(4 > 3 && 10 < 12);
let nine = !(4 > 3 && 10 > 12);
let ten = !(4 === "4");

console.log("4 > 3 && 10 < 12 T = " + one);
console.log("4 > 3 && 10 > 12 F = " + two);
console.log("4 > 3 || 10 < 12 T = " + three);
console.log("4 > 3 || 10 > 12 T = " + four);
console.log("!(4 > 3) F = " + five);
console.log("!(4 < 3) T = " + six);
console.log("!(4 > 3 && 10 < 12) F = " + eight);
console.log("!(4 > 3 && 10 > 12) T = " + nine);
console.log('!(4 === "4") T = ' + ten);

console.log("");
console.log("3-р бодлогын хариулт:");

let yourAge = 1;
yourAge = Number(prompt("3.Бодлого нас шалгах\nТа насаа оруулна уу?"));
let myAge = 32;

if (myAge > yourAge) {
  console.log("Би танаас илүү хөгшин байна.");
} else if (myAge === yourAge) {
  console.log("Бидний нас адил байна.");
} else {
  console.log("Та илүү хөгшин байна.");
}

console.log("\n4-р бодлогын хариулт:");
let wrkDay = Number(
  prompt(
    "4-р бодлогын асуулт\n1 Даваа\n2 Мягмар\n3 Лхагва\n4 Пүрэв\n5 Баасан\n6 Бямба\n7 Ням\nӨдрөө сонгоод тоог оруулна уу."
  )
);

if (wrkDay >= 1 && wrkDay <= 5) {
  console.log("Ажлын өдөр");
} else if (wrkDay == 6 || 7 == wrkDay) {
  console.log("Амралтын өдрийн мэнд.");
} else {
  console.log("Сайн байна уу? Та энд зөвхөн 7 хоногийн өдөр оруулж болно.");
}


console.log("\n5-р бодлогын хариулт:");

let hours = Number(prompt("5-р бодлогын асуулт\nДолоо хоногт ажилласан цагын оруулна уу"));
let ratePerHour = Number(prompt("5-р бодлогын асуулт\nҮнэлгээг 10 - 28 хүртэл тоогоор үнэлнэ.\nТухайн хүний ажлын үнэлгээг оруулна уу"));

hours = hours != null ? hours : 40;
ratePerHour = ratePerHour != null? ratePerHour : 28;

let calcPrice = hours * ratePerHour;
console.log("Бодогдсон цалин: " + calcPrice);