// sass
import gulp from 'gulp'
import sourcemaps from 'gulp-sourcemaps'
import plumber from 'gulp-plumber'

import gutil from 'gulp-util'


import sass from 'gulp-sass'
import sassGlob from 'gulp-sass-glob'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS  from 'gulp-clean-css'


// File's paths
const dirs = {
  src: 'assets',
  dest: 'public'
}

const sassPaths = {
  src: `${dirs.src}/sass/*.scss`,
  dest: `${dirs.dest}`
}

const jsPaths = {
  src: `${dirs.src}/**/*.js`,
}

export default function(){

  gulp.task('styles', () => {

    return gulp.src(sassPaths.src)
      .pipe(sourcemaps.init())
      .pipe(sassGlob())
      .pipe(plumber(error => gutil.log(error.message)))
      .pipe(sass.sync())
      .pipe(autoprefixer())
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(sassPaths.dest))

  })

}
