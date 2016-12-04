/**
 * Created by n0m4dz on 11/17/16.
 */
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import commonConfig from './webpack.common';
import {root} from '../core/utils/path';
import config from '../config/app';

export default webpackMerge(commonConfig, {
    output: {
        path: config.distPath,
        publicPath: '/',
        filename: 'js/[name].js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});
