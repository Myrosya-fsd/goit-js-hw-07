const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  // Очищаємо значення в інпуті від пробілів по краях
  const name = nameInput.value.trim();

  // Якщо інпут порожній або містить лише пробіли, виводимо "Anonymous"
  if (name === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = name;
  }
});
