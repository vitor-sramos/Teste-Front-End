const clientes = [
  { nome: "Ana", consumo: 400 },
  { nome: "Bruno", consumo: 650 },
  { nome: "Carla", consumo: 200 },
];

function adicionarCategoria(clientes) {
  clientes.forEach((cliente) => {

    if (cliente.consumo < 300) {
      cliente.categoria = "Baixo";
    } else if (cliente.consumo < 600) {
      cliente.categoria = "Médio";
    } else {
      cliente.categoria = "Alto";
    }
    
  });

  clientes.forEach((cliente) => {
    console.log(cliente);
  });
}

adicionarCategoria(clientes);
