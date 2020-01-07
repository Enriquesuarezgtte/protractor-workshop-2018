import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class OrderResultPage {
  private orderResultAlert: ElementFinder;

  constructor() {
    this.orderResultAlert = $('#center_column > div > p > strong');
  }

  public async getOrderResult(): Promise<String> {
    return browser.wait(ExpectedConditions.visibilityOf(this.orderResultAlert))
      .then(() => {
        return this.orderResultAlert.getText();
      });
  }
}
