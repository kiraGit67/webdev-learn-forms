"use strict";

const additionalFields = document.querySelectorAll(".additional");
const radioFields = document.querySelectorAll(".radioField");

if (additionalFields && additionalFields.length > 0) {
  [...additionalFields].forEach((additionalField) => {
    additionalField.hidden = true;
  });
}
