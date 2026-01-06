function visitPaanTapri() {
  const passenger = Math.floor(Math.random() * characters.length);
  if (!spendEnergy(passenger, 2)) {
    alert("No one has enough energy!");
    return;
  }

  if (Math.random() > 0.5) {
    currentKM += 2;
    increaseFun(20);
    alert("🛣 Shortcut! +2 KM");
  } else {
    increaseFun(15);
    alert("😎 Adventurous Road!");
  }
  updateUI();
}
