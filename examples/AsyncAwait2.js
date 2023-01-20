import fetch from 'node-fetch';

const fetchPokemon = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`); // paused in a non-blocking way until the promise settles
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
fetchPokemon(2);