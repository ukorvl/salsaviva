const process = require('process');
const fs = require('fs');
const path = require('path');
const jimp = require('jimp');
const colors = require('colors/safe');

const imagesDirName = 'public/images';
const bluredDirName = 'blured';
const pathImagesDir = `${process.cwd()}/${imagesDirName}`;
const pathBluredDir = `${pathImagesDir}/${bluredDirName}`;

// Clear current blured images
!fs.existsSync(pathBluredDir) && fs.mkdirSync(pathBluredDir);
process.chdir(pathImagesDir);

const contents = getDirectoryContentFileNames(pathBluredDir);
for (const c of contents) {
  fs.unlink(path.join(pathBluredDir, c), (err) => {
    if (err) throw err;
  });
}
// eslint-disable-next-line no-console
console.log(colors.green(`Cleaned up ${bluredDirName} directory`));

// Process gallery images and save into blured directory
const images = getDirectoryContentFileNames(pathImagesDir);
// eslint-disable-next-line no-console
console.log(colors.gray('\nStarting process images...\n'));
for (const i of images) {
  processImage(i);
}

// eslint-disable-next-line jsdoc/require-jsdoc
function getDirectoryContentFileNames(dir) {
  let fileNamesList = [];

  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);

    if (!fs.lstatSync(fullPath).isDirectory()) {
      fileNamesList.push(file);
    }
  });

  return fileNamesList;
}

// eslint-disable-next-line jsdoc/require-jsdoc
function processImage(fileName) {
  const pathToBlured = `${bluredDirName}/${fileName}`;

  jimp.read(fileName)
    .then((result) => {
      return result
        .quality(40)
        .blur(30)
        .write(pathToBlured);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
    })
    .then(() => {
      // eslint-disable-next-line no-console
      console.log(colors.green('Created blured image: ') + pathToBlured);
    });
}
