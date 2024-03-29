/// <binding BeforeBuild='Run - Development' Clean='Run - Development' ProjectOpened='Run - Development' />
var combineLoaders = require('webpack-combine-loaders');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'program.js',
    path: __dirname + '/built'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: '#inline-source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },

  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: combineLoaders([
        {
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015'],
            //plugins: ['transform-runtime']
          }
        },
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        {loader: 'awesome-typescript-loader' }
      ])
    }],

    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    //  { test: /\.js$/, loader: 'source-map-loader' }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": 'React',
    "react-dom": 'ReactDOM'
  },
};
