let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        res.innerHTML = ''
        valores.push(Number(num.value))
        let escrita = document.createElement('option')
        escrita.text = `Valor ${num.value} adicionado`
        lista.appendChild(escrita)
    }else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
    res.innerHTML = `<p>Ao todo, temos ${valores.length} números adicionados<br></p>`
    valores.sort()
    res.innerHTML += `<p>O maior valor informado foi ${valores[valores.length-1]}<br></p>`
    res.innerHTML += `<p>O menor valor informado foi ${valores[0]}<br></p>`
    let soma = 0
    for(let pos in valores){
        soma += Number(valores[pos])
    }
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}<br></p>`
    res.innerHTML += `<p>A média dos valores digitados é ${soma/valores.length}</p>`
    }
}