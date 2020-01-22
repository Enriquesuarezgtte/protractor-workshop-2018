import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

interface IPersonalInFormation {
  firstName: string;
  lastName: string;
  sex: string;
  experience: number;
  profession: string[];
  tools: string[];
  continent: string;
  commands: string[];
}

export class PersonalInformationPage {
  private firstNameField: ElementFinder;
  private lastNameField: ElementFinder;
  private sexCheck: ElementFinder;
  private experienceCheck: ElementFinder;

  private professionCheck: ElementFinder;
  private toolsCheck: ElementFinder;
  private continentDropDownButton: ElementFinder;
  private commandsSelectables: ElementFinder;
  private modalAds: ElementFinder;
  private cookieModal: ElementFinder;
  private bannerSuperior: ElementFinder;
  private titlePage: ElementFinder;
  private submit: ElementFinder;

  constructor() {
    this.firstNameField = $('[name=firstname]');
    this.lastNameField = $('#lastname');
    this.continentDropDownButton = $('#continents');
    this.commandsSelectables = $('#selenium_commands');
    this.modalAds = $('[data-form-layout=cp-form-layout-4]');
    this.cookieModal = $('#cookie-law-info-bar');
    this.bannerSuperior = $('.cp-info-bar-body-overlay');
    this.titlePage = $('.wpb_wrapper > h1');
    this.submit = $('#submit');
  }

  public async hideAdsAndCookies(): Promise<void> {
    await browser.executeScript("arguments[0].style.display = 'none'", this.modalAds);
    await browser.executeScript("arguments[0].style.display = 'none'", this.cookieModal);
    await browser.executeScript("arguments[0].style.display = 'none'", this.bannerSuperior);
  }

  private async fillFirstName(firstname: string) {
    await browser.wait(ExpectedConditions.presenceOf(this.firstNameField));
    await this.firstNameField.sendKeys(firstname);
  }
  private async fillLastName(lastname: string) {
    await browser.wait(ExpectedConditions.presenceOf(this.lastNameField));
    await this.lastNameField.sendKeys(lastname);
  }

  private async selectSex(sex: string) {
    this.sexCheck = $(`input[name=sex][value=${sex}]`);
    await browser.wait(ExpectedConditions.elementToBeClickable(this.sexCheck));
    await this.sexCheck.click();
  }

  private async selectExperience(experience: number) {
    this.experienceCheck = $(`input[name=exp][value="${experience}"]`);
    await browser.wait(ExpectedConditions.elementToBeClickable(this.experienceCheck));
    await this.experienceCheck.click();
  }

  private async selectProfession(professions: string[]) {
    for (const profession of professions) {
      this.professionCheck = $(`input[name=profession][value="${profession}"]`);
      await browser.wait(ExpectedConditions.elementToBeClickable(this.professionCheck));
      await this.professionCheck.click();
    }
  }

  private async selectTools(tools: string[]) {
    for (const tool of tools) {
      this.toolsCheck = $(`input[name=tool][value="${tool}"]`);
      await browser.wait(ExpectedConditions.presenceOf(this.toolsCheck));
      await this.toolsCheck.click();
    }
  }
  private async selectContinent(continent: string) {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.continentDropDownButton));
    await this.continentDropDownButton.$$('option')
      .filter(async continentOption => await continentOption.getText() === continent)
      .first().click();
  }

  private async selectCommands(commands: string[]) {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.commandsSelectables));
    for (const commandElement of commands) {
      await this.commandsSelectables.$$('option').filter(async commandPossible =>
      await commandPossible.getText() === commandElement)
      .each(async command => await command.click());
    }
  }
  private async submitForm() {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.submit));
    return await this.submit.click();
  }

  public async fillForm(form: IPersonalInFormation) {
    await this.fillFirstName(form.firstName);
    await this.fillLastName(form.lastName);
    await this.selectSex(form.sex);
    await this.selectExperience(form.experience);
    await this.selectProfession(form.profession);
    await this.selectTools(form.tools);
    await this.selectContinent(form.continent);
    await this.selectCommands(form.commands);
    await this.submitForm();
  }

  public async getPageTitle(): Promise<string> {
    await browser.wait(ExpectedConditions.presenceOf(this.titlePage));
    return await this.titlePage.getText();
  }
}
