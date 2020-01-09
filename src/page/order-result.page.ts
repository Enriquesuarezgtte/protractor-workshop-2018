import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class OrderResultPage {
  private orderResultAlert: ElementFinder;

  constructor() {
    this.orderResultAlert = $('#center_column > div > p > strong');
  }

  public async getOrderResult(): Promise<String> {
    await browser.wait(ExpectedConditions.visibilityOf(this.orderResultAlert));
    return this.orderResultAlert.getText();
  }
}
