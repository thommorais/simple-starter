import gulp from 'gulp'
import browserSync from 'browser-sync'

export default function(){

  gulp.task('browser-sync', () => {

    const files = [
      'public/*.css',
      'public/*.js',
      './*.html',
      '*/*.html'
    ]

    browserSync.init(files, {
      notify: false,
      server: {
        baseDir: "./"
      }
    })

  })
}
