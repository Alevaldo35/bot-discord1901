// generated from test/fixtures/semver-installed-with-old-package-lock
module.exports = t => {
  const path = t.testdir({
  "node_modules": {
    "semver": {
      "package.json": JSON.stringify({
        "_from": "semver@^7.3.2",
        "_id": "semver@7.3.2",
        "_inBundle": false,
        "_integrity": "sha512-OrOb32TeeambH6UrhtShmF7CRDqhL6/5XpPNp2DuRH6+9QLw/orhp72j87v8Qa1ScDkvrrBNpZcDejAirJmfXQ==",
        "_location": "/semver",
        "_phantomChildren": {},
        "_requested": {
          "type": "range",
          "registry": true,
          "raw": "semver@^7.3.2",
          "name": "semver",
          "escapedName": "semver",
          "rawSpec": "^7.3.2",
          "saveSpec": null,
          "fetchSpec": "^7.3.2"
        },
        "_requiredBy": [
          "/"
        ],
        "_resolved": "https://registry.npmjs.org/semver/-/semver-7.3.2.tgz",
        "_shasum": "604962b052b81ed0786aae84389ffba70ffd3938",
        "_spec": "semver@^7.3.2",
        "_where": "/Users/isaacs/dev/npm/arborist/x",
        "bin": {
          "semver": "bin/semver.js"
        },
        "bugs": {
          "url": "https://github.com/npm/node-semver/issues"
        },
        "bundleDependencies": false,
        "deprecated": false,
        "description": "The semantic version parser used by npm.",
        "devDependencies": {
          "tap": "^14.10.7"
        },
        "engines": {
          "node": ">=10"
        },
        "files": [
          "bin/**/*.js",
          "range.bnf",
          "classes/**/*.js",
          "functions/**/*.js",
          "internal/**/*.js",
          "ranges/**/*.js",
          "index.js",
          "preload.js"
        ],
        "homepage": "https://github.com/npm/node-semver#readme",
        "license": "ISC",
        "main": "index.js",
        "name": "semver",
        "repository": {
          "type": "git",
          "url": "git+https://github.com/npm/node-semver.git"
        },
        "scripts": {
          "postpublish": "git push origin --follow-tags",
          "postversion": "npm publish",
          "preversion": "npm test",
          "snap": "tap",
          "test": "tap"
        },
        "tap": {
          "check-coverage": true,
          "coverage-map": "map.js"
        },
        "version": "7.3.2"
      })
    }
  },
  "package-lock.json": JSON.stringify({
    "requires": true,
    "lockfileVersion": 1,
    "dependencies": {
      "semver": {
        "version": "7.3.2",
        "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.2.tgz",
        "integrity": "sha512-OrOb32TeeambH6UrhtShmF7CRDqhL6/5XpPNp2DuRH6+9QLw/orhp72j87v8Qa1ScDkvrrBNpZcDejAirJmfXQ=="
      }
    }
  }),
  "package.json": JSON.stringify({
    "dependencies": {
      "semver": "^7.3.2"
    }
  })
})
  return path
}
