/**
 * Created by vazovojoleg on 10/5/17.
 */

'use strict';
const TPL_JS = require('../../utils/constants').TPL_JS;
const generateSettings = require('../../utils/yeoman').generateSettings;
const Generators = require('yeoman-generator');

class ComponentGenerator extends Generators {
    constructor(args, options) {
        super(args, options);
        // console.log(options)
        this.argument('name', {type: String, required: true});
    }

    generateComponentPath(file) {
        return `${this.options.name}/${file}`
    }

    generateJS(settings = {}) {
        this.fs.copyTpl(
            this.templatePath(TPL_JS),
            this.destinationPath(this.generateComponentPath(this.options.name + '.js')),
            {title: 'fsdaf'}
        );
    }

    // get name() {
    //     return this.options.name;
    // }

    writing() {
        console.log(this.options.name);

        this.settings = generateSettings(
            this.options.name
        );

        console.log(this.settings);
        this.generateJS({
            className: this.options.name
        });

        // console.log(this.config);

        // console.log(this.options);

        //
        //
        // // Create the component
        // this.fs.copyTpl(
        //     this.templatePath(`${this.generatorVersion}/components/${this.componentTemplateName}`),
        //     this.destinationPath(settings.component.path + settings.component.fileName),
        //     {}
        // );
        //
        // // Create the unit test
        // this.fs.copyTpl(
        //     this.templatePath(`${this.generatorVersion}/tests/Base.js`),
        //     this.destinationPath(settings.test.path + settings.test.fileName),
        //     {}
        // );
        // this.fs.copyTpl(
        //     this.templatePath(`components/Stateful.js`),
        //     this.destinationPath('src/index.js'),
        //     {}
        // );
    }

}

module.exports = ComponentGenerator;