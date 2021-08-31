const path = require('path');

module.exports = {
  entry: [path.resolve('src', 'js', 'index.jsx')],
  output: {
    filename: 'bundle.js',
    path: path.resolve('static', 'assets'),
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
        include: /flexboxgrid/,
      },
      {
        test: /.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};