let fuel = 10;

function visitGasStation() {
  if (spendEnergy(driverIndex, 1)) {
    fuel += 5;
    alert("⛽ Fuel Refilled (+5)");
  } else alert("Driver too tired!");
  updateUI();
}
