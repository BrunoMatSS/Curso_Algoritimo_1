
function acaoBotao() {
    var nome, idade, limite, contador, resultado

    limite = prompt("digite a quantidade de vezes que vai verificar as idades: ")
    contador = 0 
    while(contador < limite){
        nome = prompt("Digite o nome da pessoa: ")
        idade = prompt("digite a idade do(a) "+ nome +":")
        if(idade>18)
            resultado = "vc e maior de idade"
        else
            resultado = "cresce"
        contador++
    }
    document.getElementById("paragrafo").innerText = resultado
}