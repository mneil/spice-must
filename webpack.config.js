const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  return {
    node: { global: true },
    mode: argv.mode,
    entry: "./index.js",
    ...(argv.mode === "production"
      ? {
          optimization: {
            minimize: true,
          },
          devtool: "source-map"
        }
      : { devtool: "inline-source-map" }),
    output: {
      path: path.join(__dirname, "dist"),
      filename: "index.js",
      library: {
        name: "SpiceMust",
        type: "umd",
      },
      globalObject: `(typeof self !== 'undefined' ? self : this)`,
    },
    performance: {
      hints: false,
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: require.resolve("./package.json") },
          { from: require.resolve("./README.md") },
        ],
      }),
    ],
  };
};
