import fetch from "node-fetch";

function* gen(url) {
  var response = yield fetch(url);
  var result = yield response.json();
  console.log(result);
}
var url = "https://pokeapi.co/api/v2/pokemon/1";
var g = gen(url);
var result = g.next(); // {value: T, done: boolean}
result
  .then(
    (val) => {
      return g.next(val).value;
    },
    (err) => {}
  )
  .then((val) => {
    var result = g.next(data);
    console.log(result);
  });

result.value
  .then(function (data) {
    var result = g.next(data);
    return result.value;
  })
  .then(function (data) {
    var result = g.next(data);
    return result.value;
  });

//var result = yield await fetch(url).then((v) => v.json());
// result.then(function (data) {
//   if (data.done) {
//     return data.value;
//   } else {
//     var result = g.next(data.value);
//     return result;
//   }
// });
