function createButtons() {
  let buttonValueIndex = 0;
  for (let i = 0; i < 5; i++) {
    const row = document.createElement('div');
    row.className = `row`;
    keypad.appendChild(row);
    for (let j = 0; j < 4; j++) {
      const button = document.createElement('button');
      button.className = 'button';
      button.textContent = buttonValues[buttonValueIndex];
      row.append(button);
      buttonValueIndex++;
    }
  }
}

const currentNumber = 0;

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