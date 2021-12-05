module.exports = {
    entry: ['./client/src/main.js'],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
};
