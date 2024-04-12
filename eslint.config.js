// eslint.config.js
module.exports = [
	{
		languageOptions: {
			parserOptions: {
				ecmaVersion: 2020,
			},
		},
		plugins: {lexsort},
		files: ["src/**/*.properties"],
		rules: {
			semi: "error",
			"prefer-const": "error",
			"lexsort/func-prefix-matching": [1, {include: [], exclude: []}],
		},
	},
];
