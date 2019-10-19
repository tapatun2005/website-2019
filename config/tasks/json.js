import gulp from 'gulp'
import changed from 'gulp-changed'

const Config = require('../config')

export function json() {
  return gulp
    .src(Config.src.json)
    .pipe(gulp.dest(Config.dist.json))
}