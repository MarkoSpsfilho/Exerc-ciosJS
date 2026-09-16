class NumeroDoisDigitos {
  #valor;

  constructor(numero) {
    this.valor = numero;
  }

  get valor() {
    return this.#valor;
  }

  set valor(numero) {
    if (Number.isInteger(numero) && numero >= 10 && numero <= 99) {
      this.#valor = numero;
    } else {
      console.log("Erro: o número deve ter exatamente dois dígitos positivos");
    }
  }

  somarDigitos() {
    if (this.#valor === undefined) {
      return "Não é possível somar, o objeto não possui um valor válido";
    }
    const dezena = Math.floor(this.#valor / 10);
    const unidade = this.#valor % 10;
    return dezena + unidade;
  }

  exibirResultado() {
    console.log(`Valor: ${this.#valor} - Soma dos dígitos: ${this.somarDigitos()}`);
  }
}

const numero1 = new NumeroDoisDigitos(23);
numero1.exibirResultado();
numero1.valor = 85;
numero1.exibirResultado();

const numero2 = new NumeroDoisDigitos(9);
numero2.valor = 105;
numero2.valor = 47;
numero2.exibirResultado();
