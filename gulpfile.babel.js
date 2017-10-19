'use strict'

// js
import scripts from './gulp-assets/scripts'
scripts()

// sass
import styles from './gulp-assets/scss'
styles()

// Delete Files
import deleter from './gulp-assets/delete'
deleter()

// Browser-sync
import browserSync from './gulp-assets/browserSync'
browserSync()

// Defaults
import defaults from './gulp-assets/defaults'
defaults()
