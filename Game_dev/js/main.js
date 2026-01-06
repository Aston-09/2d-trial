function drive() {
  if (fuel <= 0) {
    alert("⛔ No Fuel!");
    return;
  }

  fuel--;
  currentKM++;
  increaseFun(3);

  if (currentKM % 5 === 0) randomNegativeEvent();
  if (currentKM % 10 === 0) hotelCheckpoint();

  checkDestination();
  updateUI();
}

updateUI();
