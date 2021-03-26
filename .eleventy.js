module.exports = (config) => {
	return {
		dir: {
			input: "11ty"
		},
		templateFormats: [ "html","css","md" ],
		htmlTemplateEngine: "njk",
	};
};
