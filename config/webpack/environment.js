const { environment } = require("@rails/webpacker");

const babelLoader = environment.loaders.get('babel')

// Replace existing coffee loader with CS2 version
environment.loaders.insert('coffee', {
  test: /\.coffee(\.erb)?$/,
  use:  babelLoader.use.concat(['coffee-loader'])
})


module.exports = environment;
