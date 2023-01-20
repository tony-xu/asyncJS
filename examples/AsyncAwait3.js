function resolve(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
function reject(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("rejected");
    }, time);
  });
}

(async () => {
  console.time("sleep");
  const delay1 = resolve(3000);
  const delay2 = resolve(2000);
  const delay3 = reject(1000);
  const data1 = await delay1;
  const data2 = await delay2;
  const data3 = await delay3;
  console.timeEnd("sleep");
})();
