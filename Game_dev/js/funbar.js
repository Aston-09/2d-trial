let funBar = 60;
const MAX_FUN = 100;

function increaseFun(val) {
  funBar = Math.min(funBar + val, MAX_FUN);
}

function decreaseFun(val) {
  funBar = Math.max(funBar - val, 0);
}
