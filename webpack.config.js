var path = require('path'),
    nodeExternals = require('webpack-node-externals');

module.exports = {
    entry : "./scalejs.messageBus.js",
    output : {
        path : "dist",
        filename : "scalejs.messageBus.js"
    },
    externals : [nodeExternals()],
    module : {
        loaders : [
            {
                loader: 'babel-loader',
                test : [
                    path.join(__dirname, "scalejs.messageBus.js")
                ],
                query : {
                    presets : 'es2015'
                }
            }
        ]
    }
};