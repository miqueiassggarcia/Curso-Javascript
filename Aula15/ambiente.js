var num = [2, 3, 6, 8, 1]
num[5]=2
num.push(9)
let pos = num.indexOf(27)
if(pos == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`A posição do valor é ${pos}`)
}

console.log(num)
console.log(`O primeiro elemento do vetor é ${num[0]}`)
console.log(`A largura do vetor é ${num.length}`)
console.log(`Ele em ordem crescente fica ${num.sort()}`)