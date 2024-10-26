const data = require("./names.json");
const keys = Object.keys(data);
// create a list of indices of each data key and randomize it
const order = keys.reduce((o, key) => {
  o[key] = Array(data[key].length)
    .fill(1)
    .map((_, i) => i)
    .sort(() => Math.random() - 0.5);
  return o;
}, {});
// current position of each data key. They all start at 0 which points to a random index in order
const laps = keys.reduce((o, key) => {
  o[key] = 0;
  return o;
}, {});
// track the position we're in for each lap
const position = keys.reduce((o, key) => {
  o[key] = order[key][laps[key]];
  return o;
}, {});


console.log("order", order);
console.log("position", position);
console.log("laps", laps);

function get() {
  return keys.reduce((o, key) => {
    const r = o + data[key][position[key]];
    position[key]++;
    if (position[key] === data[key].length) {
      position[key] = 0;
    }
    if (position[key] === order[key][laps[key]]) {
      laps[key]++;
      if (laps[key] === data[key].length) {
        laps[key] = 0;
      }
      position[key] = order[key][laps[key]];
    }
    return r;

    // const r = o + data[key][position[key]];

    // position[key]++;
    // if (position[key] === data[key].length) {
    //   position[key] = 0;
    // }
    // if(order[key][laps[key]] === position[key]) {
    //   laps[key]++;
    //   if(laps[key] === data[key].length) {
    //     laps[key] = 0;
    //   }
    // }

    // return r;





    // position[key]++;
    // if (position[key] === data[key].length) {
    //   position[key] = 0;
    // }
    // const r = o + data[key][position[key]];
    // // we've looped the track once. Increment number of laps
    // if (position[key] === order[key][laps[key]]) {
    //   // this never hits 0
    //   laps[key]++;
    //   // race is over. Reset it.
    //   if (laps[key] === data[key].length) {
    //     laps[key] = 0;
    //   }
    //   position[key] = order[key][laps[key]];
    // }
    // return r;
  }, "");
}

// console.log("lengths", keys.map((n) => data[n].length));
// console.log("order", order);
// console.log("laps", laps);
// console.log("position", position);

module.exports = {
  get,
  data,
  order,
  laps,
  position,
};
