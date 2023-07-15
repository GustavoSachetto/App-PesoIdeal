const botao = document.querySelector('.botao');
const imagem = document.querySelector('.img-botao');
const nav = document.getElementById('nav');

function abrirMenu() {
    
    nav.classList.toggle('ativo');            

    if (nav.classList.contains('ativo')) {
        nav.classList.add('abrindoMenu');
        imagem.src = "view/img/menu-fechar.png";    
    } else {    
        nav.classList.remove('abrindoMenu');
        imagem.src = "view/img/menu.png";    
    }

    setTimeout(() => {
        nav.classList.remove('ativo');
        imagem.src = "view/img/menu.png";
    }, 10000);

}
