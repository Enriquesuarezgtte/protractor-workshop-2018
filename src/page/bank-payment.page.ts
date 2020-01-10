import { ElementFinder, browser, ExpectedConditions, element, by } from 'protractor';

export class BankPaymentPage {
  private confirmOrderNavigation: ElementFinder;
  private orderResultAlert: ElementFinder;

  constructor() {
    this.confirmOrderNavigation = element(by.cssContainingText('#cart_navigation .button-medium', 'I confirm my order'));
    this.orderResultAlert = element(by.css('#center_column > .alert.alert-success'));
  }

  public async confirmOrder(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.confirmOrderNavigation));
    await this.confirmOrderNavigation.click();
  }

  public async getOrderResult(): Promise<String> {
    await browser.wait(ExpectedConditions.visibilityOf(this.orderResultAlert));
    return await this.orderResultAlert.getText();
  }
}
