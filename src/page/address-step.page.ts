import { ElementFinder, browser, ExpectedConditions, by, element } from 'protractor';

export class AddressStepPage {
  private cartAddressNavigation: ElementFinder;

  constructor() {
    this.cartAddressNavigation = element(by.name('processAddress'));
  }

  public async goToShippingStep(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.cartAddressNavigation));
    await this.cartAddressNavigation.click();
  }
}
