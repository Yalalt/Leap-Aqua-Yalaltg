let dateDay = '2022/9/1';
// let dateDay = "2022-2-1";
// let dateDay = '2022.2.1';
// let dateDay = '22.2.1';

let yyPart, mmPart, ddPart;
let dateFull = "";

if (Number.isInteger(Number(dateDay.substring(0, 4)))) {
  yyPart = dateDay.substring(0, 4);
  dateFull = dateFull + yyPart + "-";
} else {
  console.log("Error buruu on");
}

if (Number.isInteger(Number(dateDay.substring(5, 7)))) {
  mmPart = dateDay.substring(5, 7);
  dateFull = dateFull + mmPart + "-";
  if (Number.isInteger(Number(dateDay.substring(8, 9)))) {
    ddPart = dateDay.substring(8, 9);
    dateFull = dateFull + "0" + ddPart;
} else if (Number.isInteger(Number(dateDay.substring(8, 10)))) {
    ddPart = dateDay.substring(8, 10);
    dateFull = dateFull + ddPart;
} 
} else if (Number.isInteger(Number(dateDay.substring(5, 6)))) {
    mmPart = dateDay.substring(5, 6);
    dateFull = dateFull + "0" + mmPart + "-";
    
    if (Number.isInteger(Number(dateDay.substring(7, 8)))) {
        ddPart = dateDay.substring(7, 8);
        dateFull = dateFull + "0" + ddPart;
    } else if (Number.isInteger(Number(dateDay.substring(7, 9)))) {
        ddPart = dateDay.substring(7, 9);
        dateFull = dateFull + ddPart;
    } else {
        console.log("Error buruu odor");
    }
} else {
  console.log("Error buruu sar");
}

console.log(dateFull);






