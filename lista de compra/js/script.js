let listaDeCompras = [];

function adicionarItem() {
    const itemInput = document.getElementById("itemInput");
    const item = itemInput.value.trim();

    if (item !== "") {
        listaDeCompras.push(item);
        itemInput.value = "";
        atualizarLista();
    } else {
        alert("Digite um nome válido para o item.");
    }
}

function removerItem() {
    if (listaDeCompras.length > 0) {
        listaDeCompras.pop();
        atualizarLista();
    } else {
        alert("A lista está vazia.");
    }
}

function pesquisarItem() {
    const pesquisa = document.getElementById("itemSearch").value.trim();
    const resultado = document.getElementById("resultadoPesquisa");
    const lista = document.getElementById("listaDeCompras");

    if (pesquisa !== "") {
        let encontrado = false;
        // Verifica se é um número para buscar pela posição
        if (!isNaN(pesquisa)) {
            const posicao = parseInt(pesquisa);
            if (posicao >= 1 && posicao <= listaDeCompras.length) {
                alert(`Item encontrado: ${listaDeCompras[posicao - 1]} na posição ${posicao}`);
                encontrado = true;
            }
        } else {
            // Busca pelo nome
            listaDeCompras.forEach((item, index) => {
                if (item.toLowerCase().includes(pesquisa.toLowerCase())) {
                    alert(`Item encontrado: ${item} na posição ${index + 1}`);
                    encontrado = true;
                }
            });
        }

        if (!encontrado) {
            alert("Item não encontrado.");
        }
    } else {
        alert("Digite um termo de pesquisa.");
    }
}

function atualizarLista() {
    const lista = document.getElementById("listaDeCompras");
    lista.innerHTML = "";  // Limpa a lista

    listaDeCompras.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${item}`;
        lista.appendChild(li);
    });
}
