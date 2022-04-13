function contador(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Dados faltando')
        res.innerHTML = 'Impossível contar'
    }else{
            res.innerHTML = `Contando: <br>`
            let i = Number(inicio.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
        if(p<=0){
            window.alert('Passo inválido! Considerado PASSO = 1')
            p = 1
        }
        if(i>f){
            for(let c=i;c>=f;c-=p){
                res.innerText += `${c} \u{1F449}`
            }
        }else{
            for(let c=i;c<=f;c+=p)
            res.innerText += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}