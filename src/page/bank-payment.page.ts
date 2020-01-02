import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirmOrderNavigation: ElementFinder;

  constructor() {
    this.confirmOrderNavigation = $('#cart_navigation > button > span');
  }

  public async confirmOrder(): Promise<void> {
    await this.confirmOrderNavigation.click();
  }
}
