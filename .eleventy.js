module.exports = config => {
	config.addPassthroughCopy({ "static" : "/" })
	return {
		dir: {
			input: "11ty"
		},
		htmlTemplateEngine: "njk",
	};
};
