exports.config = {
    specs: [
        './features/**/*.feature',
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 5,

    capabilities: [{
        maxInstances: 5,
        //browserName: "internet explorer",
        browserName: "chrome",
        //acceptSslCerts: true,
        chromeOptions: {
            args: ["--start-maximized"]
        }
    }],

    sync: true,

    logLevel: 'error',

    coloredLogs: true,

    screenshotPath: './errorShots/',

    baseUrl: 'http://localhost:4444',

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
            './step_definitions/given.js',
            './step_definitions/then.js',
            './step_definitions/when.js',
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
