const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const precss = require("precss");
const merge = require("webpack-merge");

const common = {
	context: path.resolve(__dirname, "src"),

	entry: "./index",

	output: {
		filename: "js/app.js",
		path: path.resolve(__dirname, "public")
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			minimize: false,
			compress: {
				warnings: false
			},
			comments: false,
			sourceMap: true
		}),
		new webpack.DefinePlugin({
		    "process.env": {
		        NODE_ENV: JSON.stringify("production")
		    }
		})
	],

	module: {
		rules: [
			{
				test: /\.(jsx|js)?$/,
				exclude: /node_modules/,
				use: [{
					loader: "babel-loader",
					options: {
						cacheDirectory: true,
						presets: ["react", "es2015"]
					}
				}]
			},
			{
				test: /\.(css|pcss)$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							modules: true,
							importLoaders: 1,
							localIdentName: "[local]"
						}
					},
					{
						loader: "postcss-loader",
						options: {
							plugins: () => [autoprefixer({browsers: ["last 2 versions"]}), precss]
						}
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: "file-loader",
				options: {
					name: "img/[name].[ext]"
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					"file-loader"
				]
			}
		]

	},
	resolve: {
		modules: [
			"node_modules",
			"src/components/"
		]
	}
};

const development = {

	devServer: {
		stats: "errors-only",
		historyApiFallback: true,
		contentBase: "public/",
		port: 9000,
		hot: true
	},

	devtool: "source-map"

};

module.exports = (env) => {
	if (env === "production") {
		return common;
	}
	if (env === "development") {
		return merge([
			common,
			development
		]);
	}
};


