//task - 1

function extractNumbers(str) {
  return str.match(/\d/g)?.map(Number) || [];
}

console.log(extractNumbers("a1fg5hj6"));

//Task - 2

function fibonaci(a = 0, b = 1) {
  if (a > 144) return;

  console.log(a);

  setTimeout(() => fibonaci(b, a + b), 1000);
}

fibonaci();

//Task - 3

async function fetchTitle() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    products.forEach((product) => console.log(product.title));
  } catch (error) {
    console.error("Ошибка");
  }
}

fetchTitle();

//Task - 4

const buttonBlock = document.getElementById("button_block");

buttonBlock.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    document.body.style.backgroundColor = event.target.textContent;
  }
});

//Task - 5

const blockColor = document.getElementById("block_color");
const toggleButton = document.getElementById("toggle_button");

toggleButton.addEventListener("click", () => {
  if (blockColor.style.display === "none") {
    blockColor.style.display = "block";
    toggleButton.textContent = "Скрыть";
  } else {
    blockColor.style.display = "none";
    toggleButton.textContent = "Открыть";
  }
});

//Task - 6

const counter = document.getElementById("counter");
let count = 0;

const interval = setInterval(() => {
  counter.textContent = count;
  count++;
  if (count > 100) {
    clearInterval(interval);
  }
}, 1);

//Task - 7

document.getElementById("fetch_button").addEventListener("click", async () => {
  try {
    const response = await fetch("test.json");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Ошибка");
  }
});
