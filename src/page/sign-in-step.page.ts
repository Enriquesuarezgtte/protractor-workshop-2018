import { $, ElementFinder } from 'protractor';

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
    await this.emailField.sendKeys(emailKey);
    await this.passwordField.sendKeys(passwordKey);
  }

  public async signIn(): Promise<void> {
    await this.signInOption.click();
  }
}
