import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductListPage {
  private addToCartItem: ElementFinder;

  constructor() {
    this.addToCartItem = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');

  }

  public async addTshirtToCart(): Promise<void> {
    browser.wait(ExpectedConditions.and(ExpectedConditions.titleIs('T-shirts - My Store')
      ,                                 ExpectedConditions.elementToBeClickable(this.addToCartItem))
    ).then(() => this.addToCartItem.click());
  }
}
