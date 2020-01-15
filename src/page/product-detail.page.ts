import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductDetailPage {
  private buttonAddToCart: ElementFinder;
  private tShirtCartModal: ElementFinder;

  constructor() {
    this.buttonAddToCart = $('#add_to_cart');
    this.tShirtCartModal = $('div.button-container > a.button-medium');
  }

  public async goToShoppingCartSummary(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.tShirtCartModal));
    await this.tShirtCartModal.click();
  }

  public async addTShirtToCart(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.buttonAddToCart));
    await this.buttonAddToCart.click();
  }

}
