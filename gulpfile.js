var gulp = require('gulp');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var del = require('del');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync');
var lib = require('bower-files')({
  "overrides":{
    "bootstrap":{
      "main":[
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "less/js/bootstrap.js",
      ]
    }
  }
});
