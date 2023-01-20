function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function test() {
  return _test.apply(this, arguments);
}
function _test() {
  _test = _asyncToGenerator(function* () {
    try {
      const foo = yield new Promise((resolve) =>
        setTimeout(() => {
          resolve(1);
        }, 1000)
      );
    } catch (err) {
      console.log(err);
    }
    const bar = yield new Promise((resolve) =>
      setTimeout(() => {
        resolve(2);
      }, 1000)
    );
    return bar;
  });
  return _test.apply(this, arguments);
}



