module.exports = function(grunt)
{
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            default: ['src/jquery.crusher.js']
        },

        uglify: {
            default: {
                files: {
                    'dist/jquery.crusher.min.js': ['src/jquery.crusher.js']
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['jshint', 'uglify']);
};