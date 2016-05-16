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
                    .withPrompts({ type:'plugin' })
                    .withArguments(['name'])
                    .withGenerators(deps);

      return runContext.toPromise();
  });

  it('loads the correct subgenerator', function () {
    assert.textEqual(runContext.answers.type, 'plugin');
  });
});
