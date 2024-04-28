"use strict";

const email = document.querySelector("#mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
  } else if (email.validity.tooShort) {
    email.setCustomValidity(
      `Die E-Mail muss aus mindestens 10 Zeichen bestehen. Sie haben nur ${email.value.length} Zeichen eingegeben.`
    );
  } else {
    email.setCustomValidity("");
  }
});
