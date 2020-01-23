import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Given a web page to practice form', () => {
  beforeAll(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  describe('when fill personal information form', () => {
    let personalInformationPage: PersonalInformationPage;
    beforeAll(async () => {
      personalInformationPage = new PersonalInformationPage();
      await personalInformationPage.hideAdsAndCookies();
      await personalInformationPage.fillFormAndSubmit({
        firstName: 'Alejandro',
        lastName: 'Perdomo',
        sex: 'Male',
        experience: 7,
        file: './resources/psl.jpg',
        profession: ['Automation Tester'],
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands']});
    });

    it('then should have a title', async () => {
      await expect(personalInformationPage.getPageTitle()).toBe('Practice Automation Form');
    });
  });
});
