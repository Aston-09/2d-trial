function visitClub() {
  if (spendEnergy(driverIndex, 2)) {
    funBar = MAX_FUN;
    alert("🪩 Club Night! Fun Fully Restored!");
  } else alert("Not enough energy!");
  updateUI();
}
