import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class BankPaymentPage {
  private confirmOrderNavigation: ElementFinder;

  constructor() {
    this.confirmOrderNavigation = $('#cart_navigation > button > span');
  }

  public async confirmOrder(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.confirmOrderNavigation));
    this.confirmOrderNavigation.click();
  }
}
