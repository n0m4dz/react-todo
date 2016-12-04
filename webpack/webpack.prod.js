/**
 * Created by n0m4dz on 11/17/16.
 */
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import WebpackStrip from 'strip-loader';
import Visualizer from 'webpack-visualizer-plugin';
import commonConfig from './webpack.common.js';
import config from '../config/app';

export default webpackMerge(commonConfig, {
    output: {
        path: config.distPath,
        publicPath: '/',
        filename: 'js/[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: config.excludePath,
                loader: WebpackStrip.loader('console.log')
            },
        ]
    },

    plugins: [
        new webpack.BannerPlugin("************************************\n React Todo \n************************************\n"),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['vendor'],
            filename: 'js/[name].js'
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            },
            mangle: true,
            sourcemap: false,
            beautify: false,
            dead_code: true

        }),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify('production')
            }
        }),
        new Visualizer()
    ]
});
