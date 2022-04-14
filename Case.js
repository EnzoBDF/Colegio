const verificarProduto = function (opcao) {
  let resultado = "<br><h3>Opção selecionada</h3><br><br>";
  switch (opcao) {
    case "hb1":
      resultado += "Hamburguer Simples está com preço de R$30,10";
      console.log("Hamburguer Simples está com preço de R$30,10");
      break;
    case "hb2":
      resultado += "Hamburguer Duplo está com preço de R$35,10";
      console.log("Hamburguer Duplo está com preço de R$35,10");
      break;
    case "hb3":
      resultado += "Hamburguer Bacon está com preço de R$53,10";
      console.log("Hamburguer Bacon está com preço de R$53,10");
      break;
    default:
      resultado += "Opção inválida";
      console.log("Opção inválida");
      break;
  }

  document.getElementById("resultado").innerHTML = resultado;
};
