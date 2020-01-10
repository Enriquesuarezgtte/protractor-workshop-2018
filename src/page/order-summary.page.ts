import { ElementFinder, browser, ExpectedConditions, element, by } from 'protractor';

export class OrderSummaryPage {
  private cartSummaryNavigation: ElementFinder;

  constructor() {
    this.cartSummaryNavigation = element(by.cssContainingText('a.button-medium.standard-checkout', 'Proceed to checkout'));
  }

  public async goToLoginStep(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.cartSummaryNavigation));
    await this.cartSummaryNavigation.click();
  }
}
