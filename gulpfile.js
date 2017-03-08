'use strict';
var gulp = require('gulp');
var gulpif = require('gulp-if');
var template = require('gulp-template-html');
var connect = require('gulp-connect');

var DIR = {
    SRC: 'src',
    DIST: 'dist'
};

var SRC = {
    JS: DIR.SRC + '/js/*.js',
    CSS: DIR.SRC + '/css/*.css',
    IMG: DIR.SRC + '/img/*.*',
    SCSS: DIR.SRC + '/scss/*.scss',
    HTML: DIR.SRC + '/*.html',
    PAGES: DIR.SRC + '/pages/*.html'
};

var DIST = {
    JS: DIR.DIST + '/js',
    CSS: DIR.DIST + '/css',
    IMG: DIR.DIST + '/img',
    PAGES: DIR.DIST + '/pages',
    HTML: DIR.DIST + '/'
};

var condition = true;

gulp.task('indexHTML', function(){        
    return gulp.src(SRC.HTML)
    .pipe(template('src/templates/template.html'))
    .pipe(gulp.dest(DIST.HTML))
    .pipe(connect.reload());
});

gulp.task('subHTML', function(){        
    return gulp.src(SRC.PAGES)
    .pipe(template('src/templates/template.html'))
    .pipe(gulp.dest(DIST.PAGES))
    .pipe(connect.reload());
});

gulp.task('default', ['indexHTML', 'subHTML'], function(){

});