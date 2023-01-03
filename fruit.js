function fruit(type, weightGrams, priceKilo) {
  let weightKG = weightGrams / 1000;
  let finalPrice = 0;

  finalPrice = priceKilo * weightKG;
  console.log(`I need $${finalPrice.toFixed(2)} to buy ${weightKG.toFixed(2)} kilograms ${type}.`);
}
