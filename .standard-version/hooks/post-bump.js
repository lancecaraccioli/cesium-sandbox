'use strict';
const argv = require('yargs').argv;
const replace = require('replace');
const fs = require('fs');
const exec = require('child_process').exec;
const newVersion = argv.newVersion;
console.info('post-bump running with newVersion %s', newVersion);

replace({
  regex: 'v\\d+\\.\\d+\\.\\d+\\S*',
  replacement: 'v' + newVersion,
  paths: [__dirname + '/../../README.md'],
  recursive: true,
  silent: true,
});
console.info('README.md version updated');

fs.writeFileSync(__dirname + '/../../src/version.js', `export default '${newVersion}';\n`);
console.info('src/version.js version updated');

exec('npm run dist', (error, stdout, stderr) => {
  if (error) {
    if (stderr) {
      console.log(`${stderr}`)
    }
    throw new Error(`failed to build project: ${error}`)
  }
  if (stdout) {
    console.info(`${stdout}`)
  }
  console.info('New distribution successfully built.');
});
