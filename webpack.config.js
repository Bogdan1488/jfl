var webpack = require('webpack');
var AddHeadersGreaseMonkey = require('./plugin/AddHeader');
var AsyncAwaitPlugin = require('webpack-async-await');


module.exports = {
    context: __dirname + '/src',
    entry: ['babel-polyfill', 'whatwg-fetch', __dirname + '/src/app.js'],
    output: {
        filename: "script.js"
    },
    plugins: [
        new AddHeadersGreaseMonkey({}),
        new AsyncAwaitPlugin({}),
          new webpack.optimize.UglifyJsPlugin({
              compress: false
          })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ng-annotate!babel-loader?presets[]=env'
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: false
                }
            },
            {
                test: /\.css$/,

                loaders: [ 'style-loader', 'css-loader' ]
            }
        ]

    }
}