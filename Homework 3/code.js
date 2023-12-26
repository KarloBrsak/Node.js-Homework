// 1) Да се креира модул потпишан vaga.js којшто ќе има методи што конвертира грамови во килограми и обратно
const {gToKg, kgToG} = require("./vaga");

console.log("-------Vaga-------");
gToKg(3500);
kgToG(4.3);

// 2) Да се креира модул потпишан valuta.js којшто ќе има методи што конвертираат евра во денари, евра во долари, денари во долари и обратно

const {eurToMkd, mkdToEur, eurToUsd, usdToEur, mkdToUsd, usdToMkd,} = require("./valuta");

console.log("-------Valuta-------");
eurToMkd(10);
mkdToEur(150);
eurToUsd(12);
usdToEur(20);
mkdToUsd(400);
usdToMkd(9);

// 3) Да се креира модул по ваша желба

const {mToKm, kmToM} = require("./distance");

console.log("-------Rastojanie-------");
mToKm(5);
kmToM(10);
