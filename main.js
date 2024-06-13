function randomNumber() {
  return Math.floor(Math.random() * 10);
}

// Partial password
let hurufUpperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
let hurufLowerCase = "qwertyuiopasdfghjklzxcvbnm";
let numbers = "1234567890";
let symbol = "!@#$%&";

// DOM
let buttonGenerate = document.getElementById("button-generate");

let numberCheckbox = document.getElementById("number");
let symbolCheckbox = document.getElementById("symbol");
let upperCaseCheckbox = document.getElementById("upper");
let lowerCaseCheckbox = document.getElementById("lower");
let resultGenerate = document.getElementById("result-generate");

let all = ""; // Inisialisasi variabel all dengan string kosong

function merge() {
  const numberNotChecked = !numberCheckbox.checked;
  const symbolNotChecked = !symbolCheckbox.checked;
  const upperCaseNotChecked = !upperCaseCheckbox.checked;
  const lowerCaseNotChecked = !lowerCaseCheckbox.checked;

  const trueOrFalseCheked =
    numberNotChecked &&
    symbolNotChecked &&
    upperCaseNotChecked &&
    lowerCaseNotChecked;

  all = "";

  if (trueOrFalseCheked) {
    all += hurufLowerCase;
  }

  if (numberCheckbox.checked) {
    all += numbers;
  }
  if (symbolCheckbox.checked) {
    all += symbol;
  }
  if (upperCaseCheckbox.checked) {
    all += hurufUpperCase;
  }
  if (lowerCaseCheckbox.checked) {
    all += hurufLowerCase;
  }
}

// Execute
function randomAll() {
  let lengthInput = document.getElementById("length");
  let length = parseInt(lengthInput.value);

  if (isNaN(length) || length <= 0) {
    alert("Masukkan panjang password yang valid.");
    resultGenerate.value = "";
    return;
  }

  merge();

  if (length > all.length) {
    alert("Panjang password melebihi karakter yang tersedia.");
    resultGenerate.value = "";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * all.length);
    password += all.charAt(randomIndex);
  }
  resultGenerate.value = password;
  return;
}

buttonGenerate.addEventListener("click", () => {
  merge(); // Panggil fungsi merge() untuk memperbarui v nilai all
  console.log(randomAll(all));
});
