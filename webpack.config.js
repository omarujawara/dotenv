var Dotenv = require("dotenv-webpack");
var path = require("path");

module.exports = () => {
  console.log(process.env);
  return {
    mode: "development",
    entry: {
      index: "./index.js",
    },
    output: {
      path: path.resolve(__dirname, "app/"),
      filename: "index.bundle.js",
    },
    plugins: [
      new Dotenv({
        path: ".env",
        safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
        allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
        //systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
        silent: false, // hide any errors
        defaults: false, // load '.env.defaults' as the default values if empty.
      }),
    ],
  };
};
