import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class MenuContentPage {
  private tShirtMenu: ElementFinder;

  constructor() {
    this.tShirtMenu = $('#block_top_menu .sf-menu > li:nth-last-child(1)');
  }

  public async goToTshirtMenu(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.tShirtMenu));
    await this.tShirtMenu.click();
  }
}
