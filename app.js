// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres ingresados
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar que se haya ingresado un nombre
    if (nombre === "") {
        alert("Por favor ingrese un nombre");
        return;
    }

    // Agregar el nombre a la lista
    amigos.push(nombre);

    // Mostrar el nombre en la lista en pantalla
    const lista = document.getElementById('listaAmigos');
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombre;
    lista.appendChild(nuevoElemento);

    // Limpiar el campo de entrada
    input.value = "";
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    const lista = document.getElementById('listaAmigos');

    // Validar que haya al menos un nombre para sortear
    if (amigos.length === 0) {
        alert("Debe agregar al menos un nombre para realizar el sorteo");
        return;
    }

    // Elegir un nombre aleatorio
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceSorteado];

    // Limpiar la lista de nombres en pantalla
    lista.innerHTML = "";

    // Mostrar el resultado del sorteo
    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${nombreSorteado}</strong></li>`;

    // Vaciar la lista de nombres (opcional si solo se quiere un sorteo)
    amigos = [];
}