module.exports = {

	paths: {
  	public: 'public_html',
  	watched: ['src']
	},

	optimize: true,
	
	modules: {

		wrapper: false
    
  },

  npm: {

  },

  files: {

    javascripts: {
    	joinTo: {
        'js/main.min.js': [
          'src/js/main_draft.js'
        ],
        'js/plugins.min.js': [
          /^node_modules/
        ]
    	}
  	},

    stylesheets: {
    	joinTo: {
    		'css/main.min.css': [
          'src/css/main_draft.css'
        ],
    		'css/plugins.min.css': [

        ]
    	}
    },

  },

  plugins: {

  	terser: {
      /* Use ignored to skip files from process
       * keep in mind that terser runs on files created by joinTo */
      //* ignored: /[regex]/,
      output: {
        comments: /^!/
      }
    },

    postcss: {
      
    },

    cleancss: {
      /* Ignored skip files from process
       * keep in mind that cleancss runs on files created by joinTo */
      //* ignored: /[regex]/,
      level: 2
    },

    copycat:{
	    'fonts/fontawesome' : [
	      'node_modules/@fortawesome/fontawesome-free/webfonts'
	    ],
	    verbose : false,
	    /* Only copy a file if it's modified time has changed
	     * (only effective when using brunch watch) */
	    onlyChanged: true
    },

  }


}