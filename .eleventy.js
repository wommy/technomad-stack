const yaml = require("js-yaml")
module.exports = config => {
	config.addPassthroughCopy({ "static": "/" })
	config.addWatchTarget("static")
	config.setDataDeepMerge(true)
	config.addPlugin(require("@11ty/eleventy-navigation"))
	config.addDataExtension("yml", contents => yaml.load(contents))
	config.setWatchThrottleWaitTime(250)
	return {
		dir: {
			input: "11ty",
			includes: "_components",
		},
		htmlTemplateEngine: "njk",
	};
};
