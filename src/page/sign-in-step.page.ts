import { ElementFinder, browser, ExpectedConditions, by, element } from 'protractor';

export class SignInCardStepPage {
  private emailField: ElementFinder;
  private passwordField: ElementFinder;
  private signInOption: ElementFinder;

  constructor() {
    this.emailField = element(by.id('email'));
    this.passwordField = element(by.id('passwd'));
    this.signInOption = element(by.id('SubmitLogin'));
  }
  public async sendEmailandPasswKeys(emailKey: string, passwordKey: string): Promise<void> {
    await browser.wait(ExpectedConditions.and(ExpectedConditions.presenceOf(this.emailField),
                                              ExpectedConditions.presenceOf(this.passwordField)));
    await this.emailField.sendKeys(emailKey);
    await this.passwordField.sendKeys(passwordKey);
  }

  public async signIn(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.signInOption));
    await this.signInOption.click();
  }
}
