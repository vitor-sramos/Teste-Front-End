const clientes = [
  { nome: "João", faturasPendentes: 2, valorTotalPendente: 300 },
  { nome: "Maria", faturasPendentes: 0, valorTotalPendente: 0 },
  { nome: "Pedro", faturasPendentes: 1, valorTotalPendente: 150 },
];

function filtraInadimplentes(clientes) {
  if (clientes.length === 0) {
    console.log("Lista de clientes está vazia!");
    return [];
  }
  const inadimplentes = clientes.filter(
    (cliente) => cliente.faturasPendentes > 0
  );

  inadimplentes.forEach((cliente) => {
    console.log(cliente);
  });
}
filtraInadimplentes(clientes);
