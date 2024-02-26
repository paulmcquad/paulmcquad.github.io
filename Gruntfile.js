// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {
    // CONFIGURE GRUNT
    grunt.initConfig({
      // get the configuration info from package.json file
      // this way we can use things like name and version (pkg.name)
      pkg: grunt.file.readJSON('package.json'),
       
      htmlmin: {                                     // Task
        dist: {                                      // Target
          options: {                                 // Target options
            removeComments: true,
            collapseWhitespace: true
          },
          files: {                                   // Dictionary of files
            'build/index.html': 'src/index.html'      // 'destination': 'source'
          }
        },
      },

      cssmin: {
         target: {
           files: {
             'build/styles.min.css': ['src/*.css']
           }
         }
       }
    });

// log something
grunt.log.write('Hello world! Welcome to Tutorialspoint!!\n');

// Load the plugin that provides the "htmlmin" task.
grunt.loadNpmTasks('grunt-contrib-htmlmin');

// Load the plugin that provides the "cssmin" task.
grunt.loadNpmTasks('grunt-contrib-cssmin');

// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask('default', ['htmlmin', 'cssmin']);
};