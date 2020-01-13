import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ShippingStepPage {
  private termsOfServiceCheck: ElementFinder;
  private shippingNavigation: ElementFinder;

  constructor() {
    this.termsOfServiceCheck = $('#cgv');
    this.shippingNavigation = $('[name=processCarrier]');
  }

  public async acceptTermsOfService(): Promise<void> {
    await browser.wait(ExpectedConditions.presenceOf(this.termsOfServiceCheck));
    await this.termsOfServiceCheck.click();
  }

  public async goToPaymentStepPage(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeSelected(this.termsOfServiceCheck));
    await this.shippingNavigation.click();
  }
}
