const valorFatura = 100;
const dataVencimento = "2025-05-20";
const dataPagamento = "2025-05-27";

function calculaMulta(valorFatura, dataVencimento, dataPagamento) {
    const vencimento = new Date(dataVencimento);
    const pagamento = new Date(dataPagamento);

    const diasDeAtraso = Math.floor((pagamento - vencimento) / (1000 * 60 * 60 * 24));
    
    if (diasDeAtraso > 0) {
        const multaFixa = valorFatura * 0.02;
        const multaAoDia = valorFatura * (diasDeAtraso * 0.00033);
        const faturaFinal = (valorFatura + multaFixa + multaAoDia).toFixed(2);

        console.log(`Pagamento venceu a ${diasDeAtraso} dias`);
        console.log(`Valor final da fatura: R$ ${faturaFinal}`);
    } else {
        console.log(`Valor final da fatura: R$ ${valorFatura.toFixed(2)}`);
    }
}

calculaMulta(valorFatura, dataVencimento, dataPagamento);
