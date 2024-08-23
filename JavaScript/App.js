const body = document.querySelector("body");
const billEl = document.querySelector(".bill");
const tipEl = document.querySelector(".tip");
const buttonEl = document.querySelector(".button");
const totalPriceEl = document.querySelector(".total-price");

function updateTotal() {
  tipValue = tipEl.value * 1;
  billValue = billEl.value * 1;
  const totalValue = billValue * (1 + tipValue / 100);

  if (billEl.value.length == 0 || tipEl.value.length == 0) {
    billEl.style.borderColor = "#ff2323";
    tipEl.style.borderColor = "#ff2323";

    if (billEl.value.length != 0) {
      billEl.style.borderColor = "transparent";
      totalPriceEl.innerText = " ";
    }
    if (tipEl.value.length != 0) {
      tipEl.style.borderColor = "transparent";
      totalPriceEl.innerText = " ";
    }
  } else {
    billEl.style.borderColor = "transparent";
    tipEl.style.borderColor = "transparent";
    totalPriceEl.innerText = totalValue.toFixed(2);
  }
}

buttonEl.addEventListener("click", (e) => {
  updateTotal();
});

body.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    updateTotal();
  }
});
