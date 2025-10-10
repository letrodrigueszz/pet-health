module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [], // O array de plugins deve estar vazio
  };
};
