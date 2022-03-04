function acaoBotao() {
    var sairLoop, valor1, valor2
    do{
        valor1 = prompt("digite o valor 1: ")
        valor2 = prompt("digite o valor 2: ")
        document.getElementById("paragrafo").innerText = "resultado: " + (parseInt(valor1)+ parseInt(valor2))
        sairLoop = prompt("deseja ir de FF? S/N")
    }while(sairLoop == ("N"||"n")) 
}