// Configurar para ler um arquivo (Arquivo de desenvolvimento) e gerar o BUNDLE (Gerar pacote)
'use strict';

const path = require('path');

// Exportando objeto que o webpack precisa para fazer a leitura do arquivo e gerar o bundle
/*
  entry: Caminho do arquivo principal que será lido
  output: O webpack irá ler o arquivo do 'entry' e irá salavr onde tiver o output configurado
    publicPath: É o local onde o webpack-dev-server irá fica assistindo nosso arquivo de desenvolvimento.
                Quando o dev-server é executado, ele gera um arquivo virtual, em memoria e o publicPath
                diz onde esse arquivo irá ficar
*/
module.exports = {

  entry: path.join(__dirname, 'src', 'index'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel-loader'
    }]
  }

}
