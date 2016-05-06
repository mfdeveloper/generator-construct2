'use strict';
var yeoman = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = yeoman.Base.extend({

  constructor: function () {

    yeoman.Base.apply(this, arguments);

    this.argument('name',{
      type: String,
      desc: 'A name of the plugin',
      required: true,
    })
  },

  default: function () {

    if (this.name) {
      mkdirp(this.name);
      this.destinationRoot(this.destinationPath(this.name));
    }
  },

  writing: function () {

    this.fs.copy(
      this.templatePath('unpacked/common.js'),
      this.destinationPath('common.js')
    )

    this.fs.copyTpl(
      this.templatePath('unpacked/edittime.js'),
      this.destinationPath('edittime.js'),
      { name: this.name }
    );

  },

  install: function () {
    this.installDependencies();
  }
});
