# Brunch with what's avaliable v0.7.0
A [Brunch.io](http://brunch.io) skeleton.

## What is it
A custom configuration to quick-build a basic/scalable html5 front-end with classic components out of the box.

## What do you need
[`node/npm`](https://nodejs.org/).

## What is available
* A customized html index and .htaccess files based on [`html5-boilerplate`](https://html5boilerplate.com/). 
* Classic libraries included and ready to use: jQuery/Slick Slider/Lightbox/fontAwesome. 
* A main CSS file post-processed and minified with brunch plugins for [`postcss`](https://postcss.org/) and [`clean-css`](https://www.cleancss.com/).
* A main JS file minified with `terser-brunch`. 
* A npm script to manage [semantic versioning](https://semver.org/) with `version-bump-prompt` library. 

## Usage
- Clone the repo, update project's info and re-init.

```
  # Clone
  $ git clone https://github.com/CodeinalabMX/brunch-with-whats-avaliable.git Master
  $ cd Master

```

- Update the following: 

  * Project's name, description, repository, etc. on package.json. 
  * Keyword map on brunch-config.js. 
  * This README

  # Reinit
  $ rm -r .git
  $ git init
  $ git remote add origin https://[github.com/bitbucket.org]/[the-actual-project-repo].git
```

- Install npm dependencies, use brunch's watch/build commands. 

```
$ npm i
$ npm run brunch watch
```
