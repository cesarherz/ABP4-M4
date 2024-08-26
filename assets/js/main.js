import { getPokemon, sortPokemon } from './pokemon.js';

getPokemon(25, (result) => {
  console.log('Pokemon encontrado:', result);
});

sortPokemon('name', (sortedData) => {
  console.log('Pokémon ordenados por nombre:', sortedData);
});

document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('search').value;
    
    getPokemon(isNaN(query) ? query : Number(query), (result) => {
      document.getElementById('result').textContent = result ? 
        `ID: ${result.id}, Name: ${result.name}, Types: ${result.types.join(', ')}` : 'Pokémon no encontrado';
    });
  });
  
