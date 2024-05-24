let respuesta = document.getElementById("respuesta");


function callApiRequest() {
    axios
    .get('http://3.140.247.103/iot-car-control/iot-car-control/back-end/apis/getRegistro.php')
  .then(function (response) {
    // handle success
    console.log(response);

    let respuestaServidor = response.data=='w'
    ?"ADELANTE"
    :response.data == 's'
    ?"ATRAS"
    :response.data == 'a'
    ?"IZQUIERDA"
    :response.data == 'd'
    ?"DERECHA"
    :"DETENER";
     

    respuesta.innerHTML="Respuesta: <strong>" + response.data + "</strong>";
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

    
}

setInterval(callApiRequest, 2000);

