import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class AddressStepPage {
  private cartAddressNavigation: ElementFinder;

  constructor() {
    this.cartAddressNavigation = $('[name=processAddress]');
  }

  public async goToShippingStep(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.cartAddressNavigation));
    await this.cartAddressNavigation.click();
  }
}
