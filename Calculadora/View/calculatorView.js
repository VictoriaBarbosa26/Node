class calculatorView{
    // mostrar o resultado da operação ao usário.
    displayResult(result){
        console.log('Resultado: ' + result);
    }

    //mostrar a mensagem de erro
    displayError(error){
        console.log('Erro: ' + error);
    }
}

module.exports = calculatorView;