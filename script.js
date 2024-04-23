const main = document.getElementById("main-container");
const counter = document.getElementById("counter");
const reset_btn = document.getElementById("reset");

let counter_intern = 0;

function render() {
  counter.textContent = counter_intern;
  let prozent = counter_intern > 100 ? counter_intern % 100 : counter_intern;
  main.style.backgroundImage =
    "linear-gradient(90deg, gold " + prozent + "%, white " + prozent + "%)";
}

render();

main.addEventListener("click", () => {
  counter_intern++;
  render();
});

reset_btn.addEventListener("click", () => {
  counter_intern = 0;
  render();
});

window.addEventListener("keydown", (event) => {
  if (event.key == "Enter" || event.key == " ") {
    counter_intern++;
    render();
  }
});
