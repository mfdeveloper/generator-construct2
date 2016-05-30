'use strict';
var yeoman = require('yeoman-generator');
var mkdirp = require('mkdirp');
var path = require('path');
var _ = require('lodash');

module.exports = yeoman.Base.extend({

  initializing: function () {
    this.props = {};
    this.subgenerator = _.capitalize(path.basename(__dirname));
  },

  constructor: function () {

    yeoman.Base.apply(this, arguments);

    this.argument('name', {
      type: String,
      desc: 'The name of the plugin',
      required: true
    });

    this.argument('dirName', {
      type: String,
      desc: 'The directory name of the plugin',
      required: false,
      optional: true
    });
  },

  prompting: function () {

    var prompts = [{
      type: 'input',
      name: 'description',
      message: 'Description',
      default: 'This a construct2 '+path.basename(__dirname)
    },{
      type: 'input',
      name: 'version',
      message: 'Version',
      default: '0.1'
    },{
      type: 'input',
      name: 'author',
      message: "Author's name",
      default: 'Someone<someone@corporation.com>'
    },{
      type: 'input',
      name: 'homepage',
      message: 'Online documentation',
      default: 'http://github.io/my-'+this.subgenerator+'/doc'
    },{
      type: 'input',
      name: 'category',
      message: 'Category',
      default: 'General'
    },{
      type: 'input',
      name: 'type',
      message: this.subgenerator+' type',
      default: 'world'
    },{
      type: 'confirm',
      name: 'rotatable',
      message: 'Enables an angle property on the object?',
      default: 0
    },{
      type: 'checkbox',
      name: 'flags',
      message: 'Choose a or more flags below:',
      choices:[
        { name: 'None', value: '0' },
        { name: 'PF SingleGlobal', value: 'pf_singleglobal' }
      ],
      default: [0]
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  default: function () {

    if (!this.dirName) {
      this.dirName = _.snakeCase(this.name);
    }

    mkdirp(this.dirName);
    this.destinationRoot(this.destinationPath(this.dirName));
  },

  writing: function () {

    this.fs.copy(
      this.templatePath('unpacked/common.js'),
      this.destinationPath('common.js')
    );

    this.fs.copyTpl(
      this.templatePath('unpacked/edittime.js'),
      this.destinationPath('edittime.js'),
      _.extend({
        name: this.name,
        subgenerator: this.subgenerator,
        id: this.name
      }, this.props)
    );

  },

  install: function () {
    this.installDependencies();
  }
});
