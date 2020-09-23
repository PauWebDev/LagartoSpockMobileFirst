

// crear una funcion para poner los resultados

function seleccion(humano) {

    // creamos un array para mostrar los diferentes casos de resultados
    let resultadoTxt = ["Empate", "Ganas", "Pierdes"];
    // creamos un array para saber que opcion ha elejido el jugador y la cpu
    let personaje = ["Piedra", "Papel", "Tijeras", "Lagarto", "Spock"];
    // creamos un array para saber las diferentes posibilidades de resultados 
    var jugada = [
        [0, 1, 2, 2, 1],
        [2, 0, 1, 1, 2],
        [1, 2, 0, 2, 1],
        [1, 2, 1, 0, 2],
        [2, 1, 2, 1, 0]
    ];

    // hacemos que la cpu elija una personaje aleatorio mediante la elección de un número random
    let cpu = Math.floor((Math.random() * 5));

    // calculamos el resultado de la partida
    let resultado = jugada[cpu][humano];

    // asignamos las ID a las variables
    let id_player = document.getElementById("player");
    let id_cpu = document.getElementById("cpu");
    let id_versus = document.getElementById("versus");
    let id_resultado = document.getElementById("resultado");

    // hacemos que se muestren las imagenes de los personajes según la elección hecha
    if (personaje[humano] == personaje[0]) {
        id_player.style.backgroundImage = "url('/LagartoSpockMobileFirst/image/piedra.png')";
        id_player.style.backgroundRepeat = "no-repeat";
        id_player.style.backgroundPosition = "center";

    }
    if (personaje[humano] == personaje[1]) {
        id_player.style.backgroundImage = "url('./image/papel.png')";
        id_player.style.backgroundRepeat = "no-repeat";
        id_player.style.backgroundPosition = "center";
    }
    if (personaje[humano] == personaje[2]) {
        id_player.style.backgroundImage = "url('./image/tijera.png')";
        id_player.style.backgroundRepeat = "no-repeat";
        id_player.style.backgroundPosition = "center";
    }
    if (personaje[humano] == personaje[3]) {
        id_player.style.backgroundImage = "url('./image/lagarto.png')";
        id_player.style.backgroundRepeat = "no-repeat";
        id_player.style.backgroundPosition = "center";
    }
    if (personaje[humano] == personaje[4]) {
        id_player.style.backgroundImage = "url('./image/spock.png')";
        id_player.style.backgroundRepeat = "no-repeat";
        id_player.style.backgroundPosition = "center";
    }


    if (personaje[cpu] == personaje[0]) {
        id_cpu.style.backgroundImage = "url('./image/piedra.png')";
        id_cpu.style.backgroundRepeat = "no-repeat";
        id_cpu.style.backgroundPosition = "center";
    }
    if (personaje[cpu] == personaje[1]) {
        id_cpu.style.backgroundImage = "url('./image/papel.png')";
        id_cpu.style.backgroundRepeat = "no-repeat";
        id_cpu.style.backgroundPosition = "center";
    }
    if (personaje[cpu] == personaje[2]) {
        id_cpu.style.backgroundImage = "url('./image/tijera.png')";
        id_cpu.style.backgroundRepeat = "no-repeat";
        id_cpu.style.backgroundPosition = "center";
    }
    if (personaje[cpu] == personaje[3]) {
        id_cpu.style.backgroundImage = "url('./image/lagarto.png')";
        id_cpu.style.backgroundRepeat = "no-repeat";
        id_cpu.style.backgroundPosition = "center";
    }
    if (personaje[cpu] == personaje[4]) {
        id_cpu.style.backgroundImage = "url('./image/spock.png')";
        id_cpu.style.backgroundRepeat = "no-repeat";
        id_cpu.style.backgroundPosition = "center";
    }

    // mostramos el resultado de la partida
    if (resultadoTxt[resultado] == resultadoTxt[0]) {
        id_resultado.textContent = "Empatas"
    }
    if (resultadoTxt[resultado] == resultadoTxt[1]) {
        id_resultado.textContent = "¡ Ganaste ! "
    }
    if (resultadoTxt[resultado] == resultadoTxt[2]) {
        id_resultado.textContent = " Has perdido"
    }
}