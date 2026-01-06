function spendEnergy(index, amount) {
  if (characters[index].energy >= amount) {
    characters[index].energy -= amount;
    return true;
  }
  return false;
}

function replenishEnergy() {
  characters.forEach(c => c.energy = 5);
}
