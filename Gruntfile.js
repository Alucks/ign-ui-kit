module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['sass']);

  grunt.initConfig({
    // Watch for changes and compile on the fly
    watch: {
      sass: {
        files: ['src/**/*.scss'],
        tasks: ['sass']
      }
    },

    // Compile SASS to CSS
    sass: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: '**/*.scss',
            dest: 'dist/',
            ext: '.css',
            extDot: 'last'
          }
        ]
      }
    }
  });
};
