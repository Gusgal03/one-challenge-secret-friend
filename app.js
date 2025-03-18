// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function actualizarLista(){

    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    listaDeAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");

        //Para agregar texto de un amigo con su numero
        li.textContent = `${index + 1}. ${amigo}`;

        //Para crear un boton para eliminar un 
        const botonParaEliminar = document.createElement("button");
        botonParaEliminar.textContent = "x";
        botonParaEliminar.classList.add("btn-eliminar");
        botonParaEliminar.onclick = () => eliminarAmigo(index);

        //Para agregar el boton al elemento de lista
        li.appendChild(botonParaEliminar);

        listaAmigos.appendChild(li);
    });
}

function eliminarAmigo(indice) {

    listaDeAmigos.splice(indice, 1); 
    actualizarLista(); 
}

function agregarAmigo(){

    const amigoIngresado = document.getElementById("amigo");
    const nombreAmigo = amigoIngresado.value.trim();

    if(nombreAmigo){
        listaDeAmigos.push(nombreAmigo);
        actualizarLista();
        amigoIngresado.value = '';
    }
}

function sortearAmigo(){

    if (listaDeAmigos.length < 2) {
        alert("Ingresa al menos a 2 amigos para sortear por favor");
        return;
    }

    const indiceRandom = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos.splice(indiceRandom, 1)[0];
    const resultadoSorteo = document.getElementById("resultado");
    resultadoSorteo.innerHTML = `<li>${amigoSorteado}</li>`;

    actualizarLista();
}

function reiniciarApp(){

    listaDeAmigos = [];
    actualizarLista();
    
    const resultadoSorteo = document.getElementById("resultado");
    if (resultadoSorteo) {
        resultadoSorteo.innerHTML = '';
    }
}

document.getElementById("restart").onclick = reiniciarApp;


