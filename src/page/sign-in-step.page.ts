import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class SignInCardStepPage {
  private emailField: ElementFinder;
  private passwordField: ElementFinder;
  private signInOption: ElementFinder;

  constructor() {
    this.emailField = $('#email');
    this.passwordField = $('#passwd');
    this.signInOption = $('#SubmitLogin > span');
  }
  public async sendEmailandPasswKeys(emailKey: string, passwordKey: string): Promise<void> {

    browser.wait(ExpectedConditions.and(ExpectedConditions.presenceOf(this.emailField),
                                        ExpectedConditions.presenceOf(this.passwordField)))
      .then(() => {
        this.emailField.sendKeys(emailKey);
        this.passwordField.sendKeys(passwordKey);
      });
  }

  public async signIn(): Promise<void> {
    browser.wait(ExpectedConditions.elementToBeClickable(this.signInOption))
      .then(() => this.signInOption.click());
  }
}
