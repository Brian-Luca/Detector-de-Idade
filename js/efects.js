var voltar = false,
    data = new Date(),
    anoAtual = data.getFullYear(),
    msg = document.getElementById('ano'),
    img = document.getElementById('sobrepor'),
    botao = document.getElementById('botao'),
    masc = document.getElementById('masc'),
    fem = document.getElementById('fem'),
    src,
    ano,
    idade;

function detectar() {
    if (voltar) {
        location.reload();
    } else {
        ano = Number(document.getElementById('idade').value);
    }
    if (ano > 1000 && ano <= anoAtual) {
        if (masc.checked || fem.checked) {
            idade = anoAtual - ano;
            msg.innerHTML = `Você tem ${idade} anos de idade!`;
            voltar = true;
            botao.value = 'Voltar';
            if (idade < 5) {
                if (masc.checked) {
                    src = 'bm.jpg'
                } else if (fem.checked) {
                    src = 'bf.jpg'
                }
            } else if (idade < 12) {
                if (masc.checked) {
                    src = 'ch.jpg'
                } else if (fem.checked) {
                    src = 'cf.png'
                }
            } else if (idade < 21) {
                if (masc.checked) {
                    src = 'ah.png'
                } else if (fem.checked) {
                    src = 'af.jpg'
                }
            } else if (idade < 40) {
                if (masc.checked) {
                    src = 'adh.png'
                } else if (fem.checked) {
                    src = 'adf.png'
                }
            } else if (idade < 60) {
                if (masc.checked) {
                    src = 'sh.jpg'
                } else if (fem.checked) {
                    src = 'sf.jpg'
                }
            } else if (idade < 120) {
                if (masc.checked) {
                    src = 'ih.png'
                } else if (fem.checked) {
                    src = 'if.png'
                }
            } else {
                src = 'morte.jpg'
                msg.innerHTML = "Você morreu ou não existe!";
            }
            img.innerHTML = `<img src='Imagens/${src}' id='imagem'>`
        }
    }
}