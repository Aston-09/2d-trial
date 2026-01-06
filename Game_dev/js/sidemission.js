function startSideMission() {
  if (fuel < 2) {
    alert("Not enough fuel!");
    return;
  }

  fuel -= 2;
  alert("🚕 Helping a random passenger...");

  if (Math.random() < 0.2) {
    funBar = 0;
    alert("💥 Mission ruined fun!");
  } else {
    funBar = MAX_FUN;
    alert("🎉 Mission success! Fun maxed!");
  }
  updateUI();
}


