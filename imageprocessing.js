const fs = require("fs");
const sharp = require("sharp");
// const rimraf = require("rimraf");
const path = require("path");

// delete the processed folder
// rimraf.sync(imagesDirectory + "/processed");

const imagesDirectory = "./src/images";

if (!fs.existsSync(imagesDirectory + "/processed")) {
  fs.mkdirSync(imagesDirectory + "/processed");
}

const imageFileNames = fs.readdirSync(imagesDirectory + "/original");
const imageWidthBreakPoints = [2000, 1200, 1000, 800, 600, 400];

imageFileNames.forEach(file => {
  const filePath = imagesDirectory + "/original/" + file;
  imageWidthBreakPoints.forEach(width => {
    const outputPath =
      imagesDirectory +
      "/processed/" +
      path.parse(file).name + // name
      "-" +
      parseInt(width) + //2000w
      "w.jpg";
    console.log(filePath, outputPath);
    transformers(filePath, outputPath, width);
  });
});

function transformers(filePath, outputPath, width, withoutEnlargement = true) {
  const readableStream = fs.createReadStream(filePath);
  const writableStream = fs.createWriteStream(outputPath);
  const transform = sharp().resize(width, null, {
    withoutEnlargement: withoutEnlargement
  });
  readableStream.pipe(transform).pipe(writableStream);
}
