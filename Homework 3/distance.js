const mToKm = (miles) => console.log(`${miles} miles are equivalent to ${(miles * 1.60934).toFixed(2)} kilometres`);
const kmToM = (kilometres) => console.log(`${kilometres} kilometres are equivalent to ${(kilometres * 0.621371).toFixed(2)} miles`);

module.exports = {
  mToKm,
  kmToM,
};
