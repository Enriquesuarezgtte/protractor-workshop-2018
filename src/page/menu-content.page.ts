import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class MenuContentPage {
  private tShirtMenu: ElementFinder;

  constructor() {
    this.tShirtMenu = $('.sf-menu > li > [title=T-shirts]');
  }

  public async goToTshirtMenu(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.tShirtMenu));
    await this.tShirtMenu.click();
  }
}
