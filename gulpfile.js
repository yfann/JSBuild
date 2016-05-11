"use strict";

const gulp=require('gulp');
const gutil=require('gulp-util');
const path=require('path');
const _=require('lodash');
const util=require('util');
const swig=require('gulp-swig');

const config=require('./gulpfile.config')();


gulp.task('html',function () {
    const swigData={
        title:config.title,
        content:config.content
    };
    
    gulp.src(config.paths.html)
        .pipe(swig({data:swigData}))
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('default',['html']);