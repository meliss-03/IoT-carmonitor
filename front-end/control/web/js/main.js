//alert("hola mundo ")
let adelante = document.getElementById('adelante');
let atras = document.getElementById('atras');
let izquierda = document.getElementById('izquierda');
let derecha = document.getElementById('derecha');
let detener = document.getElementById('detener');

let mensaje = document.getElementById('mensaje');


function callApi(estatus) {
    axios
    .get('http://localhost/iot-car-control/back-end/apis/setRegistro.php?valorEstatus='+estatus)
  .then(function (response) {
    // handle success
    console.log(response);
    mensaje.innerHTML="Respuesta: <strong>" + response.data + "</strong>";
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

    
}
adelante.addEventListener('click', function()  {
    callApi('w');
});
atras.addEventListener('click', function()  {
    callApi('s');
});
izquierda.addEventListener('click', function()  {
    callApi('a');
});
derecha.addEventListener('click', function()  {
    callApi('d');
});
detener.addEventListener('click', function()  {
    callApi('q');
});


