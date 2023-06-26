const botoes = document.getElementsByClassName('faq-pergunta');

for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener('click', function() {
    const liPai = this.parentNode;
    const paragrafoFilho = liPai.querySelector('p');

    if (!paragrafoFilho.classList.contains('esconder')) {
      paragrafoFilho.style.maxHeight = '0';
      paragrafoFilho.classList.add('esconder');
    } else {
      paragrafoFilho.style.maxHeight = paragrafoFilho.scrollHeight + 'px';
      paragrafoFilho.classList.remove('esconder');
    }
  });
}