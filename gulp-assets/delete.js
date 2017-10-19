// Delete Files
import gulp from 'gulp'
import del from 'del'

export default function(){
  console.log('hey')
  return gulp.task('delete', () => del(['**/*/.DS_Store']))
}
