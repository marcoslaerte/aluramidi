function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);
    if (elemento === null) {
        alert("Elemento não encontrado!");
    }
    if (elemento != null) {
        if (elemento.localName === "audio") {
            elemento.play();
        }
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // template string

    listaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add("ativa");
        }
    };

    tecla.onkeyup = function() {
        tecla.classList.remove("ativa");
    };

}

// // Função tocaSomPom sendo guardada dentro de onclick do botão com a classe tecla_pom para ser executada quando o usuário clicar.
// document.querySelector('.tecla_pom').onclick = tocaSomPom; // Atribuicao da função ao onclick como se ele fosse um atributo


// Forma 2
// document.querySelector(".tecla_pom").onclick = function() {
//     document.querySelector("#som_tecla_pom").play();
// };

// Forma 3
// function tocaSomPom() {
//     document.querySelector('#som_tecla_pom').play();
// }
// const botaoPom = document.querySelector('.tecla_pom');
// botaoPom.addEventListener('click', tocaSomPom);

// Forma 4
// function tocaSomPom() {
//     document.querySelector('#som_tecla_pom').play();
// }
// document.querySelector('.tecla_pom').addEventListener('click', tocaSomPom);