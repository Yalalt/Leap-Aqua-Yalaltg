console.log("1. ----- YYYY-MM-DD -------");
console.log("eg.. 2009,1,21 |  2009 1 21 | 2009, 1, 20 | 3,31,2022 | ");
let dateStr = "";

dateStr = "2008,2,18";
let dateConsol;

// char between check to str save


// taslaluud
if (dateStr.indexOf(" , ") > -1) {
    dateConsol = dateStr.replace(",", "-");
} else if (dateStr.indexOf(" ") > -1) {
    dateConsol = dateStr.replace(" ", "-");
} else if (dateStr.indexOf(", ") > -1) {
  dateConsol = dateStr.replace(",", "-");
}

console.log("2. ----- Phone number -------");
