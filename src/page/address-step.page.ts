import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class AddressStepPage {
  private cartAddressNavigation: ElementFinder;

  constructor() {
    this.cartAddressNavigation = $('#center_column > form > p > button > span');
  }

  public async goToShippingStep(): Promise<void> {
    browser.wait(ExpectedConditions.elementToBeClickable(this.cartAddressNavigation))
      .then(() => this.cartAddressNavigation.click());

  }

}
