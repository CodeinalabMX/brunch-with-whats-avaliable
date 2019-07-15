# Brunch with what's avaliable
A Brunch.io skeleton for web applications.
## What is it
An application boilerplate to build basic html5 projects out-of-the-box.
This is a custom build setup using [Brunch.io](http://brunch.io) to fit Codeinalab's worflow, headstart a scalable project with with the ability to use classic components like jQuery and FontAwesome.

## What is available
Out of the box:
* A customized html index taken from `html5-boilerplate` ([https://html5boilerplate.com/])
* jQuery/fontAwesome/Swiper ready to use (or not, just read the comments in the code)
* A CSS main draft using CSS Custom properties 	
post-processed with `postcss-brunch` `postcss-import` `postcss-css-variables` ([https://postcss.org/]) and minification using `clean-css-brunch` ([https://www.cleancss.com/])
* A main javascript draft
ready to be minified with `terser-brunch`
* A set of keywords to be customized per-project with `keyword-brunch`
Project keywords include: project's name and url's and development/design information
* A script to manage semantic versioning [https://semver.org/] with npm `version-bump-prompt`

## Usage
Clone, update origin and push the feeling on.
* Clone this repo
`
$ git clone --depth=1 https://github.com/CodeinalabMX/brunch-with-whats-avaliable.git Master
$ cd Master
`
* Create new project repo.

⋅ Goto Github/BitBucket and create the actual project repo

* Update remote origin
⋅ Remove origin and update to the new project repo
$ git remote remove origin
$ git remote add origin https://bitbucket.org/[team-name]]/[repository-name].git
* Push template files to the new repo
$ git push origin master