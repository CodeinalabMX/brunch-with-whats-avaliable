# Brunch with what's avaliable v0.6.1
A [Brunch.io](http://brunch.io) custom build setup.

## What is it
A boilerplate to build a basic/scalable html5 project with classic components out-of-the-box.

## What is available
Out of the box:
* A customized index file and .htaccess based on `html5-boilerplate` ([https://html5boilerplate.com/])
* jQuery/fontAwesome/Swiper ready to use
* A CSS draft file that will be post-processed with `postcss-brunch` `postcss-import` `postcss-css-variables` ([https://postcss.org/]) and minification using `clean-css-brunch` ([https://www.cleancss.com/])
* A JS draft file ready to be minified with `terser-brunch`
* A set of keywords to be customized per-project with `keyword-brunch`
* An npm script to manage semantic versioning [https://semver.org/] with `version-bump-prompt`

## Usage
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

From this point you're free.