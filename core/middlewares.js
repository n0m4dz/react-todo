/**
 * Created by n0m4dz on 11/17/16.
 */

import cors from 'express-cors';
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevConfig from '../webpack/webpack.dev.js';

const middlewares = (app, env) => {

    if (env === 'development') {
        var compiler = webpack(webpackDevConfig);
        //Webpack Middleware
        app.use(WebpackDevMiddleware(compiler, {
            noInfo: false,
            publicPath: webpackDevConfig.output.publicPath,
            watchOptions: {
                poll: true
            }
        }));

        //Hot Middleware
        app.use(WebpackHotMiddleware(compiler, {
            reload: true,
            overlay: false,
            path: '/__webpack_hmr',
            heartbeat: 10 * 1000
        }));
    }

    app.use(cors({
        allowedOrigins: [
            'todo.app', 'dev.todo.app'
        ]
    }));
};

export default middlewares;
