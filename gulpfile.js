'use strict';
var gulp = require('gulp');
var template = require('gulp-template-html');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
// var imgmin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var del = require('del');

var DIR = {
    SRC: 'src',
    DIST: 'dist'
};

var SRC = {
    JS: DIR.SRC + '/js/*.js',
    TS: DIR.SRC + '/js/*.ts',
    PLUGINS: DIR.SRC + '/js/plugins/*.js',
    CSS: DIR.SRC + '/css/*.css',
    IMG: DIR.SRC + '/img/**',
    SCSS: DIR.SRC + '/scss/*.scss',
    HTML: DIR.SRC + '/*.html',
    PAGES: DIR.SRC + '/pages/*.html'
};

var DIST = {
    JS: DIR.DIST + '/js',
    PLUGINS: DIR.DIST + '/js/plugins',
    CSS: DIR.DIST + '/css',
    IMG: DIR.DIST + '/img',
    PAGES: DIR.DIST + '/pages',
    HTML: DIR.DIST + '/'
};

gulp.task('connect', function(){
    connect.server({
        livereload: true,
        root: 'dist',
        port: 4321    
    })
});

// gulp.task('imgmin', function () {
//     gulp.src(SRC.IMG)
//         .pipe(imgmin())
//         .pipe(gulp.dest(DIST.IMG));
// });

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

gulp.task('scrollDir', function(){
    return gulp.src('node_modules/scrolldir/dist/scrolldir.min.js')    
    .pipe(gulp.dest(DIST.PLUGINS));
});

gulp.task('babel', function(){
    return gulp.src(SRC.JS)
    .pipe(babel())    
    .pipe(concat("all.js"))
    .pipe(gulp.dest(DIST.JS))
    .pipe(uglify());
});

gulp.task('ts', function() {
    var tsResult = gulp.src(SRC.TS)
    .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest(DIST.JS));
})

gulp.task('plugins', function () {
    return gulp.src(SRC.PLUGINS)
    .pipe(gulp.dest(DIST.PLUGINS));
})

gulp.task('clean', function () {
    return del.sync([DIR.DIST]);
})

gulp.task('watch', function(){
    // livereload.listen();
    gulp.watch(SRC.HTML, ['indexHTML']);
    gulp.watch(SRC.PAGES, ['subHTML']);
    gulp.watch(SRC.JS, ['babel']);
    gulp.watch(SRC.TS, ['ts']);
    gulp.watch(SRC.SCSS, ['sass']);
	// gulp.watch(SRC.IMG, ['imgmin']);
});

gulp.task('default', ['connect', 'clean', 'indexHTML', 'subHTML', 'sass', 'jquery', 'scrollDir', 'babel', 'ts', 'plugins', 'watch'], function(){
    
});