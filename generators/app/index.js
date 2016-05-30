var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var path = require('path');
var _ = require('lodash');

const AddonsTypes = {
  PLUGIN: 'plugin',
  BEHAVIOR: 'behavior'
};

module.exports = yeoman.Base.extend({

  initializing: function () {
    this.props = {};
  },
  constructor: function () {

    //Call super constructor
    yeoman.Base.apply(this, arguments);

  },
  prompting: function () {

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the groovy ' + chalk.red('generator-construct2') + ' generator!'
    ));

    var prompts = [{
        type    : 'input',
        name    : 'name',
        message : 'Your construct2 addon name',
        filter  : function (value) {
          return Filters.addonName(name);
        },
        default : path.basename(process.cwd())
    },{
        type    : 'list',
        name    : 'type',
        message : 'Which construct2 addon do you want create?',
        choices : [
          {name:'Plugin', value: AddonsTypes.PLUGIN},
          {name:'Behavior', value: AddonsTypes.BEHAVIOR}
        ],
        default : AddonsTypes.PLUGIN
    }];

    return this.prompt(prompts).then(function (props) {
        this.props = props;
      }.bind(this));
  },

  default: function () {

    if (this.props.type) {

      var subgenerator = 'construct2:'+this.props.type;
      this.composeWith(subgenerator, {
        args: [ Filters.rawValue, this.props.name ]
      });
    }

  }
});

var Filters = module.exports.Filters = {
  rawValue: '',
  addonName: function (value) {
    this.rawValue = value;
    var str = (_.camelCase(value)).replace(value[0], value[0].toUpperCase());
    return Promise.resolve(str);
  }
};
