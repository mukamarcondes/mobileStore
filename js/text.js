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