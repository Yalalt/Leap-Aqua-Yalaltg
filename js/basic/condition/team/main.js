// Orgil bagsh. Temtseen
// 1. Average two team
let teamA1 = 96;
let teamA2 = 108;
let teamA3 = 120;

let teamB1 = 88;
let teamB2 = 91;
let teamB3 = 110;

let averageTeamA = parseInt(((teamA1 + teamA2 + teamA3)/3).toPrecision(4));
let averageTeamB = parseInt(((teamB1 + teamB2 + teamB3)/3).toPrecision(4));

console.log("1. ---------Team---------");
console.log("A Team dundaj onoo: " + averageTeamA);
console.log("B Team dundaj onoo: " + averageTeamB);

console.log("2. ---------Team---------");
if(averageTeamA > 100 || averageTeamB > 100) {
    if(averageTeamA < averageTeamB) {
        console.log("B баг түрүүлсэн байна.");
    } else if(averageTeamA > averageTeamB) {
        console.log("A баг түрүүлсэн байна.");
    } else {
        console.log("А болон B багууд тэнцсэн байна.");
    }
} else {
    console.log("A, B багуудын оноо 100 оноонд хүрээгүй тул түрүүлсэн баг одоогоор байхгүй байна.");
}

