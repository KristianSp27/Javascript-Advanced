function radar(speed, zoneType) {
  let zones = { residential: 20, city: 50, interstate: 90, motorway: 130 };
  let difference;
  let status;

  if (speed <= zones[zoneType]) {
    console.log(`Driving ${speed} km/h in a ${zones[zoneType]} zone`);
  } else {
    difference = speed - zones[zoneType];
    status = "reckless driving";
    if (difference <= 20) {
      status = "speeding";
    } else {
      if (difference <= 40) {
        status = "excessive speeding";
      }
    }
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${zones[zoneType]} - ${status}`);
  }
}
