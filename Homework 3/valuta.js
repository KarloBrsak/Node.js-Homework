const eurToMkd = (eur) => console.log(`${eur} euros convert to ${(eur * 61.57).toFixed(0)} Macedonian denars`);
const mkdToEur = (mkd) => console.log(`${mkd} Macedonian denars convert to ${(mkd * 0.016).toFixed(2)} euros`);

const eurToUsd = (eur) => console.log(`${eur} euros convert to ${(eur * 1.1).toFixed(2)} American dollars`);
const usdToEur = (usd) => console.log(`${usd} American dollars convert to ${(usd * 0.91).toFixed(2)} euros`);

const mkdToUsd = (mkd) => console.log(`${mkd} Macedonian denars convert to ${(mkd * 0.018).toFixed(2)} American dollars`);
const usdToMkd = (usd) => console.log(`${usd} American dollars convert to ${(usd * 55.9).toFixed(0)} Macedonian denars`);

module.exports = {
  eurToMkd,
  mkdToEur,
  eurToUsd,
  usdToEur,
  mkdToUsd,
  usdToMkd,
};
