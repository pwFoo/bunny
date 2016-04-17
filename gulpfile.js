
var gulp       = require('gulp'),
    rollup     = require('gulp-rollup'),
    //sourcemaps = require('gulp-sourcemaps'),
    babel      = require('rollup-plugin-babel'),
    sass       = require('gulp-sass');

var examples = [
    'container',
    'autocomplete',
    'datepicker'
];

gulp.task('default', function(){

    var build_examples = function() {
        examples.forEach(function(example) {
            gulp.src('examples/' + example + '/index.js', {read: false})
                .pipe(rollup({
                    // any option supported by rollup can be set here, including sourceMap
                    sourceMap: false,
                    plugins: [babel()]
                }))
                //.pipe(sourcemaps.write(".")) // this only works if the sourceMap option is true
                .pipe(gulp.dest('examples/' + example + '/dist'));
        });
    };

    build_examples();

});

gulp.task('sass', function () {
    return gulp.src('scss/calendar.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('examples/datepicker/dist/'));
});
