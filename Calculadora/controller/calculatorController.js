const calculatorView = require('../view/calculatorView');
const calculatorModel = require('../model/calculatorModel');

class calculatorController{
    constructor(){
        this.model = new calculatorModel;
        this.view = new calculatorView;
    }

    handleCalculation(a, b, operacao){
        const result = this.model.calculate(a, b, operacao);

        if(typeof result === 'string' && result.includes('Erro')){
            this.biew.displaError(result);
        }else{
            this.view.displayResult(result);
        }
    }
}

module.exports = calculatorController;