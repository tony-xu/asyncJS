import fs from 'fs';

fs.readFile('./test.txt', function (err, data) {
  if (err) throw err;
  console.log(data.toString());
});
