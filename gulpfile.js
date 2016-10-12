var gulp = require('gulp');
var bower = require('gulp-bower');
var webpack = require('webpack');

var config = require('./webpack.config.js');

gulp.task('default', function(done) {
    bower();
    webpack(config).run(onBuild(done));
});

function onBuild(done) {
    return function(err, stats) {
        if (err) {
            console.log('Error', err);
            if (done) {
                done();
            }
        } else {
            Object.keys(stats.compilation.assets).forEach(function(key) {
                console.log('Webpack: output ' + key);
            });
            console.log('Webpack: ' +'finished '+ stats.compilation.name);
            if (done) {
                done();
            }
        }
    }
}