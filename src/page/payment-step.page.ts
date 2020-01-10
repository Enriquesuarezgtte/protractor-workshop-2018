import { ElementFinder, browser, ExpectedConditions, by, element } from 'protractor';

export class PaymentStepPage {
  private payByCheckOption: ElementFinder;

  constructor() {
    this.payByCheckOption = element(by.cssContainingText('.cheque', 'Pay by check'));
  }

  public async payByCheck(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.payByCheckOption));
    await this.payByCheckOption.click();
  }
}
