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

  constructor() {
    this.firstNameField = $('[name=firstname]');
    this.lastNameField = $('#lastname');
    this.continentDropDownButton = $('#continents');
    this.commandsSelectables = $('#selenium_commands');
    this.modalAds = $('[data-form-layout=cp-form-layout-4]');
    this.cookieModal = $('#cookie-law-info-bar');
    this.bannerSuperior = $('.cp-info-bar-body-overlay');
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
  private async fillSex(sex: string) {
    this.sexCheck = $(`input[name=sex][value=${sex}]`);
    await browser.wait(ExpectedConditions.elementToBeClickable(this.sexCheck));
    await this.sexCheck.click();
  }
  private async fillExperience(experience: string) {
    this.experienceCheck = $(`input[name=exp][value="${experience}"]`);
    await browser.wait(ExpectedConditions.elementToBeClickable(this.experienceCheck));
    await this.experienceCheck.click();
  }

  private async fillProfession(professions: string[]) {
    professions.forEach(async (profession) => {
      this.professionCheck = $(`input[name=profession][value=${profession}]`);
      await browser.wait(ExpectedConditions.elementToBeClickable(this.professionCheck));
      await this.professionCheck.click();
    });
  }

  private async fillTools(tools: string[]) {
    tools.forEach(async (tool) => {
      this.toolsCheck = $(`input[name=profession][value=${tool}]`);
      await browser.wait(ExpectedConditions.elementToBeClickable(this.toolsCheck));
      await this.toolsCheck.click();
    });
  }
  private async fillContinent(continent: string) {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.continentDropDownButton));
    await this.continentDropDownButton.$$('option')
      .filter(async continentOption => await continentOption.getText() === continent)
      .first().click();
  }

  private async fillComands(commands: string[]) {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.commandsSelectables));
    await this.commandsSelectables.$$('option').filter(async commandPossible =>
      await commandPossible.getText() === commands[0]).first().click();
  }

  public async fillForm(form: IPersonalInFormation) {
    await this.fillFirstName(form.firstName);
    await this.fillLastName(form.lastName);
    await this.fillSex(form.sex);
    await this.fillExperience(form.experience.toString());
    await this.fillProfession(form.profession);
    await this.fillTools(form.tools);
    await this.fillContinent(form.continent);
    await this.fillComands(form.commands);
  }
}
