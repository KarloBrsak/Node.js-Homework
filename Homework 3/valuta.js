const eurToMkd = (eur) => console.log((eur * 61.57).toFixed(2));
const mkdToEur = (mkd) => console.log((mkd * 0.016).toFixed(2));

const eurToUsd = (eur) => console.log((eur * 1.1).toFixed(2));
const usdToEur = (usd) => console.log((usd * 0.91).toFixed(2));

const mkdToUsd = (mkd) => console.log((mkd * 0.018).toFixed(2));
const usdToMkd = (usd) => console.log((usd * 55.9).toFixed(2));

module.exports = {
  eurToMkd,
  mkdToEur,
  eurToUsd,
  usdToEur,
  mkdToUsd,
  usdToMkd,
};
