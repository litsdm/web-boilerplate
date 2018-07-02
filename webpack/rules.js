const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === 'production';

module.exports = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        plugins: [
          // Here, we include babel plugins that are only required for the
          // renderer process. The 'transform-*' plugins must be included
          // before react-hot-loader/babel
          'transform-class-properties',
          'transform-es2015-classes',
          'react-hot-loader/babel'
        ],
      }
    }
  },
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
      'sass-loader',
    ],
  },
  // WOFF Font
  {
    test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 10000,
        mimetype: 'application/font-woff',
      }
    },
  },
  // WOFF2 Font
  {
    test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 10000,
        mimetype: 'application/font-woff',
      }
    }
  },
  // TTF Font
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 10000,
        mimetype: 'application/octet-stream'
      }
    }
  },
  // EOT Font
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    use: 'file-loader',
  },
  // SVG Font
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 10000,
        mimetype: 'image/svg+xml',
      }
    }
  },
  // Common Image Formats
  {
    test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
    use: 'url-loader',
  },
  // Graphql files
  {
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    loader: 'graphql-tag/loader',
  }
]
