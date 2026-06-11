// variaveis
const uiElement = document.getElementById('ui');
const text = "Eu amo você";
const numberOfWords = 55; 
let scale = 10.5; 

//logica de tamanho responsivo
if (window.innerWidth > 1024) {
    scale = 18;
} else if (window.innerWidth > 768) {
    scale = 14;
} else if (window.innerWidth >= 400 && window.innerWidth <= 450) {
    scale = 10.5; 
} else if (window.innerWidth > 450) {
    scale = 12; 
}

uiElement.querySelectorAll('.love_word').forEach(el => el.remove());

for (let i = 0; i < numberOfWords; i++) {
    const wordSpan = document.createElement('span');
    wordSpan.classList.add('love_word', 'love_horizontal');
    wordSpan.innerText = text;

    const t = (i / numberOfWords) * Math.PI * 2;
    
    const x = 16 * Math.pow(Math.sin(t), 3) * scale;
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t)) * scale;
    const z = (i - numberOfWords / 2) * 4; 

    wordSpan.style.setProperty('--i', i);
    wordSpan.style.setProperty('--x', `${x}px`);
    wordSpan.style.setProperty('--y', `${y}px`);
    wordSpan.style.setProperty('--z', `${z}px`);

    uiElement.appendChild(wordSpan);
}

// Lógica do Modal
const modal = document.getElementById('modal-galeria');
const btnAbrir = document.getElementById('btn-abrir');
const btnFechar = document.querySelector('.btn-fechar');

btnAbrir.addEventListener('click', () => {
    modal.style.display = 'flex';
});

btnFechar.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


// LÓGICA DO BOTÃO DE MÚSICA (PLAY / PAUSE REFORÇADA)
const btnMusica = document.getElementById('btn-musica');
const audioFundo = document.getElementById('audio-fundo');

btnMusica.addEventListener('click', () => {
    if (audioFundo.paused) {
        audioFundo.play()
            .then(() => {
                btnMusica.innerText = "Pausar Música ⏸️";
                btnMusica.classList.add('tocando');
            })
            .catch((error) => {
                console.log("Erro ao tocar áudio:", error);
                alert("Verifique se o arquivo está com o nome 'musica.mp3' na mesma pasta do Spck!");
            });
    } else {
        audioFundo.pause();
        btnMusica.innerText = "dedicado a vc ❤️";
        btnMusica.classList.remove('tocando');
    }
});
