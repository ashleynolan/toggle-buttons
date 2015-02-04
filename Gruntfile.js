module.exports = function (grunt) {

	'use strict';

	// Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    var options = {
        pkg: require('./package'), // <%=pkg.name%>

		/**
		 * Config - Edit this section
		 * ==========================
		 * Choose javascript dist filename
		 * Choose javascript dist location
		 * Choose javascript files to be uglified
		 */
		config : {
			scss : {
				cssFile : 'kickoff' // <%=config.scss.cssFile%>
			},

			js : {
				// <%=config.js.distDir%>
				distDir  : 'js/dist/',

				// <%=config.js.distFile%>
				distFile : 'app.min.js',

				// <%=config.js.fileList%>
				fileList : [
					'js/helpers/console.js',
					'bower_components/trak/dist/trak.js',
					'bower_components/swiftclick/js/libs/swiftclick.js',
					'bower_components/cookies-js/src/cookies.js',
					'js/script.js'
				]
			}
		}
	};


	/**
	 * Config - Edit this section
	 * ==========================
	 * Choose javascript dist filename
	 * Choose javascript dist location
	 * Choose javascript files to be uglified
	 */


    // Load grunt configurations automatically
    var configs = require('load-grunt-configs')(grunt, options);

    // Define the configuration for all the tasks
    grunt.initConfig(configs);


	/* ==========================================================================
		Available tasks:
* grunt            : run jshint, uglify and sass:kickoff
* grunt start      : run this before starting development
* grunt watch      : run sass:kickoff, uglify and livereload
* grunt dev        : run uglify, sass:kickoff & autoprefixer:kickoff
* grunt deploy     : run jshint, uglify, sass:kickoff and csso
* grunt jquery     : build custom version of jquery
* grunt serve      : watch js & scss and run a local server
* grunt icons      : generate the icons. uses svgmin and grunticon
* grunt jscheck    : run jshint & jscs
* grunt travis     : used by travis ci only
		 ========================================================================== */

	/**
	* GRUNT * Default task
	* run uglify, sass:kickoff and autoprefixer
	*/
	grunt.registerTask('default', [
		'newer:uglify',
		'newer:sass:kickoff',
		'autoprefixer:kickoff'
	]);

	/**
	* GRUNT START * Run this to
	* run jquery builder, uglify, sass and autoprefixer
	*/
	grunt.registerTask('start', [
		'jquery',
		'shell:bowerinstall',
		'uglify',
		'sass:kickoff',
		'autoprefixer:kickoff',
		'connect:start',
		'watch'
	]);


	/**
	 * GRUNT DEV * A task for development
	 * run uglify, sass:kickoff & autoprefixer:kickoff
	 */
	grunt.registerTask('dev', [
		'uglify',
		'sass:kickoff',
		'autoprefixer:kickoff'
	]);


	/**
	* GRUNT DEPLOY * A task for your production environment
	* run uglify, sass:kickoff, autoprefixer:kickoff and csso
	*/
	grunt.registerTask('deploy', [
		'newer:uglify',
		'newer:sass:kickoff',
		'newer:autoprefixer:kickoff',
		'newer:csso'
	]);


	/**
	 * GRUNT SERVE * A task for for a static server with a watch
	 * run connect and watch
	 */
	grunt.registerTask('serve', [
		'uglify',
		'sass:kickoff',
		'autoprefixer:kickoff',
		'connect:site',
		'watch'
	]);


	/**
	 * GRUNT ICONS * A task to create all icons using grunticon
	 * run clean, svgmin and grunticon
	 */
	grunt.registerTask('icons', [
		'clean:icons',
		'svgmin',
		'grunticon'
	]);


	/**
	 * GRUNT JSCHECK * Check js for errors and style problems
	 * run jshint, jscs
	 */
	// Default task
	grunt.registerTask('jscheck', [
		'jshint',
		'jscs'
	]);


	//Travis CI to test build
	grunt.registerTask('travis', [
		'jshint',
		'uglify',
		'sass:kickoff',
		'autoprefixer:kickoff'
	]);


	/**
	 * TODO:
	 * Need task to update all grunt dependencies
	 * Need task to download all bower dependencies
	 */

};
