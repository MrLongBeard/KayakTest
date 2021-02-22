"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Calculator test', function () {
    beforeEach(function () {
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    });
    it('launch url check', function () {
        expect(protractor_1.browser.getTitle()).toContain("Super");
    });
    it('add two number', function () {
        protractor_1.element(protractor_1.by.model('first')).sendKeys('12');
        protractor_1.element(protractor_1.by.model('second')).sendKeys('13');
        protractor_1.element(protractor_1.by.css('[ng-click="doAddition()"]')).click();
        protractor_1.browser.sleep(3000);
        expect(protractor_1.element(protractor_1.by.xpath('//table/tbody/tr[1]/td[3]')).getText()).toEqual('25');
    });
});
