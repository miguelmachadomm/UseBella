let total = 0;

function adicionarAoCarrinho(nome, preco) {
    const listaCarrinho = document.getElementById('lista-carrinho');
    const itemCarrinho = document.createElement('li');
    itemCarrinho.textContent = `${nome} - R$${preco.toFixed(2)}`;
    listaCarrinho.appendChild(itemCarrinho);

    total += preco;
    document.getElementById('total').textContent = total.toFixed(2);
}

// Função de exemplo para finalizar a compra
document.getElementById('finalizar-compra').addEventListener('click', () => {
    alert('Compra finalizada! Total: R$' + total.toFixed(2));
    document.getElementById('lista-carrinho').innerHTML = '';
    total = 0;
    document.getElementById('total').textContent = total.toFixed(2);
});
