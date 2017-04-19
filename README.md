# Cesium Sandbox

## For Project Developers

### Modifying this project

The normal workflow for making changes to this project is:

  * `npm start` start the development web server
  
  * `npm run dist`  to generate the production build files

  * Commit to your branch (see CHANGELOG.md for commit message conventions), 
    have pull request review, approved, and merged to master.
    
  * Once your PR lands in master run `npm run release` which will do the following. 
    * update the project version in package.json, bower.json
    * generate src/version.js
    * build a new distribution
    * Update [CHANGELOG.md](./CHANGELOG.md) (See git commit style guidelines in CHANGELOG.md)
    * Commit all build artifacts
    * Tag a new release
    
  * The final step is to manually push your changes and tags to the remote repository
    * `git push --follow-tags origin master`
