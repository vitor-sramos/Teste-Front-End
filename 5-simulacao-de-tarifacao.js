const consumoTotal = 600;

function calcularFatura(consumoTotal) {
    if(typeof consumoTotal == "number" && Number.isInteger(consumoTotal) && consumoTotal >= 0) {
        let valorFatura = 0;

        if(consumoTotal > 500) {
            valorFatura += (consumoTotal - 500) * 1.00;
            consumoTotal = 500;
        }

        if(consumoTotal > 100) {
            valorFatura += (consumoTotal - 100) * 0.75;
            consumoTotal = 100;
        }

        valorFatura += consumoTotal * 0.50;

        console.log(`Valor total da fatura é: ${valorFatura}`);

    } else {
        console.log("Valor de consumo total inválido!");
    }
}

calcularFatura(consumoTotal);