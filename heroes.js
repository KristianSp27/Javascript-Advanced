function heroes() {
  let health = 100;
  let manaOrStamina = 100;
  const create = {
    fighter: (name) => {
      return (obj = {
        name,
        health,
        stamina: manaOrStamina,
        fight() {
          this.stamina--;
          console.log(`${name} slashes at the foe!`);
        },
      });
    },
    mage: (name) => {
      return (obj = {
        name,
        health,
        mana: manaOrStamina,
        cast(spell) {
          this.mana--;
          console.log(`${name} cast ${spell}`);
        },
      });
    },
  };
  return create;
}
