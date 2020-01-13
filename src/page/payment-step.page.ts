import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class PaymentStepPage {
  private payByCheckOption: ElementFinder;

  constructor() {
    this.payByCheckOption = $('.payment_module > [title="Pay by check."]');
  }

  public async payByCheck(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.payByCheckOption));
    await this.payByCheckOption.click();
  }
}
