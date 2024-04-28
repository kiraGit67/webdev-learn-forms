"use strict";

const email = document.querySelector("#mail");
const username = document.querySelector("#username");
const pwd = document.querySelector("#pwd");

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

username.addEventListener("input", (event) => {
  if (username.validity.patternMismatch) {
    username.setCustomValidity(
      "Die Eingabe des Usernamens muss mit folgendem Muster übereinstimmen: a.bcd123"
    );
  } else {
    username.setCustomValidity("");
  }
});
