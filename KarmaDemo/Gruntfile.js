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
      options: {
            
                reporter: './node_modules/jshint-stylish'
            },
            target: ['Script/**/*.js']
    },
     
    watch: {
        src: {
            files: ['Script/**/*.js','test/**/*.js'],
            tasks:['karma']
        }
    }
    
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');

  // Default task.
  grunt.registerTask('default', ['jshint','karma']);

};
