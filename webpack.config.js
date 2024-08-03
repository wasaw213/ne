const webpack = require('webpack');

module.exports = {
  // Your existing configuration...
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    })
  ],
  resolve: {
    fallback: {
      buffer: require.resolve('buffer/'),
    }
  }
};
