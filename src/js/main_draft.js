/*! {!project_name!} v0.1.0 */
/**
 * JS for: {!project_name!}
 *
 * Author: {!dev_alias!} @ {!dev_agency!}
 *
 * TOC:
 *
 * Modules
 * jQuery document ready
 * 
 * @todo Add each module/section needed
 * 
 */
/* Modules */
const $ = require('jquery');


/**
 * jQuery document ready
 */
$(document).ready(function()
{
	console.log('jQuery is ready');
	$('body').append('<p class="test-class">This is a test</p>');
});
