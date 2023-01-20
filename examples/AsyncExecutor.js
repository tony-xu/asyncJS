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
    var g = genFn.apply(this, arguments);
    return new Promise((resolve, reject) => {
      function step(method, data) {
        try {
          var re = g[method](data); // {value: T, done:boolean}
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
              step("throw", val);
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
  (err) => {}
);

// function asyncFuncRunner(genfn) {
//   return function () {
//     // arguments is an Array-like object accessible inside functions
//     const gen = genfn.apply(this, arguments);
//     return new Promise((resolve, reject) => {
//       function step(method, data) {
//         try {
//           var result = gen[method](data);
//         } catch (err) {
//           reject(err);
//           return;
//         }

//         if (result.done) {
//           resolve(result.value);
//         } else {
//           return Promise.resolve(result.value).then(
//             (val) => {
//               step("next", val);
//             },
//             (err) => {
//               step("throw", err);
//             }
//           );
//         }
//       }
//       step("next");
//     });
//   };
// }

// function asyncFuncRunner(genfn) {
//   return function () {
//     // arguments is an Array-like object accessible inside functions
//     const gen = genfn.apply(this, arguments);
//     return new Promise((resolve, reject) => {
//       function step(method, arg) {
//         try {
//           var info = gen[method](arg);
//           var value = info.value;
//         } catch (error) {
//           reject(error);
//           return;
//         }
//         if (info.done) {
//           resolve(value);
//         } else {
//           return Promise.resolve(value).then(
//             (val) => {
//               step("next", val);
//             },
//             (err) => {
//               step("throw", err);
//             }
//           );
//         }
//       }
//       step("next");
//     });
//   };
// }

// const test = genExecutor(generator)(1);
// test.then(
//   (val) => console.log(val),
//   (err) => {
//     console.error(err);
//   }
// );
