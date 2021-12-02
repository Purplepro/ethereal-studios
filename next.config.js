const withVideos = require('next-videos');
const withImages = require('next-images');
const path = require('path')




module.exports = {
  reactStrictMode: true,
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }]
  },
};

module.exports = withVideos();

// module.exports = withImages();


// module.exports = {
//   images: {
//     disableStaticImages: true
//   }
// };