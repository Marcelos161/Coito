const music = document.getElementById('musica');
const botaoNao = document.getElementById('nao');
const errado = document.getElementById('res');
const outroRes = document.getElementById('outrores')
const data = document.getElementById('data')
const cantada = document.getElementById('cantada');

let contador = 0;

function nao() {
    randomx = Math.random() * (600 - 300) + 300;
    randomy = Math.random() * (10 - 100) + 100;
    botaoNao.style.top = randomx + 'px';
    botaoNao.style.left = randomy + '%';

    errado.style.display = 'block'
    contador++; 
}

function sim() {
    window.location.href = `aceito.html?contador=${contador}`;
}

function parametrosDaPrimeiraPagina() {
    const urlParams = new URLSearchParams(window.location.search);

    const cantadaURL = urlParams.get('cantada');
    cantada.innerHTML = 'cantada';
}

// outra pagina

function mensagem(message) {
    const linkWhatsapp = `https://wa.me/5531995797235?text=${encodeURIComponent(message)}`;
    window.location.href = linkWhatsapp;
}

function musica() {
    music.play()
}

function confirmar() {
    const urlParams = new URLSearchParams(window.location.search);
    const contagem = urlParams.get("contador");

    const dataEscolhida = data.value;

    const message = `Date Marcado para a data ${dataEscolhida} recusado: ${contagem}`

    mensagem(message);
}



