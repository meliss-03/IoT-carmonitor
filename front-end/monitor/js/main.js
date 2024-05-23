
let respuesta = document.getElementById("respuesta");

function callApiRequest() {
    axios
        .get('http://3.137.139.50/iot-car-control/back-end/apis/getRegistro.php')
        .then(function (response) {
            // handle success
            console.log(response);

            let respuestaServidor = response.data == 'w'
                ? "ADELANTE"
                : response.data == 's'
                ? "ATRÁS"
                : response.data == 'a'
                ? "IZQUIERDA"
                : response.data == 'd'
                ? "DERECHA"
                : response.data == 'q'
                ? "DETENER"
                : "COMANDO NO RECONOCIDO";

            respuesta.innerHTML = "Respuesta: <strong>" + respuestaServidor + "</strong>";
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            respuesta.innerHTML = "Error: <strong>No se pudo obtener la respuesta</strong>";
        });
}

// Llamar a la función cada 2 segundos
setInterval(callApiRequest, 2000);

