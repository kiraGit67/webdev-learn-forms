"use strict";

const email = document.querySelector("#mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
  } else {
    email.setCustomValidity("");
  }
});
