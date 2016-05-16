'use strict'
var helpers = require('yeoman-test');
var assert = require('yeoman-assert');
var path = require('path');

describe('construct2:plugin', function () {

  before(function () {

    return helpers.run(path.join(__dirname, '../generators/plugin'))
                  .withArguments(['name'])
                  .withPrompts({
                    description: 'This is a plugin test',
                    homepage: 'http://myplugin.io'
                  })
                  .toPromise();
  });

  it('creates addon files', function () {

    var expected = [
      'common.js',
      'edittime.js'
    ];

    assert.file(expected);
  });

});
