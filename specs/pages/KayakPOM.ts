import { throws } from "assert";
import { browser, element, by } from "protractor";

class KayakPOM {
  title: any;
  origin: any;
  result: any;
  flightTab: any;
  destination: any;
  departureDate: any;
  returnDate: any;
  tripType: any;
  oneway: any;
  multiCity: any;
  roundTrip: any;
  travelerInfo: any;
  travelLabel: any;
  adultCount: any;
  adultCountIncreaseBtn: any;
  adultCountError: any;
  originCancelbtn: any;
  originAirport: any;
  originOpt: any;
  childCountIncreaseBtn: any;
  searchBtn: any;
  cheapestPrice: any;
  cheapestTime: any;
  bestPrice: any;
  bestTime: any;
  quickestTime: any;
  quickestPrice: any;
  destinationAirport: any;
  destinationOpt: any;
  constructor() {}
  setFlightTab() {
    this.flightTab = element(
      by.xpath("//*[@class='l32f-nav-container'][2]/div[1]/a[1]")
    );
  }
  getFlightTab() {
    return this.flightTab;
  }
  clickFlightTab() {
    this.flightTab.click();
  }
  setOrigin() {
    return (this.origin = element(
      by.xpath("//div[contains(@id,'origin-airport-display')]")
    ));
  }
  async isOriginDisplayed() {
    return await this.origin.isDisplayed();
  }
  async getOriginValue() {
    return await element(
      by.xpath(
        "//div[contains(@id,'origin-airport-display-multi-container')]/div"
      )
    ).getAttribute("data-value"); //this.origin.getAttribute('value')
  }
  setDestination() {
    this.destination = element(
      by.xpath("//div[contains(@id,'destination-airport-display')]")
    );
  }
  clickDestination() {
    this.destination.click();
  }
  async isDestinationDisplayed() {
    return await this.destination.isDisplayed();
  }
  setDepartureDate() {
    this.departureDate = element(
      by.xpath(
        "//*[@class='Common-Widgets-Datepicker-DateModal _ibU _ibV _iaf _idE _h-Y _im4 _iai _ihz _j0g _jy1 _iDB']/div[1]"
      )
    );
  }
  async isDepartureDateDisplayed() {
    return await this.departureDate.isDisplayed();
  }
  setReturnDate() {
    this.returnDate = element(
      by.xpath(
        "//*[@class='Common-Widgets-Datepicker-DateModal _ibU _ibV _iaf _idE _h-Y _im4 _iai _ihz _j0g _jy1 _iDB']/div[3]"
      )
    );
  }
  async isReturnDateDisplayed() {
    return await this.returnDate.isDisplayed();
  }
  setTripType() {
    this.tripType = element(
      by.xpath("//*[contains(@id,'switch-display-status')]")
    );
    return this.tripType;
  }
  async getTripTypeDataAttribute() {
    return await this.tripType.getAttribute("data-value");
  }
  clickTripType() {
    this.tripType.click();
  }
  setRoundTrip() {
    this.roundTrip = element(
      by.xpath("//*[contains(@id,'switch-list')]/ul/li[1]")
    );
  }
  clickRoundTrip() {
    this.roundTrip.click();
  }
  setOneway() {
    this.oneway = element(
      by.xpath("//*[contains(@id,'switch-list')]/ul/li[2]")
    );
  }
  clickOneway() {
    this.oneway.click();
  }
  setMultiCity() {
    this.multiCity = element(
      by.xpath("//*[contains(@id,'switch-list')]/ul/li[3]")
    );
  }
  clickMultiCity() {
    this.multiCity.click();
  }
  setTravelerInfo() {
    this.travelerInfo = element(
      by.xpath("//button[contains(@id,'travelersAboveForm-dialog-trigger')]")
    );
  }
  setTravelLabel() {
    this.travelLabel = element(
      by.xpath(
        "//button[contains(@id,'travelersAboveForm-dialog-trigger')]/span[2]"
      )
    );
  }
  async getTravelLabelValue() {
    return await this.travelLabel.getAttribute("aria-label");
  }
  clickTravelerInfo() {
    this.travelerInfo.click();
  }
  setAdultCount() {
    this.adultCount = element(
      by.xpath("//input[contains(@id,'travelersAboveForm-adults-input')]")
    );
  }
  setAdultCountIncreaseBtn() {
    this.adultCountIncreaseBtn = element(
      by.xpath(
        "//div[contains(@id,'travelersAboveForm-adults')]/div/div[3]/button"
      )
    );
  }
  clickAdultCountIncreaseBtn() {
    this.adultCountIncreaseBtn.click();
  }
  increaseAdultCount() {
    this.adultCount.clear().sendKeys("9");
  }
  setAdultCountError() {
    this.adultCountError = element(
      by.xpath("//strong[contains(@id,'travelersAboveForm-errorMessageText')]")
    );
  }
  async getAdultCountError() {
    return await this.adultCountError.getText();
  }
  setOriginCancelBtn() {
    this.originCancelbtn = element(
      by.xpath(
        "//*[contains(@id,'origin-airport-display-multi-container')]/div/div[2]/button"
      )
    );
  }
  clickOriginCancelBtn() {
    this.originCancelbtn.click();
  }
  setOriginAirport() {
    this.originAirport = element(
      by.xpath("//input[contains(@id,'origin-airport')]")
    );
  }
  sendOriginText(value: string) {
    this.originAirport.sendKeys(value);
  }
  setOriginOpt() {
    this.originOpt = element(
      by.xpath(
        "//div[contains(@id,'origin-airport-smartbox-dropdown')]/ul/li[1]"
      )
    );
  }
  clickOriginOpt() {
    this.originOpt.click();
  }
  setChildIncreaseBtn() {
    this.childCountIncreaseBtn = element(
      by.xpath(
        "//div[contains(@id,'travelersAboveForm-child')]/div/div[3]/button"
      )
    );
  }
  clickChildIcreaseBtn() {
    this.childCountIncreaseBtn.click();
  }
  setSearchBtn() {
    this.searchBtn = element(
      by.xpath("//form[contains(@id,'RTOWsearchform')]/div/div/div[2]/button")
    );
  }
  clickSearchBtn() {
    this.searchBtn.click();
  }
  setCheapestPrice() {
    return (this.cheapestPrice = element(
      by.xpath("//*[contains(@id,'tabs')]/a[1]/div/div/div/div[2]/span[1]")
    ));
  }
  async getCheapestPrice() {
    return await this.cheapestPrice.getText();
  }
  setCheapestTime() {
    this.cheapestTime = element(
      by.xpath("//*[contains(@id,'tabs')]/a[1]/div/div/div/div[2]/span[2]")
    );
  }
  async getCheapestTime() {
    return await this.cheapestTime.getText();
  }
  setBestPrice() {
    this.bestPrice = element(
      by.xpath("//*[contains(@id,'tabs')]/a[2]/div/div/div/div[2]/span[1]")
    );
  }
  async getBestPrice() {
    return await this.bestPrice.getText();
  }
  setBestTime() {
    this.bestTime = element(
      by.xpath("//*[contains(@id,'tabs')]/a[2]/div/div/div/div[2]/span[2]")
    );
  }
  async getBestTime() {
    return await this.bestTime.getText();
  }
  setQuickestTime() {
    this.quickestTime = element(
      by.xpath("//*[contains(@id,'tabs')]/a[3]/div/div/div/div[2]/span[2]")
    );
  }
  async getQuickestTime() {
    return await this.quickestTime.getText();
  }
  setQuickestPrice() {
    this.quickestPrice = element(
      by.xpath("//*[contains(@id,'tabs')]/a[3]/div/div/div/div[2]/span[1]")
    );
  }
  async getQuickestPrice() {
    return await this.quickestPrice.getText();
  }
  setDestinationAirport() {
    this.destinationAirport = element(
      by.xpath("//input[contains(@id,'destination-airport')]")
    );
  }
  async getDestinationAirportValue() {
    return await this.destinationAirport.getAttribute("value");
  }
  sendDestinationAirportValue(value: string) {
    this.destinationAirport.sendKeys(value);
  }
  setDestinationOpt() {
    this.destinationOpt = element(
      by.xpath(
        "//div[contains(@id,'destination-airport-smartbox-dropdown')]/ul/li[1]"
      )
    );
  }
  clickDestinationOpt() {
    this.destinationOpt.click();
  }
}
// export default new KayakPOM()
module.exports = new KayakPOM();
