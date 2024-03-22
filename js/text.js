var titulo = document.querySelector('.titulo');
titulo.textContent = "Lista de encomendas";

var linhastabela = document.querySelectorAll(".linha");

for (i = 0; i < linhastabela.length; i++) {

    var qtdElemento = linhastabela[i].querySelector(".info-qtd");
    var valorElemento = linhastabela[i].querySelector(".info-valor");

    // Valida a quantidade
    if (qtdElemento.textContent < 1 || isNaN(qtdElemento.textContent)) {
        // Quantidade não válida, avisa o usuário
        qtdElemento.textContent = "QTD INVÁLIDA";
        
        // Adiciona estilo para destacar em vermelho
        qtdElemento.style.color = "red";
        // Valida o valor
   
    } else {
         if (valorElemento.textContent < 1 || isNaN(valorElemento.textContent)) {
        // Valor não válido, avisa o usuário
        valorElemento.textContent = "VALOR INVÁLIDO";
        
        // Adiciona estilo para destacar em vermelho
        linhastabela[i].style.backgroundColor = "red";
    }else{
        // O valor foi validado, prossegue
        linhastabela[i].querySelector(".info-total").textContent = calculaTotal(valorElemento.textContent, qtdElemento.textContent);
    } 
    }
}
    

    

function calculaTotal(qtd, unitario) {
    var total = qtd * unitario;
    return total;
}







function adicionarEncomenda() {

    
    // Obter os valores do formulário
    var nome = document.getElementById("nome").value;
    var quantidade = document.getElementById("quantidade").value;
    var produto = document.getElementById("produto").value;
    var valor = document.getElementById("valor").value;
    
    // Calcular o total
    var total = calculaTotal(quantidade, valor);
    var valor = parseFloat(valor);
    
    // Criar uma nova linha na tabela
    var tabela = document.getElementById("tabelaEncomendas");
    
    var novaLinha = tabela.insertRow();
    var colunaNome = novaLinha.insertCell(0);
    var colunaProduto = novaLinha.insertCell(1);
    var colunaQuantidade = novaLinha.insertCell(2);
    var colunaValor = novaLinha.insertCell(3);
    var colunaTotal = novaLinha.insertCell(4);
    
    // Adicionar os valores às células da nova linha
  
    if (quantidade < 0){
      colunaNome.textContent = "---";
      colunaProduto.textContent = "---";
      colunaQuantidade.textContent = "QUANTIDADE INVALIDA";
      colunaValor.textContent = "---";
      colunaTotal.textContent = "---";
  
    } else if (valor < 0){
      colunaNome.textContent = "---";
      colunaProduto.textContent = "---";
      colunaQuantidade.textContent = "---";
      colunaValor.textContent = "VALOR INVALIDO";
      colunaTotal.textContent = "---";
  
    }else{
      colunaNome.textContent = nome;
      colunaProduto.textContent = produto;
      colunaQuantidade.textContent = quantidade;
      colunaValor.textContent = (valor);
      colunaTotal.textContent = (total);
  
  
    }
      
    }
