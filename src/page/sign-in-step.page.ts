import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class SignInCardStepPage {
  private emailField: ElementFinder;
  private passwordField: ElementFinder;
  private signInOption: ElementFinder;

  constructor() {
    this.emailField = $('#email');
    this.passwordField = $('#passwd');
    this.signInOption = $('#SubmitLogin');
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
