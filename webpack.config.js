var webpack = require("webpack");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
        contentBase:path.resolve(__dirname,'dist'),//本地服务器所加载的页面的目录
        historyApiFallback: true,//不跳转
        inline: false,//实时刷新
        port: 8090, //端口号
        hot: false
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},

            { test: /\.css$/, loader: ExtractTextPlugin.extract(["css-loader", "postcss-loader"]) }
        ]
    },
	plugins: [
		new OpenBrowserPlugin(
            { 
                url: 'http://localhost:8090' 
            }
        ),
        new ExtractTextPlugin("style.css"),
        new webpack.LoaderOptionsPlugin({
            options: {
              context: __dirname,
              postcss: [
                autoprefixer
              ]
            }
        })
	],
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
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