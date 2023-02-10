const nombre=document.getElementById('nombre')
const curso=document.getElementById('Curso')
const genero=document.getElementById('Genero')
const agregar=document.getElementById('agregar')
const mostrar=document.getElementById('mostrar')

datos=[]

agregar.addEventListener('click',()=>{
    datos.push({nombre: nombre.value, curso: curso.value, genero: genero.value})
    // console.log(datos)
    localStorage.setItem('listaEstudiantes',JSON.stringify(datos))
})

mostrar.addEventListener('click',()=>{
    JSON.parse(localStorage.getItem('listaEstudiantes'))
    if(listaEstudiantes===undefined){
        alert('lista vacia')
    }else{
        for(i=0;i<listaEstudiantes.length; i++){
            console.log(listaEstudiantes[i])
        }
    }
})