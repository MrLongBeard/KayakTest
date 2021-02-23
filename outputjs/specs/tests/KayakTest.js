"use strict";
// import {KayakPOM} from '../pages/KayakPOM'
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
// import { BrowserStack } from "protractor/built/driverProviders"
var KayakPOM = require('../pages/KayakPOM');
describe('Kayak Flight Test', function () {
    beforeEach(function () {
        protractor_1.browser.get('https://www.kayak.com');
        protractor_1.browser.driver.manage().window().maximize();
        KayakPOM.setFlightTab();
        KayakPOM.clickFlightTab();
    });
    // it('Test Origin Exist', function(){
    //     KayakPOM.setOrigin()
    //     KayakPOM.isOriginDisplayed()
    // })
    // it('Test Destination Exist', function(){
    //     KayakPOM.setDestination()
    //     KayakPOM.isDestinationDisplayed()
    // })
    // it('Test Departure Field Exist',function(){
    //     KayakPOM.setDepartureDate()
    //     KayakPOM.isDepartureDateDisplayed()
    // })
    // it('Test Return Field Exist',function(){
    //     KayakPOM.setReturnDate()
    //     KayakPOM.isReturnDateDisplayed()
    // })
    // it('Trip Type Test', async function(){
    //     KayakPOM.setTripType()
    //     let result = await KayakPOM.getTripTypeDataAttribute()
    //     expect(result).toBe('roundtrip')    
    // })
    // it('Set Trip Type Oneway Test',async function(){
    //     KayakPOM.setTripType()
    //     KayakPOM.tripType.click()
    //     KayakPOM.setOneway()
    //     KayakPOM.clickOneway()
    //     let result = await KayakPOM.getTripTypeDataAttribute()
    //     expect(result).toBe('oneway')
    // })
    // it('Set Trip Type Multi-City Test', async function(){
    //     KayakPOM.setTripType()
    //     KayakPOM.clickTripType()
    //     KayakPOM.setMultiCity()
    //     KayakPOM.clickMultiCity()
    //     let result = await KayakPOM.getTripTypeDataAttribute()
    //     expect(result).toBe('multicity')
    // })
    // it('Set Trip Type Round Trip Test', async function(){
    //     KayakPOM.setTripType()
    //     KayakPOM.clickTripType() 
    //     KayakPOM.setRoundTrip()
    //     KayakPOM.clickRoundTrip()   
    //     let result = await KayakPOM.getTripTypeDataAttribute()
    //     expect(result).toBe('roundtrip')
    // })
    // it("Adult Count Test", async function(){
    //     KayakPOM.setTravelerInfo()
    //     KayakPOM.clickTravelerInfo()
    //     KayakPOM.setAdultCountIncreaseBtn()
    //     KayakPOM.clickAdultCountIncreaseBtn()
    //     KayakPOM.clickAdultCountIncreaseBtn()
    //     KayakPOM.clickAdultCountIncreaseBtn()
    //     KayakPOM.clickAdultCountIncreaseBtn()
    //     KayakPOM.clickAdultCountIncreaseBtn()
    //     KayakPOM.clickAdultCountIncreaseBtn()
    //     KayakPOM.clickAdultCountIncreaseBtn()
    //     KayakPOM.clickAdultCountIncreaseBtn()
    //     KayakPOM.clickAdultCountIncreaseBtn()
    //     KayakPOM.setAdultCountError()
    //     let result = await KayakPOM.getAdultCountError()
    //     expect(result).toBe('Searches cannot have more than 9 adults')
    //     browser.sleep(3000)
    // })
    // it('Origin Test PAR', async function(){
    //     browser.sleep(1000)
    //     KayakPOM.setOriginCancelBtn()
    //     KayakPOM.clickOriginCancelBtn()
    //     browser.sleep(1000)
    //     KayakPOM.setOriginAirport()
    //     KayakPOM.sendOriginText('PAR')
    //     browser.sleep(1000)
    //     KayakPOM.setOriginOpt()
    //     KayakPOM.clickOriginOpt()
    //     browser.sleep(1000)
    //     KayakPOM.setOrigin()
    //     let result = await KayakPOM.getOriginValue()
    //     expect(result).toBe('PAR')
    // })
    // it('Origin Test NYC', async function(){
    //     browser.sleep(1000)
    //     KayakPOM.setOriginCancelBtn()
    //     KayakPOM.clickOriginCancelBtn()
    //     browser.sleep(1000)
    //     KayakPOM.setOriginAirport()
    //     KayakPOM.sendOriginText('NYC')
    //     browser.sleep(1000)
    //     KayakPOM.setOriginOpt()
    //     KayakPOM.clickOriginOpt()
    //     browser.sleep(1000)
    //     KayakPOM.setOrigin()
    //     let result = await KayakPOM.getOriginValue()
    //     expect(result).toBe('NYC')
    // })
    // it('Travel Label Test', async function(){
    //     KayakPOM.setTravelerInfo()
    //     KayakPOM.clickTravelerInfo()
    //     KayakPOM.setAdultCountIncreaseBtn()
    //     KayakPOM.clickAdultCountIncreaseBtn()
    //     KayakPOM.clickAdultCountIncreaseBtn()
    //     KayakPOM.clickAdultCountIncreaseBtn()
    //     browser.sleep(1000)
    //     KayakPOM.setTravelLabel()
    //     let result = await KayakPOM.getTravelLabelValue()
    //     expect(result).toBe('4 Travelers')
    // })
    // //Step 9
    // it('Travel Label Test', async function(){
    //     KayakPOM.setTravelerInfo()
    //     KayakPOM.clickTravelerInfo()
    //     KayakPOM.setAdultCountIncreaseBtn()
    //     KayakPOM.clickAdultCountIncreaseBtn()
    //     KayakPOM.clickAdultCountIncreaseBtn()
    //     KayakPOM.clickAdultCountIncreaseBtn()
    //     KayakPOM.setChildIncreaseBtn()
    //     KayakPOM.clickChildIcreaseBtn()
    //     KayakPOM.clickChildIcreaseBtn()
    //     browser.sleep(1000)
    //     KayakPOM.setTravelLabel()
    //     let result = await KayakPOM.getTravelLabelValue()
    //     expect(result).toBe('6 Travelers')
    // })
    //step 13
    it('Check Cheap Best Quick', function () {
        return __awaiter(this, void 0, void 0, function () {
            var e;
            var _this = this;
            return __generator(this, function (_a) {
                // browser.sleep(2000)
                KayakPOM.setDestination();
                KayakPOM.clickDestination();
                protractor_1.browser.sleep(1000);
                KayakPOM.setDestinationAirport();
                KayakPOM.sendDestinationAirportValue('Paris (PAR)');
                protractor_1.browser.sleep(2000);
                KayakPOM.setDestinationOpt();
                KayakPOM.clickDestinationOpt();
                protractor_1.browser.sleep(1000);
                KayakPOM.setSearchBtn();
                KayakPOM.clickSearchBtn();
                e = KayakPOM.setCheapestPrice();
                protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(e), 50000).then(function () { return __awaiter(_this, void 0, void 0, function () {
                    var cheapestPrice, cheapestPriceResult, bestPrice, bestPriceResult, quickestPrice, quickestPriceResult;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                protractor_1.browser.sleep(6000);
                                return [4 /*yield*/, KayakPOM.getCheapestPrice()];
                            case 1:
                                cheapestPrice = _a.sent();
                                cheapestPriceResult = parseInt(cheapestPrice.slice(1));
                                KayakPOM.setBestPrice();
                                return [4 /*yield*/, KayakPOM.getBestPrice()];
                            case 2:
                                bestPrice = _a.sent();
                                bestPriceResult = parseInt(bestPrice.slice(1));
                                KayakPOM.setQuickestPrice();
                                return [4 /*yield*/, KayakPOM.getQuickestPrice()];
                            case 3:
                                quickestPrice = _a.sent();
                                quickestPriceResult = parseInt(quickestPrice.slice(1));
                                protractor_1.browser.sleep(2000);
                                console.log('cheapestPrice=> ', cheapestPriceResult);
                                console.log('bestPrice=> ', bestPriceResult);
                                console.log('quickestPrice', quickestPriceResult);
                                expect(cheapestPriceResult < bestPriceResult && cheapestPriceResult < quickestPriceResult).toBeTruthy();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    });
});
