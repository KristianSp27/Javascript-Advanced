function carFactory(properties) {
  const engineInventory = [
    {
      power: 90,
      volume: 1800,
    },
    {
      power: 120,
      volume: 2400,
    },
    {
      power: 200,
      volume: 3500,
    },
  ];
  const carriageInventory = [
    {
      type: "hatchback",
      color: properties.color,
    },
    {
      type: "coupe",
      color: properties.color,
    },
  ];

  const storage = {
    engines: engineInventory,
    carriages: carriageInventory,
  };

  const engine = storage.engines.find((engine) => {
    return engine.power >= properties.power;
  });

  const carriage = storage.carriages.find((carriage) => {
    return carriage.type === properties.carriage;
  });

  const wheelSize = properties.wheelsize % 2 === 0 ? properties.wheelsize - 1 : properties.wheelsize;

  const wheels = new Array(4).fill(wheelSize);

  return {
    model: properties.model,
    engine: engine,
    carriage: carriage,
    wheels: wheels,
  };
}
