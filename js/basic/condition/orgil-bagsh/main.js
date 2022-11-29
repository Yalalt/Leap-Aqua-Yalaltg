let priceFirst = 3000;
let priceSecond = 27500;
let priceThird = 100000;
let totalTax, tip;

// Food price calculate
5000 <= priceFirst && priceFirst <= 30000 ? tip = 15 : 30001 < priceFirst ? tip = 20 : tip = 0;
totalTax = (priceFirst / 100 * tip) + priceFirst;
console.log("Таны төлөх дүн:" + totalTax);

5000 <= priceSecond && priceSecond <= 30000 ? tip = 15 : 30001 < priceSecond ? tip = 20 : tip = 0;
totalTax = (priceSecond / 100 * tip) + priceSecond;
console.log("Таны төлөх дүн:" + totalTax);


5000 <= priceThird && priceThird <= 30000 ? tip = 15 : 30001 < priceThird ? tip = 20 : tip = 0;
totalTax = (priceThird / 100 * tip) + priceThird;
console.log("Таны төлөх дүн:" + totalTax);