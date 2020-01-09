import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductAddedModalPage {
  private tShirtCartModal: ElementFinder;

  constructor() {
    this.tShirtCartModal = $('[style*="display: block;"] .button-container > a');
  }

  public async goToShoppingCartSummary(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.tShirtCartModal));
    await this.tShirtCartModal.click();
  }

}
