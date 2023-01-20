async function async1() {
  console.log("async1 start"); // 1
  await async2();
  console.log("async1 end"); // 4
  setTimeout(() => {
    console.log("timer1"); // 7
  }, 0);
}

async function async2() {
  setTimeout(() => {
    console.log("timer2"); // 5
  }, 0);
  console.log("async2"); // 2
}

async1();
setTimeout(() => {
  console.log("timer3"); // 6
}, 0);
console.log("start"); // 3
