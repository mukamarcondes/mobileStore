function adicionar() {

    
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

    novaLinha.classList.add('cliente');

    var colunaNome = novaLinha.insertCell(0);

    colunaNome.classList.add('info-nome');

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
