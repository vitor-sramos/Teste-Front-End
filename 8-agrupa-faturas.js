const faturas = [
  { clienteId: 1, valor: 120 },
  { clienteId: 2, valor: 150 },
  { clienteId: 1, valor: 130 },
  { clienteId: 3, valor: 200 }
];

function agruparFaturas(faturas) {
  const resultado = {};

  faturas.forEach((fatura) => {
    const id = fatura.clienteId;
    if (!resultado[id]) {
      resultado[id] = { clienteId: id, totalPendente: 0 };
    }
    resultado[id].totalPendente += fatura.valor;
  });

   Object.values(resultado).forEach(fatura => {
        console.log(fatura);
    });
}

agruparFaturas(faturas)
