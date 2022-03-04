var valor1, valor2, resultado, operacao; 

function acaoBotao() {
    alert("Calcular 2 valores baseado na operacao selecionada")
    
    valor1 = prompt("Digite o primeiro valor:")
    operacao = prompt("Digite a operacao desejada: ")
    valor2 = prompt("Digite o segundo valor: ")
    
    
    valor1 = parseInt(valor1)
    valor2 = parseInt(valor2)
    
    if(operacao == "+"){
        resultado = valor1 + valor2
    }else if(operacao == "-"){
        resultado = valor1 - valor2
    }else if(operacao == "*"){
        resultado = valor1 * valor2
    }else if(operacao == "/"){
        resultado = valor1 / valor2
    }else{
        resultado = "VAI TOMAR NO CU SEU ASTROLOPTECOS"
    }
    
    document.getElementById("paragrafo").innerText = resultado
    
}
