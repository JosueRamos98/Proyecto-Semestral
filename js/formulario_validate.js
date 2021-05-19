$(document).ready(function () {
  $("#contact-form").validate({
    rules: {
      nombre: {
        required: true,
        minlength: 3,
        maxlength: 15


      },
      apellido: {
        required: true,
        minlength: 5,
        maxlength: 15

      },
      edad: {

        min: 18,
        required: true,
        Number: true,
        maxlength: 2,
        max: 99

      },
      contraseña: {

        required: true,
        minlength: 6,
        maxlength: 12,

      },
      verificar_contraseña: {
        equalTo: contraseña,
        
        required: true,
        minlength: 6,
        maxlength: 12,

      },
      correo: {

        required: true,
        maxlength: 30,

      }

    },
    messages: {
      nombre: {
        minlength: "El nombre debe contener al menos 3 caracteres",
        required: "El campo es obligatorio",
        maxlength: "El nombre excede el largo de caracteres"
      },

      apellido: {
        minlength: "Debe introducir un apellido válido",
        maxlength: "El apellido ingresado es mas largo de lo esperado",
        required: "El campo es obligatorio"
      },
      correo: {


        maxlength: "El correo ingresado no es valido",
        required: "El correo es requerido",
        pattern: "El correo ingresado no es valido"
        


      },
      contraseña: {
        minlength: "El nombre debe contener al menos 6 caracteres",
        required: "El campo es obligatorio",
        maxlength: "El nombre excede el largo de 12 caracteres"
      },
      verificar_contraseña: {
        equalTo: "Las contraseñas no coinciden",
        minlength: "El nombre debe contener al menos 6 caracteres",
        required: "El campo es obligatorio",
        maxlength: "El nombre excede el largo de 12 caracteres"
      },
      edad: {
        min: "Tienes que tener más de 18 años para registrarte. Si eres menor de 18, consulta a tus padres",
        required: "La edad es obligatoria",
        Number: "Ingresa una edad válida",
        maxlength: "La edad ingresada no es valida",
        max: "La edad es superior a 99 años, eres muy viejito"
      }
    }
  });
});





/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ES
 */
$.extend( $.validator.messages, {
  required: "Este campo es requerido.",
  remote: "Por favor, llene este campo.",
  email: "Por favor, escriba una dirección de correo válida.",
  url: "Por favor, escriba una URL válida.",
  date: "Por favor, escriba una fecha válida.",
  dateISO: "Por favor, escriba una fecha (ISO) válida.",
  number: "Por favor, escriba un número válido.",
  digits: "Por favor, escriba sólo dígitos.",
  creditcard: "Por favor, escriba un número de tarjeta válido.",
  equalTo: "Por favor, escriba el mismo valor de nuevo.",
  extension: "Por favor, escriba un valor con una extensión aceptada.",
  maxlength: $.validator.format( "Por favor, no escriba más de {0} caracteres." ),
  minlength: $.validator.format( "Por favor, no escriba menos de {0} caracteres." ),
  rangelength: $.validator.format( "Por favor, escriba un valor entre {0} y {1} caracteres." ),
  range: $.validator.format( "Por favor, escriba un valor entre {0} y {1}." ),
  max: $.validator.format( "Por favor, escriba un valor menor o igual a {0}." ),
  min: $.validator.format( "Por favor, escriba un valor mayor o igual a {0}." ),
  cedCR: "Por favor, escriba el número de cédula válido."
  } );