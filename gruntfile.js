module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';\n'
      },
      dist: {
        src: ['src/js/vendor/*.js', 'src/js/base/*.js'],
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
        tasks: ['sass']
      },
      js: {
        options: {
          spawn: false,
        },
        files: '<%= concat.dist.src %>',
        tasks: ['concat', 'uglify']
      }
    },
    browserSync: {
      files: {
        src : [
          'inc/css/*.css',
          'inc/js/*.js',
          '*.html'
        ]
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "./",
          directory: true
        }
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Register tasks
  grunt.registerTask('default', ['browserSync','watch']);
  grunt.registerTask('css', ['sass']);
  grunt.registerTask('js', ['concat', 'uglify']);
};
