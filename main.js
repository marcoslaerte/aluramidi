function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

// Função tocaSomPom sendo guardada dentro de onclick do botão com a classe tecla_pom para ser executada quando o usuário clicar.
document.querySelector('.tecla_pom').onclick = tocaSomPom; // Atribuicao da função ao onclick como se ele fosse um atributo


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