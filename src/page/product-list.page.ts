import { ElementFinder, browser, ExpectedConditions, element, by } from 'protractor';

export class ProductListPage {
  private addToCartItem: ElementFinder;

  constructor() {
    this.addToCartItem = element(by.cssContainingText('a.ajax_add_to_cart_button', 'Add to cart'));
  }

  public async addTshirtToCart(): Promise<void> {
    await browser.wait(
    ExpectedConditions.and(ExpectedConditions.titleIs('T-shirts - My Store')
    ,                      ExpectedConditions.elementToBeClickable(this.addToCartItem)));
    await this.addToCartItem.click();
  }
}
