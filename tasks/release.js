'use strict';
const standardVersion = require('standard-version');
const argv = require('yargs').argv;

argv.conventionalChangeLogPreset = 'angular';
argv.commitAll = true;//force committing all (build artifacts, see .standard-version/hooks/post-bump.js)
standardVersion(argv, done);

function done(err) {
  if (err) {
    console.error(`standard-version failed with message: ${err.message}`)
  }
  // standard-version is done
}

