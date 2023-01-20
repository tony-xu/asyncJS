import fetch from "node-fetch";

function* generator(id) {
  try {
    var result = yield fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  } catch (error) {
    console.log(error);
  }
  var value = yield result.json();
  return value.species;
}

function genExecutor(genFn) {
  return function () {
    var gen = genFn.apply(this, arguments);
    return new Promise((resolve, reject) => {
      function step(method, data) {
        try {
          var re = gen[method](data); // {value: any, done:boolean}
        } catch (err) {
          reject(err);
          return;
        }
        if (re.done) {
          resolve(re.value);
        } else {
          return Promise.resolve(re.value).then(
            (val) => {
              step("next", val);
            },
            (err) => {
              step("throw", err);
            }
          );
        }
      }
      step("next");
    });
  };
}
var res = genExecutor(generator)(1);
res.then(
  (val) => {
    console.log(val);
  },
  (err) => {
    console.error(err);
  }
);
