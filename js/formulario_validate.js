$(document).ready(function() {
  $("#contact-form").validate({
    rules: {
      nombre : {
        required: true,
        minlength: 3,
        maxlength: 15


      },
      apellido: {
        required: true,
        minlength: 5,
        maxlength: 15
        
      }

    },
    messages : {
      nombre: {
        minlength: "El nombre debe contener al menos 3 caracteres",
        required:"El campo es obligatorio",
        maxlength: "El nombre excede el largo de caracteres"
      },
      
      apellido: {
          minlength: "Debe introducir un apellido válido",
          maxlength: "El apellido ingresado es mas largo de lo esperado",
          required: "El campo es obligatorio"
      }
    }
  });
});