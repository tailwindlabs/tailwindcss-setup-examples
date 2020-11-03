module.exports = function (grunt) {
  grunt.config.set("postcss", {
    options: {
      map: true,
      processors: [require("tailwindcss")("./tailwind.config.js")],
    },
    dist: {
      expand: true,
      cwd: "assets/styles/tailwindcss",
      src: ["tailwind.css"],
      dest: ".tmp/public/styles",
      ext: ".css",
    },
  });

  grunt.loadNpmTasks("grunt-postcss");
};
