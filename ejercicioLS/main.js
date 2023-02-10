const nombre=document.getElementById('nombre')
const curso=document.getElementById('Curso')
const genero=document.getElementById('Genero')
const agregar=document.getElementById('agregar')
const mostrar=document.getElementById('mostrar')
const tabla=document.getElementById('tabla')

const nota1=parseFloat(document.getElementById('Nota1').value)
const nota2=parseFloat(document.getElementById('Nota2').value)
const nota3=parseFloat(document.getElementById('Nota3').value)

datos=[]

agregar.addEventListener('click',()=>{
        if(nota1>5 || nota2>5 || nota3>5){
            alert('Las notas no pueden ser mayores a 5')
            nota1.innerText=''
            nota2.innerText=''
            nota3.innerText=''
        }else{
            //console.log(datos)
            promedio=(nota1+nota2+nota3)/3
            //console.log(promedio)
            datos.push({nombre: nombre.value, curso: curso.value, genero: genero.value})
            localStorage.setItem('lista',JSON.stringify(datos))
        }
})

mostrar.addEventListener('click',()=>{
    JSON.parse(localStorage.getItem('lista'))
    if(lista===undefined){
        alert('lista vacia')
    }else{
        for(i=0;i<lista.length; i++){
            console.log(lista[i])
            tabla.innerHTML=
            `
            <tabla>
            <tr>
            <td>Nombre: ${nombre[0]}</td>
            <td>Genero: ${genero[1]}</td>
            </tr>
            </tabla>
            `
        }
    }
})