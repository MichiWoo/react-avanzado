const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const path = require('path')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/' // Para que busque el app.bundle en la raiz
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifest({
      name: 'Petgram tu app de mascotas',
      short_name: 'Petgram',
      description: 'Con petgram puedes encontrar fotos muy chulas de mascotas.',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-dynamic-import'],
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
