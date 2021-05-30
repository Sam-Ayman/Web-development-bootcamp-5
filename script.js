var data = 0;

document.getElementById("disp").innerText = data;
document.getElementById("min").disabled = true;

function increment() {
  data = data + 1;
  document.getElementById("disp").innerText = data;
  if (data > 0) {
    document.getElementById("min").disabled = false;
  }
}

function decrement() {
  data = data - 1;
  document.getElementById("disp").innerText = data;
  if (data < 1) {
    document.getElementById("min").disabled = true;
  }
}

function reset() {
  data = 0;
  document.getElementById("disp").innerText = data;
  document.getElementById("min").disabled = true;
}
