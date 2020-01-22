import { $, browser, ElementFinder, promise, ExpectedConditions } from 'protractor';

export class IFramePage{
  private iframe1: ElementFinder;

  constructor() {
    this.iframe1 = $('#IF1');
  }

  public setFormFrameHeight(height: number): promise.Promise<void> {
    return browser.executeScript(`arguments[0].height = ${height};`, this.iframe1);
  }

  public async getFormFrameHeight(): Promise<number> {
    await browser.wait(ExpectedConditions.presenceOf(this.iframe1));
    return browser.executeScript('return arguments[0].height;', this.iframe1);
  }
}
