const imagens = document.querySelectorAll('.imagens')
const setaVoltar = document.getElementById('seta-voltar')
const setaAvancar = document.getElementById('seta-avancar')

let imagemAtual = 0

function esconderImagem(){
    const imagemAberta = document.querySelector('.mostrar')
    imagemAberta.classList.remove('mostrar')
}

function mostrarImagem(){
    imagens[imagemAtual].classList.add('mostrar')
    
    if(imagemAtual === 0){
        setaVoltar.classList.add('opacidade')
    }else{
        setaVoltar.classList.remove('opacidade')
    }

    if(imagemAtual === 3){
        setaAvancar.classList.add('opacidade')
    }else{
        setaAvancar.classList.remove('opacidade')
    }
    
}

setaAvancar.addEventListener('click', function(){
    if(imagemAtual === 3){
        return
    }
    imagemAtual++
    esconderImagem()
    mostrarImagem()
})

setaVoltar.addEventListener('click', function(){
    if(imagemAtual === 0){
        return
    }
    imagemAtual--
    esconderImagem()
    mostrarImagem()
})