const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    'page1': path.resolve(__dirname, 'src/page1.js'),
    'page2': path.resolve(__dirname, 'src/page2.js')
  },
  output: {
    path: path.resolve(__dirname, 'build')
  }
}
