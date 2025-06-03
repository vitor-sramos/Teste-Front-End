const leiturasDiarias = [0, 120, 150, 0, 90, 0, 130];

function mediaLeituras(leiturasDiarias) {
  if (leiturasDiarias.length !== 0) {

    const leiturasValidas = leiturasDiarias.filter((leituras) => leituras !== 0);
    const soma = leiturasValidas.reduce((soma, leituras) => (soma += leituras));

    const media = soma / leiturasValidas.length;
    console.log("A média das leituras diárias é: " + media.toFixed(2));
    
  } else {
    console.log("Array de leituras diárias está vazio");
  }
}

mediaLeituras(leiturasDiarias);
