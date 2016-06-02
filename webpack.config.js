var path = require('path'),
    nodeExternals = require('webpack-node-externals');

module.exports = {
    entry : "./src/scalejs.messagebus.js",
    output : {
        path : "dist",
        filename : "scalejs.messagebus.js",
        library: "messageBus"
    },
    externals : [nodeExternals()],
    module : {
        loaders : [
            {
                loader: 'babel-loader',
                test : [
                    path.join(__dirname, "src")
                ],
                query : {
                    presets : 'es2015'
                }
            }
        ]
    }
};