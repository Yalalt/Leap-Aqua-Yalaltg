console.log("-");
console.log("---------Lesson Code review->->->------");
// IF condition
let myAge = 9;
if(myAge < 11) {
    console.log("You are in your baby state");
} else if(myAge < 18){
    console.log("You are in your teens state");
} else if(myAge < 40) {
    console.log("You are in your adult state")
} else {
    console.log("You are in your old state");
}
console.log("-");console.log("-");


let weekName = null;
let errorMsg = "!!!Error: Та буруу утга оруулсан байна.";
let inputDay = 9;

if(inputDay >= 1 && inputDay <= 7){
    if(inputDay === monday) {
        weekName = "Даваа гараг";
    } else if(inputDay === 2) {
        weekName = "Мягмар гараг";
    } else if(inputDay === 3) {
        weekName = "Лхагва гараг";
    } else if(inputDay === 4) {
        weekName = "Пүрэв гараг";
    } else if(inputDay === 5) {
        weekName = "Баасан гараг";
    } else if(inputDay === 6) {
        weekName = "Бямба гараг";
    } else if(inputDay === 7) {
        weekName = "Ням гараг";
    } 

    console.log("Таны оруулсан өдөр бол " + weekName);
} else {
    console.log(errorMsg);
}

// && 1 1 =1
// || 1 0 =1
// || 0 1 =1
if(weekName == null && inputDay < 1 || inputDay > 7) {
    
} else {
    //Error
}

let weekDay = 1;
// Switch tei adil
if(weekDay == 1 || weekDay == 2 || weekDay == 3 || weekDay == 4 || weekDay == 5) {console.log("Working day");}


switch(inputDay) {
    case 1:
        weekName = "Даваа гараг";
    break;
    case 2:
        weekName = "Мягмар гараг";
    break;
    case 3:
        weekName = "Лхагва гараг";
    break;
    case 4:
        weekName = "Пүрэв гараг";
    break;
    case 5:
        weekName = "Баасан гараг";
    break;
    case 6:
        weekName = "Бямба гараг";
    break;
    case 7:
        weekName = "Ням гараг";
    break;
    default:
        console.log(errorMsg);
}
console.log("Таны оруулсан өдөр бол " + weekName);

console.log("------ a B c haritsuullalt --------");
let x = 10, y = 28, z = 33;

if(x > y) {
    if (x > z) {
        console.log(x, " - X too ni hamgiin ih");
    } else {
        console.log(z, " - Z too ni hamgiin ih");
    }
} else if(y > z) {
    console.log(y, " - Y too ni hamgiin ih");
} else {
    console.log(z, " - Z too ni hamgiin ih");
}
console.log("-");
console.log("-");
if(x > y && x > z) {
    console.log(x + " - X too ni hamgiin ih");
} else if(y > z) {
    console.log(y + " - Y too ni hamgiin ih");
} else {
    console.log(z + " - Z too ni hamgiin ih");
}
console.log("-");
console.log("-");

// Thernary
//  condition ? true: false;
let age = 16;
const myState = age >= 10 && age <=18 ? "teenage" : "adult";


console.log("------<-<-<-Code review----------------");
