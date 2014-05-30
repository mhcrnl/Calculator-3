//'use strict;'

var calculatorState = {
    currentValue: '',
    previousValue: '',
    pendingOperator: ''
};

var decimal = false;

window.calculatorApp = {
	clickDigit: function (digit) {
      //if the user did not click 0 or the currentValue is not zero
      //append the number string.
		if ((digit !== 0) || calculatorState.currentValue) {
			calculatorState.currentValue += digit;
		}
		else if( digit === 0 && calculatorState.currentValue  === "") {
			calculatorState.currentValue = 0;
		}
        document.getElementById('display').value = calculatorState.currentValue;
	},
	clickDecimal: function () {
		//add decimal if there is not already one in the number
		//search() function returns -1 if a decimal is not found.
        //for some reason, search was returning 0 instead of -1 like I expected
		//var index = calculatorState.currentValue.search('.');
		if (decimal === false) {
			calculatorState.currentValue += '.';
		}
        
        document.getElementById('display').value = calculatorState.currentValue;
	},
	clickOperator: function (op) {
		// alert('Operator clicked: ' + op);
		//if you already have a pending operator, then replace the operator with the new operator
        
        //if you already have a pending operator, then compute the value
		if (op === '.') {
            decimal = true;
            calculatorApp.clickDecimal();
        } else if (calculatorState.pendingOperator && calculatorState.currentValue !== '') {
			this.clickEquals();
		} else if (calculatorState.currentValue !== '') {
			calculatorState.previousValue = calculatorState.currentValue;
		}
		if (op !== '.') {
            calculatorState.pendingOperator = op;
            calculatorState.currentValue = '';
        }

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
			document.getElementById('display').value = calculatorState.previousValue;
		}
	},
	clickClear: function () {
		calculatorState.currentValue = '';
		calculatorState.previousValue = '';
		calculatorState.pendingOperator = '';
        var decimal = false;
		document.getElementById('display').value = '0';
	},
	
	clickClearEntry: function () {
		console.log(calculatorState.currentValue);
		if (calculatorState.currentValue) {
			calculatorState.currentValue = '';
		}
		document.getElementById('display').value = '0';
	},
    
    clickMinusPlus: function () {
        if (calculatorState.currentValue === null || calculatorState.currentValue === "") {
            calculatorState.currentValue = calculatorState.previousValue;
        }
        calculatorState.currentValue *= -1;
        document.getElementById('display').value = calculatorState.currentValue;
    },
    
    clickCloseApp: function () {
        if (window.confirm("Do you want to close the calculator?")) {
            window.close();
        }
    }
};

 


    