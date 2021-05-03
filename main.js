'use strict';
const cadastrar = document.getElementById('InputCadastrar');
cadastrar.addEventListener('click', function exibirCaixaCadastro(){
  //Já removemos assim que for clicado, para não haver repetição da função (que é criar um elemento)
  cadastrar.removeEventListener('click', exibirCaixaCadastro);
    //Primeiro informamos o item que desejamos criar: 
    const itemASerCriado = document.createElement('div');
    //Agora informamos a classe dele
    itemASerCriado.classList.add('cadastrarCliente');
  
    itemASerCriado.innerHTML = 
      `
        <h4>Novo cliente</h4>
        <hr>
        <div id="inputGroup">
          <input type="text" placeholder="Nome completo">
          <input type="text" placeholder="Celular">
          <input type="text" placeholder="E-mail">
          <input type="text" placeholder="Cidade">
        </div>
        <input type="button" value="Salvar"> 
        <input type="button" value="Cancelar">
      `
      document.getElementById('sessaoCadastro').appendChild(itemASerCriado);
});

const cadastrar2 = document.getElementById('InputCadastrar')
cadastrar.addEventListener('click', animacoes);

function animacoes(){
  const sessaoCadastro = document.getElementById('sessaoCadastro');
  sessaoCadastro.style.animation = 'go-back 1s';
  sessaoCadastro.style.backgroundColor = 'rgb(30, 33, 51)';
  sessaoCadastro.style.borderRadius = '4rem';
}


/*
<div class="cadastrarCliente">
        <h4>Novo cliente</h4>
        <hr>
        <div id="inputGroup">
          <input type="text" placeholder="Nome completo">
          <input type="text" placeholder="Celular">
          <input type="text" placeholder="E-mail">
          <input type="text" placeholder="Cidade">
        </div>
        <input type="button" value="Salvar"> 
        <input type="button" value="Cancelar">
      </div>
*/
