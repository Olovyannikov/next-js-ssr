const gulp = require('gulp');
const {series, parallel, dest, src} = require('gulp');
const gulpClean = require('gulp-clean');
const svgSprite = require('gulp-svg-sprite');
const fs = require('fs');

const clean = () => gulp.src([
    './build',
    'src/client/generated',
], {read: false, allowEmpty: true}).pipe(gulpClean());

const createDirs = (cb) => {
    fs.mkdirSync('build', {recursive: true});
    fs.mkdirSync('src/client/generated', {recursive: true});
    fs.mkdirSync('build/public', {recursive: true});

    cb();
};

const svgSprites = () => {
    return src(['src/client/assets/img/svg/**/*.svg'])
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../sprite.svg', //sprite file name
                },
            },
        }))
        .pipe(dest(['public/sprite/']));
};

const copyStatic = () => {
    return gulp.src("./public/**/*").pipe(gulp.dest("build/public"));
};

exports.default = series(
    createDirs,
    clean,
    createDirs,
    svgSprites,
    parallel(
        copyStatic
    )
)