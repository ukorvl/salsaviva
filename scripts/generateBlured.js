const process = require('process');
const fs = require('fs');
const path = require('path');

const galleryDirName = 'public/gallery';
const bluredDirName = 'blured';
const pathGalleryDir = `${process.cwd()}/${galleryDirName}`;

// Cd gallery images directory
!fs.existsSync(pathGalleryDir) && fs.mkdirSync(pathGalleryDir);
process.chdir(pathGalleryDir);

// Clear current blured images
const pathBluredDir = `${process.cwd()}/${bluredDirName}`;
!fs.existsSync(pathBluredDir) && fs.mkdirSync(pathBluredDir);

fs.readdir(pathBluredDir, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(pathBluredDir, file), (err) => {
      if (err) throw err;
    });
  }
});

console.log(process.cwd());
