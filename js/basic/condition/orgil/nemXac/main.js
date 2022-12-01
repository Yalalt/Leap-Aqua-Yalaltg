console.log("Хувьсагч олох");
console.log("1-р бодлого - 4 тооны 80-аас их тооны sum олох");

let a = 5, b = 95, c = 78, d = 99, sumToo = 0;

if(a > 80) sumToo += a;
if(b > 80) sumToo += b;
if(c > 80) sumToo += c;
if(d > 80) sumToo += d;

console.log("1-р бодлогын хариу:");
console.log(`Өгөгдсөн тоонууд нь: a:${a} b:${b} c:${c} d:${d}`);
console.log("80-c их тоонуудын нийлбэр: " + sumToo);

console.log("\n2-р бодлого - 5-с бага тооны үржвэр");
let ab = 3, ac = 2, ad = 4, af = 9, sumM = 1;

if(ab < 5) sumM *= ab;
if(ac < 5) sumM *= ac;
if(ad < 5) sumM *= ad;
if(af < 5) sumM *= af;

console.log("2-р бодлогын хариу:");
console.log(`Өгөгдсөн тоонууд нь: ab:${ab} ac:${ac} ad:${ad} af:${af}`);
console.log("5-с бага тоонуудын үржвэр: " + sumM);