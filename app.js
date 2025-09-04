// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Lista de nombre vacía
let nombres = [];

//Función para agregar nombres a la lista


function agregarAmigo() {

    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, inserte un nombre");
        return;
    }
   
    nombres.push(nombre);
    input.value = ""; 
    actualizarLista();    
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    nombres.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length === 0 ) {
        alert("No hay nombres en la lista.");
        return null;
    }
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const nombreSeleccionado = nombres[indiceAleatorio];

   // Mostrar el resultado usando innerHTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Tu amigo secreto es: ${nombreSeleccionado}</li>`;
}





  
   

