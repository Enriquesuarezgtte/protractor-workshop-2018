import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Given a web page to practice form', () => {
  beforeAll(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  describe('when fill personal information form', () => {

    it('Locators', async () => {
      const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
      await personalInformationPage.hideAdsAndCookies();
      await personalInformationPage.fillForm({
        firstName: 'Alejandro',
        lastName: 'Perdomo',
        sex: 'Male',
        experience: 7,
        profession: ['Automation Tester'],
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands']});
      expect('as').toEqual('as');
    });
  });
});
