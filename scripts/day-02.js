const botoes = document.getElementsByClassName('btn-expand');
const expandElemento = document.querySelector('.expand');
const expandText = document.querySelector('.text');

for (let i = 0; i < botoes.length; i++) {
    if (i === 0) {
        botoes[i].addEventListener('click', function() {
            let newHeight;

            if (expandElemento.style.height === 'clamp(6.5rem, 7.5rem, 9rem)' || expandElemento.style.height === '') {
                expandElemento.style.height = 'clamp(11rem, 12rem, 13.5rem)';
                newHeight = 'clamp(11rem, 12rem, 13.5rem)';
            } else {
                expandElemento.style.height = 'clamp(6.5rem, 7.5rem, 9rem)';
                newHeight = 'clamp(6.5rem, 7.5rem, 9rem)';
            }

            // Altera o texto do botão
            if (botoes[0].innerHTML === 'Ver Menos') {
                botoes[0].innerHTML = 'Ver Mais';
            } else {
                botoes[0].innerHTML = 'Ver Menos';
            }

            // Função para alterar a exibição após 2 segundos
            setTimeout(function() {
                if (newHeight === 'clamp(11rem, 12rem, 13.5rem)') {
                    expandText.style.display = 'block';
                } else {
                    expandText.style.display = 'none';
                }
            }, 200);
        });
    }
}







