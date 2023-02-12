const nombre = document.getElementById("nombre");
const curso = document.getElementById("Curso");
const genero = document.getElementById("Genero");
const agregar = document.getElementById("agregar");
const mostrar = document.getElementById("mostrar");
const tabla = document.getElementById("tabla");

let CalificacionFinale = null;

datos = [];

agregar.addEventListener("click", () => {
  const nota1 = parseFloat(document.getElementById("Nota1").value);
  const nota2 = parseFloat(document.getElementById("Nota2").value);
  const nota3 = parseFloat(document.getElementById("Nota3").value);
  if (nota1 > 5 || nota2 > 5 || nota3 > 5) {
    alert("Las notas no pueden ser mayores a 5");
  } else {
    console.log(nota1);
    console.log(datos);
    //console.log(promedio)
    datos.push({
      nombre: nombre.value,
      curso: curso.value,
      genero: genero.value,
      Nota1: nota1,
      Nota2: nota2,
      Nota3: nota3,
    });
    localStorage.setItem("estudiantes", JSON.stringify(datos));
  }

  mostrar.addEventListener("click", () => {
    lista = JSON.parse(localStorage.getItem("estudiantes"));
    console.log(lista);
    if (lista == undefined) {
      alert("Lista Vacia");
    } else {
      promedio = (nota1 + nota2 + nota3) / 3;
      if (promedio >= 3.5) {
        CalificacionFinale = "Aprovado";
      } else {
        CalificacionFinale = "Reprovado";
      }
      lista.forEach((element) => {
        tabla.innerHTML =
          element.nombre +
          " , " +
          "Promedio: " +
          promedio +
          " , " +
          CalificacionFinale;
      });
    }
  });
});


