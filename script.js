let balance = 0;

function addIncome() {
  let amount = Number(document.getElementById("amount").value);
  balance += amount;
  update();
}

function addExpense() {
  let amount = Number(document.getElementById("amount").value);
  balance -= amount;
  update();
}

function update() {
  document.getElementById("balance").innerText = balance;
}