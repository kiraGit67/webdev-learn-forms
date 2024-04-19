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
    //constants for emailInput, usernameInput, passwordInput and telInput
    const emailInput = document.querySelector("#useremail");
    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#userpassword");
    const telInput = document.querySelector("#phone");

    //Variable for customMessage
    let customMessage = "";

    //Generate individual values for customMessage variable
    if (event.target === emailInput) {
      if (event.target.value.length > 0 && !event.target.value.includes("@")) {
        customMessage += "Die E-Mail-Adresse muss ein @-Zeichen enthalten.";
      } else if (event.target.value.length === 0) {
        customMessage += "Bitte E-Mail-Adresse angeben.";
      }
    } else if (event.target === usernameInput) {
      if (event.target.value.length > 0 && event.target.value.length < 10) {
        customMessage += `Der Username enthält nur ${event.target.value.length} Zeichen.\nEr muss aus mindestens 10 Zeichen bestehen.`;
      } else if (event.target.value.length === 0) {
        customMessage += "Bitte Usernamen angeben.";
      }
    } else if (event.target === passwordInput) {
      if (event.target.value.length > 0 && event.target.value.length < 8) {
        customMessage += `Das Passwort enthält nur ${event.target.value.length} Zeichen.\nEs muss aus mindestens 8 Zeichen bestehen.`;
      } else if (event.target.value.length === 0) {
        customMessage += "Bitte Passwort eingeben.";
      }
    } else if (event.target === telInput) {
      if (
        event.target.value.length > 0 &&
        !/[0-9, +]{3,20}/.test(event.target.value)
      ) {
        customMessage +=
          "Die Telefonnummer darf nur Zahlen zwischen 0 und 9 enthalten.";
      } else if (event.target.value.length === 0) {
        customMessage += "Bitte Telefon-Nummer angeben.";
      }
    }

    //Validate the field
    const isValid = event.target.validity.valid;

    event.target.setCustomValidity(customMessage);

    const message = event.target.validationMessage;
    const connectedValidationID = event.target.getAttribute("aria-describedby");
    const connectedValidation = connectedValidationID
      ? document.getElementById(connectedValidationID)
      : false;

    if (connectedValidation && message && !isValid) {
      connectedValidation.innerText = message;
      event.target.parentNode.classList.add("invalid");
    } else {
      connectedValidation.innerText = "";
      event.target.parentNode.classList.remove("invalid");
    }
  },
  true
);
