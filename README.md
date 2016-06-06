# generator-construct2  [![Build Status](https://secure.travis-ci.org/mfdeveloper/generator-construct2.svg?branch=master)](https://travis-ci.org/mfdeveloper/generator-construct2) [![Coverage Status](https://coveralls.io/repos/github/mfdeveloper/generator-construct2/badge.svg?branch=master)](https://coveralls.io/github/mfdeveloper/generator-construct2?branch=master)

> Yeoman generator generating a Construct2 game engine plugins/behaviors

## Getting started

- Clone this repo: `git clone git@github.com:mfdeveloper/generator-construct2.git`
- Into the cloned directory, link this generator to global _node_modules_:
```shell
cd generator-construct2
npm link
```
> **Obs:** Needs install `node` and `npm`. Use [nvm](https://github.com/creationix/nvm#install-script) for this.

- Run: `yo generator-construct2`
- Or run specific generator: `yo generator-construct2:plugin myplugin`


## Commands

* `yo construct2` shows a wizard for generating a construct2 plugin or behavior
* `yo construct2:plugin <name>` generates a plugin with the name `<name>`

## What do you see?

After type ahead any command above, you will see something like this:

![Example](https://raw.githubusercontent.com/mfdeveloper/generator-construct2/master/images/yo-construct2.png)

## What do you get?

For now, scaffolds out a complete generator directory structure for you. Only plugin structure is created for now:

```
myplugin
  ├── common.js
  ├── edittime.js

```
## Contributing

Please, fork this repo and create a pull request by now! All contributions are welcome. Wee need your help :)


## License

GPL-V03 © Michel Felipe <mfelipeof@gmail.com> and other contributors
