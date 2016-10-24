module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';\n'
      },
      dist: {
        src: ['src/js/*.js'],
        dest: 'inc/js/script.js'
      }
    },
    uglify: {
      options: {
        mangle: false,
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'inc/js/script.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    sass: {
      dist: {
        options: {
          sourcemap: 'none',
          style: 'compressed'
        },
        files: {
          'inc/css/style.min.css': 'src/sass/style.scss'
        }
      }
    },
    watch: {
      css: {
        options: {
          spawn: false,
        },
        files: 'src/sass/**/*.scss',
        tasks: ['newer:sass']
      },
      js: {
        options: {
          spawn: false,
        },
        files: '<%= concat.dist.src %>',
        tasks: ['newer:concat', 'newer:uglify']
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');

  // Register tasks
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('css', ['sass']);
  grunt.registerTask('js', ['concat', 'uglify']);
};
