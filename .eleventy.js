module.exports = config => {
	config.addPassthroughCopy({ "static": "/" })
	config.setDataDeepMerge(true)
	return {
		dir: {
			input: "11ty",
			includes: "_components",
		},
		htmlTemplateEngine: "njk",
	};
};
