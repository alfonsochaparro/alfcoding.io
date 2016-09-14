module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			dev: {
				port: 1337,
				base: 'src'
			}
		},
		compass: {
			dist: {
				options: {
					sassDir: 'src/style/sass',
					cssDir: 'src/style/css'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['compass']
			}
		},
		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			dev: {
				tasks: ['connect:dev', 'watch']
			}
		}
	});

	grunt.loadNpmTasks('grunt-connect');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concurrent:dev']);

};