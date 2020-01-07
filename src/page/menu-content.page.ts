import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class MenuContentPage {
  private tShirtMenu: ElementFinder;

  constructor() {
    this.tShirtMenu = $('#block_top_menu > ul > li:nth-child(3) > a');
  }

  public async goToTshirtMenu(): Promise<void> {
    browser.wait(ExpectedConditions.elementToBeClickable(this.tShirtMenu))
      .then(() => this.tShirtMenu.click());
  }
}
