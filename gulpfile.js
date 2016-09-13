var gulp = require('gulp');
var scssPlugin = require('gulp-sass');


livereload = require('gulp-livereload');

gulp.task('default', function() {
  console.log('Running Gulp');
});


gulp.task('loadjs', function() {
  return gulp.src('public/javascripts/bundle.js')
    .pipe(livereload())
})

gulp.task('loadjade', function() {
  return gulp.src('views/**/*.jade')
    .pipe(livereload())
})

gulp.task('loadcss', function() {
  return gulp.src('public/stylesheets/**/*.scss')
    .pipe(scssPlugin())
    .pipe(gulp.dest('public/stylesheets/build'))
    .pipe(livereload())
})

// Watch Files For Changes
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('public/javascripts/*.js', ['loadjs'])
    gulp.watch('public/stylesheets/**/*.scss', ['loadcss'])
    gulp.watch('views/**/*.jade', ['loadjade'])
    gulp.watch('views/partials/*.jade', ['loadjade'])
})
