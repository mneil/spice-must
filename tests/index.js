const assert = require("assert");
const { get, data, order, laps, position } = require("../index");

function uniqueCount() {
  // return 79507;
  return Object.keys(data).reduce((o, n) => o * data[n].length, 1); // * 0.5
}
const ogLaps = JSON.stringify(laps);
const ogPosition = JSON.stringify(position);
function exhaust(len) {
  const shown = [];
  let collisions = [];
  if (len === undefined) {
    len = uniqueCount();
  }
  console.log("testing", len, "names")
  for (let i = 0; i <= len; i++) {
    const o = get();
    if (shown.includes(o)) {
      collisions.push(o);
      continue;
    }
    shown.push(o);
    // if (ogLaps === JSON.stringify(laps) && ogPosition === JSON.stringify(position)) {
    //   console.log("RESET");
    // }
  }
  return collisions;
}

console.log('combinations', uniqueCount());
console.log("test laps", ogLaps);
console.log("test position", ogPosition);
const test1 = exhaust(uniqueCount() + 1);

const numbers = test1;
const duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
console.log('DUPLICATES', duplicates); // [2, 5]
// console.log(uniqueCount()+1)
assert(test1.length === 1, `Expected 1 collision but received ${test1.length}`);
// console.log(get())
// const test2 = exhaust(uniqueCount()+10);
// assert(test2 === 10, `Expected 10 collision but received ${test2}`);

// const test3Count = uniqueCount()*2
// const test3 = exhaust(test3Count);
// assert(test3 === uniqueCount(), `Expected ${uniqueCount()} collision but received ${test3}`);
