/* 

Objetivo 1 - quando clicarmos na seta de avançar teremos que mostrar o próximo cartão da lista:

    - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
    - passo 2 - dar um jeito de identificar o clique do usuario na seta avançar
    - passo 3 - fazer aparecer o próximo cartão da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder
    
    
    
    */

    //- passo 1 - dar um jeito de pegar o elemento HTML da seta avancar

    
    const btnAvancar = document.getElementById("btn-avancar");
    
    // - passo 3 - fazer aparecer o próximo cartão da lista
        
    const cartoes = document.querySelectorAll(".cartao");
    let cartaoAtual = 0;

    function esconderCartaoSelecionado(){
        const cartaoSelecionado = document.querySelector(".selecionado");
        cartaoSelecionado.classList.remove("selecionado");


    }

    function mostrarCartao(indiceCartao){
        cartoes[indiceCartao].classList.add("selecionado");
    }

    // - passo 2 - dar um jeito de identificar o clique do usuario na seta avançar

btnAvancar.addEventListener("click", function () {
        if (cartaoAtual === cartoes.length -1) return;

        esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
        
    // - passo 4 - buscar o cartão que esta selecionado e esconder
    
    

});
    

/*Objetivo 2 - quando clicarmos na seta de voltar teremos que mostrar o cartão anterior da lista:

    - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
    - passo 2 - dar um jeito de identificar o clique do usuario na seta voltar
    - passo 3 - fazer aparecer o próximo cartão da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder*/

    const btnVoltar = document.getElementById("btn-voltar");
    
    // - passo 2 - dar um jeito de identificar o clique do usuario na seta avançar

btnVoltar.addEventListener("click", function () {
    
    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
        
    // - passo 4 - buscar o cartão que esta selecionado e esconder
    
    

});