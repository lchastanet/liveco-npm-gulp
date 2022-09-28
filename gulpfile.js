const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const babel = require("gulp-babel");

gulp.task("minify-css", () => {
  return gulp
    .src("*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist"));
});

gulp.task("es6-compatibility", () => {
  return gulp
    .src("app.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(gulp.dest("dist"));
});

gulp.task("default", gulp.series("minify-css", "es6-compatibility"));
