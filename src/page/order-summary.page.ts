import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class OrderSummaryPage {
  private cartSummaryNavigation: ElementFinder;

  constructor() {
    this.cartSummaryNavigation = $('.cart_navigation span');
  }
  public async goToLoginStep(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.cartSummaryNavigation));
    this.cartSummaryNavigation.click();
  }
}
