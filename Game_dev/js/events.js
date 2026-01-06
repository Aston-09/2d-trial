function randomNegativeEvent() {
  const events = [
    { msg: "🚓 Police Pullover", val: 15 },
    { msg: "🚦 Traffic Jam", val: 10 },
    { msg: "😵 Reckless Driving", val: 20 }
  ];

  const e = events[Math.floor(Math.random() * events.length)];
  alert(e.msg);
  decreaseFun(e.val);
}
