var webpack = require("webpack");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: [
		"./src/index.tsx"
	],
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
	
	devServer: {
        // contentBase: './public',//本地服务器所加载的页面的目录
        historyApiFallback: true,//不跳转
        inline: false,//实时刷新
        port: 8090, //端口号
        hot: false
    },
	plugins: [
		new OpenBrowserPlugin(
            { 
                url: 'http://localhost:8090' 
            }
        )
	],
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
	
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};