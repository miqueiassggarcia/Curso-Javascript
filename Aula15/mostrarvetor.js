/*
Método antigo
let n = [2, 5, 3, 6, 8, 4, 2, 3]
for(let pos = 0;pos<n.length;pos++){
    console.log(`O ${pos+1}º elemento é o ${n[pos]}`)
}
*/
//Novo
let num = [1, 3, 5, 7, 8, 6, 5, 4, 5, 7, 6]
for(let pos in num){
    console.log(`O ${pos}º elemento é o ${num[pos]}`)
}