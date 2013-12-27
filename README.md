jquery.crusher.js - Vertically autoresizing textareas
=====================================================

## About

__Crusher__ allows you to make your textareas vertically resize automatically on page load and user input, based on their contents.

If you specified a CSS `height` to them, it will be turned into `min-height` to prevent them from getting shorter than this value.

Usage : `$('textarea').crush();`

That's it. Enjoy !

## Build

Crusher is built using [Grunt](http://gruntjs.com/). Simply run `grunt` at the project root to run the source through JSHint and uglify it into the `dist` folder.