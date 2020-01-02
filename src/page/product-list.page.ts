import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private addToCartItem: ElementFinder;

  constructor() {
    this.addToCartItem = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async addTshirtToCart(): Promise<void> {
    await this.addToCartItem.click();
  }

}
