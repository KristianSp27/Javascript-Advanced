function constructorCrew(worker) {
  if (!worker.dizziness) {
    return worker;
  }

  const requiredAmount = 0.1 * worker.weight * worker.experience;
  worker.dizziness = false;
  worker.levelOfHydrated = worker.levelOfHydrated + requiredAmount;

  return worker;
}
