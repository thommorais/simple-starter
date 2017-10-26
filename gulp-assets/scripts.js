// js
import gulp from 'gulp'
import babel from 'gulp-babel'
import uglify from 'gulp-uglify'
import merge from 'merge-stream'
import babili from 'gulp-babili'
// import browserify from 'gulp-browserify'
import gutil from 'gulp-util'

// utils
const $ = require('gulp-load-plugins')()
import concat from 'gulp-concat'
import plumber from 'gulp-plumber'


export default function(){

  // File's paths
  const dirs = {
    src: 'assets',
    dest: 'public'
  }

  const jsPaths = {
    //src: `${dirs.src}/**/*.js`,
    src: `${dirs.src}/js/affiliate-partners-sign-up/**/*.js`,
  }

  gulp.task('scripts', () => {

    return gulp.src(jsPaths.src)
      .pipe(concat('main.js'))
      //.pipe(browserify())
    //   .pipe(babel({presets: ['es2015']}))
    //   .pipe($.uglify())
    //   .pipe(babili({
    //     mangle: {
    //       keepClassName: true
    //     }
    //   }))

      .pipe(plumber(error => gutil.log(error.message)))
      .pipe(gulp.dest(`${dirs.dest}`))

  })

}
