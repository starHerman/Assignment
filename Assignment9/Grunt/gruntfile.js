var grunt=require('grunt')
var sass=require('node-sass')
var uglify=require('grunt-contrib-uglify')
module.exports=function(grunt){
    //configuration
    grunt.initConfig({
      concat: {
        js: {
          src: ["js/*.js"],
          dest: "build/scripts.js",
        },
        css: {
          src: ["css/*.css"],
          dest: "build/styles.css",
        },
      },
      sass: {
        options: {
          implementation: sass,
          sourceMap: true,
        },
        build: {
          files: [
            {
              src: "css/sass/styles.scss",
              dest: "css/sass/styles.css",
            },
          ],
        },
      },
      cssmin: {
        target: {
          files: [
            {
              expand: true,
              cwd: "build",
              src: ["*.css", "!*.min.css"],
              dest: "build",
              ext: ".min.css",
            },
          ],
        },
      },
      uglify: {
        build: {
          files: [
            {
              src: "build/scripts.js",
              dest: "build/scripts.min.js",
            },
          ],
        },
      },
      jshint:{
        all:['gruntfile.js','js/main.js']
      }
    });
    //load plugin
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    //register task

    grunt.registerTask('concat-js',['concat:js'])
    grunt.registerTask("concat-css", ["concat:css"]);
     grunt.registerTask("all", ["concat-js","concat-css"]);

}