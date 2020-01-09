import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class OrderResultPage {
  private orderResultAlert: ElementFinder;

  constructor() {
    this.orderResultAlert = $('.alert.alert-success');
  }

  public async getOrderResult(): Promise<String> {
    await browser.wait(ExpectedConditions.visibilityOf(this.orderResultAlert));
    return await this.orderResultAlert.getText();
  }
}
