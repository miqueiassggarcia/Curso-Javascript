var amigo = {nome:'Lucas',
idade:29,
sexo:'M',
peso:82.6,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(20)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
