// function getArray($start, $end)
// {
//   $dataArray = [];
//   for ($i = $start; $i <= $end; $i++) {
//     $dataArray[] = $i;
//   }
//   return dataArray;
// }

// foreach (getArray(1, PHP_INT_MAX) as $value) {
//   // loop it
// }

// function getArrayGenerator($start, $end) {
//   for ($i = $start; $i <= $end; $i++) {
//     yield $i;
//   }
// }

// "Allowed memory size of 536870912 byes exhausted (tried to allocate 536870920 bytes)"

// generator example
function* gen(x) {
  var y = yield x + 2;
  var z = yield y + 3;
  return z;
}

var g = gen(1);
g.next(); // { value: 3, done: false }
g.next(3); // { value: 6, done: false }
g.next(6); // { value: 6, done: true }

// error handling
function* gen(x) {
  try {
    var y = yield x + 2;
  } catch (e) {
    console.log(e);
  }
  return y;
}
var g = gen(1);
g.next();
g.throw("error");
