const listado_URL = "https://tomasmarquez99.github.io/tabla-apertura/listado.json"


function cargarDatos(URL) {
    document.getElementById("datostabla").innerHTML = "";
    fetch(URL)
        .then(respuesta => respuesta.json())
        .then(datos => {

            for (valor of datos) {
                document.getElementById("datostabla").innerHTML += `
                    <tr>
                <td>
                    ${valor.atributo1}
                </td>
                <td>
                     ${valor.atributo2}
                </td>
            
            </tr>
                    
                    `

            }
        })
        .catch(error => alert("Hubo un error: " + error));
}