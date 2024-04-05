const counter = document.getElementById("counter");
const resetButton = document.getElementById("reset-btn");

let count = 0;

function render() {
  counter.textContent = count;

  counter.style.backgroundImage = `linear-gradient(90deg, yellow ${count}%, white 0%)`;
}

counter.addEventListener("click", function () {
  count++;

  render();
});

resetButton.addEventListener("click", function () {
  count = 0;

  render();
});
