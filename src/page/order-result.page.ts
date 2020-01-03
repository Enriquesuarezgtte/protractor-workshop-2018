import { $, ElementFinder } from 'protractor';

export class OrderResultPage {
  private orderResultAlert: ElementFinder;

  constructor() {
    this.orderResultAlert = $('#center_column > div > p > strong');
  }

  public async getOrderResult(): Promise<String> {
    return await this.orderResultAlert.getText();
  }
}
