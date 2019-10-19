import gulp from 'gulp'
import scss from 'gulp-sass'
import util from 'gulp-util'
import scsslint from 'gulp-scss-lint'
import sourcemaps from 'gulp-sourcemaps'
import gutil from 'gulp-util'
import autoprefixer from 'gulp-autoprefixer'
import csso from 'gulp-csso'
import notify from 'gulp-notify'
import sassGlob from 'gulp-sass-glob'

const Config = require('../config')

export function sass() {
  return gulp.src(Config.src.scss)
    .pipe(Config.config.production ? util.noop() : sourcemaps.init())
    .pipe(sassGlob())
    .pipe(scss({
      includeConfigs: [Config.src.scss]
    }))
    .on('error', notify.onError(function(error) {
      return 'An error occurred while compiling scss.\nLook in the console for details.\n' + error
    }))
    .pipe(autoprefixer({
      browserlist: ['last 2 versions', 'ie 6-10'],
      cascade: false
    }))
    .pipe(Config.config.production ? csso({
      debug: true
    }, function(details) {
      console.log(`${details.name} file size before: ${details.stats.originalSize} bytes`)
      console.log(`${details.name} file size after: ${details.stats.minifiedSize} bytes`)
    }) : util.noop())
    .pipe(Config.config.production ? util.noop() : sourcemaps.write(Config.config.maps))
    .pipe(gulp.dest(Config.dist.css))
}

// $ scss-lint - SCSS Linter
export function scssLint() {
  return gulp.src([Config.config.lint, Config.config.lintExclude])
    .pipe(scsslint({
      'reporterOutputFormat': 'Checkstyle',
      'filePipeOutput': 'scssReport.xml',
      'config': 'scss-lint.yml'
    }))
    .pipe(gulp.dest(Config.config.reports))
}
