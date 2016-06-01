var path = require('path'),
    nodeExternals = require('webpack-node-externals');

module.exports = {
    entry : "./scalejs.messagebus.js",
    output : {
        path : "dist",
        filename : "scalejs.messagebus.js"
    },
    externals : [nodeExternals()],
    module : {
        loaders : [
            {
                loader: 'babel-loader',
                test : [
                    path.join(__dirname, "scalejs.messagebus.js")
                ],
                query : {
                    presets : 'es2015'
                }
            }
        ]
    }
};