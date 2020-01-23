import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class IFramePage{
  private iframe1: ElementFinder;
  private pageTitle: ElementFinder;

  constructor() {
    this.iframe1 = $('#IF1');
    this.pageTitle = $('#content > h1');
  }

  public async setFormFrameHeight(height: number): Promise<void> {
    await browser.executeScript(`arguments[0].height = ${height};`, this.iframe1);
  }

  public async getFormFrameHeight(): Promise<number> {
    await browser.wait(ExpectedConditions.presenceOf(this.iframe1));
    return browser.executeScript('return arguments[0].height;', this.iframe1);
  }

  public async switchToFrame(): Promise<void> {
    await browser.switchTo().frame(this.iframe1.getWebElement());
  }

  public async switchToMainPage(): Promise<void> {
    await browser.switchTo().defaultContent();
  }

  public async getPageTitle(): Promise<string> {
    await browser.wait(ExpectedConditions.presenceOf(this.pageTitle));
    return await this.pageTitle.getText();
  }
}
