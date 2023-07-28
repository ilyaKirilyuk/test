const { src, series, watch, dest } = require("gulp");
const del = require("del");
const htmlmin = require('gulp-htmlmin');
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const svgSprite = require("gulp-svg-sprite");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify-es").default;
const notify = require("gulp-notify");
const browserSync = require("browser-sync").create();

const clean = () => {
  return del(["public"]);
};

const fonts = () => {
  return src("src/fonts/**").pipe(dest("public/fonts"));
};

const videos = () => {
  return src("src/videos/**").pipe(dest("public/videos"));
};

const images = () => {
  return (
    src("src/img/png/**").pipe(dest("public/img/png/")),
    src("src/img/jpg/**").pipe(dest("public/img/jpg/")),
    src("src/img/svg/single/**").pipe(dest("public/img/svg/"))
  );
};

const resources = () => {
  return src("src/libs/**").pipe(dest("public/libs"));
};

const buildStyles = () => {
  return src("src/styles/scss/main.scss")
    .pipe(
      sass({
        outputStyle: "expanded",
      }).on("error", sass.logError)
    )
    .pipe(dest("src/styles/css"));
};

const styles = () => {
  return src("src/styles/css/**/*.css")
    .pipe(concat("main.css"))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 5 versions"],
        cascade: false,
      })
    )
    .pipe(dest("public/styles/css"))
    .pipe(browserSync.stream());
};

const html = () => {
  return src("src/**/*.html").pipe(htmlmin({ collapseWhitespace: true })).pipe(dest("public")).pipe(browserSync.stream());
};

const svgSprites = () => {
  return src("src/img/svg/sprite/**/*.svg")
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg",
          },
        },
      })
    )
    .pipe(dest("public/img/svg"));
};

const scripts = () => {
  return src(["src/js/components/**/*.js", "src/js/main.js"])
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(concat("main.js"))
    .pipe(uglify().on("error", notify.onError()))
    .pipe(dest("public/js"))
    .pipe(browserSync.stream());
};

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: "public",
    },
  });
  watch("src/resources/**", resources);
  watch("src/**/*.html", html);
  watch("src/styles/scss/**/*.scss", buildStyles);
  watch("src/styles/css/**/*.css", styles);
  watch("src/img/svg/**/*.svg", svgSprites);
  watch("src/js/**/*.js", scripts);
};

exports.default = series(
  clean,
  fonts,
  videos,
  resources,
  buildStyles,
  styles,
  html,
  scripts,
  svgSprites,
  images,
  watchFiles
);

exports.build = series(
  clean,
  fonts,
  videos,
  resources,
  buildStyles,
  styles,
  html,
  scripts,
  svgSprites,
  images
);

