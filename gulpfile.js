'use strict';
var gulp = require('gulp');
var gulpif = require('gulp-if');
var template = require('gulp-template-html');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

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

gulp.task('connect', function(){
    connect.server({
        livereload: true,
        root: 'dist'
    })
});

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

gulp.task('sass', function(){
    return gulp.src(SRC.SCSS)
    .pipe(sass({
        outputStyle: 'compressed' //nested, expanded, compact, compressed
    }))
    .pipe(gulp.dest(DIST.CSS))
    .pipe(connect.reload());
});

gulp.task('jquery', function(){
    return gulp.src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest(DIST.JS));
});

gulp.task('babel', function(){
    return gulp.src(SRC.JS)
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(gulp.dest(DIST.JS));
});

gulp.task('watch', function(){
    livereload.listen();
    gulp.watch(SRC.HTML, ['indexHTML']);
    gulp.watch(SRC.PAGES, ['subHTML']);
    gulp.watch(SRC.JS, ['babel']);
    gulp.watch(SRC.SCSS, ['sass']);
});

gulp.task('default', ['connect', 'indexHTML', 'subHTML', 'sass', 'jquery', 'babel', 'watch'], function(){

});