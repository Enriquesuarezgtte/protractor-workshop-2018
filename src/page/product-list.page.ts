import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductListPage {
  private addToCartItem: ElementFinder;

  constructor() {
    this.addToCartItem = $('.button-container > [title="Add to cart"]');
  }

  public async addTshirtToCart(): Promise<void> {
    await browser.wait(
    ExpectedConditions.and(ExpectedConditions.titleIs('T-shirts - My Store')
    ,                      ExpectedConditions.elementToBeClickable(this.addToCartItem)));
    await this.addToCartItem.click();
  }
}
