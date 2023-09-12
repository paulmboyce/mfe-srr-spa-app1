const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/server/index.js", // Entry point of your application
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "server-dist"), // Output directory for bundled files
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Use Babel for JavaScript/JSX files
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // Load and bundle CSS files
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean the 'dist' directory before each build
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Use this HTML file as a template
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "server-dist"), // Serve files from the 'dist' directory
    port: 3000, // Port for the development server
    hot: true, // Enable hot module replacement
  },
};
