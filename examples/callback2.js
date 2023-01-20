import fs from "fs";

fs.readFile(fileA, function (err, data) {
  fs.readFile(fileB, function (err, data) {
    // callback hell, the code is not growing vertically, but horizontally
    // hard to read and debug.
  });
});
