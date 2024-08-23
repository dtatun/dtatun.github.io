

/* Javascript
/*var btnEnviar = document.getElementById('btnEnviar');

btnEnviar.addEventListener('click',function(){
     alert('click');
     var nombre = document.getElementById('txtNombre');
     var email = document.getElementById('txtEmail');
     var mensaje = document.getElementById('txtDescripcion');
//      alert('Presionaste el boton enviar');

     alert(`Información ${nombre.value} ${email.value} ${mensaje.value}`);
});*/



//Jquery
$(() => {
       $('#selector-universal').click(() => {
              $('*').addClass('selector');
       });
       $('#selector-id').click(() => {
              $('#txtEmail').addClass('selector');
       });
       $('#selector-class').click(() => {
              $('.form-control').addClass('selector');
       });
       $('#selector-button').click(() => {
              $('button').addClass('selector');
       });
       $('#selector-div').click(() => {
              $('div').addClass('selector');
       });
       $('#selector-form').click(() => {
              $('form').addClass('selector');
       });
});



$('#btnEnviar').click(function () {
               var nombre = $('#txtNombre').val();
               var email = $('#txtEmail').val();
               var mensaje = $('#txtDescripcion').val();
               alert(`INFORMACION pre: ${nombre} ${email} ${mensaje}`);

       $.ajax({
              url: 'http://localhost:5155/kalum-notification/v1/notifications',
              method: 'POST',
              data: JSON.stringify({
                     email: email,
                     subject: `Solicitud de informacion de ${nombre}`,
                     body: mensaje,
                     type: "information"
              }),
              headers: {
                     'Accept': '*/*',
                     'Content-Type': 'application/json'
              },
              success: function (data) {
                     alert(data.message);
              },
              error: function (e) {
                     alert('Error al momento de llamar al servicio');
                     console.log(e);
              }
       })
       event.preventDefault();
})