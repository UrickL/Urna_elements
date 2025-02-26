

export function getVotingCategoriesData() {

  // Remember ID:0 = 'Null' > reserved vote id!

  return {
    LÍDER: {
      digits: 2,
      candidates: [
        {Id: 11, Nome: "Nivia", Partido: "Breadzil", pictureUrl: "nivia.jpeg"},
        {Id: 22, Nome: "Beatriz Aranha", Partido: "Brapzza", pictureUrl: "bia.jpeg"},
        {Id: 33, Nome: "Maria Luiza", Partido: "Massa", pictureUrl: "malu.jpeg"}
		{Id: 44, Nome: "Breno Almeida", Partido: "Breadzil", pictureUrl: "breno.jpeg"},
        {Id: 55, Nome: "Pedro Antônio", Partido: "Brapzza", pictureUrl: "pedro.jpeg"},
        {Id: 66, Nome: "Juan Maracajá", Partido: "Massa", pictureUrl: "juan.jpeg"}
		{Id: 77, Nome: "João Gabriel", Partido: "Massa", pictureUrl: "joao.jpeg"}
      ]
    },
    Secretário: {
      digits: 3,
      candidates: [
        {Id: 444, Nome: "Sofia Alexandre", Partido: "RefriBra", pictureUrl: "refri.png"},
        {Id: 777, Nome: "Suco", Partido: "Frutas", pictureUrl: "suco.png"},
        {Id: 999, Nome: "Água", Partido: "Potável", pictureUrl: "agua.png"}
      ]
    },
    // automoveis: { //Basta descomentar isso para funcionar!
    //   digits: 4,
    //   candidates: [
    //     {Id: 1111, Nome: "Carro", Partido: "Combustão"},
    //     {Id: 2222, Nome: "Bicicleta", Partido: "Ambiente"},
    //     {Id: 3333, Nome: "Aviao", Partido: "Nuvem"}
    //   ]
    // }
  }
}