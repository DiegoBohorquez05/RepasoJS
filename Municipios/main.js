let estudiantes=+prompt('Escriba el numero de estudiantes')
let DatosPersonas=[]
let matriz=[]

for(i=0; i<=estudiantes-1;i++){
    let nombre=prompt('Escriba el nombre del estudiante')
    let municipio=prompt('Escriba el municipio de origen del estudiante')

    DatosPersonas.push([nombre,municipio])
    matriz.push(DatosPersonas)

}
console.log(DatosPersonas)
console.log(matriz)

let pregunta=prompt('De donde quiere que se muestre la persona')

DatosPersonas[0].filter((item,index) =>{
    if(DatosPersonas[1][index] === pregunta){
        console.log(item);
    }
})
