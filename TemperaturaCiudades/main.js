let Bogota='19,19,17,18,20'
let Bucaramanga='27,26,26,26,27'
let Medellin='27,26,26,27,29'

const ArraBogota=Bogota.split(',')
console.log(ArraBogota)
for(i=0;i<5;i++){
    console.log(ArraBogota.push(parseFloat(ArraBogota[i])))
}


const ArraBucaro=Bucaramanga.split(',')
console.log(ArraBucaro)

const ArraMedellin=Medellin.split(',')
console.log(ArraMedellin)