const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Variáveis para a imagem do logo
const logoPrincipal = document.getElementById('menu-acc2');
const logoClaro = 'IMG/menu-acc3.png';
const logoEscuro = 'IMG/menu-acc4.png';

// Lógica de tema (removi a duplicação)
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        // Se o tema salvo for escuro, já carrega a imagem escura
        if (logoPrincipal) {
            logoPrincipal.src = logoEscuro;
        }
    } else {
        // Se o tema salvo for claro, já carrega a imagem clara
        if (logoPrincipal) {
            logoPrincipal.src = logoClaro;
        }
    }
});

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        // Troca a imagem para a versão escura
        if (logoPrincipal) {
            logoPrincipal.src = logoEscuro;
        }
    } else {
        localStorage.setItem('theme', 'light');
        // Troca a imagem para a versão clara
        if (logoPrincipal) {
            logoPrincipal.src = logoClaro;
        }
    }
});

// const btnAumentar = document.getElementById('aumentar');
// const btnDiminuir = document.getElementById('diminuir');
// const btnReset = document.getElementById('reset');

// const passo = 2;
// const tamanhoMinimo = 10;
// const tamanhoMaximo = 18;
// const tamanhoPadrao = 16;

// function getTamanhoFonteAtual() {
//     const rootStyle = getComputedStyle(document.documentElement);
//     const tamanhoStr = rootStyle.getPropertyValue('--tamanho-fonte-base');
//     return parseFloat(tamanhoStr);
// }

// // Aumenta a fonte
// btnAumentar.addEventListener('click', () => {
//     const tamanhoAtual = getTamanhoFonteAtual();
//     let novoTamanho = tamanhoAtual + passo;

//     if (novoTamanho > tamanhoMaximo) {
//         novoTamanho = tamanhoMaximo;
//     }
    
//     // Mudei body.style.setProperty para document.documentElement.style.setProperty
//     document.documentElement.style.setProperty('--tamanho-fonte-base', `${novoTamanho}px`);
// });

// // Diminui a fonte
// btnDiminuir.addEventListener('click', () => {
//     const tamanhoAtual = getTamanhoFonteAtual();
//     let novoTamanho = tamanhoAtual - passo;

//     if (novoTamanho < tamanhoMinimo) {
//         novoTamanho = tamanhoMinimo;
//     }
    
//     // Mudei body.style.setProperty para document.documentElement.style.setProperty
//     document.documentElement.style.setProperty('--tamanho-fonte-base', `${novoTamanho}px`);
// });

// // Reseta a fonte
// btnReset.addEventListener('click', () => {
//     // Mudei body.style.setProperty para document.documentElement.style.setProperty
//     document.documentElement.style.setProperty('--tamanho-fonte-base', `${tamanhoPadrao}px`);
// });

// // Opcional: Salva a preferência
// window.addEventListener('beforeunload', () => {
//     const tamanhoAtual = getTamanhoFonteAtual();
//     localStorage.setItem('tamanhoFonte', tamanhoAtual);
// });

// // Opcional: Carrega a preferência
// window.addEventListener('load', () => {
//     const tamanhoSalvo = localStorage.getItem('tamanhoFonte');
//     if (tamanhoSalvo) {
//         // Mudei body.style.setProperty para document.documentElement.style.setProperty
//         document.documentElement.style.setProperty('--tamanho-fonte-base', `${tamanhoSalvo}px`);
//     }
// });

const tamanhoSalvo = localStorage.getItem('tamanhoFonte');
if (tamanhoSalvo) {
    document.documentElement.style.setProperty('--tamanho-fonte-base', `${tamanhoSalvo}px`);
}

// ----------------------------------------------------
// Acessando os botões de controle de fonte
// ----------------------------------------------------
const btnAumentar = document.getElementById('aumentar');
const btnDiminuir = document.getElementById('diminuir');
const btnReset = document.getElementById('reset');

// Definições para o controle de fonte
const passo = 2;
const tamanhoMinimo = 10;
const tamanhoMaximo = 18;
const tamanhoPadrao = 16;

function getTamanhoFonteAtual() {
    const rootStyle = getComputedStyle(document.documentElement);
    const tamanhoStr = rootStyle.getPropertyValue('--tamanho-fonte-base');
    // Retorna o tamanho atual ou o padrão se não encontrar
    return parseFloat(tamanhoStr) || tamanhoPadrao;
}

// Aumenta a fonte ao clicar no botão
if (btnAumentar) {
    btnAumentar.addEventListener('click', () => {
        const tamanhoAtual = getTamanhoFonteAtual();
        let novoTamanho = tamanhoAtual + passo;

        if (novoTamanho > tamanhoMaximo) {
            novoTamanho = tamanhoMaximo;
        }
        
        document.documentElement.style.setProperty('--tamanho-fonte-base', `${novoTamanho}px`);
        // Salva a nova preferência no localStorage
        localStorage.setItem('tamanhoFonte', novoTamanho);
    });
}

// Diminui a fonte ao clicar no botão
if (btnDiminuir) {
    btnDiminuir.addEventListener('click', () => {
        const tamanhoAtual = getTamanhoFonteAtual();
        let novoTamanho = tamanhoAtual - passo;

        if (novoTamanho < tamanhoMinimo) {
            novoTamanho = tamanhoMinimo;
        }
        
        document.documentElement.style.setProperty('--tamanho-fonte-base', `${novoTamanho}px`);
        // Salva a nova preferência no localStorage
        localStorage.setItem('tamanhoFonte', novoTamanho);
    });
}

// Reseta a fonte para o tamanho padrão
if (btnReset) {
    btnReset.addEventListener('click', () => {
        document.documentElement.style.setProperty('--tamanho-fonte-base', `${tamanhoPadrao}px`);
        // Salva o tamanho padrão no localStorage
        localStorage.setItem('tamanhoFonte', tamanhoPadrao);
    });
}