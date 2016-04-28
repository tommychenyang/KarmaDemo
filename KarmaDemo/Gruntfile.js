/// <vs BeforeBuild='default' />
'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
  
    // Task configuration.
    clean: {
      files: ['**/*.js']
    },
    karma: {
        unit: {
            configFile: 'karma.conf.js'

        }
    },

    jshint: {
      //options: {
      //  jshintrc: true
      //},
      gruntfile: {
        src: 'Script/controller/**/*.js'
      }
    }
    
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  //grunt.loadNpmTasks('grunt-msbuild');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');

  // Default task.
  grunt.registerTask('default', ['jshint','karma']);

};
