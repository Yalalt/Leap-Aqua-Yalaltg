let dateDay = '2022-12-1';
// let dateDay = '2022/12/1';
// let dateDay = '2022.2.1';

let yyPart, mmPart, ddPart;

// if yle2 2.1 yindex=0
// if mle mindex=3 dindex=4
// 22.1.2
// y2 m1 d1
yyPart = dateDay.substr(0,2);
mmPart = dateDay.substr(3,1);
ddPart = dateDay.substr(5,1);
// y2 m2 d1
yyPart = dateDay.substr(0,2);
mmPart = dateDay.substr(3,2);
ddPart = dateDay.substr(5,2);
// y2 m2 d2
yyPart = dateDay.substr(0,2);
mmPart = dateDay.substr(3,2);
ddPart = dateDay.substr(5,2);

// if le4 4.1
// 2022.1.2
// y4 m1 d1
yyPart = dateDay.substr(0,4);
mmPart = dateDay.substr(5,1);
ddPart = dateDay.substr(7,1);
// y4 m2 d1
// 2022.10.4
yyPart = dateDay.substr(0,4);
mmPart = dateDay.substr(5,2);
ddPart = dateDay.substr(8,1);
// 2022.11.17
// y4 m2 d2
yyPart = dateDay.substr(0,4);
mmPart = dateDay.substr(5,2);
ddPart = dateDay.substr(8,2);


ddPart = dateDay.substr(6,1)