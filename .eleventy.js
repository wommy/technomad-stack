module.exports = (config) => {
	return {
		dir: {
			input: "11ty"
		},
		templateFormats: [ "html","njk","css","md" ],
		htmlTemplateEngine: "njk",
	};
};
