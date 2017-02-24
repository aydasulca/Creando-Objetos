var arr = [ { nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" },
 { nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
  { nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
  { nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
  { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" } ];
var datos = ""
for (var posicion in arr) {
  datos += "<li>Nombre: " + arr[posicion].nombre + "</li>" +
      "<li>Apellido: " + arr[posicion].apellido + "</li>" +
      "<li>Rol: " + arr[posicion].rol + "</li>" +
      "<li>Cumpleaños: " + arr[posicion].cumpleanios + "</li><br>" ;

  var elemento= document.getElementById('dato');
  elemento.innerHTML= datos;

};
