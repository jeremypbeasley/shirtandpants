module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    stylus: {
      options: {
        'compress': false,
        'include css': true
      },
      compile: {
        files: {
          'html/master.css': 'app/_styles/master.styl',
        }
      }
    },
    concat: {
      dist: {
        src: ['node_modules/jquery/dist/jquery.min.js', 'app/_scripts/main.js'],
        dest: 'html/master.js',
      }
    },
    concat: {   
      dist: {
        src: [
          'bower_components/jquery/dist/jquery.js',
          'app/_scripts/main.js'
        ], 
        dest: 'html/master.js',
      }
    },
    watch: {
      scripts: {
        files: ['app/_scripts/*.js', 'Gruntfile.js', 'app/_styles/*.styl'],
        tasks: ['concat', 'stylus'],
        options: {
          spawn: false
        },
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.registerTask('default', ['concat', 'stylus', 'watch']);
};