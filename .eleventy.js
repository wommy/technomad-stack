const yaml = require("js-yaml")
module.exports = config => {
	config.addPassthroughCopy({ "_static/*": "/" })
	config.addPlugin(require("@11ty/eleventy-navigation"))
	config.addDataExtension("yml", contents => yaml.load(contents))
	return {
		dir: {
			input: "11ty",
			includes: "_components",
		},
		htmlTemplateEngine: "njk",
	};
};
