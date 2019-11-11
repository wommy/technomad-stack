// add syntaxHighlight
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = function(eleventyConfig) {
	// Copy the `static/` directory 
	eleventyConfig.addPassthroughCopy("_static");

	//add syntaxHighlight
  eleventyConfig.addPlugin(syntaxHighlight);
	
	return {
		passthroughFileCopy: true,
		dir: {
			input: "views"
		}
	};
};
