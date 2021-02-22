import { browser, element, by } from "protractor"

describe('Calculator test', function(){
    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/')
    })
    it('launch url check',function(){
        expect(browser.getTitle()).toContain("Super")
    })
    it('add two number',function(){
        element(by.model('first')).sendKeys('12')
        element(by.model('second')).sendKeys('13')
        element(by.css('[ng-click="doAddition()"]')).click()
        browser.sleep(3000)
        expect<any>(element(by.xpath('//table/tbody/tr[1]/td[3]')).getText()).toEqual('25')
    })
})