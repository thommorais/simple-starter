import gulp from 'gulp'

export default function(){

  // File's paths
  const dirs = {
    src: 'assets',
    dest: 'public'
  }

  gulp.task('watch', ['browser-sync'], () => {
      gulp.watch(`${dirs.src}/sass/**/*.scss`, ['styles'])
      gulp.watch(`${dirs.src}/js/**/*.js`, ['scripts'])
  })

  gulp.task('default', ['styles', 'scripts', 'delete', 'watch'])
}
