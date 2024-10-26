/**
 * Use all the memory and make all complete combinations of data
 * we can possibly get.
 */
const data = require("./names.json");
const keys = Object.keys(data);

const laps = {
  protein: 0,
  carbs: 0,
  spice: 0,
};
const position = {
  protein: 0,
  carbs: 0,
  spice: 0,
};
const order = [];
console.log("lengths", keys.map((n) => data[n].length));
const all = [];
let s = 0;
let c = 0;
let p = 0;
for (; s < data.spice.length; s++) {
  const v = `${data.protein[p]}${data.carbs[c]}${data.spice[s]}`;
  all.push(v);
  if (s === data.spice.length - 1 && c === data.carbs.length - 1 && p === data.protein.length - 1) {
    break;
  }
  if (s === data.spice.length - 1) {
    s = -1;
    c++;
    if (c === data.carbs.length) {
      c = 0;
      p++;
    }
    continue;
  }
}

console.log("ALL THE LENGTHS", all.length)
let i = 0;
function get() {
  const v = all[i];
  i++;
  if(i > all.length) {
    i = 0;
  }
  return v;
}

module.exports = {
  get,
  data,
  order,
  laps,
  position,
};
