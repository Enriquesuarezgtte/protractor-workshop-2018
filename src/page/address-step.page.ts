import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private cartAddressNavigation: ElementFinder;

  constructor() {
    this.cartAddressNavigation = $('#center_column > form > p > button > span');
  }

  public async goToShippingStep(): Promise<void> {
    await this.cartAddressNavigation.click();
  }

}
