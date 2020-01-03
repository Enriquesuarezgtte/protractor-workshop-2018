import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private tShirtCartModal: ElementFinder;

  constructor() {
    this.tShirtCartModal = $('[style*="display: block;"] .button-container > a');
  }

  public async goToShoppingCartSummary(): Promise<void> {
    await this.tShirtCartModal.click();
  }

}