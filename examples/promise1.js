// var readFile = require('fs-readfile-promise');

// readFile(fileA)
// .then(function(data){
//   console.log(data.toString());
// })
// .then(function(){
//   return readFile(fileB);
// })
// .then(function(data){
//   console.log(data.toString());
// })
// .catch(function(err) {
//   console.log(err);
// });
  

const fetch = require('node-fetch');
const fs = require('fs');

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then((result)=>result.json()) // return another promise
  .then((data)=>console.log(data))
  .catch((err)=> console.error(err));