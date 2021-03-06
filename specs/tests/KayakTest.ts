import { browser, element, by, ExpectedConditions } from "protractor";

const KayakPOM = require("../pages/KayakPOM");
describe("Kayak Flight Test", function () {
  beforeEach(function () {
    browser.get("https://www.kayak.com");
    browser.driver.manage().window().maximize();
    KayakPOM.setFlightTab();
    KayakPOM.clickFlightTab();
  });
  // //step 1
  it("Test Fields Exist", async function () {
    KayakPOM.setOrigin();
    const originResult = await KayakPOM.isOriginDisplayed();
    KayakPOM.setDestination();
    const destinationResult = await KayakPOM.isDestinationDisplayed();
    KayakPOM.setDepartureDate();
    const departureDateResult = await KayakPOM.isDepartureDateDisplayed();
    KayakPOM.setReturnDate();
    const returnDateResult = await KayakPOM.isReturnDateDisplayed();
    expect(
      originResult &&
        destinationResult &&
        departureDateResult &&
        returnDateResult
    ).toBeTruthy();
  });
  it("Trip Type Test", async function () {
    KayakPOM.setTripType();
    let result = await KayakPOM.getTripTypeDataAttribute();
    expect(result).toBe("roundtrip");
  });
  //step 2
  it("Set Trip Type Oneway Test", async function () {
    KayakPOM.setTripType();
    KayakPOM.clickTripType();
    KayakPOM.setOneway();
    KayakPOM.clickOneway();
    let result = await KayakPOM.getTripTypeDataAttribute();
    expect(result).toBe("oneway");
  });
  //step 3
  it("Set Trip Type Multi-City Test", async function () {
    KayakPOM.setTripType();
    KayakPOM.clickTripType();
    KayakPOM.setMultiCity();
    KayakPOM.clickMultiCity();
    let result = await KayakPOM.getTripTypeDataAttribute();
    expect(result).toBe("multicity");
  });
  //step 4
  it("Set Trip Type Round Trip Test", async function () {
    KayakPOM.setTripType();
    KayakPOM.clickTripType();
    KayakPOM.setRoundTrip();
    KayakPOM.clickRoundTrip();
    let result = await KayakPOM.getTripTypeDataAttribute();
    expect(result).toBe("roundtrip");
  });
  // step 5
  it("Adult Count Test", async function () {
    KayakPOM.setTravelerInfo();
    KayakPOM.clickTravelerInfo();
    KayakPOM.setAdultCountIncreaseBtn();
    Array.from(new Array(9), () => {
      KayakPOM.clickAdultCountIncreaseBtn();
    });
    KayakPOM.setAdultCountError();
    let result = await KayakPOM.getAdultCountError();
    expect(result).toBe("Searches cannot have more than 9 adults");
  });
  //Search Flow
  //Step 6
  it("Origin Test PAR", async function () {
    browser.sleep(1000);
    KayakPOM.setOriginCancelBtn();
    KayakPOM.clickOriginCancelBtn();
    browser.sleep(1000);
    KayakPOM.setOriginAirport();
    KayakPOM.sendOriginText("PAR");
    browser.sleep(1000);
    KayakPOM.setOriginOpt();
    KayakPOM.clickOriginOpt();
    browser.sleep(1000);
    KayakPOM.setOrigin();
    let result = await KayakPOM.getOriginValue();
    console.log("result=> ", result);
    expect(result).toBe("PAR");
  });
  //step 7
  it("Origin Test NYC", async function () {
    KayakPOM.setDestination();
    KayakPOM.clickDestination();
    browser.sleep(1000);
    KayakPOM.setDestinationAirport();
    KayakPOM.sendDestinationAirportValue("Paris (PAR)");
    browser.sleep(2000);
    KayakPOM.setDestinationOpt();
    KayakPOM.clickDestinationOpt();
    const destinationAirport = await KayakPOM.getDestinationAirportValue();
    expect(destinationAirport).toBe("Paris (PAR)");
  });
  ////step 8
  it("Travel Label Test", async function () {
    KayakPOM.setTravelerInfo();
    KayakPOM.clickTravelerInfo();
    KayakPOM.setAdultCountIncreaseBtn();
    KayakPOM.clickAdultCountIncreaseBtn();
    KayakPOM.clickAdultCountIncreaseBtn();
    KayakPOM.clickAdultCountIncreaseBtn();
    browser.sleep(1000);
    KayakPOM.setTravelLabel();
    let result = await KayakPOM.getTravelLabelValue();
    expect(result).toBe("4 Travelers");
  });
  // //Step 9
  it("Travel Label Test", async function () {
    KayakPOM.setTravelerInfo();
    KayakPOM.clickTravelerInfo();
    KayakPOM.setAdultCountIncreaseBtn();
    KayakPOM.clickAdultCountIncreaseBtn();
    KayakPOM.clickAdultCountIncreaseBtn();
    KayakPOM.clickAdultCountIncreaseBtn();
    KayakPOM.setChildIncreaseBtn();
    KayakPOM.clickChildIcreaseBtn();
    KayakPOM.clickChildIcreaseBtn();
    browser.sleep(1000);
    KayakPOM.setTravelLabel();
    let result = await KayakPOM.getTravelLabelValue();
    expect(result).toBe("6 Travelers");
  });
  //step 13
  it("Complete Search Flow", async function () {
    //step 6
    browser.sleep(1000);
    KayakPOM.setOriginCancelBtn();
    KayakPOM.clickOriginCancelBtn();
    browser.sleep(1000);
    KayakPOM.setOriginAirport();
    KayakPOM.sendOriginText("PAR");
    browser.sleep(1000);
    KayakPOM.setOriginOpt();
    KayakPOM.clickOriginOpt();
    //step 7
    KayakPOM.setDestination();
    KayakPOM.clickDestination();
    browser.sleep(1000);
    KayakPOM.setDestinationAirport();
    KayakPOM.sendDestinationAirportValue("NYC");
    browser.sleep(2000);
    KayakPOM.setDestinationOpt();
    KayakPOM.clickDestinationOpt();
    browser.sleep(1000);
    //step 8
    KayakPOM.setTravelerInfo();
    KayakPOM.clickTravelerInfo();
    KayakPOM.setAdultCountIncreaseBtn();
    KayakPOM.clickAdultCountIncreaseBtn();
    KayakPOM.clickAdultCountIncreaseBtn();
    KayakPOM.clickAdultCountIncreaseBtn();
    browser.sleep(1000);
    //step 9
    KayakPOM.setChildIncreaseBtn();
    KayakPOM.clickChildIcreaseBtn();
    KayakPOM.clickChildIcreaseBtn();

    //step 13
    KayakPOM.setSearchBtn();
    KayakPOM.clickSearchBtn();
    let e = KayakPOM.setCheapestPrice();
    browser.wait(ExpectedConditions.presenceOf(e), 6000).then(async () => {
      browser.sleep(10000);
      let cheapestPrice: string = await KayakPOM.getCheapestPrice();
      const cheapestPriceResult: Number = parseInt(cheapestPrice.slice(1));
      console.log("cheapestPriceResult=> ", cheapestPriceResult);
      KayakPOM.setBestPrice();
      const bestPrice: string = await KayakPOM.getBestPrice();
      const bestPriceResult: Number = parseInt(bestPrice.slice(1));
      console.log("bestPriceResult=> ", bestPriceResult);
      KayakPOM.setQuickestPrice();
      const quickestPrice: string = await KayakPOM.getQuickestPrice();
      const quickestPriceResult = parseInt(quickestPrice.slice(1));
      console.log("quickestPriceResult=> ", quickestPriceResult);
      KayakPOM.setCheapestTime();
      let cheapestTime: string = await KayakPOM.getCheapestTime();
      const cheapestTimeSeconds = durationToSeconds(cheapestTime);
      console.log("cheapestTimeSeconds=> ", cheapestTimeSeconds);
      KayakPOM.setBestTime();
      const bestTime: string = await KayakPOM.getBestTime();
      const bestTimeSeconds = durationToSeconds(bestTime);
      console.log("bestTimeSeconds=> ", bestTimeSeconds);
      KayakPOM.setQuickestTime();
      const quickestTime: string = await KayakPOM.getQuickestTime();
      const quickestTimeSeconds = durationToSeconds(quickestTime);
      console.log("quickestTimeSeconds=> ", quickestTimeSeconds);
      browser.sleep(5000);
      expect(
        cheapestPriceResult <= bestPriceResult &&
          cheapestPriceResult < quickestPriceResult &&
          quickestTimeSeconds <= bestTimeSeconds &&
          quickestTimeSeconds < cheapestTimeSeconds
      ).toBeTruthy();
    });
  });
});
function durationToSeconds(time: string) {
  let hrs = parseInt(time.split(" ")[0].slice(0, 2));
  let mins = parseInt(time.split(" ")[1].slice(0, 2));
  return hrs * 60 * 60 + mins * 60;
}
