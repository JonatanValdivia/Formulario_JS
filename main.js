'use strict';
const cadastrar = document.getElementById('InputCadastrar')
cadastrar.addEventListener('click', exibirCaixaCadastro);

function exibirCaixaCadastro(){
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
