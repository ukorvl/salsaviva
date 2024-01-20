const process = require('process');
const fs = require('fs');
const path = require('path');
const jimp = require('jimp');
const colors = require('colors/safe');

const imagesDirName = 'public/images';
const bluredDirName = 'blured';
const pathImagesDir = `${process.cwd()}/${imagesDirName}`;
const pathBluredDir = `${pathImagesDir}/${bluredDirName}`;

// Clear current variations
cleanupDir(pathBluredDir);

// Create new variations
const images = getDirectoryContentFileNames(pathImagesDir);
// eslint-disable-next-line no-console
console.log(colors.gray('\nStarting process images...\n'));

process.chdir(pathImagesDir);
for (const i of images) {
  processImage(i);
}

// eslint-disable-next-line jsdoc/require-jsdoc
function getDirectoryContentFileNames(dir) {
  let fileNamesList = [];

  fs.readdirSync(dir)
    .filter(x => !x.startsWith('.')) // ignore hidden files
    .forEach(file => {
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

  jimp
    .read(fileName)
    .then(result => {
      return result.quality(30).blur(30).write(pathToBlured);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err);
    })
    .then(() => {
      // eslint-disable-next-line no-console
      console.log(colors.green('Processed image: ') + fileName);
    });
}

// eslint-disable-next-line jsdoc/require-jsdoc
function cleanupDir(dir) {
  !fs.existsSync(dir) && fs.mkdirSync(dir);
  process.chdir(dir);

  const contents = getDirectoryContentFileNames(dir);
  for (const c of contents) {
    fs.unlink(path.join(dir, c), err => {
      if (err) throw err;
    });
  }
  // eslint-disable-next-line no-console
  console.log(colors.green(`Cleaned up ${dir} directory`));
}
