module.exports = config => {
	config.addPassthroughCopy({ "static" : "/" })
	config.setTemplateFormats("njk,css,md")
	return {
		dir: {
			input: "11ty"
		}
	};
};
