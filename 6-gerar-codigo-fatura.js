const numeroCliente = 12345;
const numeroFatura = 67890;

function gerarCodigoFatura(numeroCliente, numeroFatura) {
    const data = new Date();

    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = String(data.getFullYear())
    const dataAtual = `${ano}${mes}${dia}`;

    const codigoFatura = `${numeroCliente}-${numeroFatura}-${dataAtual}`;
    return codigoFatura;
}
console.log(gerarCodigoFatura(numeroCliente, numeroFatura));
