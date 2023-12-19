function createButtons() {
  let buttonValueIndex = 0;
  for (let i = 0; i < 5; i++) {
    const row = document.createElement('div');
    row.className = `row`;
    keypad.appendChild(row);
    for (let j = 0; j < 4; j++) {
      const button = document.createElement('button');
      button.className = `button a${i}${j}`;
      button.textContent = buttonValues[buttonValueIndex];
      button.addEventListener('click', (e) => buttonOnClick(e.target.className.slice(-3)))
      row.append(button);
      buttonValueIndex++;
    }
  }
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function power(num1, num2) {
  let result = 1;
  if (num2 === 0) {
    return 1;
  }
  for (let i = 0; i < num2; i++) {
    result = num1 * result;
  }
  return result;
}

function operate() {
  if (operator === 'add') {
    number.textContent = add(firstNumber, secondNumber);
  }
  if (operator === 'subtract') {
    number.textContent = subtract(firstNumber, secondNumber);
  }
  if (operator === 'multiply') {
    number.textContent = multiply(firstNumber, secondNumber);
  }
  if (operator === 'divide') {
    number.textContent = divide(firstNumber, secondNumber);
  }
  return Number(number.textContent);
}

function buttonOnClick(id) {
  console.log(id);
  function checkForZero() {
    if (number.textContent === '0') {
      return true;
    }
  }

  if (id === 'a10' ||
      id === 'a11' ||
      id === 'a12' ||
      id === 'a20' ||
      id === 'a21' ||
      id === 'a22' ||
      id === 'a30' ||
      id === 'a31' ||
      id === 'a32' ||
      id === 'a41') {
        if (number.textContent.length >= 12) { // abc
          return;
        }
        if (typeof firstNumber === 'number' && toggle === true) {
          number.textContent = '0';
          toggle = false;;
        }
        if (id === 'a10') {
          if (checkForZero()) {
            number.textContent = '7';
          }
          else {
            number.textContent = number.textContent + '7';
          }
        }
        if (id === 'a11') {
          if (checkForZero()) {
            number.textContent = '8';
          }
          else {
            number.textContent = number.textContent + '8';
          }
        }
        if (id === 'a12') {
          if (checkForZero()) {
            number.textContent = '9';
          }
          else {
            number.textContent = number.textContent + '9';
          }
        }
        if (id === 'a20') {
          if (checkForZero()) {
            number.textContent = '4';
          }
          else {
            number.textContent = number.textContent + '4';
          }
        }
        if (id === 'a21') {
          if (checkForZero()) {
            number.textContent = '5';
          }
          else {
            number.textContent = number.textContent + '5';
          }
        }
        if (id === 'a22') {
          if (checkForZero()) {
            number.textContent = '6';
          }
          else {
            number.textContent = number.textContent + '6';
          }
        }
        if (id === 'a30') {
          if (checkForZero()) {
            number.textContent = '1';
          }
          else {
            number.textContent = number.textContent + '1';
          }
        }
        if (id === 'a31') {
          if (checkForZero()) {
            number.textContent = '2';
          }
          else {
            number.textContent = number.textContent + '2';
          }
        }
        if (id === 'a32') {
          if (checkForZero()) {
            number.textContent = '3';
          }
          else {
            number.textContent = number.textContent + '3';
          }
        }
        if (id === 'a41') {
          if (!checkForZero()) {
            number.textContent = number.textContent + '0';
          }
        }
      }
  else {
    if (id === 'a00') {

    }
    if (id === 'a01') {
      number.textContent = '0';
      firstNumber = 0;
      secondNumber = 0;
      operator = '';
    }
    if (id === 'a02') {
      if (number.textContent.length === 1) {
        number.textContent = '0';
      }
      else {
        number.textContent = number.textContent.slice(0, number.textContent.length - 1);
      }
    }
    if (id === 'a03') { // ÷

    }
    if (id === 'a13') { // *

    }

    if (id === 'a23') { // -
      if (operator && toggle) {
        operator = 'subtract';
        return;
      }
      let storedValue = +number.textContent;
      if (firstNumber === '0') {
        operator = 'subtract';
        firstNumber = storedValue;
        toggle = true;
      }
      else {
        secondNumber = storedValue;
        operate();
        operator = 'subtract';
        firstNumber = +number.textContent;
        toggle = true;
      }
    }

    if (id === 'a33') { // +
      if (operator && toggle) {
        operator = 'add';
        return;
      }
      let storedValue = +number.textContent;
      if (firstNumber === '0') {
        operator = 'add';
        firstNumber = storedValue;
        toggle = true;
      }
      else {
        secondNumber = storedValue;
        operate();
        operator = 'add';
        firstNumber = +number.textContent;
        toggle = true;
      }
    }
    if (id === 'a40') { // +/-
      if (number.textContent.indexOf('-') < 0) {
        number.textContent = `-${number.textContent}`;
      }
      else {
        number.textContent = number.textContent.slice(1);
      }

    }
    if (id === 'a42') { // .
      if (number.textContent.indexOf('.') < 0) {
        number.textContent = number.textContent + '.';
      }
    }
    if (id === 'a43') { // =
      secondNumber = Number(number.textContent);
      operate();
      firstNumber = Number(number.textContent);
      operator = '';
    }

  }

  console.log(`firstNumber: ${firstNumber}, secondNumber: ${secondNumber}`)
  // console.log(`number.textContent: ${number.textContent}, typeof number.textContent: ${typeof number.textContent}`);

}

let currentNumber = '0';
let firstNumber = '0';
let secondNumber = '0';
let operator = '';
let toggle = false;

const buttonValues = ['x²', 'C', '⬅️', '÷', '7', '8', '9', '×', '4', '5', '6','-', '1', '2', '3', '+', '+/-', '0', '.', '=']

const container = document.querySelector('#container');

const calculator = document.createElement('div');
calculator.className = 'calculator';

const display = document.createElement('div');
display.className = 'display';

const number = document.createElement('div');
number.className = 'number';
number.textContent = currentNumber;


const keypad = document.createElement('div');
keypad.className = 'keypad';



container.appendChild(calculator);
calculator.appendChild(display);
calculator.appendChild(keypad);
display.appendChild(number);

createButtons();

