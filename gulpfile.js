"use strict";

const gulp=require('gulp');
const gutil=require('gulp-util');
const path=require('path');
const _=require('lodash');
const util=require('util');
const swig=require('gulp-swig');
const concat=require('gulp-concat');
const inject=require('gulp-inject');
const del=require('del');
const config=require('./gulpfile.config')();

gulp.task('clean',function(){
    return del([config.paths.dist]);
});

gulp.task('js',['clean'],function () {
   return  gulp.src(config.paths.js)
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(config.paths.dist+'/scripts'));
});

gulp.task('html',['js'],function () {
    const swigData={
        title:config.title,
        content:config.content
    };
    
    const sources=gulp.src([config.paths.dist+'/scripts/**/*.js'],{read:false});
    
   return gulp.src(config.paths.html)
        .pipe(swig({data:swigData}))
        .pipe(inject(sources,{ignorePath:'dist'}))
        .pipe(gulp.dest(config.paths.dist));
});



gulp.task('release',[]); //gulp release

gulp.task('default',['html']); //gulp