
// crear una funcion para poner los resultados

function seleccion(humano) {

    // creamos un array para mostrar los diferentes casos de resultados
    let resultadoTxt = ["Empate", "Ganas", "Pierdes"];
    // creamos un array para saber que opcion ha elejido el jugador y la cpu
    let personaje = ["Piedra", "Papel", "Tijeras", "Lagarto", "Spock"];
    // creamos un array para saber las diferentes posibilidades de resultados 
    let jugada = [
        [0, 1, 2, 2, 1],
        [2, 0, 1, 1, 2],
        [1, 2, 0, 2, 1],
        [1, 2, 1, 0, 2],
        [2, 1, 2, 1, 0]
    ];
    let explicacionResultadoTxt = [
        "Eduardo(tijeras) cortan a Paperboy(papel)",
        "Paperboy(papel) envuelve a The Rock(piedra)",
        "The Rock(piedra) aplasta a Dr. Curtis(lagarto)",
        "Dr. Curtis(lagarto) envenena a Spock",
        "Spock aplasta a Eduardo(tijeras)",    
        "Eduardo(tijeras) decapita a Dr. Curtis(lagarto)",    
        "Dr. Curtis(lagarto) se come a Paperboy(papel)",    
        "Paperboy(papel) desaprueba a Spock",    
        "Spock desintegra a The Rock(piedra)",    
        "The Rock(piedra) aplasta a Eduardo(tijeras)",
        "Chocáis las manos y suena un fuerte explosión",
        "Repartís el periódico como buenos amigos",
        "Cuidais del jardín como buenos jardineros",
        "Os unis para capturar a Spiderman",
        "Ninguno sabe quien es el clon"
    ]

    // hacemos que la cpu elija una personaje aleatorio mediante la elección de un número random
    let cpu = Math.floor((Math.random() * 5));

    // calculamos el resultado de la partida
    let resultado = jugada[cpu][humano];

    // asignamos las ID a las variables
    let id_player = document.getElementById("player");
    let id_cpu = document.getElementById("cpu");
    let id_versus = document.getElementById("versus");
    let id_resultado = document.getElementById("resultado");
    let id_explicacion = document.getElementById("explicacion")

    // mostramos la explicación del resultado
    // empates
    if (personaje[humano] == personaje[0] && personaje[cpu] == personaje[0] ) {
        id_explicacion.textContent = explicacionResultadoTxt[10];
    }
    if (personaje[humano] == personaje[1] && personaje[cpu] == personaje[1] ) {
        id_explicacion.textContent = explicacionResultadoTxt[11];
    }
    if (personaje[humano] == personaje[2] && personaje[cpu] == personaje[2] ) {
        id_explicacion.textContent = explicacionResultadoTxt[12];
    }
    if (personaje[humano] == personaje[3] && personaje[cpu] == personaje[3] ) {
        id_explicacion.textContent = explicacionResultadoTxt[13];
    }
    if (personaje[humano] == personaje[4] && personaje[cpu] == personaje[4] ) {
        id_explicacion.textContent = explicacionResultadoTxt[14];
    }
    // otros resultados
    if (personaje[humano] == personaje[1] && personaje[cpu] == personaje[2] || personaje[humano] == personaje[2] && personaje[cpu] == personaje[1]) {
        id_explicacion.textContent = explicacionResultadoTxt[0];
    }
    if (personaje[humano] == personaje[0] && personaje[cpu] == personaje[1] || personaje[humano] == personaje[1] && personaje[cpu] == personaje[0]) {
        id_explicacion.textContent = explicacionResultadoTxt[1];
    }
    if (personaje[humano] == personaje[0] && personaje[cpu] == personaje[3] || personaje[humano] == personaje[3] && personaje[cpu] == personaje[0]) {
        id_explicacion.textContent = explicacionResultadoTxt[2];
    }
    if (personaje[humano] == personaje[3] && personaje[cpu] == personaje[4] || personaje[humano] == personaje[4] && personaje[cpu] == personaje[3]) {
        id_explicacion.textContent = explicacionResultadoTxt[3];
    }
    if (personaje[humano] == personaje[2] && personaje[cpu] == personaje[4] || personaje[humano] == personaje[4] && personaje[cpu] == personaje[2]) {
        id_explicacion.textContent = explicacionResultadoTxt[4];
    }
    if (personaje[humano] == personaje[2] && personaje[cpu] == personaje[3] || personaje[humano] == personaje[3] && personaje[cpu] == personaje[2]) {
        id_explicacion.textContent = explicacionResultadoTxt[5];
    }
    if (personaje[humano] == personaje[1] && personaje[cpu] == personaje[3] || personaje[humano] == personaje[3] && personaje[cpu] == personaje[1]) {
        id_explicacion.textContent = explicacionResultadoTxt[6];
    }
    if (personaje[humano] == personaje[1] && personaje[cpu] == personaje[4] || personaje[humano] == personaje[4] && personaje[cpu] == personaje[1]) {
        id_explicacion.textContent = explicacionResultadoTxt[7];
    }
    if (personaje[humano] == personaje[0] && personaje[cpu] == personaje[4] || personaje[humano] == personaje[4] && personaje[cpu] == personaje[0]) {
        id_explicacion.textContent = explicacionResultadoTxt[8];
    }
    if (personaje[humano] == personaje[0] && personaje[cpu] == personaje[2] || personaje[humano] == personaje[2] && personaje[cpu] == personaje[0]) {
        id_explicacion.textContent = explicacionResultadoTxt[9];
    } 

    // hacemos que se muestren las imagenes de los personajes según la elección hecha
    if (personaje[humano] == personaje[0]) {
        id_player.style.backgroundImage = "url('../image/piedra.png')";
        id_player.style.backgroundRepeat = "no-repeat";
        id_player.style.backgroundPosition = "center";

    }
    if (personaje[humano] == personaje[1]) {
        id_player.style.backgroundImage = "url('../image/papel.png')";
        id_player.style.backgroundRepeat = "no-repeat";
        id_player.style.backgroundPosition = "center";
    }
    if (personaje[humano] == personaje[2]) {
        id_player.style.backgroundImage = "url('../image/tijera.png')";
        id_player.style.backgroundRepeat = "no-repeat";
        id_player.style.backgroundPosition = "center";
    }
    if (personaje[humano] == personaje[3]) {
        id_player.style.backgroundImage = "url('../image/lagarto.png')";
        id_player.style.backgroundRepeat = "no-repeat";
        id_player.style.backgroundPosition = "center";
    }
    if (personaje[humano] == personaje[4]) {
        id_player.style.backgroundImage = "url('../image/spock.png')";
        id_player.style.backgroundRepeat = "no-repeat";
        id_player.style.backgroundPosition = "center";
    }


    if (personaje[cpu] == personaje[0]) {
        id_cpu.style.backgroundImage = "url('../image/piedra.png')";
        id_cpu.style.backgroundRepeat = "no-repeat";
        id_cpu.style.backgroundPosition = "center";
    }
    if (personaje[cpu] == personaje[1]) {
        id_cpu.style.backgroundImage = "url('../image/papel.png')";
        id_cpu.style.backgroundRepeat = "no-repeat";
        id_cpu.style.backgroundPosition = "center";
    }
    if (personaje[cpu] == personaje[2]) {
        id_cpu.style.backgroundImage = "url('../image/tijera.png')";
        id_cpu.style.backgroundRepeat = "no-repeat";
        id_cpu.style.backgroundPosition = "center";
    }
    if (personaje[cpu] == personaje[3]) {
        id_cpu.style.backgroundImage = "url('./image/lagarto.png')";
        id_cpu.style.backgroundRepeat = "no-repeat";
        id_cpu.style.backgroundPosition = "center";
    }
    if (personaje[cpu] == personaje[4]) {
        id_cpu.style.backgroundImage = "url('../image/spock.png')";
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