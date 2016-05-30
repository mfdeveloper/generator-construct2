'use strict'
var helpers = require('yeoman-test');
var assert = require('yeoman-assert');
var path = require('path');

describe('construct2:plugin', function () {
  var runContext;

  before(function () {

    runContext = helpers.run(path.join(__dirname, '../generators/plugin'))
                        .withArguments(['MyPlugin'])
                        .withPrompts({
                          description: 'This is a plugin test',
                          homepage: 'http://myplugin.io'
                        });

    return runContext.toPromise();

  });

  it('creates addon files', function () {

    var expected = [
      'common.js',
      'edittime.js'
    ];

    assert.file(expected);
  });

  it('the dirname should has underscore', function () {

    assert.textEqual(runContext.generator.args[1], 'my_plugin');
  });

});
