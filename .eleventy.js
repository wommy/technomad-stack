module.exports = conf => {
	conf.addPassthroughCopy("static")
	return {
		dir: {
			input: "11ty",
			includes: "_components",
		},
		templateFormats: [ "html","css","md","pug" ],
		htmlTemplateEngine: "njk",
	};
};
