let currentNumber = '';
let perviousNumber = '';
let operator = null;

    function appendNumber(number){
        currentNumber += number;
        updateDisplay();
    }

    function setOperator(op){
        if (currentNumber === '') return;
        if (perviousNumber !==''){
            calcultor();
        }
        operator = op;
        perviousNumber = currentNumber;
        currentNumber = '';

    }

        function calcultor(){

            if (perviousNumber === '' || currentNumber === '' || operator === null) return;
            
            const prev = parseFloat(perviousNumber);
            const current = parseFloat(currentNumber);
            let result;

            switch (operator){
                case '+':
                result = prev+ current;
                break;

                case '-':
                result = prev- current;
                break;

                case '*':
                result = prev* current;
                break;

                case '/':
                result = prev/ current;
                break;

                default:
                    return;
            }

            currentNumber = result.toString();
            operator = null;
            perviousNumber =  '';
            updateDisplay();

        }

        function clearDisplay(){
            currentNumber = '';
            perviousNumber = '';
            operator = null;
            updateDisplay();
        }

        function updateDisplay(){
            const display = document.getElementById('display');
            display.value = currentNumber;
        }