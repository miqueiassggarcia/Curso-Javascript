var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if(hora<5){
    console.log('Boa Madrugada!')
}else if(hora<12) {
    console.log('Bom Dia!')
}else if(hora<=17.30){
    console.log('Boa Tarde!')
}else if(hora<=24){
    console.log('Boa Noite!')
}