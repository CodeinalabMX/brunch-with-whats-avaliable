module.exports = {

	//optimize: false,
  //
	paths: {
  	public: 'public_html',
  	watched: ['src']
	},

  conventions: {
    assets: /src\/assets\//,
  },
	
	modules: {
		wrapper: false
  },

  files: {

    javascripts: {
    	joinTo: {
        'js/main.min.js': [
          /^(?!node_modules|src\/plugins)/,
          'src/js/main_draft.js'
        ],
        'js/plugins.min.js': [
          /^(node_modules|src\/plugins)/,
        ]
    	}
  	},

    stylesheets: {
    	joinTo: {
    		'css/main.min.css': [
          /^(?!node_modules|src\/plugins)/,
        ],
    		'css/plugins.min.css': [
          /^(node_modules|src\/plugins)/,
        ]
    	}
    },

  },

  npm: {
    styles: {
      '@fortawesome/fontawesome-free': ['css/all.css']
    }
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
      map: true,
      processors: [
        require('postcss-import')(),
        require('postcss-css-variables')({
                  preserve: true
                })
      ]
    },

    cleancss: {
      /* Ignored skip files from process
       * keep in mind that cleancss runs on files created by joinTo */
      //* ignored: /[regex]/,
      //sourceMap: true,
      level: 2,
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
        project_name: 'Brunch with what\'s avalailable',
        project_url: 'https://github.com/CodeinalabMX/brunch-with-whats-avaliable',
        dv_name: 'Alejandro De Alba S.',
        dv_alias: 'hEy',
        dv_agency: 'Codeinalab',
        dv_url: 'http://codeinalab.com',
        ds_agency: 'Codeinalab',
        ds_url: 'http://codeinalab.com'
       }
    }
    

  }


}