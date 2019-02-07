module.exports = {
	css: {
		modules: false,
		sourceMap: false,
		loaderOptions: {
			postcss: {
				plugins: [
					require("postcss-plugin-px2rem")({
						rootValue: 100,
						mediaQuery: true,
						propBlackList: [
							"border-right",
							"border-left",
							"border-bottom",
							"border-top",
							"border-radius"
						]
					})
				]
			}
		}
	},

	configureWebpack: config => {},

	chainWebpack: config => {
		config.resolve.alias.set("data", "@/data");
	},

	devServer: {
		host: "localhost",
		port: 8080,
		hot: true,
		hotOnly: false,
		open: false,
		https: false,
		overlay: {
			warning: false,
			errors: true
		}
	},

	lintOnSave: true,

	pluginOptions: {
		"style-resources-loader": {
			preProcessor: "less",
			patterns: ["./src/assets/less/main.less"]
		}
	},

	productionSourceMap: false,
	transpileDependencies: []
};
