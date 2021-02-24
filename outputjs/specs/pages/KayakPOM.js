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
var KayakPOM = /** @class */ (function () {
    function KayakPOM() {
    }
    KayakPOM.prototype.setFlightTab = function () {
        this.flightTab = protractor_1.element(protractor_1.by.xpath("//*[@class='l32f-nav-container'][2]/div[1]/a[1]"));
    };
    KayakPOM.prototype.getFlightTab = function () {
        return this.flightTab;
    };
    KayakPOM.prototype.clickFlightTab = function () {
        this.flightTab.click();
    };
    KayakPOM.prototype.setOrigin = function () {
        return this.origin = protractor_1.element(protractor_1.by.xpath("//div[contains(@id,'origin-airport-display')]"));
    };
    KayakPOM.prototype.isOriginDisplayed = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.origin.isDisplayed()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KayakPOM.prototype.getOriginValue = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("//div[contains(@id,'origin-airport-display-multi-container')]/div")).getAttribute('data-value')]; //this.origin.getAttribute('value')
                    case 1: return [2 /*return*/, _a.sent()]; //this.origin.getAttribute('value')
                }
            });
        });
    };
    KayakPOM.prototype.setDestination = function () {
        this.destination = protractor_1.element(protractor_1.by.xpath("//div[contains(@id,'destination-airport-display')]"));
    };
    KayakPOM.prototype.clickDestination = function () {
        this.destination.click();
    };
    KayakPOM.prototype.isDestinationDisplayed = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.destination.isDisplayed()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KayakPOM.prototype.setDepartureDate = function () {
        this.departureDate = protractor_1.element(protractor_1.by.xpath("//*[@class='Common-Widgets-Datepicker-DateModal _ibU _ibV _iaf _idE _h-Y _im4 _iai _ihz _j0g _jy1 _iDB']/div[1]"));
    };
    KayakPOM.prototype.isDepartureDateDisplayed = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.departureDate.isDisplayed()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KayakPOM.prototype.setReturnDate = function () {
        this.returnDate = protractor_1.element(protractor_1.by.xpath("//*[@class='Common-Widgets-Datepicker-DateModal _ibU _ibV _iaf _idE _h-Y _im4 _iai _ihz _j0g _jy1 _iDB']/div[3]"));
    };
    KayakPOM.prototype.isReturnDateDisplayed = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.returnDate.isDisplayed()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KayakPOM.prototype.setTripType = function () {
        this.tripType = protractor_1.element(protractor_1.by.xpath("//*[contains(@id,'switch-display-status')]"));
        return this.tripType;
    };
    KayakPOM.prototype.getTripTypeDataAttribute = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tripType.getAttribute("data-value")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KayakPOM.prototype.clickTripType = function () {
        this.tripType.click();
    };
    KayakPOM.prototype.setRoundTrip = function () {
        this.roundTrip = protractor_1.element(protractor_1.by.xpath("//*[contains(@id,'switch-list')]/ul/li[1]"));
    };
    KayakPOM.prototype.clickRoundTrip = function () {
        this.roundTrip.click();
    };
    KayakPOM.prototype.setOneway = function () {
        this.oneway = protractor_1.element(protractor_1.by.xpath("//*[contains(@id,'switch-list')]/ul/li[2]"));
    };
    KayakPOM.prototype.clickOneway = function () {
        this.oneway.click();
    };
    KayakPOM.prototype.setMultiCity = function () {
        this.multiCity = protractor_1.element(protractor_1.by.xpath("//*[contains(@id,'switch-list')]/ul/li[3]"));
    };
    KayakPOM.prototype.clickMultiCity = function () {
        this.multiCity.click();
    };
    KayakPOM.prototype.setTravelerInfo = function () {
        this.travelerInfo = protractor_1.element(protractor_1.by.xpath("//button[contains(@id,'travelersAboveForm-dialog-trigger')]"));
    };
    KayakPOM.prototype.setTravelLabel = function () {
        this.travelLabel = protractor_1.element(protractor_1.by.xpath("//button[contains(@id,'travelersAboveForm-dialog-trigger')]/span[2]"));
    };
    KayakPOM.prototype.getTravelLabelValue = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.travelLabel.getAttribute('aria-label')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KayakPOM.prototype.clickTravelerInfo = function () {
        this.travelerInfo.click();
    };
    KayakPOM.prototype.setAdultCount = function () {
        this.adultCount = protractor_1.element(protractor_1.by.xpath("//input[contains(@id,'travelersAboveForm-adults-input')]"));
    };
    KayakPOM.prototype.setAdultCountIncreaseBtn = function () {
        this.adultCountIncreaseBtn = protractor_1.element(protractor_1.by.xpath("//div[contains(@id,'travelersAboveForm-adults')]/div/div[3]/button"));
    };
    KayakPOM.prototype.clickAdultCountIncreaseBtn = function () {
        this.adultCountIncreaseBtn.click();
    };
    KayakPOM.prototype.increaseAdultCount = function () {
        this.adultCount.clear().sendKeys("9");
    };
    KayakPOM.prototype.setAdultCountError = function () {
        this.adultCountError = protractor_1.element(protractor_1.by.xpath("//strong[contains(@id,'travelersAboveForm-errorMessageText')]"));
    };
    KayakPOM.prototype.getAdultCountError = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.adultCountError.getText()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KayakPOM.prototype.setOriginCancelBtn = function () {
        this.originCancelbtn = protractor_1.element(protractor_1.by.xpath("//*[contains(@id,'origin-airport-display-multi-container')]/div/div[2]/button"));
    };
    KayakPOM.prototype.clickOriginCancelBtn = function () {
        this.originCancelbtn.click();
    };
    KayakPOM.prototype.setOriginAirport = function () {
        this.originAirport = protractor_1.element(protractor_1.by.xpath("//input[contains(@id,'origin-airport')]"));
    };
    KayakPOM.prototype.sendOriginText = function (value) {
        this.originAirport.sendKeys(value);
    };
    KayakPOM.prototype.setOriginOpt = function () {
        this.originOpt = protractor_1.element(protractor_1.by.xpath("//div[contains(@id,'origin-airport-smartbox-dropdown')]/ul/li[1]"));
    };
    KayakPOM.prototype.clickOriginOpt = function () {
        this.originOpt.click();
    };
    KayakPOM.prototype.setChildIncreaseBtn = function () {
        this.childCountIncreaseBtn = protractor_1.element(protractor_1.by.xpath("//div[contains(@id,'travelersAboveForm-child')]/div/div[3]/button"));
    };
    KayakPOM.prototype.clickChildIcreaseBtn = function () {
        this.childCountIncreaseBtn.click();
    };
    KayakPOM.prototype.setSearchBtn = function () {
        this.searchBtn = protractor_1.element(protractor_1.by.xpath("//form[contains(@id,'RTOWsearchform')]/div/div/div[2]/button"));
    };
    KayakPOM.prototype.clickSearchBtn = function () {
        this.searchBtn.click();
    };
    KayakPOM.prototype.setCheapestPrice = function () {
        return this.cheapestPrice = protractor_1.element(protractor_1.by.xpath("//*[contains(@id,'tabs')]/a[1]/div/div/div/div[2]/span[1]"));
    };
    KayakPOM.prototype.getCheapestPrice = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cheapestPrice.getText()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KayakPOM.prototype.setCheapestTime = function () {
        this.cheapestTime = protractor_1.element(protractor_1.by.xpath("//*[contains(@id,'tabs')]/a[1]/div/div/div/div[2]/span[2]"));
    };
    KayakPOM.prototype.getCheapestTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cheapestTime.getText()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KayakPOM.prototype.setBestPrice = function () {
        this.bestPrice = protractor_1.element(protractor_1.by.xpath("//*[contains(@id,'tabs')]/a[2]/div/div/div/div[2]/span[1]"));
    };
    KayakPOM.prototype.getBestPrice = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bestPrice.getText()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KayakPOM.prototype.setBestTime = function () {
        this.bestTime = protractor_1.element(protractor_1.by.xpath("//*[contains(@id,'tabs')]/a[2]/div/div/div/div[2]/span[2]"));
    };
    KayakPOM.prototype.getBestTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bestTime.getText()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KayakPOM.prototype.setQuickestTime = function () {
        this.quickestTime = protractor_1.element(protractor_1.by.xpath("//*[contains(@id,'tabs')]/a[3]/div/div/div/div[2]/span[2]"));
    };
    KayakPOM.prototype.getQuickestTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.quickestTime.getText()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KayakPOM.prototype.setQuickestPrice = function () {
        this.quickestPrice = protractor_1.element(protractor_1.by.xpath("//*[contains(@id,'tabs')]/a[3]/div/div/div/div[2]/span[1]"));
    };
    KayakPOM.prototype.getQuickestPrice = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.quickestPrice.getText()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KayakPOM.prototype.setDestinationAirport = function () {
        this.destinationAirport = protractor_1.element(protractor_1.by.xpath("//input[contains(@id,'destination-airport')]"));
    };
    KayakPOM.prototype.getDestinationAirportValue = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.destinationAirport.getAttribute('value')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KayakPOM.prototype.sendDestinationAirportValue = function (value) {
        this.destinationAirport.sendKeys(value);
    };
    KayakPOM.prototype.setDestinationOpt = function () {
        this.destinationOpt = protractor_1.element(protractor_1.by.xpath("//div[contains(@id,'destination-airport-smartbox-dropdown')]/ul/li[1]"));
    };
    KayakPOM.prototype.clickDestinationOpt = function () {
        this.destinationOpt.click();
    };
    return KayakPOM;
}());
// export default new KayakPOM()
module.exports = new KayakPOM();
