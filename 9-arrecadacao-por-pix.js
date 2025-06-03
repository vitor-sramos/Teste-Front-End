const pagamentosViaPix = [50.00, 120.50, 30.00, 80.25];

function arrecadacaoPorPix(pagamentos) {
    if(pagamentos.length > 0) {

        const totalArrcadado = pagamentos.reduce((total, valor) => total += valor);
        const trasacoes = pagamentos.length;
            
        console.log("RESULTADO:");
        console.log(`Total arrecadado: ${totalArrcadado}`);
        console.log(`Transações: ${trasacoes}`);
        
    } else {
        console.log("Lista de pagamentos está vazia");
    }
}
arrecadacaoPorPix(pagamentosViaPix);