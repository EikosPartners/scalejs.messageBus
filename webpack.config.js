var path = require('path'),
    nodeExternals = require('webpack-node-externals');

module.exports = {
    entry : "./index.js",
    output : {
        path : "dist",
        filename : "index.js"
    },
    externals : [nodeExternals()],
    module : {
        loaders : [
            {
                loader: 'babel-loader',
                test : [
                    path.join(__dirname, "scalejs.messagebus.js"),
                    path.join(__dirname, "index.js"),
                ],
                query : {
                    presets : 'es2015'
                }
            }
        ]
    }
};