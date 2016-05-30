'use strict';
var helpers = require('yeoman-test');
var assert = require('yeoman-assert');
var path = require('path');

describe('construct2:app', function () {
  var runContext;

  before(function () {

      var deps = [
        [helpers.createDummyGenerator(), 'construct2:plugin']
      ];

      runContext = helpers.run(path.join(__dirname, '../generators/app'))
                          .withPrompts({
                            name: 'my-addon',
                            type:'plugin'
                          })
                          .withGenerators(deps);

      return runContext.toPromise();
  });

  it('loads the correct subgenerator', function () {
    assert.textEqual(runContext.answers.type, 'plugin');
  });

  it('filter addon name', function () {
    var generator = require(path.join(__dirname, '../generators/app'));
    generator.Filters.addonName('my-addon').then(function (value) {

      assert.textEqual(value, 'MyAddon');
    });
  });
});
