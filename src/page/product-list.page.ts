import { ElementFinder, $$, ElementArrayFinder, browser, ExpectedConditions } from 'protractor';

export class ProductListPage {
  private products: ElementArrayFinder;

  constructor() {
    this.products = $$('.product-container');
  }

  public async selectProduct(productName: string): Promise<void> {
    const productFound: ElementFinder = await this.findByProduct(productName);
    await browser.wait(ExpectedConditions.elementToBeClickable(productFound));
    await productFound.$('.product-image-container img').click();
  }

  private async findByProduct(productName: string): Promise<ElementFinder> {
    return await this.products.filter(async element =>
      await element.$(`.right-block .product-name [title=${productName}]`)).first();
  }
}
