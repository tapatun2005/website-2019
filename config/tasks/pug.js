import gulp from 'gulp'
import pug from 'gulp-pug'
import data from 'gulp-data'
import notify from 'gulp-notify'
import fs from 'fs'

const Config = require('../config')

export function pugs() {
	
  return gulp.src(Config.src.pugs)
	.pipe(pug())
	.pipe(gulp.dest(Config.dist.pugs))
}