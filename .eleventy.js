module.exports = (config) => {
	config.addShortcode("navActive", ({url, fileSlug}) => {
		fileSlug == '' ? 'home' : fileSlug
		let props = url == "/" ? `class="active"` : `href=${url}`
		return `<a ${props}>${fileSlug==""?"home":fileSlug}</a>`
	})
	return {
		dir: {
			input: "11ty"
		},
		templateFormats: [ "html","njk","css","md" ],
		htmlTemplateEngine: "njk",
	};
};
