let matriz=[]

for(j=0;j<5;j++){
    let vector=[]
    for(i=1;i<=10;i++){
        vector.push(i+(j*10))
    }
    matriz.push(vector)
}
console.log(matriz)

let vectorFila=[]

for(fila=0;fila<matriz.length;fila++){
    suma=0
    for(columna=0;columna<matriz[fila].length;columna++){
        suma+=matriz[fila][columna]
    }
    vectorFila.push(suma)
}
console.log(vectorFila)

let vectorColumna=[]

for(columna=0;columna<matriz[fila].length;columna++){
    suma=0
    for(fila=0;fila<matriz)
}