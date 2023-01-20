// babel --plugins @babel/plugin-transform-async-to-generator script.js

async function getPokemon(id) {
  try {
    var result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  } catch (error) {
    console.log(error);
  }
  var value = await result.json();
  return value.species;
}
