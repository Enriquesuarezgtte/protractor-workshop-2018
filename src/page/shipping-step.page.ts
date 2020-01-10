import { ElementFinder, browser, ExpectedConditions, element, by } from 'protractor';

export class ShippingStepPage {
  private termsOfServiceCheck: ElementFinder;
  private shippingNavigation: ElementFinder;

  constructor() {
    this.termsOfServiceCheck = element(by.id('cgv'));
    this.shippingNavigation = element(by.name('processCarrier'));
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
