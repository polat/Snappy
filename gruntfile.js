module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
                cwd: 'images/icons',
                src: ['*.svg'],
                dest: 'images/inline-svg',
                ext: '.svg'
            }
        },
        concat: {
            options: {
                separator: ';\n'
            },
            dist: {
                src: ['src/js/vendor/*.js', 'src/js/base/*.js', 'src/js/components/*.js'],
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
        combine_mq: {
            default_options: {
                expand: true,
                cwd: 'inc/css',
                src: '*.css',
                dest: 'inc/css'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'inc/css',
                    src: ['*.css'],
                    dest: 'inc/css',
                    ext: '.min.css'
                }]
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
                    spawn: false
                },

                files: 'src/sass/**/*.scss',
                tasks: ['sass']
            },
            js: {
                options: {
                    spawn: false
                },

                files: '<%= concat.dist.src %>',
                tasks: ['concat', 'uglify']
            },
            img: {
                files: ["images/icons/*.svg"],
                tasks: ['svgmin']
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
        },
        mjml: {
            email:{
                files: [{
                    expand: true,
                    cwd: 'src/email', 
                    src: ['**/*.mjml'], 
                    dest: 'src/email',
                    ext: '.html',
                    extDot: 'first'
                }]
            }
        },
    });


    // Load the plugins
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-combine-mq');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-mjml');


    // Register tasks
    grunt.registerTask('default', ['svgmin','browserSync','watch']);
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('js', ['concat', 'uglify']);
    grunt.registerTask('svg', ['svgmin']);
    grunt.registerTask('email', ['mjml']);
    grunt.registerTask('production', ['combine_mq', 'cssmin']);
};
