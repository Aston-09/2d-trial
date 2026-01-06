const characters = [
  { name: "Aston", energy: 5 },
  { name: "Raghav", energy: 5 },
  { name: "kartik", energy: 5 },
  { name: "Shubh", energy: 5 }
];

let driverIndex = 0;

function switchDriver() {
  driverIndex = (driverIndex + 1) % characters.length;
  updateUI();
}
