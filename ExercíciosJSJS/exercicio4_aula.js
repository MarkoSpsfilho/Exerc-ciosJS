class Aula {
  #disciplina;
  #professor;
  #estudantes;

  constructor(disciplina, professor, estudantes) {
    this.disciplina = disciplina;
    this.professor = professor;
    this.estudantes = estudantes;
  }

  get disciplina() {
    return this.#disciplina;
  }

  set disciplina(valor) {
    if (valor && valor.trim() !== "") {
      this.#disciplina = valor;
    } else {
      console.log("Erro: a disciplina não pode ser vazia");
    }
  }

  get professor() {
    return this.#professor;
  }

  set professor(valor) {
    if (valor && valor.trim() !== "") {
      this.#professor = valor;
    } else {
      console.log("Erro: o professor não pode ser vazio");
    }
  }

  get estudantes() {
    return this.#estudantes;
  }

  set estudantes(valor) {
    if (Number.isInteger(valor) && valor >= 0) {
      this.#estudantes = valor;
    } else {
      console.log("Erro: quantidade de estudantes inválida");
    }
  }

  exibirDados() {
    return `Disciplina: ${this.#disciplina} - Professor: ${this.#professor} - Estudantes: ${this.#estudantes}`;
  }

  static compararEstudantes(a1, a2) {
    if (a1.estudantes > a2.estudantes) {
      return a1.disciplina;
    } else if (a2.estudantes > a1.estudantes) {
      return a2.disciplina;
    } else {
      return "As turmas possuem a mesma quantidade de estudantes";
    }
  }
}

const aula1 = new Aula("Matemática", "João", 30);
const aula2 = new Aula("História", "Maria", 25);
const aula3 = new Aula("Física", "Carlos", 40);

console.log(aula1.exibirDados());
console.log(aula2.exibirDados());
console.log(aula3.exibirDados());

console.log(Aula.compararEstudantes(aula1, aula3));

aula1.estudantes = -10;
