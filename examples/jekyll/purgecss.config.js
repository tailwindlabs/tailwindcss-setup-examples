module.exports = {
  content: ["./_site/**/*.html"],
  css: ["./_site/css/site.css"],
  // Extractor regex taken from the Tailwind docs
  // https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css-with-purgecss
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
};
