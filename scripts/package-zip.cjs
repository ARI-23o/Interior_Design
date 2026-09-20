const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const distDir = path.resolve('dist');
const zipPath = path.resolve('sowakaahdesigns_hostinger_build.zip');
const htaccessSource = path.resolve('public', '.htaccess');
const htaccessTarget = path.resolve('dist', '.htaccess');

if (fs.existsSync(htaccessSource)) {
  fs.copyFileSync(htaccessSource, htaccessTarget);
  console.log('✓ Copied .htaccess to dist/.htaccess');
}

if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

const zip = new AdmZip();

function addDirectory(dirPath, zipPathPrefix = '') {
  const items = fs.readdirSync(dirPath);
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    const entryPath = zipPathPrefix ? (zipPathPrefix + '/' + item) : item;

    if (stat.isDirectory()) {
      addDirectory(fullPath, entryPath);
    } else {
      const fileContent = fs.readFileSync(fullPath);
      zip.addFile(entryPath.replace(/\\/g, '/'), fileContent);
    }
  }
}

addDirectory(distDir);
zip.writeZip(zipPath);
console.log('✓ Successfully created sowakaahdesigns_hostinger_build.zip with Linux/Hostinger POSIX folders!');
