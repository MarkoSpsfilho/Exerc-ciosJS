class Semaforo {
  #cor;
  #duracao;

  constructor(cor = "vermelho", duracao = 60) {
    this.cor = cor;
    this.duracao = duracao;
  }

  get cor() {
    return this.#cor;
  }

  set cor(valor) {
    const coresValidas = ["vermelho", "amarelo", "verde"];
    if (coresValidas.includes(valor.toLowerCase())) {
      this.#cor = valor.toLowerCase();
    } else {
      console.log("Erro: cor inválida");
    }
  }

  get duracao() {
    return this.#duracao;
  }

  set duracao(valor) {
    if (valor >= 0) {
      this.#duracao = valor;
    } else {
      console.log("Erro: a duração não pode ser negativa");
    }
  }

  ehVermelho() {
    return this.#cor === "vermelho";
  }

  ehAmarelo() {
    return this.#cor === "amarelo";
  }

  ehVerde() {
    return this.#cor === "verde";
  }

  exibirEstado() {
    return `O semáforo está na cor ${this.#cor}, com duração de ${this.#duracao} segundos.`;
  }
}

const semaforo1 = new Semaforo();
semaforo1.cor = "azul";
semaforo1.cor = "verde";
semaforo1.duracao = -5;
semaforo1.duracao = 10;
console.log(semaforo1.ehVermelho());
console.log(semaforo1.exibirEstado());

const semaforo2 = new Semaforo("amarelo", 15);
console.log(semaforo2.cor);
semaforo2.cor = "violeta";
semaforo2.duracao = 20;
console.log(semaforo2.ehAmarelo());
console.log(semaforo2.exibirEstado());
