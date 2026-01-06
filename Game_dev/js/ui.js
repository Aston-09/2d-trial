function updateUI() {
  document.getElementById("map").innerHTML = `
    🗺 Distance: ${currentKM}/${destinationKM} KM
  `;

  document.getElementById("status").innerHTML = `
    <strong>Driver:</strong> ${characters[driverIndex].name}<br>
    <strong>Fuel:</strong> ${fuel}<br>
    <strong>Fun:</strong> ${funBar}/100<br><br>
    ${characters.map(c => `${c.name}: ${c.energy} ⚡`).join("<br>")}
  `;
}
