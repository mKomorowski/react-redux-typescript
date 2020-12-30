module.exports = function (api) {
  const presets = ["@babel/preset-env", "@babel/react", "@babel/typescript"],
    plugins = ["@babel/plugin-transform-runtime"];

  if (api.env() === "development") {
    plugins.push("react-hot-loader/babel");
  }

  return { presets, plugins };
};
