import util from 'gulp-util'

// Disable or enable pop up notifications
const notifications = true
if (!notifications) {
  process.env.DISABLE_NOTIFIER = true // Uncomment to disables all notifications
}

// Paths
const fileExt = '.html' // Default file extension
const source = 'src'
const root = '.'
const dest = 'dist'
const assets = 'assets'

const src = {
  dataFile: `${root}/${source}/data/data.json`,
  json: `${root}/${source}/data/**/*.json`,
  pages: `${root}/${source}/pages/**/*${fileExt}`,
  templates: `${root}/${source}/templates/**/*${fileExt}`,
  scss: `${root}/${source}/styles/**/*.scss`,
  webpack: `${root}/${source}/scripts/**/*.js`,
  img: `${root}/${source}/img/**/*.{jpg,gif,svg,ico}`,
  imgPng: `${root}/${source}/img/**/*.png`,
  svg: `${root}/${source}/img/svg/**/*.svg`,
  fonts: `${root}/${source}/fonts/**/*`,
  video: `${root}/${source}/video/**/*`,
  static: `${root}/${source}/static/**/*`,
  pugs: `${root}/${source}/pugs/*.pug`
}

const dist = {
  pages: `${root}/${dest}`,
  php: `${root}/${dest}/php`,
  css: `${root}/${dest}/${assets}/css`,
  static: `${root}/${dest}`,
  webpack: `${root}/${dest}/${assets}/js`,
  img: `${root}/${dest}/${assets}/img`,
  svg: `${root}/${dest}/${assets}/img/svg`,
  fonts: `${root}/${dest}/${assets}/fonts`,
  video: `${root}/${dest}/${assets}/video`,
  production: `${root}/production`,
  json: `${root}/${dest}/${assets}/data/`,
  pugs: `${root}/${dest}`,
}

const config = {
  reports: `.${root}/reports`, // Lint reports saved here
  lint: `${root}/${source}/styles/**/*.scss`, // Path of SCSS files that you want to lint
  data: `${root}/${source}/data/**/*.json`,
  json: `${root}/${source}/data/**/*`,
  lintExclude: `!${root}/${source}/styles/vendor/**/*.scss`, // Path of SCSS files that you want to exclude from lint
  templates: [`${root}/${source}/templates/`, `${source}/templates/partials/`], // Default file paths for nunjucks
  pagesWatch: `${root}*${fileExt}`, // HTML injection  - This is the directory where pages are output
  pagesWatch: `${root}*.php`, // HTML injection  - This is the directory where pages are output
  production: !!util.env.production // Used for production deployment
}

module.exports = {
  source,
  dest,
  assets,
  fileExt,
  src,
  dist,
  config,
}
