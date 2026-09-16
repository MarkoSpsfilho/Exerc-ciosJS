class BoasVindas {
  static mensagem(param) {
    if (typeof param === "undefined") {
      console.log("Bem-vindo(a) ao sistema!");
    } else if (typeof param === "string") {
      console.log(`Bem-vindo(a), ${param}!`);
    } else if (typeof param === "object") {
      console.log(`Bem-vindo(a), ${param.nome}! Data de acesso: ${param.data}`);
    }
  }
}

BoasVindas.mensagem();
BoasVindas.mensagem("Roberto");
BoasVindas.mensagem({ nome: "Maria Baderna", data: "01/09/2026" });
