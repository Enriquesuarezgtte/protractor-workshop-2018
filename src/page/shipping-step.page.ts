import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private termsOfServiceCheck: ElementFinder;
  private shippingNavigation: ElementFinder;

  constructor() {
    this.termsOfServiceCheck = $('#cgv');
    this.shippingNavigation = $('#form > p > button > span');
  }

  public async acceptTermsOfService(): Promise<void> {
    await this.termsOfServiceCheck.click();
  }

  public async goToPaymentStepPage(): Promise<void> {
    await this.shippingNavigation.click();
  }
}
