exports.config = {
    specs: [
        './src/features/**/*.feature',
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 5,

    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
    }],

    sync: true,

    logLevel: 'error',

    coloredLogs: true,

    screenshotPath: './errorShots/',

    baseUrl: 'http://localhost:8080',

    waitforTimeout: 10000,

    connectionRetryTimeout: 90000,

    connectionRetryCount: 3,

    services: ['selenium-standalone'],

    framework: 'cucumber',

    reporters: ['spec'],

    cucumberOpts: {

        backtrace: false,

        compiler: [
            'js:babel-register',
        ],

        failAmbiguousDefinitions: true,

        failFast: false,

        ignoreUndefinedDefinitions: false,

        name: [],

        snippets: true,

        source: true,

        profile: [],

        require: [
            './src/step_definitions/given.js',
            './src/step_definitions/then.js',
            './src/step_definitions/when.js',
        ],

        snippetSyntax: undefined,

        strict: true,

        tagExpression: 'not @Pending',

        tagsInTitle: false,

        timeout: 20000,
    },


    before: function before() {
        /**
         * Setup the Chai assertion framework
         */
        const chai = require('chai');

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    },
};
