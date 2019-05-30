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

    copycat: {
	    'fonts/fontawesome': [
	      'node_modules/@fortawesome/fontawesome-free/webfonts'
	    ],
	    verbose : false,
	    /* Only copy a file if it's modified time has changed
	     * (only effective when using brunch watch) */
	    onlyChanged: true
    },

    keyword: {
      filePattern: /\.(js|css|html|txt|xml)$/,
      //Extra files to process which `filePattern` wouldn't match
      extraFiles: [
        //'humans.txt', 
        //'index.html'
      ],
      //By default keyword-brunch has these keywords:
      //    {!version!}, {!name!}, {!date!}, {!timestamp!}
      //using information from package.json
      map: {
        project_name: '',
        project_url: '',
        dv_name: 'Alejandro De Alba S.',
        dv_alias: 'hEy',
        dv_agency: 'Codeinalab',
        dv_url: 'http://codeinalab.com',
        ds_agency: '',
        ds_url: ''
       }
    }
    

  }


}