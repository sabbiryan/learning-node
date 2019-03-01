const gulp = require("gulp");
const debug = require("gulp-debug");
const babel = require("gulp-babel");

gulp.task("build", () => {
    gulp.src("src/**/*.js")
        .pipe(debug())
        .pipe(babel(
            {
                "presets": ["@babel/preset-env"],
                "plugins": ["@babel/plugin-transform-runtime"]
            }
        ))
        .on("error", (error) => {
            console.log(`Babel error: ${error}`)
        })
        .pipe(gulp.dest(".compiled"));
});


gulp.task("default", ["build"], () => {
    console.log("Run default...");
})
