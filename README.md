# Brunch with what's avaliable v0.7.0
A [Brunch.io](http://brunch.io) skeleton.

## What is it
A custom configuration to quick-build a basic/scalable html5 front-end with classic components out of the box.

## What do you need
`node.js` ([https://nodejs.org/]) (includes `npm`).

## What is available
Out of the box:
* A customized index file and .htaccess based on `html5-boilerplate` ([https://html5boilerplate.com/])
* Classic libraries included jQuery/Slick Slider/Lightbox/fontAwesome/Magicssian ready to use
* A main CSS file that will be post-processed with `postcss-brunch` `postcss-import` `postcss-css-variables` ([https://postcss.org/]) and minified using `clean-css-brunch` ([https://www.cleancss.com/])
* A main JS file minified with `terser-brunch`
* An npm script to manage semantic versioning [https://semver.org/] with `version-bump-prompt`

## Usage

brunch new --skeleton https://github.com/CodeinalabMX/brunch-with-whats-available

Clone the repo, remove/update remote origin and you're ready to push the feeling on.

```
  $ git clone https://github.com/CodeinalabMX/brunch-with-whats-avaliable.git Master
  $ cd Master
  $ git remote remove origin
  $ git remote add origin https://[github.com/bitbucket.org]/[the-actual-project-repo].git
```

Check and update the following:

* Project's name, description, etc. on package.json
* Keywords map on brunch-config.js

Install npm dependencies and use brunch's build/watch commands

```
$ npm i
$ npm run brunch watch
```
