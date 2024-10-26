const assert = require("assert");
const { flow } = require("../index");
const data = require('../names.json');

function uniqueCount() {
  // 79507
  return Object.keys(data).reduce((o, n) => o * data[n].length, 1);
}

function exhaust(len) {
  const shown = [];
  let collisions = [];
  if (len === undefined) {
    len = uniqueCount();
  }
  for (let i = 0; i < len; i++) {
    const o = flow();
    if (shown.includes(o)) {
      collisions.push(o);
      continue;
    }
    shown.push(o);
  }
  return collisions;
}

// console.log('combinations', uniqueCount());
const test1 = exhaust(uniqueCount() + 1);
assert(test1.length === 1, `Expected 1 collision but received ${test1.length}`);

const test2 = exhaust(uniqueCount()+10);
assert(test2.length === 10, `Expected 10 collision but received ${test2.length}`);

const test3Count = uniqueCount()*2
const test3 = exhaust(test3Count);
assert(test3.length === uniqueCount(), `Expected ${uniqueCount()} collision but received ${test3.length}`);
