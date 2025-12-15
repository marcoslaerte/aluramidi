function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;

    listaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio);
    };

    contador = contador + 1;
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