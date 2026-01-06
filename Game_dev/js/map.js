const destinationKM = 50;
let currentKM = 0;

function checkDestination() {
  if (currentKM >= destinationKM) {
    alert("🎉 Destination Reached! Trip Successful!");
    location.reload();
  }
}
