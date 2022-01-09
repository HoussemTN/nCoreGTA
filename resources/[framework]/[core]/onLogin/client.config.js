module.exports = {
    entry: './src/cmain.ts',
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    optimization: {
      minimize: false,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'cmain.js',
      path: __dirname + '/dist/',
    },
};