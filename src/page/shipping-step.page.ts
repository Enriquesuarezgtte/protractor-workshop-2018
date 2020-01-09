import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ShippingStepPage {
  private termsOfServiceCheck: ElementFinder;
  private shippingNavigation: ElementFinder;

  constructor() {
    this.termsOfServiceCheck = $('#cgv');
    this.shippingNavigation = $('#form > p > button > span');
  }

  public async acceptTermsOfService(): Promise<void> {
    await browser.wait(ExpectedConditions.presenceOf(this.termsOfServiceCheck));
    this.termsOfServiceCheck.click();
  }

  public async goToPaymentStepPage(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeSelected(this.termsOfServiceCheck));
    this.shippingNavigation.click();
  }
}
