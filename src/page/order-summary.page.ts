import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private cartSummaryNavigation: ElementFinder;

  constructor() {
    this.cartSummaryNavigation = $('.cart_navigation span');
  }
  public async goToLoginStep(): Promise<void> {
    await this.cartSummaryNavigation.click();
  }
}
