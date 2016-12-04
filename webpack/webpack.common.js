import webpack from 'webpack';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import precss from 'precss';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import config from '../config/app';

/**
 * Webpack common setting
 */
const {
    __DEVELOPMENT__,
    __PRODUCTION__
} = config.globals;

export default {
    devtool: config.devTool,
    cache: config.cache,
    context: config.appPath,
    entry: {
        vendor: __dirname + '/../vendor',
        app: config.env === 'production' ? './js' : ['webpack-hot-middleware/client', './js']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader?cacheDirectory=true',
                exclude: config.excludePath
            },
            {
                test: /\.js$/,
                loader: "eslint-loader",
                exclude: config.excludePath
            },

            // STYLESHEET
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css'),
                //exclude: config.excludePath
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass'),
                //exclude: config.excludePath
            },

            // IMAGES
            {
                test: /\.png($|\?)|\.jpg($|\?)|\.gif($|\?)|\.bmp($|\?)|\.svg($|\?)/,
                loader: 'url-loader?limit=10000&name=images/[name].[ext]'
            },

            // FONTS
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader?limit=10000&name=fonts/[name].[ext]',
            }
        ]
    },

    plugins: [
        new ProgressBarPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(), //Optimize imports
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('css/[name].css', {
            allChunks: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(config.env),
            __DEVELOPMENT__,
            __PRODUCTION__
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jQuery",
            "windows.jQuery": "jquery",
        })
    ],

    postcss: function () {
        return [precss, autoprefixer];
    },
    resolve: {
        root: './',
        modulesDirectories: [
            'node_modules'
        ],
        alias: config.aliases,
        extensions: ['', '.js', '.scss', '.css', '.json']
    }
}
