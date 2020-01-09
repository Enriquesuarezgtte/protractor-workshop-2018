import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class BankPaymentPage {
  private confirmOrderNavigation: ElementFinder;

  constructor() {
    this.confirmOrderNavigation = $('#cart_navigation .button-medium');
  }

  public async confirmOrder(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.confirmOrderNavigation));
    await this.confirmOrderNavigation.click();
  }
}
