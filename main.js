
class Estudiante {

constructor(nombre, ciudad, pais, telefono, email, etiquetas){
this.nombre = nombre;
this.ciudad = ciudad;
this.país = pais;
this.teléfono = telefono;
this.email = email;
this.etiquetas = etiquetas;
}

}

let estudiantes = [];
let ordenacion = { nonbre: false, ciudad: false, pais: false, email: false, etiquetas:false };

async function obtenerUsuarios() {
  const response = await fetch('/data/data.json');
  const jsonData = await response.json(); 

  jsonData.data.forEach(el => {  
      estudiantes.push(new Estudiante(el.nombre, el.ciudad, el.país, el.teléfono, el.email, el.etiquetas));
  });

  //ordenarEstudiantes(estudiantes, "nombre");
  rellenarTabla(estudiantes);
}

function rellenarTabla(estudiantes) {
  document.getElementById("contenido").innerHTML = '';
  estudiantes.forEach(el => {
    
    //crear tr
      const $tr = document.createElement("tr");
      //creamos el td de nombre
      let $tdNombre = document.createElement("td");
      $tdNombre.textContent = el.nombre; //el textContent del td es el nombre
      $tr.appendChild($tdNombre);
      // td ciudad
      let $tdCiudad =document.createElement("td")
      $tdCiudad.textContent = el.ciudad;
      $tr.appendChild($tdCiudad);
      // td país

      let $tdPais =document.createElement("td")
      $tdPais.textContent = el.país;
      $tr.appendChild($tdPais);

      // td telefono
      let $tdTelefono =document.createElement("td")
      $tdTelefono.textContent = el.teléfono;
      $tr.appendChild($tdTelefono);

      // td correo electrónico
      let $tdCorreo =document.createElement("td")
      $tdCorreo.textContent = el.email;
      $tr.appendChild($tdCorreo);

      //td etiquetas
    
      let $tdEtiquetas = document.createElement("td")
      el.etiquetas.forEach(etiqueta => {
        $span = document.createElement("span");
        $span.textContent = etiqueta;
        $span.classList.add('btn-primary');
        $tdEtiquetas.appendChild($span);
      });
    //$tdEtiquetas.textContent = el.etiquetas;
    //  $tdEtiquetas.classList.add('btn-primary');
      $tr.appendChild($tdEtiquetas);

      document.getElementById("contenido").appendChild($tr);
  });
}


obtenerUsuarios()


function ordenarEstudiantes(estudiantes, ordenarPor)
{
   let ordenarMayorAMenor = ordenacion[ordenarPor];
   ordenarMayorAMenor = !ordenarMayorAMenor;
   ordenacion[ordenarPor] = ordenarMayorAMenor;

    switch(ordenarPor) 
    {
      case "nombre" : 
      {          
          estudiantes.sort(function(a, b) {
            return ordenarMayorAMenor ? a.nombre > b.nombre : a.nombre < b.nombre;
          })

      }
      break;
      case "ciudad" : 
      {
          estudiantes.sort(function (a, b){
            return ordenarMayorAMenor ? a.ciudad > b.ciudad : a.ciudad < b.ciudad;
          })
      }
      break;
      case "país":{
        estudiantes.sort(function (a, b){
          return ordenarMayorAMenor ? a.país > b.país : a.país < b.país;
        })
      }
      break;
        case "email" :{
          estudiantes.sort(function (a, b){
            return ordenarMayorAMenor ? a.email> b.email : a.email < b.email;
          })
        }
        break;
        case "etiquetas" :{
          estudiantes.sort(function (a, b){
            return ordenarMayorAMenor ? a.etiquetas> b.etiquetas : a.etiquetas < b.etiquetas;
          })
    }

   
}
rellenarTabla(estudiantes);

}
