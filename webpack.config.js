const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: Where the application starts and where to start bundling files.
    entry: './src/index.js',
    mode: 'development',
    /* module: Defines how exported javascript modules are transformed 
  and which ones are included according to the given array of rules. */
    module: {
        rules: [
            {
                // Use babel to transform our ES6 and JSX syntax (.js and .jsx files).
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/preset-env', '@babel/preset-react'] }
            },
            {
                /* style-loader: Creates `style` nodes from JS strings.
          css-loader: Translates CSS into CommonJS.
          sass-loader: Compiles Sass to CSS. */
                test: /\.s[ac]ss$/i,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    /* resolve: specify which extensions webpack will resolve and
    import modules without needing to add their extensions. */
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: ['node_modules', 'src']
    },
    // output: tells webpack where to put our bundled code.
    output: {
        /* [name].[hash] keeps it unique to prevent browser caching,
      hash will change each chunk across each build */
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist/')
    },
    /* devServer: the location we’re serving static files from
  and the port we want to run the server on. */
    /* devServer: the location we’re serving static files from
  and the port we want to run the server on. */
    devServer: {
        compress: true,
        // contentBase is where static html files are placed
        contentBase: path.join(__dirname, 'public/'),
        historyApiFallback: true,
        hotOnly: true,
        port: 8080,
        // publicPath: tells the server where the bundled code is.
        publicPath: '/',
        watchContentBase: true
    },
    plugins: [
        // HotModuleReplacement: Automatic refreshes after changes.
        new webpack.HotModuleReplacementPlugin(),
        /* Extracts all CSS into one file, [name].[hash] keeps it unique to prevent browser caching
    will change each chunk across each build
    */
        new MiniCssExtractPlugin({ filename: '[name].[hash].css' }),
        // Creates HTML file to serve webpack bundles
        new HtmlWebpackPlugin({
            title: 'UI Starter Project',
            template: './public/index.html',
            filename: 'index.html'
        })
    ]
};
