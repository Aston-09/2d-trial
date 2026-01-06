function triggerFlatTire() {
  alert("🛞 Flat Tire!");
  if (spendEnergy(driverIndex, 1)) {
    currentKM++;
    alert("Pushed car 1 KM");
  }
  updateUI();
}
