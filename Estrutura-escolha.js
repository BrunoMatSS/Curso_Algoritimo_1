var valor1, valor2, resultado, operacao;

function acaoBotao() {
    alert("Calcular 2 valores baseado na operacao selecionada")

    valor1 = prompt("Digite o primeiro valor:")
    operacao = prompt("Digite a operacao desejada: ")
    valor2 = prompt("Digite o segundo valor: ")


    valor1 = parseInt(valor1)
    valor2 = parseInt(valor2)

    switch (operacao) {
        case "+":
            resultado = valor1 + valor2
            break;
        case "-":
            resultado = valor1 - valor2
            break;
        case "/":
            resultado = valor1 / valor2
            break;
        case "*":
            resultado = valor1 * valor2
            break;
        default:
            resultado = "VAI TOMAR NO CU PORRA"
    }
    document.getElementById("paragrafo").innerText = resultado

}