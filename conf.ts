import {Config, browser} from 'protractor'

export let config: Config ={
    framework: 'jasmine',
    capabilities: {browserName: 'chrome' },
    // specs:['./specs/calculator.js'],
    specs:['./specs/tests/KayakTest.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    onPrepare: function(){
        browser.waitForAngularEnabled(false)
    }
}