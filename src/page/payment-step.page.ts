import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class PaymentStepPage {
  private payByCheckOption: ElementFinder;

  constructor() {
    this.payByCheckOption = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async payByCheck(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.payByCheckOption));
    this.payByCheckOption.click();
  }
}
