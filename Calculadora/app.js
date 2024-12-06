const readline = require('readline');
const CalculatorController = require('./controller/calculatorController'); // Rename import to PascalCase

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput() {
    r1.question('Digite o PRIMEIRO valor: ', (a) => {
        r1.question('Digite o SEGUNDO valor: ', (b) => {
            r1.question('Digite a operação desejada (+, -, *, /): ', (operacao) => {
                const calculatorController = new CalculatorController();
                calculatorController.handleCalculation(parseFloat(a), parseFloat(b), operacao);

                r1.close();
            });
        });
    });
}

getUserInput();