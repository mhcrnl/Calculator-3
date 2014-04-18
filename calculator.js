//'use strict;'

var calculatorState = {
    currentValue: '',
    previousValue: '',
    pendingOperator: ''
};
var currentComputation = 0;
window.calculatorApp = {
	clickDigit: function (digit) {
      //if the user did not click 0 or the currentValue is not zero
      //append the number string.
		if ((digit !== 0) || calculatorState.currentValue) {
			calculatorState.currentValue += digit;
		}
		display.value = calculatorState.currentValue;
	},
	clickDecimal: function () {
		//add decimal if there is not already one in the number
		//search() function returns 0 if a decimal is not found.	 
		if (!calculatorState.currentValue.search('.')) {
			calculatorState.currentValue += '.';
			display.value = calculatorState.currentValue;
		}
	},
	clickOperator: function (op) {
		// alert('Operator clicked: ' + op);
		//if you already have a pending operator, then compute the value
		if (calculatorState.pendingOperator) {
			this.clickEquals();
		} else if (calculatorState.currentValue !== '') {
			calculatorState.previousValue = calculatorState.currentValue;
		}
		calculatorState.pendingOperator = op;
		calculatorState.currentValue = '';
		//display.value = '0';
	},
	clickEquals: function () {
		// alert('clickEquals clicked: ' + op);
		if (calculatorState.pendingOperator) {
			var current = parseFloat(calculatorState.currentValue);
			var prev = parseFloat(calculatorState.previousValue);
			switch (calculatorState.pendingOperator) {
				case '+':
					calculatorState.previousValue = prev + current;
					break;
			  case '-':
					calculatorState.previousValue = prev - current;
					break;
			  case '*':
					calculatorState.previousValue = prev * current;
					break;
			  case '/':
					calculatorState.previousValue = prev / current;
					break;
			  default:
					break;
			}
			calculatorState.currentValue = '';
			calculatorState.pendingOperator = '';
			display.value = calculatorState.previousValue;
		}
	},
	clickClear: function () {
		calculatorState.currentValue = '';
		calculatorState.previousValue = '';
		calculatorState.pendingOperator = '';
		display.value = '0';
	},
	
	clickClearEntry: function () {
		console.log(calculatorState.currentValue);
		if (calculatorState.currentValue) {
			calculatorState.currentValue = '';
		}
		display.value = '0';
	}
};

 


    