var gulp = require('gulp');
var spsave = require('gulp-spsave');
var plumber = require("gulp-plumber");
var opt = require("./option.js");
var React = require('react');
var filterFile = ['src/**/*.*'];

var coreOptions = {
    siteUrl: opt.siteUrl,
    folder: "",
    flatten: false,
    notification: true,
    checkin: true,
    checkinType: 0
};

var publishOptions = {
    siteUrl: opt.siteUrl,
    folder: "",
    flatten: false,
    notification: true,
    checkin: true,
    checkinType: 1
};


gulp.task("default", function () {
    return gulp.src(filterFile).pipe(spsave(coreOptions, opt.creds));
});
var onError = function (err) {
    console.log(err);
    this.emit("end");
};
gulp.task("spWatch", function () {
    gulp.watch(filterFile, function (event) {
        return gulp.src(event.path, {base: "src"})
            .pipe(plumber({errorHandler: onError}))
            .pipe(spsave(coreOptions, opt.creds));
    });
});
gulp.task("spPublish", function () {
    return gulp.src(filterFile)
        .pipe(spsave(publishOptions, opt.creds));
});