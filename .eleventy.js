module.exports = config => {
	config.addPassthroughCopy({ "static": "/" })
	config.setDataDeepMerge(true)
	config.addPlugin(require("@11ty/eleventy-navigation"))
	return {
		dir: {
			input: "11ty",
			includes: "_components",
		},
		htmlTemplateEngine: "njk",
	};
};
