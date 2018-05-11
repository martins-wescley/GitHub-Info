var gulp        = require('gulp'),
	browserSync = require('browser-sync')



//Server
gulp.task('server', function(){
	browserSync.init({
		server:{
			baseDir: 'src'
		}
	})
})