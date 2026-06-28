'use strict';

const forms = document.querySelectorAll('form');

for (const form of forms) {
  const allInputs = form.querySelectorAll('input');

  for (const element of allInputs) {
    const label = document.createElement('label');
    const parentElement = element.parentElement;

    label.className = 'field-label';
    label.htmlFor = element.id;
    label.textContent = element.name;

    element.placeholder = element.name.toUpperCase();

    parentElement.appendChild(label);
  }
}
