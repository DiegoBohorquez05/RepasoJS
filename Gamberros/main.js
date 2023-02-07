let n=+prompt('Escriba el numero de estudiantes')
for(i=0;i<n;i++){
    let matriz=[]
    let estudiante=[]
    
    let Nombre=prompt('Escriba el nombre del estudiante')
    
    let Curso=prompt('Curso del estudiante')
    
    let Genero=prompt('Genero del estudiante')
    
    let Nota1=parseFloat(prompt('Escriba la nota 1 del estudiante'))
    if(Nota1>5 || Nota1<0){
        alert('Las notas no pueden ser mayores a 5')
        Nota1=parseFloat(prompt('Escriba otra vez la nota 1'))
    }
    let Nota2=parseFloat(prompt('Escriba la nota 2 del estudiante'))
    if(Nota2>5 || Nota2<0){
        alert('Las notas no pueden ser mayores a 5')
        Nota1=parseFloat(prompt('Escriba otra vez la nota 2'))
    }
    let Nota3=parseFloat(prompt('Escriba la nota 3 del estudiante'))
    if(Nota3>5 || Nota3<0){
        alert('Las notas no pueden ser mayores a 5')
        Nota1=parseFloat(prompt('Escriba otra vez la nota 3'))
    }
    
    promedio=((Nota1+Nota2+Nota3)/3)

    if(promedio>=3.5){
        resultado='aprovado'
    }else{
        resultado='reprovado'
    }
    
    estudiante.push(Nombre,Curso,Genero,Nota1,Nota2,Nota3,promedio,resultado)
    matriz.push(estudiante)
    console.log(matriz)
}
