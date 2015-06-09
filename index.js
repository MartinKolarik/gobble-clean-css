var CleanCSS = require('clean-css');

module.exports = function cleanCss (code, options) {
	var minified = new CleanCSS(options).minify(code);
	var result = { code: minified.styles };

	if (options.sourceMap) {
		result.map = minified.sourceMap.toJSON();
		result.map.sources = [];
	}

	return result;
};

module.exports.defaults = {
	accept: '.css',
	sourceMap: true,
};
