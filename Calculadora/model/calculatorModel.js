class calculatorModel{
    calculate(a, b, operacao)
    {
        switch(operacao)
        {
            case '+':
                return a + b;

            case '-':
                return a - b;

            case '*':
                return a * b;

            case '/':
                return b !== 0 ? a / b: 'Erro: Divisão por zero';
            default:
                return 'Operador Inválido!';
        }
    }
}


module.exports = calculatorModel;