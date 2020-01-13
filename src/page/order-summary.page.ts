import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class OrderSummaryPage {
  private cartSummaryNavigation: ElementFinder;

  constructor() {
    this.cartSummaryNavigation = $('.cart_navigation > [title="Proceed to checkout"]');
  }

  public async goToLoginStep(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.cartSummaryNavigation));
    await this.cartSummaryNavigation.click();
  }
}
