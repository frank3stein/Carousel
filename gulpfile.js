const { task, src, dest } = require("gulp");
const responsive = require("gulp-responsive");
const del = require("del");

task("image", () => {
  return src("src/images/original/*.{png,jpg}")
    .pipe(
      responsive(
        {
          "*.jpg": [
            {
              width: 1920,
              rename: { suffix: "-1920w" }
            },
            {
              width: 1200,
              rename: { suffix: "-1200w" }
            },
            {
              width: 1000,
              rename: { suffix: "-1000w" }
            },
            {
              width: 800,
              rename: { suffix: "-800w" }
            },
            {
              width: 600,
              rename: { suffix: "-600w" }
            },
            {
              width: 400,
              rename: { suffix: "-400w" }
            },
            {
              rename: { suffix: "-original" }
            }
          ]
        },
        {
          quality: 70,
          progressive: true,
          withMetaData: false,
          skipOnEnlargement: true,
          withoutEnlargement: true
        }
      )
    )
    .pipe(dest("./src/images/processed"));
});

task("clean", () => {
  return del("./src/images/processed/**");
});
