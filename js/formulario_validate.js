/*function valida_envia() { 
  //valido el nombre
  if (document.fvalida.nombre.value.length == 0) {
    alert("Tiene que escribir su nombre")
    document.fvalida.nombre.focus()
    return 0;
  }

  if(document.fvalida.apellido.value.length == 0){
    alert("Tiene que ingresar su apellido")
    document.fvalida.apellido.focus()
    return 0;
  }
  //valido la edad. tiene que ser entero mayor que 18
  edad = document.fvalida.edad.value
  edad = validarEntero(edad)
  document.fvalida.edad.value = edad
  if (edad == "") {
    alert("Tiene que introducir un número entero en su edad.")
    document.fvalida.edad.focus()
    return 0;
  } else {
    if (edad < 18) {
      alert("Debe ser mayor de 18 años.")
      document.fvalida.edad.focus()
      return 0;
    }
  }

  //valido el interés
  if (document.fvalida.interes.selectedIndex == 0) {
    alert("Debe seleccionar un motivo de su contacto.")
    document.fvalida.interes.focus()
    return 0;
  }

  //el formulario se envia
  alert("Muchas gracias por enviar el formulario");
  document.fvalida.submit();
}
*/

window.onload = iniciar;

function iniciar() {
  document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaNombre() {
  var elemento = document.getElementById("nombre");
  if (!elemento.checkValidity()) {
    error(elemento);
    return false;
  }
  return true;

}
function validaEdad(){
  var elemento = document.getElementById("edad");
  if (!elemento.checkValidity()) {
    error(elemento);
    return false;
  }
  return true;

}

function validaApellido(){
  var elemento = document.getElementById("Apellido");
  if (!elemento.checkValidity()) {
    error(elemento);
    return false;
  }
  return true;

}

function validar(e) {
  if (validaNombre() && validaEdad() && validaApellido() && confirm("Pulsa aceptar si deseas registrarte a la página"))
  {
    return true
  } else{
    e.preventDefault();
    return false
  }
}


function error(elemento){
  document.getElementById("mensajeError").innerHTML = elemento.validationMessage;
  elemento.className="error";
  elemento.focus();

}
function borrarError(){
  var formulario = document.forms[0];
  for (var i=0; i<formulario.elements.length; i++){
    formulario.elements[i].className="";
  } 
}