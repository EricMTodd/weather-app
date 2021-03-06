const path = require('path');
const pathResolver = path.resolve(__dirname, 'dist');

module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		path: pathResolver,
	},
	devServer: {
		contentBase: pathResolver,
		compress: true,
		port: 3000,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	mode: 'development',
};
