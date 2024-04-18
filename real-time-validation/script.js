"use strict";

const formElement = document.querySelector("form");

const passwordToggle = document.querySelector("#password-toggle");
passwordToggle.innerText = "Passwort anzeigen";

passwordToggle.addEventListener("click", () => {
  const passwordInput = document.querySelector("#userpassword");
  if (passwordInput.getAttribute("type") === "password") {
    passwordInput.setAttribute("type", "text");
    passwordToggle.innerText = "Passwort verbergen.";
  } else {
    passwordInput.setAttribute("type", "password");
    passwordToggle.innerText = "Passwort anzeigen.";
  }
});

formElement.addEventListener(
  "blur",
  function (event) {
    //Validate the field
    const isValid = event.target.validity.valid;
    const message = event.target.validationMessage;
    const connectedValidationID = event.target.getAttribute("aria-describedby");
    const connectedValidation = connectedValidationID
      ? document.getElementById(connectedValidationID)
      : false;

    if (connectedValidation && message && !isValid) {
      connectedValidation.innerText = message;
    } else {
      connectedValidation.innerText = "";
    }
  },
  true
);
