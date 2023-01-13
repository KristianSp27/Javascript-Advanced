function cookingByNumbers(number, command1, command2, command3, command4, command5) {
  let startingNumber = Number(number);
  let commands = [command1, command2, command3, command4, command5];
  for (let index = 0; index < commands.length; index++) {
    const command = commands[index];

    switch (command) {
      case "chop":
        startingNumber = startingNumber / 2;
        console.log(startingNumber);
        break;
      case "dice":
        startingNumber = Math.sqrt(startingNumber);
        console.log(startingNumber);
        break;
      case "spice":
        startingNumber = startingNumber + 1;
        console.log(startingNumber);
        break;
      case "bake":
        startingNumber *= 3;
        console.log(startingNumber);
        break;
      case "fillet":
        startingNumber = startingNumber - (startingNumber * 20) / 100;
        console.log(startingNumber);
        break;
      default:
        break;
    }
  }
}
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
