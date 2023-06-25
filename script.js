let setaDireita = window.document.getElementById("s-direita");
let leonardo = window.document.getElementById("leonardo");
let bruna = window.document.getElementById("bruna");
let samantha = window.document.getElementById("samantha");
let setaEsquerda = window.document.getElementById("s-esquerda");


function RolarParaDireita() {
    leonardo.style = "display:none";
    samantha.style = "display:flex";
    setaDireita.style = "display:none";
    setaEsquerda.style = "display:flex";
}
function RolarParaEsquerda() {
    leonardo.style = "display:flex";
    samantha.style = "display: none";
    setaDireita.style = "display:flex";
    setaEsquerda.style = "display:none";
}