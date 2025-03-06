

export function getVotingCategoriesData() {

  // Remember ID:0 = 'Null' > reserved vote id!
  return {
    LÍDER: {
      digits: 2,
      candidates: [
       {Id: 11, Nome: "Nivia Gabrielle", Partido: "ETERNAL WATER", pictureUrl: "nivia.jpeg"},
        {Id: 22, Nome: "Beatriz Aranha", Partido: "RADIANT FIRE", pictureUrl: "bia.jpeg"},
        {Id: 33, Nome: "Maria Luiza", Partido: "ETERNAL WATER", pictureUrl: "malu.jpeg"},
		{Id: 44, Nome: "Breno Almeida", Partido: "GLORIOUS LIGHT", pictureUrl: "breno.jpeg"},
        {Id: 55, Nome: "Pedro Antônio", Partido: "GLORIOUS LIGHT", pictureUrl: "pedro.jpeg"},
        {Id: 66, Nome: "Juan Maracajá", Partido: "NATURAL GREEN", pictureUrl: "juan.jpeg"},
	{Id: 77, Nome: "João Gabriel", Partido: "NATURAL GREEN", pictureUrl: "joao.jpeg"},
		{Id: 88, Nome: "Sofia Alexandre", Partido: "RADIANT FIRE", pictureUrl: "sofia.jpeg"},
      ]
    }
  }
