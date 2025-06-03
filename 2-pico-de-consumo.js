const consumoHorario = [100, 320, 340, 290, 310, 305, 301, 250];
const consumo = 300;

function maiorSequencia(arrayConsumo, consumo) {
  if (consumoHorario.length > 0) {

    let sequenciaAtual = 0;
    let maiorSequencia = 0;

    for (let i = 0; i < arrayConsumo.length; i++) {
      if (arrayConsumo[i] > consumo) {
        sequenciaAtual++;

        if (sequenciaAtual > maiorSequencia) {
          maiorSequencia = sequenciaAtual;
        }
      } else {
        sequenciaAtual = 0;
      }
    }

    console.log(`A maior sequência com consumo maior que ${consumo} kWh é: ${maiorSequencia}`);
    
  } else {
    console.log("Array de cosumo horário está vazio");
  }
}

maiorSequencia(consumoHorario, consumo);
