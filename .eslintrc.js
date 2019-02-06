module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ["plugin:vue/essential", "@vue/prettier"],
	rules: {
		//强制使用tab缩进
		"indent": ["error", "tab"],
		//开发中允许使用console.log
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		//开发中允许使用debug
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		//开发中允许使用空格混合tab
		"no-mixed-spaces-and-tabs": process.env.NODE_ENV === "production" ? "error" : "off",
		//开发中允许使用未定义的字段
		"no-use-before-define": process.env.NODE_ENV === "production" ? "error" : "off",
	},
	parserOptions: {
		ecmaVersion: 6,
		parser: "babel-eslint",
		sourceType: "module",
	}
};