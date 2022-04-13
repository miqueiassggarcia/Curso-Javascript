function gerador() {
    var numero = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if(numero.value.length == 0){
        window.alert('[ERRO] Insira um valor no NÚMERO')
    }else {
        var n = Number(numero.value)
        tab.innerHTML = ""
        for(let c = 0;c <= 10;c++){
            let item = document.createElement('option')
            item.value = `tab${c}`
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}