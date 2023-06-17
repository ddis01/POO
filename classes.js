class LojaDoBrasil {
    constructor(nome, cnpj) {
        this.nome = nome,
            this.cnpj = cnpj;
    }
}

class Cliente {
    constructor(nome, telefone, cpf, endereco,) {
        this.nome = nome,
            this.telefone = telefone,
            this.cpf = cpf,
            this.endereco = endereco;
    }
}

class Produto {
    constructor(nome, precoUnitario) {
        this.nome = nome,
            this.precoUnitario = precoUnitario;

    }
}

class Item {
    constructor(produto, quantidade, precoTotal) {
        this.quantidade = quantidade,
            this.produto = produto,
            this.precoTotal = precoTotal;
    }
    calcularPrecoTotal() {
        return this.quantidade * this.precoUnitario
    }
}

class Pedido {
    constructor(loja, cliente, frete, numeroDoPedido, precoTotal, data, itensPedidos) {
        this.numeroDoPedido = numeroDoPedido,
            this.precoTotal = precoTotal,
            this.data = data,
            this.loja = loja,
            this.cliente = cliente,
            this.frete = frete,
            this.itensPedidos = itensPedidos;
    }

    calcularSubtotal() {
        let subtotal = 0;
        for (let i = 0; i < this.itensPedidos.length; i++) {
            this.subtotal += this.itensPedidos[i].calcularPrecoTotal()
        }
        return subtotal;
    }

    calcularTotal() {
        return this.subtotal() + this.frete;
    }

    adicionarItem(item) {
        this.itensPedidos.push(item)
    }

    removerItem(item) {
        for (let i = 0; i < this.itensPedidos.length; i++) {
            if (this.itensPedidos[i].item == item) {
                this.itensPedidos.splice(i, 1);
                i--;
            }
        }
    }

}

