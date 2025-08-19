let vet = []
 let soma = 0
function adicionar(){
    var n = document.getElementById('inum')
    var texto = document.getElementById('numeros')
    vet.push(n.value)
    var novo = document.createElement('p')
    texto.innerHTML = vet
}

function verificar(){
    var resultados = document.getElementById('resultados')
    var valores = document.createElement('p')
    var quant = vet.length
    vet.sort(function(a,b){return a-b})
    for(let pos in vet){
        soma += Number(vet[pos])
    }
    let media = soma/quant
    resultados.innerHTML = `Menor Numero: ${vet[0]}<br>`
    resultados.innerHTML += `Maior número: ${vet[quant-1]}<br>`
    resultados.innerHTML += `Média: ${soma} / ${quant} = ${media}<br>`
}