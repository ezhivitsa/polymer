module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        vulcanize: {
            default: {
                options: {
                    csp: true,
                    excludes: {
                        imports: [
                            "polymer.html"
                        ]
                    }
                },
                files: {
                    'build-csp.html': 'index.html'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-vulcanize');

    // Default task(s).
    grunt.registerTask('default', ['vulcanize']);

};