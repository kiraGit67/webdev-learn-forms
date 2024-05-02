"use strict";

const additionalFields = document.querySelectorAll(".additional");
const radioFields = document.querySelectorAll(".radioField");

if (additionalFields && additionalFields.length > 0) {
  [...additionalFields].forEach((additionalField) => {
    additionalField.hidden = true;
  });
}

if (radioFields && radioFields.length > 0) {
  [...radioFields].forEach((radioField) => {
    radioField.setAttribute("aria-expanded", true);
    radioField.setAttribute("aria-controls", radioField.dataset.controls);
  });
}
