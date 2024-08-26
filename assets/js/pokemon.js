import { data } from './data.js';

function getPokemon(query, callback) {
    setTimeout(() => {
        const result = data.find(pokemon => pokemon.id === query || pokemon.name.toLowerCase() === query.toLowerCase());
        callback(result);
    }, 1000); 
}

function sortPokemon(criteria, callback) {
    setTimeout(() => {
        const sortedData = [...data].sort((a, b) => {
            if (criteria === 'name') {
                return a.name.localeCompare(b.name);
            }
            return a.id - b.id;
        });
        callback(sortedData);
    }, 500); 
}

export { getPokemon, sortPokemon };
