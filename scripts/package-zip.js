import fs from 'fs';
import path from 'path';
import archiver from 'archiver';

const distDir = path.resolve('dist');
const zipPath = path.resolve('sowakaahdesigns_hostinger_build.zip');
const htaccessSource = path.resolve('public', '.htaccess');
const htaccessTarget = path.resolve('dist', '.htaccess');

if (fs.existsSync(htaccessSource)) {
  fs.copyFileSync(htaccessSource, htaccessTarget);
  console.log('Copied .htaccess to dist/.htaccess');
}

if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

const output = fs.createWriteStream(zipPath);
const archive = archiver('zip', {
  zlib: { level: 9 }
});

output.on('close', () => {
  console.log('Zip package created successfully! Size: ' + (archive.pointer() / 1024 / 1024).toFixed(2) + ' MB');
});

archive.pipe(output);

function appendFolder(currentPath, zipBasePath = '') {
  const items = fs.readdirSync(currentPath);
  for (const item of items) {
    const fullPath = path.join(currentPath, item);
    const stat = fs.statSync(fullPath);
    const entryPath = zipBasePath ? (zipBasePath + '/' + item) : item;

    if (stat.isDirectory()) {
      appendFolder(fullPath, entryPath);
    } else {
      archive.file(fullPath, { name: entryPath });
    }
  }
}

appendFolder(distDir);
archive.finalize();
