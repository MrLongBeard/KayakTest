"use strict";
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
var KayakPOM = require('../pages/KayakPOM');
describe('Kayak Flight Test', function () {
    beforeEach(function () {
        protractor_1.browser.get('https://www.kayak.com');
        protractor_1.browser.driver.manage().window().maximize();
        KayakPOM.setFlightTab();
        KayakPOM.clickFlightTab();
    });
    // //step 1
    it('Test Fields Exist', function () {
        return __awaiter(this, void 0, void 0, function () {
            var originResult, destinationResult, departureDateResult, returnDateResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        KayakPOM.setOrigin();
                        return [4 /*yield*/, KayakPOM.isOriginDisplayed()];
                    case 1:
                        originResult = _a.sent();
                        KayakPOM.setDestination();
                        return [4 /*yield*/, KayakPOM.isDestinationDisplayed()];
                    case 2:
                        destinationResult = _a.sent();
                        KayakPOM.setDepartureDate();
                        return [4 /*yield*/, KayakPOM.isDepartureDateDisplayed()];
                    case 3:
                        departureDateResult = _a.sent();
                        KayakPOM.setReturnDate();
                        return [4 /*yield*/, KayakPOM.isReturnDateDisplayed()];
                    case 4:
                        returnDateResult = _a.sent();
                        expect(originResult && destinationResult && departureDateResult && returnDateResult).toBeTruthy();
                        return [2 /*return*/];
                }
            });
        });
    });
    it('Trip Type Test', function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        KayakPOM.setTripType();
                        return [4 /*yield*/, KayakPOM.getTripTypeDataAttribute()];
                    case 1:
                        result = _a.sent();
                        expect(result).toBe('roundtrip');
                        return [2 /*return*/];
                }
            });
        });
    });
    //step 2
    it('Set Trip Type Oneway Test', function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        KayakPOM.setTripType();
                        KayakPOM.clickTripType();
                        KayakPOM.setOneway();
                        KayakPOM.clickOneway();
                        return [4 /*yield*/, KayakPOM.getTripTypeDataAttribute()];
                    case 1:
                        result = _a.sent();
                        expect(result).toBe('oneway');
                        return [2 /*return*/];
                }
            });
        });
    });
    //step 3
    it('Set Trip Type Multi-City Test', function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        KayakPOM.setTripType();
                        KayakPOM.clickTripType();
                        KayakPOM.setMultiCity();
                        KayakPOM.clickMultiCity();
                        return [4 /*yield*/, KayakPOM.getTripTypeDataAttribute()];
                    case 1:
                        result = _a.sent();
                        expect(result).toBe('multicity');
                        return [2 /*return*/];
                }
            });
        });
    });
    //step 4
    it('Set Trip Type Round Trip Test', function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        KayakPOM.setTripType();
                        KayakPOM.clickTripType();
                        KayakPOM.setRoundTrip();
                        KayakPOM.clickRoundTrip();
                        return [4 /*yield*/, KayakPOM.getTripTypeDataAttribute()];
                    case 1:
                        result = _a.sent();
                        expect(result).toBe('roundtrip');
                        return [2 /*return*/];
                }
            });
        });
    });
    // step 5
    it("Adult Count Test", function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        KayakPOM.setTravelerInfo();
                        KayakPOM.clickTravelerInfo();
                        KayakPOM.setAdultCountIncreaseBtn();
                        Array.from(new Array(9), function () {
                            KayakPOM.clickAdultCountIncreaseBtn();
                        });
                        KayakPOM.setAdultCountError();
                        return [4 /*yield*/, KayakPOM.getAdultCountError()];
                    case 1:
                        result = _a.sent();
                        expect(result).toBe('Searches cannot have more than 9 adults');
                        return [2 /*return*/];
                }
            });
        });
    });
    //Search Flow
    //Step 6
    it('Origin Test PAR', function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protractor_1.browser.sleep(1000);
                        KayakPOM.setOriginCancelBtn();
                        KayakPOM.clickOriginCancelBtn();
                        protractor_1.browser.sleep(1000);
                        KayakPOM.setOriginAirport();
                        KayakPOM.sendOriginText('PAR');
                        protractor_1.browser.sleep(1000);
                        KayakPOM.setOriginOpt();
                        KayakPOM.clickOriginOpt();
                        protractor_1.browser.sleep(1000);
                        KayakPOM.setOrigin();
                        return [4 /*yield*/, KayakPOM.getOriginValue()];
                    case 1:
                        result = _a.sent();
                        console.log('result=> ', result);
                        expect(result).toBe('PAR');
                        return [2 /*return*/];
                }
            });
        });
    });
    //step 7
    it('Origin Test NYC', function () {
        return __awaiter(this, void 0, void 0, function () {
            var destinationAirport;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        KayakPOM.setDestination();
                        KayakPOM.clickDestination();
                        protractor_1.browser.sleep(1000);
                        KayakPOM.setDestinationAirport();
                        KayakPOM.sendDestinationAirportValue('Paris (PAR)');
                        protractor_1.browser.sleep(2000);
                        KayakPOM.setDestinationOpt();
                        KayakPOM.clickDestinationOpt();
                        return [4 /*yield*/, KayakPOM.getDestinationAirportValue()];
                    case 1:
                        destinationAirport = _a.sent();
                        expect(destinationAirport).toBe('Paris (PAR)');
                        return [2 /*return*/];
                }
            });
        });
    });
    ////step 8
    it('Travel Label Test', function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        KayakPOM.setTravelerInfo();
                        KayakPOM.clickTravelerInfo();
                        KayakPOM.setAdultCountIncreaseBtn();
                        KayakPOM.clickAdultCountIncreaseBtn();
                        KayakPOM.clickAdultCountIncreaseBtn();
                        KayakPOM.clickAdultCountIncreaseBtn();
                        protractor_1.browser.sleep(1000);
                        KayakPOM.setTravelLabel();
                        return [4 /*yield*/, KayakPOM.getTravelLabelValue()];
                    case 1:
                        result = _a.sent();
                        expect(result).toBe('4 Travelers');
                        return [2 /*return*/];
                }
            });
        });
    });
    // //Step 9
    it('Travel Label Test', function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        KayakPOM.setTravelerInfo();
                        KayakPOM.clickTravelerInfo();
                        KayakPOM.setAdultCountIncreaseBtn();
                        KayakPOM.clickAdultCountIncreaseBtn();
                        KayakPOM.clickAdultCountIncreaseBtn();
                        KayakPOM.clickAdultCountIncreaseBtn();
                        KayakPOM.setChildIncreaseBtn();
                        KayakPOM.clickChildIcreaseBtn();
                        KayakPOM.clickChildIcreaseBtn();
                        protractor_1.browser.sleep(1000);
                        KayakPOM.setTravelLabel();
                        return [4 /*yield*/, KayakPOM.getTravelLabelValue()];
                    case 1:
                        result = _a.sent();
                        expect(result).toBe('6 Travelers');
                        return [2 /*return*/];
                }
            });
        });
    });
    //step 13
    it('Complete Search Flow', function () {
        return __awaiter(this, void 0, void 0, function () {
            var e;
            var _this = this;
            return __generator(this, function (_a) {
                //step 6
                protractor_1.browser.sleep(1000);
                KayakPOM.setOriginCancelBtn();
                KayakPOM.clickOriginCancelBtn();
                protractor_1.browser.sleep(1000);
                KayakPOM.setOriginAirport();
                KayakPOM.sendOriginText('PAR');
                protractor_1.browser.sleep(1000);
                KayakPOM.setOriginOpt();
                KayakPOM.clickOriginOpt();
                //step 7
                KayakPOM.setDestination();
                KayakPOM.clickDestination();
                protractor_1.browser.sleep(1000);
                KayakPOM.setDestinationAirport();
                KayakPOM.sendDestinationAirportValue('NYC');
                protractor_1.browser.sleep(2000);
                KayakPOM.setDestinationOpt();
                KayakPOM.clickDestinationOpt();
                protractor_1.browser.sleep(1000);
                //step 8
                KayakPOM.setTravelerInfo();
                KayakPOM.clickTravelerInfo();
                KayakPOM.setAdultCountIncreaseBtn();
                KayakPOM.clickAdultCountIncreaseBtn();
                KayakPOM.clickAdultCountIncreaseBtn();
                KayakPOM.clickAdultCountIncreaseBtn();
                protractor_1.browser.sleep(1000);
                //step 9
                KayakPOM.setChildIncreaseBtn();
                KayakPOM.clickChildIcreaseBtn();
                KayakPOM.clickChildIcreaseBtn();
                //step 13
                KayakPOM.setSearchBtn();
                KayakPOM.clickSearchBtn();
                e = KayakPOM.setCheapestPrice();
                protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(e), 6000).then(function () { return __awaiter(_this, void 0, void 0, function () {
                    var cheapestPrice, cheapestPriceResult, bestPrice, bestPriceResult, quickestPrice, quickestPriceResult, cheapestTime, cheapestTimeSeconds, bestTime, bestTimeSeconds, quickestTime, quickestTimeSeconds;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                protractor_1.browser.sleep(10000);
                                return [4 /*yield*/, KayakPOM.getCheapestPrice()];
                            case 1:
                                cheapestPrice = _a.sent();
                                cheapestPriceResult = parseInt(cheapestPrice.slice(1));
                                console.log('cheapestPriceResult=> ', cheapestPriceResult);
                                KayakPOM.setBestPrice();
                                return [4 /*yield*/, KayakPOM.getBestPrice()];
                            case 2:
                                bestPrice = _a.sent();
                                bestPriceResult = parseInt(bestPrice.slice(1));
                                console.log('bestPriceResult=> ', bestPriceResult);
                                KayakPOM.setQuickestPrice();
                                return [4 /*yield*/, KayakPOM.getQuickestPrice()];
                            case 3:
                                quickestPrice = _a.sent();
                                quickestPriceResult = parseInt(quickestPrice.slice(1));
                                console.log('quickestPriceResult=> ', quickestPriceResult);
                                KayakPOM.setCheapestTime();
                                return [4 /*yield*/, KayakPOM.getCheapestTime()];
                            case 4:
                                cheapestTime = _a.sent();
                                cheapestTimeSeconds = durationToSeconds(cheapestTime);
                                console.log('cheapestTimeSeconds=> ', cheapestTimeSeconds);
                                KayakPOM.setBestTime();
                                return [4 /*yield*/, KayakPOM.getBestTime()];
                            case 5:
                                bestTime = _a.sent();
                                bestTimeSeconds = durationToSeconds(bestTime);
                                console.log('bestTimeSeconds=> ', bestTimeSeconds);
                                KayakPOM.setQuickestTime();
                                return [4 /*yield*/, KayakPOM.getQuickestTime()];
                            case 6:
                                quickestTime = _a.sent();
                                quickestTimeSeconds = durationToSeconds(quickestTime);
                                console.log('quickestTimeSeconds=> ', quickestTimeSeconds);
                                protractor_1.browser.sleep(5000);
                                expect(cheapestPriceResult <= bestPriceResult && cheapestPriceResult < quickestPriceResult && quickestTimeSeconds <= bestTimeSeconds && quickestTimeSeconds < cheapestTimeSeconds).toBeTruthy();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    });
});
function durationToSeconds(time) {
    var hrs = parseInt(time.split(' ')[0].slice(0, 2));
    var mins = parseInt(time.split(' ')[1].slice(0, 2));
    return (hrs * 60 * 60 + mins * 60);
}
