const path = require('path');

module.exports = {
  // ... other webpack configurations ...
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Outputting to a 'dist' directory
    publicPath: '/dist/' // Important for serving the files correctly
  }
}; 