const chamada = () => {
  let tudo = {
    nota1: Number(prompt("Digite a nota 1")),
    nota2: Number(prompt("Digite a nota 2")),
    nota3: Number(prompt("Digite a nota 3")),
    tipo: prompt(
      "Digite A para média aritmetica, P para ponderada e H para harmonica"
    ).toUpperCase(),
  };
  atividade2(tudo);
};

const atividade2 = (tudo) => {
  let { nota1, nota2, nota3, tipo } = tudo;
  let media = 0;

  switch (tipo) {
    case "A":
      media = (nota1 + nota2 + nota3) / 3;
      break;
    case "P":
      media = (nota1 * 5 + nota2 * 3 + nota3 * 2) / 10;
      break;
    case "H":
      media = 3 / (1 / nota1 + 1 / nota2 + 1 / nota3);
      break;
    default:
      alert("Tipo de média inválida");
      return 0;
  }
  let texto = `A média do aluno é ` + media.toFixed(2);
  imprimirNoHTML(texto);
};

const imprimirNoHTML = (texto = "Não foi enviado nada") => {
  const h1 = document.getElementById("resposta");
  h1.innerText = texto;
};
chamada();
