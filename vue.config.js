module.exports = {
	lintOnSave: false,

	css: {
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

	pluginOptions: {
		"style-resources-loader": {
			preProcessor: "less",
			patterns: ["./src/assets/less/main.less"]
		}
	}
};
