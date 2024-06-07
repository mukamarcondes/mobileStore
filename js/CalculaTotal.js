// Captura todos os clientes que fizeram encomendas
var clientes = document.querySelectorAll(".cliente");

// Passa por cada cliente, calculando o valor total
clientes.forEach(function(cliente) {
    // Captura a quantidade encomendada
    var qtde = parseInt(cliente.querySelector(".info-qtde").textContent);

    // Captura o valor unitário do produto
    var unitario = parseFloat(cliente.querySelector(".info-valor").textContent);

    // Valida a quantidade
    if (qtde < 1 || isNaN(qtde)) {
        // Quantidade NOK, avise o usuário
        cliente.querySelector(".info-qtde").textContent = "QTDE INVÁLIDA!";
        cliente.style.color = "red";
    } else {
        // Quantidade OK, pode prosseguir
        // Calcula o valor total da encomenda
        cliente.querySelector(".info-total").textContent = calculaTotal(qtde, unitario);
    }
});

// Função para calcular o valor total da encomenda
function calculaTotal(qtde, unitario) {
    var total = 0;
    total = qtde * unitario;
    return total;
}