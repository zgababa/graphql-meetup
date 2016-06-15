module.exports = {
  entry : './index.js',
  output : {
    path : './dist',
    filename : 'app.bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        exclude : /node_modules/,
        loader : 'babel-loader'
      }
    ]
  }
};
