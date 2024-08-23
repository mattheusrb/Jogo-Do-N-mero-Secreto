let listaDeNumerosSorteados = []; 
let numeroLimite = 100 ;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female' , {rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1' , 'Jogo Do Número Secreto');
    exibirTextoNaTela('p' , 'Escolha um número entre 1 e 100.');
    
}
 exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1' , 'Parabéns, você acertou! yahooo');
        let palavraTentativas = tentativas == 1? 'tentativa' : 'tentativas'
        let mensagemTentativas = `Você descobriu o número secreto. Com ${tentativas} ${palavraTentativas}.`;
        exibirTextoNaTela('p' , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto){
        exibirTextoNaTela('h1' , 'Você errou :(');
        exibirTextoNaTela('p' , 'Tente um número menor.');
    } else {
        exibirTextoNaTela('h1' , 'Você errou :(');
        exibirTextoNaTela('p' , 'Tente um número maior.');
    }
    tentativas++;
    limparCampo()


    
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
    let quantidaDeElementoNaLista = listaDeNumerosSorteados.length;

    if (quantidaDeElementoNaLista == numeroLimite) {
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled' , true);
    
}
