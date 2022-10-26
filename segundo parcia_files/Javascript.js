const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  alert("Se registro en el Sistema");
  e.preventDefault();
  const user = loginForm["login-user"].value;
  const userWelcome = document.querySelector("#user-welcome");
  userWelcome.innerHTML = user.length ? `Bienvenido/a: ${user}` : "";
});

// convertir las monedas
const EXCHANGE_RATES = {
  USD: { USD: 1, EUR: 1.0152, BOB: 6.8805 },
  EUR: { USD: 0.9852, EUR: 1, BOB: 6.7777 },
  BOB: { USD: 0.1455, EUR: 0.1477, BOB: 1 },
};

const selects = document.querySelectorAll("select");
const inputs = document.querySelectorAll("input[type='number']");

function convert(index) {
  const from = selects[index].value;
  const to = selects[Number(!index)].value;
  const amount = inputs[index].value;
  const result = (amount * EXCHANGE_RATES[from][to]).toFixed(2);
  inputs[Number(!index)].value = result;
  console.log("change");
}

inputs.forEach((input, index) =>
  input.addEventListener("input", () => convert(index))
);

selects.forEach((select) =>
  select.addEventListener("change", () => convert(0))
);