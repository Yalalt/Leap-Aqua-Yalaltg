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

let monday = 1;
let tuesday = 2;
let wednesday = 3;
let thursday = 4;
let friday = 5;
let saturday = 6;
let sunday = 7;
let weekName = null;
let errorMsg = "!!!Error: Та буруу утга оруулсан байна.";

let inputDay = 9;

if(inputDay === monday) {
    weekName = "Даваа гараг";
} else if(inputDay === tuesday) {
    weekName = "Мягмар гараг";
    
} else if(inputDay === wednesday) {
    weekName = "Лхагва гараг";
    
} else if(inputDay === thursday) {
    weekName = "Пүрэв гараг";
    
} else if(inputDay === friday) {
    weekName = "Баасан гараг";
    
} else if(inputDay === saturday) {
    weekName = "Бямба гараг";
    
} else if(inputDay === sunday) {
    weekName = "Ням гараг";

} 

if(weekName == null) {
    console.log(errorMsg);
} else {
    console.log("Таны оруулсан өдөр бол " + weekName);
}



console.log("------<-<-<-Code review----------------");
