module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");
  return {
    dir: { input: ".", output: "_site", includes: "_includes", data: "_data" }
  };
};
