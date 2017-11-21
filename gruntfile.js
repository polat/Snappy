module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserSync: {
            files: {
                src : [
                    'dist/css/*.css',
                    'dist/js/*.js',
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
        },
        watch: {
            css: {
                options: {
                    spawn: false
                },

                files: 'src/sass/**/*.scss',
                tasks: ['sass', 'postcss:dist']
            },
            js: {
                options: {
                    spawn: false
                },

                files: '<%= concat.dist.src %>',
                tasks: ['concat', 'uglify']
            },
            img: {
                files: ["dist/images/icons/*.svg"],
                tasks: ['svgmin']
            }
        },
        svgmin: {
            options: {
                plugins: [
                    {removeViewBox: true},
                    {removeTitle: true},
                    {removeDesc: true},
                    {removeUselessStrokeAndFill: false},
                    {removeXMLNS: true}
                ]
            },
            dist: {
                expand: true,
                cwd: 'dist/images/icons',
                src: ['*.svg'],
                dest: 'dist/images/inline-svg',
                ext: '.svg'
            }
        },
        sass: {
            dist: {
                options: {
                    sourcemap: 'none',
                    style: 'compressed'
                },
                files: {
                    'dist/css/style.min.css': 'src/sass/style.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['*.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')
                ]
            },
            dist: {
                src: 'dist/css/*.css'
            }
        },
        combine_mq: {
            default_options: {
                expand: true,
                cwd: 'dist/css',
                src: '*.css',
                dest: 'dist/css'
            }
        },
        concat: {
            options: {
                separator: ';\n'
            },
            dist: {
                src: ['src/js/vendor/*.js', 'src/js/base/*.js', 'src/js/components/*.js'],
                dest: 'dist/js/script.min.js'
            }
        },
        uglify: {
            options: {
                mangle: false,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/js/script.min.js': ['<%= concat.dist.dest %>']
                }
            }
        }
    });


    // Load the plugins
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-combine-mq');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-svgmin');

    // Register tasks
    grunt.registerTask('default', ['browserSync','watch', 'svgmin']);
    grunt.registerTask('css', ['sass', 'postcss:dist']);
    grunt.registerTask('js', ['concat', 'uglify']);
    grunt.registerTask('svg', ['svgmin']);
    grunt.registerTask('build', ['combine_mq', 'cssmin']);
};
