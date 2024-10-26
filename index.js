const list = require("./names.json");

function* recipe(input) {
  const keys = Object.keys(input);
  const data = keys.reduce((o, key) => {
    o[key] = input[key].sort(() => Math.random() - 0.5);
    return o;
  }, {});
  const indices = keys.map(() => 0);
  const total = keys.reduce((o, n) => o * data[n].length, 1);
  const offset = keys.map(() => 0);
  let iterations = 0;

  /**
   * Increment the offsets to avoid names being too similar
   * @param {Number} i index number not to increment
   */
  const increment = (i) => {
    for (let n = 0; n < keys.length; n++) {
      if (n === i) {
        continue;
      }
      offset[n]++;
      if (offset[n] === data[keys[n]].length) {
        offset[n] = 0;
      }
    }
  }

  while (true) {
    const combination = keys.reduce((out, key, index) => {
      let n = indices[index] + offset[index];
      if (n >= data[key].length) {
        n = n - data[key].length;
      }
      return out + data[key][n];
    }, "");
    yield combination;

    // Increment indices to get the next combination
    for (let i = keys.length - 1; i >= 0; i--) {
      indices[i]++;
      if (indices[i] < data[keys[i]].length) {
        increment(i);
        break;
      }
      indices[i] = 0;
    }
    // If all combinations are exhausted, reshuffle and start over
    if (iterations++ === total) {
      yield *recipe(input);
    }
  }
}

const generator = recipe(list);

function flow() {
  return generator.next().value;
}

module.exports = {
  flow,
};
