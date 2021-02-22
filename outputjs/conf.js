"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var protractor_1 = require("protractor");
exports.config = {
    framework: 'jasmine',
    capabilities: { browserName: 'chrome' },
    // specs:['./specs/calculator.js'],
    specs: ['./specs/tests/KayakTest.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    onPrepare: function () {
        protractor_1.browser.waitForAngularEnabled(false);
    }
};
