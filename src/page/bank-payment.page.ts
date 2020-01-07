import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class BankPaymentPage {
  private confirmOrderNavigation: ElementFinder;

  constructor() {
    this.confirmOrderNavigation = $('#cart_navigation > button > span');
  }

  public async confirmOrder(): Promise<void> {
    browser.wait(ExpectedConditions.elementToBeClickable(this.confirmOrderNavigation))
      .then(() => this.confirmOrderNavigation.click());
  }
}
