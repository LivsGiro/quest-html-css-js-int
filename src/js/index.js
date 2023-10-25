document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const inputs = document.querySelectorAll(".input-text");

  form.addEventListener("submit", function (naoTemCoisaEscrita) {
    naoTemCoisaEscrita.preventDefault();

    inputs.forEach((input) => {
      input.classList.remove("input-invalido");
      const errorMessage = input.nextElementSibling;
      if (errorMessage && errorMessage.classList.contains("error-message")) {
        errorMessage.remove();
      }
    });

    let temCoisaEscrita = true;

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        input.classList.add("input-invalido");
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "campo obrigatório";
        errorMessage.classList.add("error-message");
        input.insertAdjacentElement("afterend", errorMessage);
        temCoisaEscrita = false;
      }
    });

    if (temCoisaEscrita) {
      form.submit();
    }
  });

  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      input.classList.remove("input-invalido");
      input.classList.add("input-valido");
    });
  });
});