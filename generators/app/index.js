/**
 * Created by vazovojoleg on 10/5/17.
 */

'use strict';
const Generators = require('yeoman-generator');

class ComponentGenerator extends Generators {
    constructor(args, options) {
        super(args, options);
        console.log(options)
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath(`components/Stateful.js`),
            this.destinationPath('src/index.js'),
            {}
        );
    }

}

module.exports = ComponentGenerator;