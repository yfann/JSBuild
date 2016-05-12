"use strict";

const gulp=require('gulp');
const gutil=require('gulp-util');
const path=require('path');
const _=require('lodash');
const util=require('util');
const swig=require('gulp-swig');
const concat=require('gulp-concat');
const inject=require('gulp-inject');

const config=require('./gulpfile.config')();

gulp.task('js',function () {
    gulp.src(config.paths.js)
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(config.paths.dist+'/scripts'));
});

gulp.task('html',function () {
    const swigData={
        title:config.title,
        content:config.content
    };
    
    const sources=gulp.src([config.paths.dist+'/scripts/**/*.js'],{read:false});
    
    gulp.src(config.paths.html)
        .pipe(swig({data:swigData}))
        .pipe(inject(sources,{ignorePath:'dist'}))
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('default',['js','html']);