var arr = [1, 2, 3];

arr[Symbol.iterator] = function () {
  return {
    current: 0,
    arr: this,
    next() {
      if (this.current >= this.arr.length) {
        return {
          value: undefined,
          done: true,
        };
      } else {
        return {
          value: this.arr[this.current++] + "_suffix",
          done: false,
        };
      }
    },
  };
};
for (let i of arr) {
  console.log(i);
}
