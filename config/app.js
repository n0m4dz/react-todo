import {getPath} from '../core/utils/path'

const nodeEnv = process.env.NODE_ENV;
let isNodeEnvironmentDevelopment = (nodeEnv === 'development');
let isNodeEnvironmentProduction = (nodeEnv === 'production');
let devTool = (nodeEnv === 'development' ? 'source-map' : false);

const config = {
    serverIp: 'localhost',
    apiServer: 'http://todo.app',
    env: nodeEnv || 'development',
    target: process.env.npm_lifecycle_event,
    cache: isNodeEnvironmentDevelopment ? true : false,

    rootPath: getPath('../'),
    appPath: getPath('../src'),
    distPath: getPath('../public'),

    vendorPath: getPath('../vendor'),
    excludePath: [/(node_modules)/],
    http: {
        host: 'localhost',
        port: 3000
    },
    devTool: devTool,
    globals: {
        __DEVELOPMENT__: isNodeEnvironmentDevelopment,
        __PRODUCTION__: isNodeEnvironmentProduction,
    },
    aliases: {
        utils: getPath('../core/utils'),
        config: getPath('./'),
        vendor: getPath('../vendor')
    }
};

export default config;
